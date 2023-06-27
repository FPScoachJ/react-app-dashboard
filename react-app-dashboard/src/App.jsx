import "./App.css";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
