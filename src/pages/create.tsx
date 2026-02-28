import '../../styles/TailwindStyles.css'
import createPageStyles from '../../styles/pageStyles/create.module.css'
import { UseTheme } from '../contexts/themeContext.tsx'
import { useState,useRef} from 'react'
import type { Note } from '../types/Notes.tsx'
import { v4 as uuidv4 } from 'uuid';
 




function Create() {

const id=uuidv4();





const newNote:Note={
  id:"",
  subject:"",
  body:""
}

const [subject,setSubject]=useState("")
const [body,setBody]=useState("")
const bodyRef=useRef('');
const subjectRef=useRef('');


  const handleSubmit=( event:any)=>{
    event.preventDefault()
    
        bodyRef.current=body
        subjectRef.current=subject
   
        if(bodyRef.current==='' || subjectRef.current===''){
          alert('Please enter a subject and a body')
          return
        }else{

        newNote.id=id;
          newNote.body=bodyRef.current;
          newNote.subject=subjectRef.current
          alert("New Note created!")
          localStorage.setItem(newNote.id,JSON.stringify(
            {
            id:newNote.id,
            body:newNote.body,
            subject:newNote.subject,

          }))
        }
    
    const clear=()=>{
        setBody('')
        setSubject('')
        bodyRef.current=''
        subjectRef.current=''
            }

  

    console.log(newNote)
    clear()
    
  }

  const handleSubjectChange=(event:any)=>{
   
        setSubject(event.target.value)
      
  }




    const handlebodyChange=(event:any)=>{
       setBody(event.target.value)
      }




  const {isDark}=UseTheme()
  return (
    <div className={!isDark?`maincontent`:`maincontent text-slate-50 bg-slate-950`}>
     
     <h1 className={`font-bold text-xl ${createPageStyles['page-header']} text-center `}>Create a new note</h1> 

     <form onSubmit={handleSubmit} className={
      `flex flex-col shadow-lg border-collapse 
      ${createPageStyles['createForm']} 
      border-1 border-slate-400  bg-slate-100 text-slate-950 rounded-sm  items-center justify-center ` }>

        <label className='font-semibold text-center' htmlFor="subject">Subject</label>

        <input 
        id='subject' 
        className={`${createPageStyles['createFormInputs']} border-sky-300 border-2 border-solid h-10 bg-zinc-100`}  
        type="text" 
        name='subject'
        onChange={handleSubjectChange}
        value={subject}
        placeholder="What's on your mind?"
        />

        <label id='textbody'  className='font-semibold text-center '>body</label>
        
        <textarea 
        id='textbody' 
        name='textbody' 
         onChange={handlebodyChange}
         value={body}
        className={` h-35 w-60 ${createPageStyles['createFormInputs']} my-8 border-sky-300 border-2 bg-zinc-100' `} 
        placeholder="let it all out...">

        </textarea>
      
        <br/>

       <button className={`text-slate-100 ${createPageStyles['submitBtn']}  rounded-sm font-bold bg-blue-500 w-25 h-10`}>submit</button>


     </form>
      
      

      
    </div>
  )
}

export default Create