import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css';
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ResultsPage from './pages/ResultsPage.tsx';
import Layout from './pages/Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<App />} />
          <Route path="catalog/:provider" element={<ResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
