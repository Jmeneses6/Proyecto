const PutData = async (url, datos) => {
  try {
    await axios.put(url, datos);
    window.location.href = "../pages/profile.html";
    alert("Usuario Actualizado Correctamente");
  } catch (error) {
    console.log(error);
  }
};
export default PutData;