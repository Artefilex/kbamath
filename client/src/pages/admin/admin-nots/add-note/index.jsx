import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
  FormSelect
} from "../../../../components/form";
import { addItem, getAllItems } from "../../../../servises/admin";

export default function AddNote() {
  const [image, setImage] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [category, setCategory] = useState("");
  const [classes, setClasses] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getAllItems("category");
      setCategorys(data);
    };
    fetchCategory();
  }, []);

  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (category === "" || image === "" || description === "" ) {
      return toast.error(`category ,image ve  açıklama`);
    }
    formData.append("image", image);
    formData.append("category", category);
    formData.append("class", classes);
    formData.append("description", description);
    const addNots = async () => {
      await addItem("nots", formData, "Nots");
    };
    await addNots();
    navigate("/admin/nots");
  };
  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubit}
      method="POST"
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
    >
      <FormContent header={"Kategori"}>
       
           <FormSelect className={"bg-black"}
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
        <FormInput
          type="text"
          name="class"
          value={classes}
          onChange={(e) => setClasses(e.target.value)}
        />
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

      <FormButton>Note Ekle </FormButton>
    </form>
  );
}
