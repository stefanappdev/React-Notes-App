import { NavLink } from "react-router-dom"
import NavbarStyles from  '../../styles/componentStyles/Navbar.module.css'
import "../../styles/TailwindStyles.css"

function Navbar() {


  const regmobileNavStyle={
       margin:'1rem auto',
       color:'rgb(131, 129, 126)',
      
  }

  const activemobileNavStyle={
    borderRadius:"2px" ,
    backgroundColor:'white',
    margin:'1rem auto',
    fontWeight:'bold',
    
  }

  return (

    

      <nav className={`flex ${NavbarStyles['mobile-nav']} bg-red-500 align-center items-center `} >

        <NavLink style={({isActive})=>isActive?activemobileNavStyle:regmobileNavStyle}  to='/'>
            <img className={`  ${NavbarStyles['mobile-navImage']}`} src="../../images/icon-home.png"/>
          
        </NavLink> 
          
            
            <NavLink style={({isActive})=>isActive?activemobileNavStyle:regmobileNavStyle} to='/create'>
              <img className={`  ${NavbarStyles['mobile-navImage']}`} src="../../images/icon-plus.png"/>
              
            </NavLink>
           
          
          
          <NavLink style={({isActive})=>isActive?activemobileNavStyle:regmobileNavStyle} to='/settings'>
             <img className={`   ${NavbarStyles['mobile-navImage']}`} src="../../images/icon-settings.png"/>
          </NavLink>
          
      </nav>
  
  )
}

export default Navbar