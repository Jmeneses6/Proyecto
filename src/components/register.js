import Postdata from "../helpers/postData";
import { USER } from "../helpers/url";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {  
e.preventDefault();

  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  
  let objUser = {
    id: Math.floor(Math.random() * 100),
    name,
    email,
    password,
  };

  Postdata(USER, objUser);

});