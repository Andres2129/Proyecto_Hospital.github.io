// datos de formulario

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")
const formularioRegistro = document.getElementById("registro-doctores-form")

formularioRegistro.addEventListener("submit",function(event){
    event.preventDefault()
    const doctor = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        consultorio: consultorio.value,
        correo: correo.value,
        especialidad: especialidad.value

    }

console.log(doctor)
let doctores = []
let localDoctores = localStorage.getItem("doctores")
if (localDoctores){
    doctores = JSON.parse(localDoctores)
}
doctores.push(doctor)
localStorage.setItem("doctores",JSON.stringify(doctores))
formularioRegistro.reset()
alert("Doctor registrado con exito")
})