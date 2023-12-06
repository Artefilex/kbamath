// import { useState } from "react";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addItem } from "../../../../servises/admin";
import { useFormik } from "formik";
import { CategoryShema } from "../../validations/CategoryAndClassShema";
import { checkClassUniqueness } from "../../validations/isUniqHeader";
import toast from "react-hot-toast";
function CategoryAdd() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        title: "",
        image: "",
       
      },
       validationSchema: CategoryShema ,
      onSubmit: async(values) =>{

          const addCategory = async () => {
            const formData = new FormData();
            formData.append("image", values.image);
            formData.append("title", values.title);
            try{
              const isUnique = await checkClassUniqueness(values.title, "category");    
              if (!isUnique) {
                return toast.error("Başlık kullanılıyor"); 
              }    
              await addItem("category", formData,"Category") 
              navigate("/admin/category");
            } catch (error) {
              console.error("Hata oluştu:", error);
            }
       
        };
    
        await addCategory();
      
      }
  })

  return (
    <form
          encType="multipart/form-data"
          onSubmit={formik.handleSubmit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Category"}>
            <FormInput
              type="text"
              id="title"
              name="title" 
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              handleBlur={formik.handleBlur}
            />
          </FormContent>


          <FormContent header={"Başlık Resmi"}>
            <FormInput
              type="file"
              id="image"
              name="image"
              onChange={(e) => formik.setFieldValue("image" ,e.currentTarget.files[0])}
              formikError={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
              handleBlur={formik.handleBlur}
            />
          </FormContent>

          <FormButton>Category Ekle </FormButton>
          
        </form>
  );
}

export default CategoryAdd;
