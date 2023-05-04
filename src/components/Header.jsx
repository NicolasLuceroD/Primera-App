import React from 'react'

const Header = (props) => {
  console.log("en header me llega esta prop: ", props);
  

  return (
    <div>
        <h1 className='nombre'>Nicolas Lucero del Llanos</h1>
        <img className="imgFotoP" src="IMG_4908.JPG" alt="" width={300} height={200}/>
        <h1>{props.nombre}</h1>
        
    </div>
  )
}

export default Header

