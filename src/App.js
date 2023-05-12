import "./App.css";
import { About } from "./components/AboutUs/About";
import { Body } from "./components/Body";
import { Cart } from "./components/Cart/Cart";
import { Contact } from "./components/Contact/Contact";
import { Error } from "./components/Error";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="AppBody">
        <Body />
      </div>
      <Footer />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
export { appRouter };

// export default App;
