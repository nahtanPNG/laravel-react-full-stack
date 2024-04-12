import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/login';
import Users from './views/Users';
import SignUp from './views/Signup';
import NotFound from './views/NotFound';
import DefaultLayout from './components/DefaultLayout';
import Dashboard from './views/Dashboard';
import GuestLayout from './components/GuestLayout';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    path: '/',
                    element: <Navigate to="/users" />
                },
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/users',
                    element: <Users />
                },
            ]
        },
        {
            path: '/',
            element: <GuestLayout />,
            children: [
                {
                    path: '/login',
                    element: <Login />
                },
                
                {
                    path: '/signup',
                    element: <SignUp />
                },
            ]
        },
        {
            path: '*',
            element: <NotFound />
        },

    ]
)

export default router;