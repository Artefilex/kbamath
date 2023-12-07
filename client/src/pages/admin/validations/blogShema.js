import * as Yup from "yup";



export const blogShema = Yup.object().shape({
    header:  Yup.string().required("Lütfen Bir Başlık Yazınız "),
    subtitle: Yup.string().required("Lütfen Bir Alt Başlık Yazınız "),
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

export const editBlogShema = Yup.object().shape({
    header:  Yup.string().required("Lütfen Bir Başlık Yazınız "),
    oldImage: Yup.string(),
    subtitle: Yup.string().required("Lütfen Bir Alt Başlık Yazınız "),
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