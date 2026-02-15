import "../styles/TailwindStyles.css"
import '../styles/App.css'
import Footer  from "./components/Footer.tsx"
import Navbar from "./components/Navbar.tsx"

function App() {
 

  return (
    <>
      <div id='App' className="bg-blue-200">
        <Navbar/>
        <Footer/>
       </div>
    </>
  )
}

export default App
