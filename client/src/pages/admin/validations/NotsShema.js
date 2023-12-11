import * as Yup from "yup";

export const NotsShema = Yup.object().shape({
    category:Yup.string().required("Kategori Boş Bırakılamaz"),
     description: Yup.string().required("Açıklama boş bırakılamaz").max(12,"Açıklama 12 Karakterden Uzun"),
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