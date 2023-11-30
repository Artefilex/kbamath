import axios from 'axios';
import toast from 'react-hot-toast';


const baseUrl = "http://localhost:4000/admin"
export  const handleDelete = async ( url,successMessage, errorMessage) => {
  const confirms = window.confirm("Silmek istediğine emin misin");

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
 return confirms
};

export const getAllItems = async(item) => {
    const {data} = await axios.get(`${baseUrl}/${item}`)
    return data
}

export const getSingleItem = async(item) => {
    const {data} = await axios.get(`${baseUrl}/${item}`)
    return data
}

export const editItem = async(id, formdata , message ,title)  => {
    const response = await axios.put(`${baseUrl}/${id}` ,formdata)
    if (response.status === 200) {
        toast.success(`${title} ${message} güncellendi `);
      } else {
        toast.error( `${message} güncellenemedi`);
      }
    return response
   
}

export const addItem = async( url, formData,title ) =>{
    const response = await axios.post(`${baseUrl}/${url}`,
        formData
      );
      if (response.status === 200) {
        toast.success(`${title} Eklendi`);
      } else {
        toast.error( `${title}  Eklenemedi`);
      }
    };
    export const userLogin = async (formData) => {
      try {
        const response = await axios.post(`${baseUrl}/login`, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('An error occurred during login');
      
      }
        
    };