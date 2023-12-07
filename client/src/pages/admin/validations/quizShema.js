import * as Yup from "yup";


export const QuizShema = Yup.object().shape({
    title:Yup.string().required("Lütfen Başlık Giriniz"),
    iframeUrl:Yup.string().url("Geçerli Bir Url Giriniz").required("Lütfen Bir Url Giriniz") ,
    iframeHeight:Yup.number().required("Lütfen Number Bir değer Giriniz"),
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


export const EditQuizShema = Yup.object().shape({
    title:Yup.string().required("Lütfen Başlık Giriniz"),
    iframeUrl:Yup.string().url("Geçerli Bir Url Giriniz").required("Lütfen Bir Url Giriniz") ,
    iframeHeight:Yup.number().required("Lütfen Number Bir değer Giriniz"),
    image: Yup.mixed().test("fileSize", "Dosya Çok Büyük", (value) => {
        if (value && value.length && value[0].size) {
            return value[0].size <= 1000000;
          }
          return true;
  }).test("fileType", "Geçersiz dosya türü", (value) => {
    if (value){
        const allowedExtensions = /(jpeg|jpg|png|gif|pdf)$/i;
        return allowedExtensions.test(value.name); 
    } 
    return true;
   
  }),
})