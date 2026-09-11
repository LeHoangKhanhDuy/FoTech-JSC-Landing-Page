import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTopOnNavigate from '@/components/common/ScrollToTopOnNavigate';

const CorporateHomePage = lazy(() => import('@/pages/CorporateHomePage'));
const FoHRMHomePage = lazy(() => import('@/pages/FoHRMHomePage'));

export default function AppRoutes() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
        <Routes>
          <Route path="/" element={<CorporateHomePage />} />
          <Route path="/fohrm" element={<FoHRMHomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

