import "./App.css";
import AppLayout from "./Components/AppLayout/AppLayout";
import Sidebar from "./Components/Sidebar/Sidebar";
import StatsCard from "./Components/StatsCard/StatsCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLayout />
        <Sidebar/>
        <StatsCard/>
      </header>
    </div>
  );
}

export default App;
