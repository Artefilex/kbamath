import axios from 'axios';
import toast from 'react-hot-toast';

const baseUrl = "http://localhost:4000/admin"
export  const handleDelete = async ( url,successMessage, errorMessage) => {
  const confirms = window.confirm("Silmek istediğine emin misin");
   console.log(url)
  if (confirms) {
    try {
      await axios.delete(`${baseUrl}/${url}`);
      toast.success(successMessage);
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error(errorMessage);
    }
  } else {
    toast.error("İşlem iptal edildi");
  }
};

export const getAllItems = async(item) => {
    const {data} = await axios.get(`${baseUrl}/${item}`)
    return data
}