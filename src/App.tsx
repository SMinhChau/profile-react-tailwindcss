import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NotificationProvider from './component/common/notify';
import AddAccount from './pages/add-account';

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
]);

function App() {
  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  );
}

export default App;
