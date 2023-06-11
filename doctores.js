function mostrarDoctores(){
    let doctores = []
    let localDoctores = localStorage.getItem("doctores")
    if (localDoctores){
        doctores = JSON.parse(localDoctores)
    }

const tablaDoctores = document.getElementById("tabla-doctores")
const cuerpoTabla = tablaDoctores.getElementsByTagName("tbody")[0]
doctores.forEach(doctor => {
    let fila = cuerpoTabla.insertRow()
    let celdaNombre = fila.insertCell()
    let celdaApellido = fila.insertCell()
    let celdaCedula = fila.insertCell()
    let celdaConsultorio = fila.insertCell()
    let celdaCorreo = fila.insertCell()
    let celdaEspecialidad = fila.insertCell()

    celdaNombre.textContent = doctor.nombre;
    celdaApellido.textContent = doctor.apellido;
    celdaCedula.textContent = doctor.cedula;
    celdaConsultorio.textContent = doctor.consultorio;
    celdaCorreo.textContent = doctor.correo
    celdaEspecialidad.textContent = doctor.especialidad
});


}
mostrarDoctores()