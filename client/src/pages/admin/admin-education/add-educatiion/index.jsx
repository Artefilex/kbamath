import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
  QuillTextArea,
} from "../../../../components/form";
import { useFormik } from "formik";
import { addItem } from "../../../../servises/admin";
import { EducationShema } from "../../validations/educationShema";
import { checkClassUniqueness } from "../../validations/isUniqHeader";
import toast from "react-hot-toast";
export default function AddEducation() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
    },
    validationSchema: EducationShema,
    onSubmit: async (values) => {
  

      const addEducation = async () => {
        const formData = new FormData();
        formData.append("image", values.image);
        formData.append("title", values.title);
        formData.append("content", content);
        formData.append("price", values.price);
        try {

          const isUnique = await checkClassUniqueness(values.title , "education");    
          if (!isUnique) {
            return toast.error("Başlık kullanılıyor"); 
          } 
          await addItem("education", formData , "Özel Ders")
          navigate("/admin/educations");
        } catch (error) {
   
          toast.error("Hata oluştu:", error);
        }
       
      };
      await addEducation();
     
    },
  });



  return (
        <form
          encType="multipart/form-data"
          onSubmit={formik.handleSubmit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent >
          <FormInput
          id="title"
          type="text"
          name="title"
          label={"Özel Ders Başlığı"}
          value={formik.values.title}
          onChange={formik.handleChange}
          formikError={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          handleBlur={formik.handleBlur}
        />
          </FormContent>

          <FormContent>
          <FormInput
          id="price"
          type="text"
          name="price"
          label={"Fiyat Bilgisi"}
          value={formik.values.price}
          onChange={formik.handleChange}
          formikError={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          handleBlur={formik.handleBlur}
        />
          </FormContent>

          <FormContent header={"Açıklama"}>
            <QuillTextArea
              name="content"
              value={content}
              onChange={(content) => setContent(content)}
            />
          </FormContent>

          <FormContent >
          <FormInput
          type="file"
          id="image"
          name="image"
          label={"Fotoğraf Ekle "}
          onChange={(e) =>
            formik.setFieldValue("image", e.currentTarget.files[0])
          }
          formikError={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
          handleBlur={formik.handleBlur}
        />
          </FormContent>

          <FormButton> Özel Ders Ekle</FormButton>
        </form>
  );
}
