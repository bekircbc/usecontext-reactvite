import "./App.scss";
import { Customers } from "../components/Customers";
import { Employees } from "../components/Employees";
function App() {
  return (
    <div className="App">
      <h1>Text Question</h1>
      <Customers />
      <Employees />
    </div>
  );
}

export default App;
