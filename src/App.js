import "./App.css";
import { Body } from "./components/Body";
import { RestrauntsCard } from "./components/RestrauntsCard/RestrauntsCard";
import logo from "./Media/images.png";

function App() {
  return (
    <div className="App">
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
      <div className="AppBody">
        <Body />
      </div>

      <footer className="App-footer">sdf</footer>
    </div>
  );
}

export default App;
