import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addItem } from "../../../../servises/admin";
function ClassAdd() {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    const addBlog = async () => {
      await addItem("class", formData, "Sınıf");
    };
    await addBlog();
    navigate("/admin/class");
  };
  return (
    <form
      onSubmit={handleSubit}
      method="POST"
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
    >
      <FormContent header={"Sınıf Belirle"}>
        <FormInput
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormContent>
      <FormButton>Sınıf Ekle </FormButton>
    </form>
  );
}

export default ClassAdd;
