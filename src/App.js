import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import './index.css';
import RootLayout from './layouts/RootLayout'

import Home from './pages/Home';
import User from './pages/User';
import Product from './pages/Product';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="users" element={<User />} />
      <Route path="products" element={<Product />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
