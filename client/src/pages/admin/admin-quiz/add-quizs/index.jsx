
import { useNavigate } from "react-router-dom";
import {FormContent, FormInput, FormButton,} from "../../../../components/form";
import { addItem } from "../../../../servises/admin";
import {useFormik} from "formik"
import { QuizShema } from "../../validations/quizShema";
import { checkClassUniqueness } from "../../validations/isUniqHeader";
import toast from "react-hot-toast";
export default function AddQuizs() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      image:"",
      title:"",
      iframeUrl:"",
      iframeHeight:"",
    },
    validationSchema: QuizShema,
    onSubmit: async (values) =>{
     
      const addQuizs = async () => {
        const formData = new FormData();
        formData.append("image", values.image);
        formData.append("title",  values.title);
        formData.append("iframeUrl",  values.iframeUrl);
        formData.append("iframeHeight",  values.iframeHeight);
        try{
          const isUnique = await checkClassUniqueness(values.title, "quizs");    
          if (!isUnique) {
            return toast.error("Başlık kullanılıyor"); 
          } 
          await addItem("quizs" ,formData , "Quizs")
          navigate("/admin/quizs");
        } catch (error) {
          console.error("Hata oluştu:", error);
        }
      };
      await addQuizs();
    
    }

  })

  return (
        <form
          encType="multipart/form-data"
          onSubmit={formik.handleSubmit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Sınav Başlığı"}>
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

          <FormContent header={"Sınav Linki"}>
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

          <FormContent header={"Form Yüksekliği"}>
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

          <FormContent header={"Başlık Fotoğrafı"}>
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
          <FormButton> Sınav Ekle </FormButton>
        </form>
  );
}
