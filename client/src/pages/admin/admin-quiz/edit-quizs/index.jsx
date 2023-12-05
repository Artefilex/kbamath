import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { getSingleItem, editItem } from "../../../../servises/admin";
import {useFormik} from "formik"
import { EditQuizShema } from "../../validations/quizShema";
export default function EditQuizs() {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      image:"",
      title:"",
      iframeUrl:"",
      iframeHeight:"",
      oldImage:""
    },
    validationSchema: EditQuizShema,
    onSubmit: async (values) =>{
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("oldImage", values.oldImage);
      formData.append("title",  values.title);
      formData.append("iframeUrl",  values.iframeUrl);
      formData.append("iframeHeight",  values.iframeHeight);
    const editQuizs = async () => {
       const message = "quizs"
       await editItem(`quizs/${id}` ,formData , message , values.title) 
       navigate("/admin/quizs");
    };
     editQuizs();
    }

  }) 
  useEffect(() => {
    const fetchData = async () => {
      const data = await  getSingleItem(`quizs/${id}`)
      formik.setValues({
        oldImage:data.image,
      title:data.title,
      iframeUrl:data.iframeUrl,
      iframeHeight:data.iframeHeight,
      })
  
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
       <FormContent header={"Sınav Başlığını  Güncelle"}>
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

          <FormContent header={"Sınav Linkini Güncelle"}>
          <FormInput
              id="iframeUrl"
              type="text"
              name="iframeUrl"
              value={formik.values.iframeUrl}
              onChange={formik.handleChange}
              formikError={formik.touched.iframeUrl && Boolean(formik.errors.iframeUrl)}
          helperText={formik.touched.iframeUrl && formik.errors.iframeUrl}
          handleBlur={formik.handleBlur}
            />
          </FormContent>

          <FormContent header={"Form Yüksekliğini Güncelle"}>
          <FormInput
            id="iframeHeight"
              type="text"
              name="iframeHeight"
              value={formik.values.iframeHeight}
              onChange={formik.handleChange}
              formikError={formik.touched.iframeHeight && Boolean(formik.errors.iframeHeight)}
              helperText={formik.touched.iframeHeight && formik.errors.iframeHeight}
              handleBlur={formik.handleBlur}
            />
          </FormContent>

          <FormContent header={"Başlık Fotoğrafını Güncelle"}>
          <FormInput
              id="image"
              type="file"
              name="image"
              onChange={(e) =>
                formik.setFieldValue("image", e?.currentTarget?.files[0])
              }
              formikError={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
              handleBlur={formik.handleBlur}
            />
          </FormContent>

          <FormButton> Güncelle </FormButton>
        </form>
  );
}