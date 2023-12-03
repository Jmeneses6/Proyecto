const PutData = async (url, datos) => {
  try {
    await axios.put(url, datos);
    window.location.href = "../html/profile.html";
    alert("Usuario Actualizado Correctamente");
  } catch (error) {
    console.log(error);
  }
};
export default PutData;
