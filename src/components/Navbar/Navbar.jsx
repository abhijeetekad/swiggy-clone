import "./Navbar.css";
import logo from "../../Media/images.png";
const Navbar = () => {
  return (
    <div>
      <header className="App-header">
        <a href="/">
          <img className="logoImg" src={logo} />
        </a>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </header>
      ;
    </div>
  );
};
export { Navbar };
