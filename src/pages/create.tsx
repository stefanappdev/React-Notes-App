import '../../styles/TailwindStyles.css'
import '../../styles/pageStyles/create.css'

function Create() {
  return (
    <div className="maincontent">
     
     <h1 className='font-bold page-header text-center'>Create a new note</h1> 

     <br/>

     <form className='flex flex-col items-center justify-center' >

        <label className='font-semibold text-center' htmlFor="note-title">Subject: </label>
        <input 
        id='note-title' 
        className='border-amber-300 border-2 border-solid h-10 bg-zinc-100' 
        type="text" 
        placeholder="What's on your mind?"
        />

        <label id='note-text-area' className='font-semibold text-center '>body:</label>
        
        <textarea id='note-text-area' className=' my-8 border-amber-300 border-2 bg-zinc-100' placeholder="let it all out...">

        </textarea>
      


       <button className=' text-slate-100 submitBtn rounded-sm font-bold bg-blue-500 w-25 h-10'>submit</button>


     </form>
      
      
    </div>
  )
}

export default Create