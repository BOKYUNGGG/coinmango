import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
