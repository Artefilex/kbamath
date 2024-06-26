import * as Yup from "yup";


export const EducationShema = Yup.object().shape({
    title:  Yup.string().required("Lütfen Bir Başlık Yazınız "),
    price: Yup.number().required("Lütfen Number Bir değer Giriniz"),
    image: Yup.mixed().required("Lütfen Bir Dosya Seçiniz ")
  .test("fileSize", "Dosya Çok Büyük", (value) => {
    if (!value.length) return true; 
    return value[0].size <= 1000000;
  }).test("fileType", "Geçersiz dosya türü", (value) => {
    if (!value) return true;
    const allowedExtensions = /(jpeg|jpg|png|gif)$/i;
    return allowedExtensions.test(value.name); 
  }),
})

export const EditEducationShema = Yup.object().shape({
  title:  Yup.string().required("Lütfen Bir Başlık Yazınız "),
  price: Yup.number().required("Lütfen Number Bir değer Giriniz"),
    image: Yup.mixed().test("fileSize", "Dosya Çok Büyük", (value) => {
        if (value && value.length && value[0].size) {
            return value[0].size <= 1000000;
          }
          return true;
  }).test("fileType", "Geçersiz dosya türü", (value) => {
    if (value){
        const allowedExtensions = /(jpeg|jpg|png|gif)$/i;
        return allowedExtensions.test(value.name); 
    } 
    return true;
   
  }),
})