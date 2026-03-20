import FooterStyles from "../../styles/componentStyles/Footer.module.css"
import "../../styles/TailwindStyles.css"
import { UseTheme } from "../contexts/themeContext.tsx"

function Footer() {
  const {isDark}=UseTheme()
  return (

<>
    <footer className={
     ` flex flex-row justify-center 
      font-bold align-center bg-blue-800  text-slate-50 
      ${FooterStyles['footer']}` 
      }>

      <p>&copy; 2026 Stefan Mitchell</p>
    </footer>



</>
  )
}

export default Footer