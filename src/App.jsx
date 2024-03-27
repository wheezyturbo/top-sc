import { useState } from "react";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import IndividualProductPage from "./pages/IndividualProductPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <IndividualProductPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  }, ]); 
  function RootLayout() 
  { 
    const [cart, setCart] = useState([]); 
 const addToCart = (item) => {
  const existingItemIndex = cart.findIndex((c) => c.id === item.id);

  if (existingItemIndex !== -1) {
    //const newCart = [...cart];
    //newCart[existingItemIndex].quantity += 1;
    //setCart(newCart);
    alert("Item is already added to the cart")
  } else {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    alert("Item is added to the cart");
  }
};    const removeFromCart = (itemId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={{ cart, addToCart, removeFromCart,setCart}} />
    </>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
