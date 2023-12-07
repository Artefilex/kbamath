import  * as Yup  from "yup"

export const RegisterShema = Yup.object().shape({
    username:Yup.string().required("Kullanıcı Adı Boş Bırakılamaz"),
    email:Yup.string().email("Email Doğru değil").required("Email Boş Bırakılamaz "),
    password:Yup.string().required("Parola Boş Bırakılamaz")
    .min(6, 'Parola En Az 6 Karakter Olmalı.')
    .matches(/[a-z]/, 'Parola En Az Bir Küçük Harf İçermeli.')
    .matches(/[A-Z]/, 'Parola En Az Bir Büyük Harf İçermeli .')
    .matches(/\d/, 'Parola En Az Bir Sayısal Değer İçermeli .'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Parola Eşleşmedi'),
})


export const LoginShema = Yup.object().shape({
  
    email:Yup.string().email("Email Doğru değil").required("Email Boş Bırakılamaz "),
    password:Yup.string().required("Parola Boş Bırakılamaz")
})
