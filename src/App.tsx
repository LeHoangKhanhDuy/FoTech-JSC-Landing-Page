import AppRoutes from '@/routes/AppRoutes';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <AppRoutes />
      <ScrollToTop />
    </>
  );
}
