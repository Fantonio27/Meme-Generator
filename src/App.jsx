import "./App.css"
import Navbar from "./components/navbar"
import Form from "./components/form"
import Picture from "./components/picture"
import { state, useEffect, useState } from "react"

export default function App(){

  const [FormData, setFormData] = useState({
    Toptext:"",
    Bottomtext:"",
    Api:{},
  })

  const [memepicture, setmemepicture] = useState("http://i.imgflip.com/1bij.jpg")

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=> res.json())
    .then(data => setFormData(prev=>({
      ...prev,
      Api: data.data.memes
    })))
  }, [])

  function random(event){
    event.preventDefault()
    const random = Math.floor(Math.random() * FormData.Api.length)
    setmemepicture(FormData.Api[random].url)
    //console.log(FormData.Api)
  }

  function handleChange(event){
    const {name, value} = event.target
    setFormData((e)=>({
        ...e,
        [name] : value
    }))
  }
  return(
    <div className="container">
      <div className="container--box">
        <Navbar/>
        <Form handleClick={random} handleChange={handleChange} Data={FormData}/>
        <Picture image={memepicture} Data={FormData}/>
      </div>
    </div>
  )
}