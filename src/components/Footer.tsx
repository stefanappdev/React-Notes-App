import FooterStyles from "../../styles/componentStyles/Footer.module.css"
import "../../styles/TailwindStyles.css"

function Footer() {
  return (
    <footer className={`flex flex-row justify-center font-bold align-center bg-red-500 text-slate-50 ${FooterStyles['footer']}` }>
      <p>&copy; 2026 Stefan Mitchell</p>
    </footer>
  )
}

export default Footer