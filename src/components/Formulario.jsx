//!Formulario, con los campos de Nombre, Apellido, DNI, email y botón que me permita enviar el formulario.

import React, { useEffect, useState } from 'react'
import {agregarUsuario,obtenerUsuarios} from "../helpers/FormularioBD"
import { ListarDatos } from './ListarDatos'

export const Formulario = () => {
  const [Formulario, setFormulario] = useState({
    nombreMascota:"",
    nombreDueño:"",
    fecha:"",
    hora:"",
    sintomas:"",
  })  

const [array, setArray] = useState([])

useEffect(() => {
  return () => {
    const data = obtenerUsuarios();
    setArray(data);
    
  }
})

const handleChange = (e)=>{
  
  setFormulario({ ...Formulario,
    [e.target.name]: e.target.value})
}

const handleDelete = (id) => {
  const nuevoArray = array.filter((paciente) => paciente.id !== id);
  setArray(nuevoArray);

  localStorage.setItem("userData", JSON.stringify(nuevoArray)); 
  window.location.reload()
};


const handleSubmit = (e)=>{
  e.preventDefault();


  if(!Formulario. nombreMascota.trim() || !Formulario.nombreDueño.trim()|| !Formulario.fecha.trim()|| !Formulario.hora.trim()|| !Formulario.sintomas.trim() ){
  alert("debe llenar todos los campos");
  return
  }

  if(Formulario.nombreDueño.length> 30) {alert ("no puede tener tantos caracteres un nombre");return}
  if(Formulario.nombreDueño.length< 3) {alert ("debe tener mas caracteres su nombre");return}
  if(Formulario.nombreMascota.length> 30){ alert ("no puede tener tantos caracteres un nombre");return}
  if(Formulario.nombreMascota.length< 1) {alert ("debe tener mas caracteres el nombre del animal");return}
  if(Formulario.sintomas.length< 5) {alert ("debe tener mas caracteres los sintomas");return}
   

  
  agregarUsuario(Formulario)
  window.location.reload()
  alert("Sus datos fueron cargados con exito")
}

  return (
<>

    <section className='  p-5  rounded-xl bg-purple-100 lg: max-w-full '>  
        <h1 className='text-2xl border-b-2 font-light'>Lista de Formulario Para Crear Cita </h1>
        <form onSubmit={handleSubmit} className='  font-mono   ' >
          <div className='md:flex '>
            <p  className='font-light '>Ingresar nombre de Mascota: </p>
            <input
            className='border-b-2 rounded-sm bg-violet-200 p-1 mt-1 w-full' 
            type="text"
            name="nombreMascota" 
            placeholder="nombre de mascota"
            value={Formulario. nombreMascota}
            onChange={handleChange}
           
            />
          </div>
        

          <div className='md:flex '>
            <p className='font-light'>Ingresar nobre de Dueño: </p>
            <input 
            className='border-b-2 rounded-sm bg-violet-200 p-1 mt-1  w-full md:ml-5'
            type="text" 
            name="nombreDueño"
            placeholder='nombre de dueño'
            value={Formulario.nombreDueño}
            onChange={handleChange}  
           
            />
          </div>
          
        <section className='md:flex md:justify-between '>
          <div>
        <p className='font-light'>Ingresar Fecha: </p>
          <input 
          className='text-center border-b-2 rounded-sm bg-violet-200 p-1 mt-1 w-full md:w-83 lg:w-110 xl:w-140' 
          type="date" 
          name="fecha"
          value={Formulario.fecha}
          onChange={handleChange} 
          />
        </div>

        <div>
        <p className='font-light '>Ingresar Horario: </p>
        <input 
          className='border-b-2 rounded-sm bg-violet-200 p-1 mt-1 w-full md:w-83 lg:w-110 xl:w-140 ' 
          type="time" 
          name="hora" 
          value={Formulario.hora}
          onChange={handleChange}
          />
        </div>
        </section>
        
       
          <div>
            <p className='font-light '>Sintomas: </p>
            <input 
            className='sm: border-b-2 rounded-sm bg-violet-200 p-1 mt-1 w-full h-30'
            type="text" 
            name="sintomas" 
            value={Formulario.sintomas}
            onChange={handleChange}
       
            
            />
          </div>
          

        </form>
        <div className='text-center'>
          <button className='bg-[rgb(184,149,200)] p-2 w-30  mt-3 rounded-xl transition hover:-translate-y-1 hover:scale-110 delay-100 duration-300 hover:bg-violet-900   transition-property: transform  hover:text-amber-50' onClick={handleSubmit}>Enviar</button>
        </div>
        
        
    </section>
     <ListarDatos array={array} handleDelete={handleDelete} /> 
    </>
  );
}

