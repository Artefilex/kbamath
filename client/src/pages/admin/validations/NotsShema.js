import * as Yup from "yup";
 import { getAllItems } from "../../../servises/admin";

export const NotsShema = Yup.object().shape({
    category:Yup.string().required("Kategori Boş Bırakılamaz"),
    description: Yup.string().required("Açıklama boş bırakılamaz").test("is-unique", "Bu başlık zaten kullanılıyor", async function (value) {
      const existingClasses = await getAllItems("nots");
      const isUnique = !existingClasses.some((cls) => cls.title === value);
      return isUnique;
    }),
    image: Yup.mixed().required("Lütfen Bir Dosya Seçiniz ")
  .test("fileSize", "Dosya Çok Büyük", (value) => {
    if (!value.length) return true; 
    return value[0].size <= 1000000;
  }).test("fileType", "Geçersiz dosya türü", (value) => {
    if (!value) return true;
    const allowedExtensions = /(jpeg|jpg|png|gif|pdf)$/i;
    return allowedExtensions.test(value.name); 
  }),
})