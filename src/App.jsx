import "./App.scss";
import { Customers } from "../components/Customers";
import { Employees } from "../components/Employees";

function App() {
  return (
    <div className="App">
      <link rel="icon" type="image/png" href="images/icon.png" />{" "}
      <div className="title">
        <img src="images/icon.png" alt="logo" />
        <h1>Use Context React Vite</h1>
      </div>
      <Customers />
      <Employees />
    </div>
  );
}

export default App;
