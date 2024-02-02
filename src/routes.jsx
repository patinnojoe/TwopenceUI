import { Navigate, createBrowserRouter } from 'react-router-dom';
import { GuestLayout, Dashboard } from './layouts';
import { DefaultLayout, Login, Register, UserProfile } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />,
      },

      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/guest',
    element: <GuestLayout />,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/profile',
    element: <UserProfile />,
  },
]);

export default router;
