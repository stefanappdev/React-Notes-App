import '../../styles/TailwindStyles.css'
import createPageStyles from '../../styles/pageStyles/create.module.css'
import { UseTheme } from '../contexts/themeContext.tsx'

function Create() {

  const {isDark}=UseTheme()
  return (
    <div className={!isDark?"maincontent":"maincontent bg-slate-950 text-slate-50"}>
     
     <h1 className={`font-bold text-xl ${createPageStyles['page-header']} text-center `}>Create a new note</h1> 

     <form className={
      `flex flex-col shadow-lg border-collapse 
      ${createPageStyles['createForm']} 
      border-1 border-slate-400  bg-slate-100 text-slate-950 rounded-sm  items-center justify-center ` }>

        <label className='font-semibold text-center' htmlFor="note-title">Subject</label>

        <input 
        id='note-title' 
        className={`${createPageStyles['createFormInputs']} border-sky-300 border-2 border-solid h-10 bg-zinc-100`}  
        type="text" 
        placeholder="What's on your mind?"
        />

        <label id='note-text-area' className='font-semibold text-center '>body</label>
        
        <textarea id='note-text-area' className={` h-35 w-60 ${createPageStyles['createFormInputs']} my-8 border-sky-300 border-2 bg-zinc-100' `} placeholder="let it all out...">

        </textarea>
      
        <br/>

       <button className={`text-slate-100 ${createPageStyles['submitBtn']}  rounded-sm font-bold bg-blue-500 w-25 h-10`}>submit</button>


     </form>
      
      
    </div>
  )
}

export default Create