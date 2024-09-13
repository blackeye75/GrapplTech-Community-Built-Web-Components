import "./App.css";
import { Header } from "./Headder";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#121212] min-h-screen w-full text-white">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
