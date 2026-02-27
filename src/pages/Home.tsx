import { Link } from 'react-router-dom'
import '../../styles/TailwindStyles.css'
import homeStyles from '../../styles/pageStyles/home.module.css'
import { UseTheme } from '../contexts/themeContext.tsx'
import utilizeNotesManager from '../components/NotesManager.tsx'
import type { Note } from '../types/Notes.tsx'


  type NotesManagerProps={
    NotesArr: Note[],
    addNewNote: (newNote: Note) => void,
    setNotesArr: React.Dispatch<React.SetStateAction<Note[]>>,
    deleteNote: (Note: Note) => void,
    
}


function Home() {

  /* finished empty notes layout, but have to devlop notes object 
  before home page can be entirely completed, implement local storage or context to view created notes*/

  const {isDark}=UseTheme();
  const NotesManager=utilizeNotesManager();

 const AllNotes=({NotesArr,addNewNote,setNotesArr,deleteNote}:NotesManagerProps)=>{

  const Notes=NotesArr.map(Note=>{

      return( <div key={Note.id}>
            <span>{Note.subject}</span>
            <button>view more</button>
       </div>)
  })


   return <>
    {Notes.length===0?<div className={
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
      </div>:
      <div>

          {Notes}
      </div>}

      </>
  }



  return (
    <div className="maincontent">

      <h1 className='text-xl font-bold'>Your notes</h1>
      <br/>
      
      <AllNotes
       NotesArr={NotesManager.NotesArr} 
      addNewNote={NotesManager.addNewNote}
      setNotesArr={NotesManager.setNotesArr}
      deleteNote={NotesManager.deleteNote}
    
      />

    </div>


    
  )
}

export default Home