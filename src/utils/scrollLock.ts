let activeLocks = 0;
let lockedScrollY = 0;
let previousBodyStyles: Record<string, string> | null = null;
let previousHtmlOverflow = "";

function lockDocumentScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const body = document.body;
  const html = document.documentElement;
  lockedScrollY = window.scrollY;
  previousBodyStyles = {
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    right: body.style.right,
    width: body.style.width,
    overflow: body.style.overflow,
    paddingRight: body.style.paddingRight,
  };
  previousHtmlOverflow = html.style.overflow;

  const scrollbarWidth = window.innerWidth - html.clientWidth;
  const currentPaddingRight = Number.parseFloat(getComputedStyle(body).paddingRight) || 0;

  body.style.position = "fixed";
  body.style.top = `-${lockedScrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
  }
  html.style.overflow = "hidden";
}

function unlockDocumentScroll() {
  if (typeof window === "undefined" || typeof document === "undefined" || !previousBodyStyles) return;

  const body = document.body;
  const html = document.documentElement;
  Object.assign(body.style, previousBodyStyles);
  html.style.overflow = previousHtmlOverflow;
  previousBodyStyles = null;
  window.scrollTo(0, lockedScrollY);
}

export function acquireScrollLock() {
  if (activeLocks === 0) lockDocumentScroll();
  activeLocks += 1;

  let released = false;
  return () => {
    if (released) return;
    released = true;
    activeLocks = Math.max(0, activeLocks - 1);
    if (activeLocks === 0) unlockDocumentScroll();
  };
}
