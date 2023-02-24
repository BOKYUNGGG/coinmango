import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
function App() {
  
  
  // background-color: #1d4b75;
  // background-image: linear-gradient(135deg, #1d4b75 0%, #070f30 46%, #471735 100%);
  
  return (
    <div className="flex flex-col gap-12 dark:bg-[#1d4b75] dark:bg-linearImage dark:text-slate-300 px-10 min-h-screen">
      <Navbar/>
      <Outlet></Outlet>
    </div>
  )
}

export default App