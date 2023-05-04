import React from "react";
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

const Home = () =>{
const saludar = ()=>{

  return <h3>"Bienvenido a react"</h3>
}
const alumno = {id:1,nombre:"Nicolas",apellido:"Lucero",edad:22,hobby:"Futbol"}
console.log(alumno);

//const perros = [{id:1,nombre:"firulais",edad:5,raza:"salchicha"}]

  const nombre = "Nicolas"

    return <div>
      <Header nombre= {nombre}/>
      <Main alumno = {alumno}/>
      <Footer saludar = {saludar}/>
    </div>
}

export default Home;