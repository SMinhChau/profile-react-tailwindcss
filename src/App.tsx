import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import BaseLayout from './component/layout/base';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
