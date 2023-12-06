import * as Yup from "yup";
import { getAllItems } from "../../../servises/admin"; 
export const CategoryShema = Yup.object().shape({

  image: Yup.mixed().required("Lütfen Bir Dosya Seçiniz ").test("fileSize", "Dosya Çok Büyük", (value) => {
    if (!value.length) return true; 
    return value[0].size <= 1000000;
  }).test("fileType", "Geçersiz dosya türü", (value) => {
    if (!value) return true;
    const allowedExtensions = /(jpeg|jpg|png|gif|pdf)$/i;
    return allowedExtensions.test(value.name); 
  }),
  title: Yup.string().required("Başlık boş bırakılamaz").test("is-unique", "Bu başlık zaten kullanılıyor", async function (value) {
    const existingClasses = await getAllItems("category");
    const isUnique = !existingClasses.some((cls) => cls.title === value);
    return isUnique;
  }),
});


export const ClassShema = Yup.object().shape({
  title: Yup.string().required("Başlık boş bırakılamaz").test("is-unique", "Bu başlık zaten kullanılıyor", async function (value) {
    const existingClasses = await getAllItems("class");
    const isUnique = !existingClasses.some((cls) => cls.title === value);
    return isUnique;
  }),
})
