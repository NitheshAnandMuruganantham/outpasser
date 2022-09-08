import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loading from './components/loading';
import SignInSide from './pages/auth/logIn';
import NotRequireAuth from './pages/auth/notRequireAuth';
import RequireAuth from './pages/auth/requireAuth';
import NoInternet from './pages/NoInternet';
import Bills from './pages/requests';
import Approved from "./pages/approved";
import Rejected from "./pages/rejected";

const ForgetPassword = React.lazy(() => import('./pages/auth/forgetPassword'));
const SetNewPassword = React.lazy(() => import('./pages/auth/setPassword'));

const LazyLoader = () => <Loading open={true} setOpen={() => null} />;

const LazyForgetPassword = () => (
  <React.Suspense fallback={<LazyLoader />}>
    <ForgetPassword />
  </React.Suspense>
);

const LazySetNewPassword = () => (
  <React.Suspense fallback={<LazyLoader />}>
    <SetNewPassword />
  </React.Suspense>
);

const App: React.FunctionComponent = () => {
  const [offline, SetOffline] = React.useState(!navigator.onLine);

  React.useEffect(() => {
    window.addEventListener('online', () => SetOffline(false));
    window.addEventListener('offline', () => SetOffline(true));

    return () => {
      window.removeEventListener('online', () => SetOffline(false));
      window.removeEventListener('offline', () => SetOffline(true));
    };
  }, []);
  if (offline) {
    return (
      <>
        <NoInternet />
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Bills />} />
          <Route path="/approved" element={<Approved />} />
          <Route path="/denied" element={<Rejected />} />
        </Route>
        <Route element={<NotRequireAuth />}>
          <Route path="/login" element={<SignInSide />} />
          <Route path="/forgetPassword" element={<LazyForgetPassword />} />
          <Route path="/reset-password" element={<LazySetNewPassword />} />
        </Route>
      </Routes>
    );
  }
};

export default App;

const NotFound = () => <Navigate to="/" replace />;
