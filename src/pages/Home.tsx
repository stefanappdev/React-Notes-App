import { Link } from 'react-router-dom'
import '../../styles/TailwindStyles.css'
import homeStyles from '../../styles/pageStyles/home.module.css'
import { UseTheme } from '../contexts/themeContext.tsx'
function Home() {

  /* finished empty notes layout, but have to devlop notes object 
  before home page can be entirely completed*/

  const {isDark}=UseTheme()

  return (
    <div className="maincontent">

      <h1 className='text-xl font-bold'>Your notes</h1>
      <br/>

      <div className={
        !isDark?`flex 
        flex-col 
        shadow-lg border-collapse border-1 border-slate-400  
        rounded-sm  
        items-center 
        justify-center  
        ${homeStyles['noItems-Window']}`:
        `flex 
        flex-col 
        shadow-lg border-collapse border-1 border-slate-400  
        rounded-sm  
        items-center 
        justify-center  text-slate-50 bg-slate-950
        ${homeStyles['noItems-Window']}`
        
        }>
        <h2 className='font-semibold text-lg text-red-500 '>No notes found</h2>
        <br/>
        <img className='h-20 w-15 ' alt='create a new note' src='../../images/icon-plus.png'/>

         <br/>
        <Link to='/create'>
          <span className=' cursor-pointer font-semibold text-lg'>create a new note</span>
       </Link>
      </div>

    </div>
  )
}

export default Home