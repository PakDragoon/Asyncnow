import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';
import User from './pages/User';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="app" element={<DashboardApp />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </ThemeConfig>
  );
}
