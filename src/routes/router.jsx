import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../components/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/landing',
        element: <Landing />,
      },
    ],
  },
]);

export default router;
