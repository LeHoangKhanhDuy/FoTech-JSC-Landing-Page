import { Route, Routes } from 'react-router-dom';
import CorporateHomePage from '@/pages/CorporateHomePage';
import HomePage from '@/pages/HomePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CorporateHomePage />} />
      <Route path="/fohrm" element={<HomePage />} />
    </Routes>
  );
}
