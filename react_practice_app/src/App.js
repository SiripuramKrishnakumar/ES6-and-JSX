import logo from "./logo.svg";
import "./App.css";
import "./components/SpinningLogo";
import SpinningLogo from "./components/SpinningLogo";
import Expenses from "./components/Expenses";

function MyApp() {
  return (
    <div>
      <div>
        <SpinningLogo></SpinningLogo>
      </div>

      <div>
        <Expenses></Expenses>
      </div>
    </div>
  );
}

export default MyApp;
