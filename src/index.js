import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import Stores from './pages/Stores';
import Payments from './pages/Payments';
import ProtectedRoute from './pages/ProtectedRoute';
import OrderedPage from './pages/OrderedPage';
import UserOrderedPage from './pages/UserOrderedPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: '/stores/:storeId',
        element: <Stores />,
      },
      {
        path: '/payments',
        element: (
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
        ),
      },
      {
        path: '/ordered',
        element: (
          <ProtectedRoute>
            <OrderedPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/userOrdered',
        element: (
          <ProtectedRoute>
            <UserOrderedPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
