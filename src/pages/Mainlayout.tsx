import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
import { Outlet } from "react-router-dom"
import '../../styles/TailwindStyles.css'
import { UseTheme } from "../contexts/themeContext.tsx"


function Mainlayout() {
 const{isDark}=UseTheme()
  
  return (
<>
    <div >
      <Navbar isDark={isDark}/>
    </div>
      <main>
          <Outlet/>
      </main>
    <Footer/>
</>
    
  )
}

export default Mainlayout