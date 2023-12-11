import * as Yup from "yup";

export const CategoryShema = Yup.object().shape({

  image: Yup.mixed().required("Lütfen Bir Dosya Seçiniz ").test("fileSize", "Dosya Çok Büyük", (value) => {
    if (!value.length) return true; 
    return value[0].size <= 1000000;
  }).test("fileType", "Geçersiz dosya türü", (value) => {
    if (!value) return true;
    const allowedExtensions = /(jpeg|jpg|png|gif)$/i;
    return allowedExtensions.test(value.name); 
  }),
  title: Yup.string().required("Başlık boş bırakılamaz")
});


export const ClassShema = Yup.object().shape({
  title: Yup.string().required("Başlık boş bırakılamaz")
})
