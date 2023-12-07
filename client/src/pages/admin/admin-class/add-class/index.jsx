import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addClass} from "../../../../servises/admin";
import { useFormik } from "formik";
import { ClassShema } from "../../validations/CategoryAndClassShema";
import toast from "react-hot-toast";
import { checkClassUniqueness } from "../../validations/isUniqHeader";

function ClassAdd() {
 
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: ClassShema,
    onSubmit: async (values) => {
      try {
        const isUnique = await checkClassUniqueness(values.title , "class");    
        if (!isUnique) {
          return toast.error("Başlık kullanılıyor"); 
        } 
        await addClass(values.title, "Sınıf"); 
        navigate("/admin/class");
      } catch (error) {
 
        console.error("Hata oluştu:", error);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      method="POST"
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
    >
      <FormContent header={"Sınıf Belirle"}>
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
      <FormButton>Sınıf Ekle </FormButton>
    </form>
  );
}

export default ClassAdd;
