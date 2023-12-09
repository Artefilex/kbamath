# Componentlar için açıklama

[AddPaketButton](./add-paket-button/index.jsx):

[AdminListBox](./admin-list-box/index.jsx):

1. Admin için yeni eklenen her elemanı listeleyen bir box modeldir.
2. header handelDelete ve EditUrl proplarını alır

[AdminListHeader](./admin-list-header//index.jsx):

1. Admin için Listeleme de açıklayıcı olarak kullanılan bir başlıktır
2. header propunu alarak kullanıldıgı yere göre özelleşir

[CardLeftBox](./card-left-box/index.jsx):
[CardRightBox](./card-right-box/index.jsx):

1. Temel Amacı kullanıldığı yerde bir şablon oluştur
2. image, descrp ve header propslarını alır
3. aos kütüphanesiyle animasyonlu efect ekler

[Form](./form/index.js):

1. Admin, Register ve Login işlemlerine göre özelleştirdiğimiz tüm form işlemlerimizi kapsayan genel bir form componentidir .

## İçindekiler

[FormButton](./form/form-button/index.jsx):

1. Form elemanın submit işlemlerini gerceklestirmek için kullandığımız button şablonu.

[FormContent](./form/form-content/index.jsx):

1. Form Elamanlarımızı Sarmalayan label görevi gören Şablon

[FormInput](./form/form-input/index.jsx):

1. Formdaki input işlemlerimizi gerçekleştirdiğimiz yerdir
2. id, label, type, onChange, value, formikError, helperText, handleBlur proplarını alır
3. formikError, helperText, handleBlur validasyona bağlı olarak hata mesajı fırlatmamıza yarar.
4. type degerinin password olmasına baglı olarak password show statini calıstırır
5. location a baglı olarak inputlarımızıza rounded veriyoruz

[FormSelect](./form/form-select/index.jsx):

1. Formdaki select option işlemlerini gerceklestirmemize yarayan form Şablonu
2. children, id, label, type, onChange, value, formikError, helperText, handleBlur proplarını alır
3. children bize options degerlerimizi getirir kullanıldıgı yere göre degisiklik gösterir
4. formikError, helperText, handleBlur validasyona bağlı olarak hata mesajı fırlatmamıza yarar.

[ReactQuill](./form/react-quill/index.jsx):

1. Formda açıklma yazmak için kullandığımız 3. parti bir paket kullanan form şablonudur
2. onChange ve value proplarını alır

[PageHeading](./page-heading/index.jsx):

1. Blogs Qiuzs pathlerinde kullanılmak üzere oluşturulan şablondur .
2. image ve text proplarını alarak kullanıldığı yere göre özelleşir.
   [QuizHomeCard](./quiz-home-card/index.jsx):

3. Anasayfada yer alan Quizler ile ilgili yönergeli açıklama için kullanılan şablon
4. count ve text proplarını alır

[SectionMain](./section-main/index.jsx):
section-main => gel sayfalarımız üzerinde bircok yerde kullanılan stillendirme propu
