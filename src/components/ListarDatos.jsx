import React from 'react'

export const ListarDatos = ({ array, setArray }) => {
    const handleDelete = (id) => {
        const nuevoArray = array.filter((paciente) => paciente.id !== id);
        setArray(nuevoArray);
        window.location.reload(true);
        localStorage.setItem("userData", JSON.stringify(nuevoArray)); 
    };

    return (
        <>
            <h1 className='text-2xl border-b-2 font-light'>Lista de Turnos</h1>
            <section className='flex flex-wrap justify-center items-center'>
                {array.length > 0 ? (
                    array.map((datos) => (
                        <section key={datos.id} className='bg-[rgb(184,149,200)] w-80 p-1 drop-shadow-md m-3'>
                            <article className='flex-col items-center justify-around'>
                                <article className='bg-purple-100'>
                                    <div className='flex justify-around items-center'>
                                        <h6 className='font-bold'>Mascota:</h6> 
                                        <p className='font-light'>{datos.nombreMascota}</p>
                                    </div>
                                    <div className='flex justify-around items-center'>
                                        <h6 className='font-bold'>Dueño:</h6> 
                                        <p className='font-light'>{datos.nombreDueño}</p>
                                    </div>
                                </article>
                                <article className='bg-[rgb(184,149,200)]'>
                                    <div className='flex justify-around items-center'>
                                        <h6 className='font-bold'>Fecha:</h6> 
                                        <p className='font-light text-sm'>{datos.fecha}</p>
                                    </div>
                                    <div className='flex justify-around items-center'>
                                        <h6 className='font-bold'>Hora:</h6> 
                                        <p className='font-light'>{datos.hora}</p>
                                    </div>
                                    <div className='flex justify-around items-center'>
                                        <h6 className='font-bold'>Síntomas:</h6> 
                                        <p className='font-light'>{datos.sintomas}</p>
                                    </div>
                                </article>
                            </article>
                            <article className='flex justify-end items-end text-center'>
                                <button 
                                    onClick={() => handleDelete(datos.id)} 
                                    className='bg-[rgb(202,63,63)] p-2 w-30 mt-3 rounded-xl transition hover:-translate-y-1 hover:scale-100 delay-100 duration-300 hover:bg-red-900 hover:text-amber-50'>
                                    Eliminar
                                </button>
                            </article>
                        </section>
                    ))
                ) : (
                    "Lista vacía"
                )}
            </section>
        </>
    );
};
