const DeleteData = async (url) => {
  try {
    await axios.delete(url);
    alert  
  } catch (error) {
    console.log(error);
  }
};
export default DeleteData;