const Postdata = async (url, datos) => {
    try {
      await axios.post(url, datos);
      alert("Usuario Creado exitosamente");
      window.location.href = "../html/login.html";
    } catch (error) {
      console.log(error);
    }
  };
  export default Postdata;