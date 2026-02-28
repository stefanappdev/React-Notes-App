import { useParams,useNavigate } from "react-router-dom"
function Note() {
  const {id}=useParams();
  const navigate=useNavigate()
  let noteData=JSON.parse(localStorage.getItem(id)); 
  return (
    <div>

        <h1>{`Title:${noteData.subject}`}</h1>

        <div>{`Body:${noteData.body}`}</div>
        
        <button onClick={()=>navigate('/')}>go back</button>
    </div>
  )
}

export default Note