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
export default function AddEducation() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");

  // const handleSubit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   formData.append("title", title);
  //   formData.append("content", content);
  //   formData.append("price", price);
  //   const addEducation = async () => {
  //     await addItem("education", formData , "Özel Ders")
  //   };
  //   await addEducation();
  //   navigate("/admin/educations");
  // }; 
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
    },
    validationSchema: EducationShema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("title", values.title);
      formData.append("content", content);
      formData.append("price", values.price);

      const addEducation = async () => {
        await addItem("education", formData , "Özel Ders")
      };
      await addEducation();
      navigate("/admin/educations");
    },
  });



  return (
        <form
          encType="multipart/form-data"
          onSubmit={formik.handleSubmit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Başlık"}>
          <FormInput
          id="title"
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          formikError={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          handleBlur={formik.handleBlur}
        />
          </FormContent>

          <FormContent header={"Fiyat Bilgisi"}>
          <FormInput
          id="price"
          type="text"
          name="price"
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

          <FormContent header={"Fotoğraf Ekle "}>
          <FormInput
          type="file"
          id="image"
          name="image"
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
