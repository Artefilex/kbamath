import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
  FormSelect,
} from "../../../../components/form";
import {
  getSingleItem,
  editItem,
  getAllItems,
} from "../../../../servises/admin";
// import toast from "react-hot-toast";
import { useFormik } from "formik";
import { NotsShemaEdit } from "../../validations/NotsShema";
export default function EditNote() {
  const defaultClasses = [
    { href: "1-sinif", label: "Lise 1.sınıf" },
    { href: "2-sinif", label: "Lise 2.sınıf" },
    { href: "3-sinif", label: "Lise 3.sınıf" },
    {href: "4-sinif" , label: "Lise 4.sınıf"}
   ]

  const { id } = useParams();
  const [otherClasses, setOtherClasses] = useState([]);
  const [classes, setClasses] = useState("");
  const [categorys, setCategorys] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategory = async () => {
      const categoryData = await getAllItems("category");
      const otherClassData = await getAllItems("class");
      setCategorys(categoryData);
      setOtherClasses(otherClassData)
    };
    fetchCategory();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleItem(`nots/${id}`);
      formik.setValues({
        category: data.category,
        description: data.description,
      })
      setClasses(data.class);
    };
    fetchData();
  }, [id]);


  const formik = useFormik({
    initialValues: {
      image: "",
      category: "",
      description: "",
    },
    
    validationSchema: NotsShemaEdit,
    onSubmit: async (values) => {
      const editEducation = async () => {
        const formData = new FormData();
        formData.append("image", values.image);
        formData.append("category", values.category);
        formData.append("class", classes);
        formData.append("description", values.description);
      
      await editItem(`nots/${id}`, formData, "Nots", values.description);
      navigate("/admin/nots");
    };
    editEducation();
    },
  });


  return (
    <form
      encType="multipart/form-data"
      onSubmit={formik.handleSubmit}
      method="POST"
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
    >
      <FormContent  >
        <FormSelect
          label={"Kategori"}
          className={"bg-black"}
          id={"category"}
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          formikError={
            formik.touched.category && Boolean(formik.errors.category)
          }
          helperText={formik.touched.category && formik.errors.category}
          handleBlur={formik.handleBlur}
        >
          <option value="" disabled>
            Kategori belirle
          </option>
          {categorys.map((item) => (
            <option value={item.title} key={item.id}>
              {item.title}
            </option>
          ))}
        </FormSelect>
      </FormContent>

      <FormContent >
        <FormSelect
          label={"Sınıf"}
          id={"class"}
          type="text"
          name="class"
          value={classes}
          onChange={(e) => setClasses(e.target.value)}       
        >
          <option value="" disabled>
            Sınıf belirle
          </option>
          { defaultClasses.map((defaultP, index) => (
            <option value={defaultP.href} key={index}>
              {defaultP.label}
            </option>
          ))}
          {
          otherClasses.map((otherOption) => (
            <option value={otherOption.title} key={otherOption.id}>
              {otherOption.title}
            </option>
          ))}
        </FormSelect>
      </FormContent>
      <FormContent>
    
        <FormInput
          label={"Açıklama"}
          id={"description"}
          type="text"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          formikError={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          handleBlur={formik.handleBlur}
        />{" "}
      </FormContent>

      <FormContent>
        <FormInput 
          label={"Dosya Ekle"}
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
   
      <FormButton>Notu Güncelle </FormButton>
    </form>
  );
}
