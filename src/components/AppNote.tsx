import type { Note } from "../types/Notes.tsx";
import useNotesManager from "./NotesManager.tsx"

const AllNotes=useNotesManager.NotesArr

type NotesManagerProps={
  NotesArr:Note[],
  setAllNotes:()=>void
}


function AppNote({NotesArr,setAllNotes}:NotesManagerProps) {
  return (
    <div>AppNote</div>
  )
}

export default AppNote