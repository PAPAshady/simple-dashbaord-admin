import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import NewUser from "./pages/NewUser/NewUser";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/users", element: <Users /> },
  { path: "/newUser", element: <NewUser /> },
];

export default routes;
