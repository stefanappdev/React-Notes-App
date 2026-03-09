import { Link } from 'react-router-dom'
import '../../styles/TailwindStyles.css'
import homeStyles from '../../styles/pageStyles/home.module.css'
import { UseTheme } from '../contexts/themeContext.tsx'
import type { Note } from "../types/Notes.tsx";
import { useState } from 'react';



function Home() {

   
  
  const allNoteKeys=Object.keys(localStorage)
  const allNotes=allNoteKeys.map(key=>{
    return JSON.parse(localStorage.getItem(key))
    
  })

 const[NotesArr,setNotesArr]=useState(allNotes);

   const deleteNote=(id:string)=>{
        let remaining=NotesArr.filter(note=>note.id!==id);
        //update value in local starage as well to reflect delete
        localStorage.removeItem(id)
        setNotesArr([...remaining])
    }
  
  const {isDark}=UseTheme();

   return <div className='maincontent'>
     
     <h1 className={`font-bold text-xl ${homeStyles['page-header']} text-center `}>Your notes</h1>

    {NotesArr.length===0?
  
   
    <div className={
          !isDark?`flex 
          flex-col 
          shadow-lg 
          border-collapse border-1 
          border-slate-400  
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
        <div
        className={
          `flex 
          flex-col 
          shadow-lg border-collapse border-1 
          border-slate-300  
          bg-slate-100 
          rounded-sm  
          items-center 
          justify-start  
          text-center
          ${homeStyles['Items-Window']}
          
          `}
>
        {
          NotesArr.map(item=>{
            return(
            
            
            <div className={`${homeStyles['note']} bg-slate-300 border-none  rounded-md w-[100%] text-center`}  key={item.id}>
              <span>Subject: <strong> {item.subject}</strong></span>
              <br/>

              <div className='inline-flex items-center justify-center  ' >
                <Link to={`/notes/${item.id} `}>
                  <button className={`${homeStyles['noteBtn']} h-8 w-20 text-slate-100 bg-blue-500 rounded-sm`}>view more</button>
                </Link>

                <button className={` ${homeStyles['noteBtn']} h-8 w-20 text-slate-100 bg-red-500 rounded-sm`}onClick={()=>deleteNote(item.id)}>
                  delete
                </button>
              </div>
           
            </div>)
          })
        }
      </div>}

    </div>
}
  

export default Home