import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home.tsx'
import Settings from "../pages/Settings.tsx"
import Create from "../pages/create.tsx"
import Mainlayout from "../pages/Mainlayout.tsx"
import Note from "../pages/Note.tsx"

function AppRoutes() {
  return (
    <div>
      
       <Router>

      
        <Routes>

            <Route path='/' element={<Mainlayout/>}>
              <Route path="" element={<Home/>}/>
              <Route path='/create' element={<Create/>} />
              <Route path='/settings' element={<Settings/>} />
            </Route>  

            <Route path='/notes/:id' element={<Note/>} />

        </Routes>
    </Router>
    
    </div>
  )
}

export default AppRoutes