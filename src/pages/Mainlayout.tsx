import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import { Outlet } from "react-router-dom"

function Mainlayout() {
  return (
<>
    <div>
      <Navbar/>
    </div>
      <main>
          <Outlet/>
      </main>
    <Footer/>
</>
    
  )
}

export default Mainlayout