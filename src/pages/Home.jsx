import React from "react";
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

const Home = () =>{

const alumno = {id:1,nombre:"Nicolas",apellido:"Lucero",edad:22,hobby:"Futbol"}
console.log(alumno);

    return <div>
      <Header/>
      <Main alumno = {alumno}/>
      <Footer/>
    </div>
}

export default Home;