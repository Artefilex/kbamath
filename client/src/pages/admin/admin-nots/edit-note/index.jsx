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
import toast from "react-hot-toast";

export default function EditNote() {
  const defaultClasses = [
    { href: "1-sinif", label: "Lise 1.sınıf" },
    { href: "2-sinif", label: "Lise 2.sınıf" },
    { href: "3-sinif", label: "Lise 3.sınıf" },
    {href: "4-sinif" , label: "Lise 4.sınıf"}
   ]

  const { id } = useParams();
  const [otherClasses, setOtherClasses] = useState([]);
  const [oldImage, setOldImage] = useState("");
  const [image, setImage] = useState("");
  const [classes, setClasses] = useState("");
  const [description, setDescription] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleItem(`nots/${id}`);
      setCategory(data.category);
      setDescription(data.description);
      setOldImage(data.image);
      setClasses(data.class);
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchCategory = async () => {
      const categoryData = await getAllItems("category");
      const otherClassData = await getAllItems("class");
      setCategorys(categoryData);
      setOtherClasses(otherClassData)
    };
    fetchCategory();
  }, []);
  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (category === "" || description === "") {
      return toast.error(`category veya açıklama boş bırakılamaz `);
    }
    formData.append("image", image);
    formData.append("oldImage", oldImage);
    formData.append("class", classes);
    formData.append("category", category);
    formData.append("description", description);
    const editEducation = async () => {
      await editItem(`nots/${id}`, formData, "Nots", description);
      navigate("/admin/nots");
    };
    editEducation();
  };
  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubit}
      method="POST"
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
    >
      <input type="hidden" name="oldImage" value={oldImage} />
      <FormContent header={"Category"}>
        <FormSelect
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categorys.map((item) => (
            <option value={item.title} key={item.id}>
              {item.title}
            </option>
          ))}
        </FormSelect>
      </FormContent>

      <FormContent header={"Sınıf"}>
      <FormSelect 
        type="text"
        name="class"
        value={classes}
        onChange={(e) => setClasses(e.target.value)} >
         
         { defaultClasses.map((defaultP , index )=>(
            <option value={defaultP.href} key={index}>
            {defaultP.label}
          </option>
          ))}
      {
        otherClasses.map((otherOption  )=>(
          <option value={otherOption.title} key={otherOption.id}>
          {otherOption.title}
        </option>
        ))
      }
      </FormSelect>
      </FormContent>
      <FormContent header={"Açıklama"}>
        {" "}
        <FormInput
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
      </FormContent>

      <FormContent header={"Dosya Ekle"}>
        <FormInput
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </FormContent>

      <FormButton>Notu Güncelle </FormButton>
    </form>
  );
}
