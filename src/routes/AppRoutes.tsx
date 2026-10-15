import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTopOnNavigate from '@/components/common/ScrollToTopOnNavigate';
import FoMedLogo from '@/assets/fomed/FoMed_Logo.png';

function RouteFavicon() {
  const { pathname } = useLocation();

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!favicon) return;

    const isFoMedPage = pathname === '/app/fomed' || pathname.startsWith('/app/fomed/');
    favicon.href = isFoMedPage ? FoMedLogo : '/favicon.ico';
    favicon.type = isFoMedPage ? 'image/png' : 'image/x-icon';
  }, [pathname]);

  return null;
}

const CorporateHomePage = lazy(() => import('@/pages/CorporateHomePage'));
const FoHRMHomePage = lazy(() => import('@/pages/FoHRMHomePage'));
const FoMedHomePage = lazy(() => import('@/pages/FoMedHomePage'));

export default function AppRoutes() {
  return (
    <>
      <RouteFavicon />
      <ScrollToTopOnNavigate />
      <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
        <Routes>
          <Route path="/" element={<CorporateHomePage />} />
          <Route path="/app/fohrm" element={<FoHRMHomePage />} />
          <Route path="/app/fomed" element={<FoMedHomePage />} />
          <Route path="/fohrm" element={<Navigate to="/app/fohrm" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

