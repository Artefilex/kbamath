import axios from 'axios';
import toast from 'react-hot-toast';


const baseUrl = "https://sisterslab.onrender.com"
export  const handleDelete = async ( url,successMessage, errorMessage) => {
  const confirms = window.confirm("Silmek istediğine emin misin");

  if (confirms) {
    try {
     await axios.delete(`${baseUrl}/${url}`, 
    );
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
    const response = await axios.put(`${baseUrl}/${id}` ,formdata, {
      headers: {
       'Content-Type': 'multipart/form-data',
      }})
    if (response.status === 200) {
        toast.success(`${title} ${message} güncellendi `);
      } else {
        toast.error( `${message} güncellenemedi`);
      }
    return response
   
}

export const addItem = async( url, formData, title ) =>{
 
    const response = await axios.post(`${baseUrl}/${url}`,
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },}
        
      );
      
      if (response.status === 200) {
        toast.success(`${title} Eklendi`);
      } else {
        toast.error( `${title}  Eklenemedi`);
      }
    };
    export const addClass = async( title, message ) =>{
 
      const response = await axios.post(`${baseUrl}/class`,
      {
        title: title,
      },{
            headers: {
              'Content-Type': 'application/json',
            },});
        
        if (response.status === 200) {
          toast.success(`${message} Eklendi`);
        } else {
          toast.error( `${message}  Eklenemedi`);
        }
      };

    export const userLogin = async (formData) => {
      try {
        const response = await axios.post(`${baseUrl}/login`, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data)
        if(response.data.isAdmin){
          await localStorage.setItem("userLogin", JSON.stringify(response.data)) 
        }
        return response.data
      } catch (error) {
        console.error('Error during login:', error);  
      }
        
    };

    export const editUserForSuperAdmin = async (id, formData) => {
      try {
        console.log(id , formData)
        const response = await axios.put(`${baseUrl}/users/make-admin/${id}`, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data)
        return response.data
      } catch (error) {
        console.error('Error during login:', error);  
      }
        
    };