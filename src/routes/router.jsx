import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import ScrollComponent from '../components/ScrollComponent';
import Shop from '../components/Shop';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ScrollComponent />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
]);

export default router;
