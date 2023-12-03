const Postdata = async (url, datos) => {
  try {
    await axios.post(url, datos);
    window.location.href = "../html/login.html";
    alert("Usuario Creado exitosamente");
  } catch (error) {
    console.log(error);
  }
};
export default Postdata;