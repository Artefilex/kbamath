import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
  QuillTextArea,
} from "../../../../components/form";
import { useFormik } from "formik";
import { getSingleItem, editItem } from "../../../../servises/admin";
import { EditEducationShema } from "../../validations/educationShema";
function EditEducation() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
      oldImage: "",
    },
    validationSchema: EditEducationShema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("oldImage", values.oldImage);
      formData.append("title", values.title);
      formData.append("content", content);
      formData.append("price", values.price);

      const editEducation = async () => {
        const message = "Education";
        await editItem(`education/${id}`, formData, message, values.title);
        navigate("/admin/educations");
      };
      editEducation();
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleItem(`education/${id}`);
      formik.setValues({
        title: data.title,
        price: data.price,
        oldImage: data.image,
      });
      setContent(data.content);
    };
    fetchData();
  }, [id]);

  return (
    <form
      encType="multipart/form-data"
      onSubmit={formik.handleSubmit}
      method="POST"
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
    >
      <input type="hidden" name="oldImage" value={formik.values.oldImage} />
      <FormContent>
        <FormInput
          id="title"
          type="text"
          name="title" 
          label={"Özel Ders Başlığını Güncelle"}
          value={formik.values.title}
          onChange={formik.handleChange}
          formikError={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          handleBlur={formik.handleBlur}
        />
      </FormContent>

      <FormContent >
        <FormInput
          id="price"
          type="text"
          name="price"
          label={"Fiyat Bilgisini Güncelle"}
          value={formik.values.price}
          onChange={formik.handleChange}
          formikError={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          handleBlur={formik.handleBlur}
        />
      </FormContent>

      <FormContent header={"Açıklamayı  Güncelle"}>
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
          label={"Fotoğrafı Değiştir"}
          onChange={(e) =>
            formik.setFieldValue("image", e.currentTarget.files[0])
          }
          formikError={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
          handleBlur={formik.handleBlur}
        />
      </FormContent>

      <FormButton> Güncelle</FormButton>
    </form>
  );
}

export default EditEducation;
