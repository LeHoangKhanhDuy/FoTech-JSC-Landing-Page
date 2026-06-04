import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from '@/App';
import '@/styles/global.css';
import 'swiper/css';
import 'swiper/css/pagination';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" toastOptions={{ duration: 2600 }} />
    </BrowserRouter>
  </StrictMode>,
);
