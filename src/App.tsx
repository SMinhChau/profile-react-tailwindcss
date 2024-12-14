import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NotificationProvider from './component/common/notify';
import AddAccount from './pages/add-account';
import AddAccountWeb from './pages/add-account/form-web';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <BaseLayout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <HomePage />,
  //     },
  //   ],
  // },
  {
    path: '/',
    element: <AddAccount />,
  },
  {
    path: '/web-mail',
    element: <AddAccountWeb />,
  },
]);

function App() {
  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  );
}

export default App;
