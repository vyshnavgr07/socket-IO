import { useState,useEffect  } from 'react'
import io from 'socket.io-client'
import {nanoid}  from 'nanoid'
import './App.css'
const socket=io("http://localhost:4000")

function App() {
 const [message,setMessage]=useState('')
 const [chat,setChat]=useState([])

 const sendChat=(e)=>{
  e.preventDefault()
  socket.emit('chat',{message}) //message to give 
  setMessage('')
 }

 useEffect(()=>{
socket.on("chat",(payload)=>{
setChat((prev)=>([...prev,payload]))
})
 },[])
  return (
    <>
    <form onSubmit={sendChat}>
      <input type='text' 
      name='chat' 
      placeholder='send text'
      value={message}
      onChange={(e)=>setMessage(e.target.value)}/>
       <button type='submit'>sent</button>
    </form>
   {chat.map((x,i)=>(
    <p key={i}>{x.message}</p>  //message in up
   ))}
    </>
  )
}

export default App
