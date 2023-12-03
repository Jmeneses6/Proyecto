import GetData from "../helpers/getData.js";
import { USER } from "../helpers/url.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let data = await GetData(USER);

  data?.forEach((element) => {
    if (email === element.email && password === element.password) {
      let dataUser = element;
      sessionStorage.setItem("infoUser", JSON.stringify(dataUser));

      form.reset();
      window.location.href = "../pages/profile.html";
      alert("Bienvenido!!")
    } 
      //MOSTRAR (CREDENCIALES INCORRECTAS) AL INTRODUCIR MAL LOS DATOS
      //else if (email != element.email && password != element.password); {
      //form.reset();
      //alert("Credenciales Incorrectas");
      //}
  });
});