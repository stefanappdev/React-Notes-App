import "../styles/TailwindStyles.css"
import '../styles/App.css'
import { ThemeContextProvider } from "./contexts/themeContext.tsx"
import AppRoutes from "./routes/AppRoutes.tsx"

function App() {
 


  return (

     
        <div id='App-bg' >
       <ThemeContextProvider>
        <div id='App' >
          <AppRoutes/>
        </div>
      </ThemeContextProvider>
      </div>
      
    
  )
}

export default App
