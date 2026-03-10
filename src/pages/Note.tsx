import { useParams,useNavigate } from "react-router-dom"
import { useState,useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import EditPageStyles from '../../styles/pageStyles/edit.module.css'

function Note() {
  const {noteId}=useParams();
  const [shouldEdit,setShouldEdit]=useState(false);
  const useSubjectRef=useRef(null);
  const useBodyRef=useRef(null)
  const navigate=useNavigate();
  const newNoteId=uuidv4()
  let noteData=JSON.parse(localStorage.getItem(noteId)); 
  const [subject,setSubject]=useState(noteData.subject)
  const [body,setBody]=useState(noteData.body)

  const handleEditMode=()=>{
      setShouldEdit(true)

  }

  const handleEditSubmit=(event:any)=>{

     if(event.target.subject.value===''|| event.target.body.value===""){
        alert('Please enter a subject and body for your note')
        return
     }
     
     useBodyRef.current=event.target.body.value
     useSubjectRef.current=event.target.subject.value
    
    event.preventDefault()

      let updatedNote={
        id:newNoteId,
        subject:event.target.subject.value,
        body:event.target.body.value
      }

      
      
      localStorage.removeItem(noteData.id)
      localStorage.setItem(newNoteId,JSON.stringify(updatedNote))
      setShouldEdit(false)
      alert('Note Updated sucessfully')
      navigate('/')
  }

  return (
    <div className={`${EditPageStyles['EditFormPage']}`}>
      {!shouldEdit?
      
      <div className={ `
        shadow-lg
        border-collapse 
        border-1 border-slate-400  
        bg-slate-100 
        text-slate-950 
        rounded-sm  
         ${EditPageStyles['EditForm']} 
         ` }>


          <h1 className={`font-bold text-xl ${EditPageStyles['page-header']}`}>Note Details</h1>
          <label className="font-semibold" htmlFor="note_subject">Subject</label>
          <p id='note_subject'>{`${noteData.subject}`}</p>
          <br/>
           <label className="font-semibold " htmlFor="note_body">Note Body</label>
          <div id='note_subject'>{`${noteData.body}`}</div>
          <br/>
           <div className={`inline-flex `}>
            

              <button  onClick={handleEditMode} 
              className={`${EditPageStyles['formButton']} 
              
              text-slate-100 
              rounded-sm 
              font-bold 
              bg-blue-500 
              w-25 
              h-10`}>
               Edit note
              </button>



                <button onClick={()=>navigate('/')}
              className={`${EditPageStyles['formButton']} 
              text-slate-100 rounded-sm
               font-bold bg-red-500 
               w-25 h-10`}>
                close
              </button>
            </div>  
      </div>:
      <>
      <h1 className={`font-bold text-xl ${EditPageStyles['page-header']} text-center `}>Edit your note</h1>

   
        <form 
        className={
        `flex flex-col 
        shadow-lg
        border-collapse 
        border-1 border-slate-400  
        bg-slate-100 
        text-slate-950 
        rounded-sm  
         ${EditPageStyles['EditForm']} 
        items-center 
        justify-center ` }

        onSubmit={handleEditSubmit}
        >



          <label className='font-semibold text-center' htmlFor="subject">Subject</label>

            <input
            placeholder="enter a subject"
            type="text"
            name="subject"
            id='subject'
            ref={useSubjectRef}
            onChange={e=>setSubject(e.target.value)}
            className={`
              ${ EditPageStyles['EditFormInputs']} border-sky-300 
            border-2 border-solid h-10 bg-zinc-100
            `} 
            value={subject}
            />


          <label className='font-semibold text-center' htmlFor="body">body</label>

             <textarea
            placeholder="enter a body"
            name="body"
            ref={useBodyRef}
            id='body'
            onChange={e=>setBody(e.target.value)}
            value={body}
             className={
              ` h-35 w-60 
              ${EditPageStyles['EditFormInputs']} 
             my-8 
             border-sky-300 
             border-2 
             bg-zinc-100' `}
            >
            
            </textarea>
            <div>

            <div className={`inline-flex `}>
              <button className={`${EditPageStyles['formButton']} text-slate-100 rounded-sm font-bold bg-blue-500 w-25 h-10`}>submit</button>
              <button className={`${EditPageStyles['formButton']} text-slate-100 rounded-sm font-bold bg-red-500 w-25 h-10`} onClick={()=>setShouldEdit(false)}>close</button>
            </div>  
            

            </div>
        </form>
      </>
            }
    </div>
  )
}

export default Note