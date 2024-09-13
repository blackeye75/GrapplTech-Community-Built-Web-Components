import "./App.css";
import LandingPage from "./LandingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar at navbar component folder */}
      <div className="w-full ">
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
