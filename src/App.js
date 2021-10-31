import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home"
import "./App.css"


function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
