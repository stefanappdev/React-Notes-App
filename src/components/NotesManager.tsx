import type { Note } from "../types/Notes.tsx";
import { useState } from "react";


const NotesManager=()=>{

    let Arr:Note[]=[]
    const[NotesArr,setNotesArr]=useState(Arr);

    const addNewNote=(newNote:Note)=>{
         setNotesArr([...NotesArr,newNote])
    }
    
 

    const deleteNote=(Note:Note)=>{
        let remaining=NotesArr.filter(note=>note.id!==Note.id);
        setNotesArr(remaining)
    }
    
 const ManagerFunctions={
        NotesArr,
        addNewNote,
        setNotesArr,
        deleteNote,
}


return ManagerFunctions

}



const utilizeNotesManager=()=>{return NotesManager()}

export default utilizeNotesManager
