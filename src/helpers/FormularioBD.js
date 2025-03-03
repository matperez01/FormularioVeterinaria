let usuarios = JSON.parse(localStorage.getItem("userData")) || [];

export const agregarUsuario = (usuario) => {
  usuario.id = Date.now();
  usuarios.push(usuario);
  localStorage.setItem("userData", JSON.stringify(usuarios));
};


export const obtenerUsuarios = () => {
    return usuarios;
};


