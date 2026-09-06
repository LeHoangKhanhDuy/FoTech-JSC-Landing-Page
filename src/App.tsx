import AppRoutes from '@/routes/AppRoutes';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function App() {
  useSmoothScroll();

  return (
    <ThemeProvider>
      <AppRoutes />
      <ScrollToTop />
    </ThemeProvider>
  );
}
