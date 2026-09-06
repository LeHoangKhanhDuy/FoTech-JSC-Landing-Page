import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const CorporateHomePage = lazy(() => import('@/pages/CorporateHomePage'));
const HomePage = lazy(() => import('@/pages/HomePage'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <Routes>
        <Route path="/" element={<CorporateHomePage />} />
        <Route path="/fohrm" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
