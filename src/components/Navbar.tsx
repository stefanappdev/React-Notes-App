import { NavLink } from "react-router-dom"
import NavbarStyles from  '../../styles/componentStyles/Navbar.module.css'
import "../../styles/TailwindStyles.css"

function Navbar() {


  const regmobileNavStyle={
       margin:'1rem auto',
       color:'rgba(236, 233, 228, 1)',
      textAlign: 'center',
  }

  const activemobileNavStyle={
    borderRadius:"2px" ,
    backgroundColor:'white',
    margin:'1rem auto',
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
  }

  return (

    

      <nav className={`flex ${NavbarStyles['mobile-nav']} bg-red-500 align-center items-center `} >

        <NavLink style={({isActive})=>isActive?activemobileNavStyle:regmobileNavStyle}  to='/'>
            <img className={`  ${NavbarStyles['mobile-navImage']}`} src="../../images/icon-home.png"/>
            <span>All notes</span>
        </NavLink> 
          
            
            <NavLink style={({isActive})=>isActive?activemobileNavStyle:regmobileNavStyle} to='/create'>
              <img className={`  ${NavbarStyles['mobile-navImage']}`} src="../../images/icon-plus.png"/>
              <span> create a note</span>
            </NavLink>
           
          
          
          <NavLink style={({isActive})=>isActive?activemobileNavStyle:regmobileNavStyle} to='/settings'>
             <img className={`   ${NavbarStyles['mobile-navImage']}`} src="../../images/icon-settings.png"/>
              
            <span> settings</span>
          </NavLink>
          
      </nav>
  
  )
}

export default Navbar