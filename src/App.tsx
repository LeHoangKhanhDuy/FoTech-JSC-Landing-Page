import AppRoutes from '@/routes/AppRoutes';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SplashScreen from '@/components/common/SplashScreen';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function App() {
  useSmoothScroll();

  return (
    <ThemeProvider>
      <SplashScreen />
      <AppRoutes />
      <ScrollToTop />
    </ThemeProvider>
  );
}
