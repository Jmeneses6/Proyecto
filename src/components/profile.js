import DeleteData from "../helpers/deleteData.js";
import PutData from "../helpers/putData.js";
import { USER } from "../helpers/url.js";

let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPass = document.getElementById("password");
let btnEdit = document.getElementById("editar");
let btnGuardar = document.getElementById("guardar");
let btnEliminar = document.getElementById("eliminar");
let form = document.querySelector("form");

let infoUser = JSON.parse(sessionStorage.getItem("infoUser"));

//Mostrar datos en el perfil
document.addEventListener("DOMContentLoaded", () => {
  const { id, name, password, email } = infoUser;

  inputEmail.value = email;
  inputName.value = name;
  inputPass.value = password;

  btnEliminar.setAttribute("id", id);
});

btnEdit.addEventListener("click", () => {
  inputEmail.removeAttribute("disabled");
  inputName.removeAttribute("disabled");
  inputPass.removeAttribute("disabled");

  btnGuardar.classList.remove("d-none");
  btnEdit.classList.add("d-none");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { id } = infoUser;

  let objUser = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPass.value,
  };

  await PutData(`${USER}/${id}`, objUser);
});

//Eliminar usuario, resetear y mandar al login
btnEliminar.addEventListener("click", (e) => {
  e.preventDefault();
  let id = e.target.id;

  DeleteData(`${USER}/${id}`).then(() => {
    form.reset();
    window.location.href = "../pages/login.html";
    alert("Usuario Eliminado Correctamente")
  });
});