import React from 'react'

const Main = () => {
    const edad = 22;
    const nombre = "Nicolas";
    const uni = "Unviersidad Tecnologica de Tucuman"
    const leng = "#C"
  return (
    <div>
        <div>
            <p className="acercaDe">Acerca de mi:</p>
        </div>
            <p className='descrip'>Mi nombre es {nombre}, tengo {edad} años soy estudiante de la carrera de programacion en la {uni}. Tengo conocimientos en el lenguaje {leng} y en base de datos SQL server. Tengo como objetivo seguir aprendiendo sobre las tecnologias que estoy desarrollando actualmente. </p>
    </div>
  )
}

export default Main