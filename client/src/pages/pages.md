# Pages Description

[About](./about/index.jsx):

1. Admin ile ilgili açıklamaları içeren bileşendir

[Blogs](./blogs)

1. Kullanıcılar için Blog içeriklerinin gösterildiği bileşendir
2. Array map methodu kullanılarak blog detayına react-router-dom ile yönlendirme yapılır

## Blog alt bileşenleri

[BlogsDetail](./blogs/blog-details/index.jsx)
[BlogsRightbar](./blogs/blog-rightbar/index.jsx)

[Lessons](./dersler/)

1. Kullanıcılar için Lessons içeriklerinin gösterildiği bileşendir
2. Array map methodu kullanılarak Lessons detaya react-router-dom ile yönlendirme yapılır

## Lessons alt bileşenleri

[LessonMain](./dersler/lesson-main/index.jsx)
[LessonDetail](./dersler/lesson-details/index.jsx)
[LetfbarLesson](./dersler/leftbar-lesson/index.jsx)

[Home](./home/)

1. Kullanıcıların Web sitesine ilk girdiği zaman gösterilen bileşendir
2. Tüm pathler kısa açıklamalar ve statick verilerin gösterildiği bileşendir

## Home alt bileşenleri

[HomeDescription](./home/home-description/index.jsx)
[HomeHeader](./home/home-header/index.jsx)
[HomeMain](./home/home-main/index.jsx)
[HomeQuizs](./home/home-quizs/index.jsx)

[Nots](./nots/)

1. Kullanıcılara not içeriklerine ulaşmaları için oluşturulmuş bileşendir
2. İlk etaptda backenden gelen Kategori bilgisini kullanarak Yine Backenden gelen Sınıf bilgisine göre filtreleme yapılıyor eğer kategori ile eşleşen bir sınıf bilgisi varsa some methodu ile ilgili sınıf altında gösteriliyor.
3. ikinci etapta ise topic-detail klasörüne girerek nested pathe baglı olarak classid ve topicid göre filtreleme yapılır eşleşen veriler kullanıcının indirmesi için handleDowloand fonksiyonu ile indirme işlemi gerceklesiyor.

4. pdf ve diger dosya tiplerine göre filtreleme yapılıyor

```javascript
const handleDownload = async (url) => {
  await axios
    .get(`${import.meta.env.VITE_BASE_URL}/${url}`, { responseType: "blob" })
    .then((response) => {
      const href = window.URL.createObjectURL(response.data);
      const anchorElement = document.createElement("a");
      anchorElement.href = href;
      anchorElement.download = url.split("\\").pop();
      document.body.appendChild(anchorElement);
      anchorElement.click();
      document.body.removeChild(anchorElement);
      window.URL.revokeObjectURL(href);
    })
    .catch((error) => {
      toast.error(error);
    });
};
```

## Nots alt başlıkları

[ClassDtail](./nots/class-detail/index.jsx)
[TopicDetail](./nots/topic-detail/index.jsx)
[NotsComponent](./nots/nots-component/index.jsx)
[LeftBar](./nots/left-navbar/index.jsx)
[NotsCard](./nots/NotsCard.jsx)

[Quizs](./quizs/)

1. Kullanıcıların admin tarafından oluşturulan google form sınavlarını çözmelerine yarayan bileşendir
2. react-router-dom ile quiz-detaile bileşenine geçilir
   [QuizsDetail](./quizs/quiz-details/index.jsx)

[Admin](./admin/)

1. Admin için crud işlemlerinin gerçekleştirildiği buna bağlı olarak blog , category , class , education , nots ,quizs ve users için bu crud işlemlerini yaptığımız yerdir.
2. her alt klasör kendi içinde edit list add klasörlerine sahiptir ve crud işlemleri burda gerceklestirilir ,
3. useformik ve yup kullanarak form ve validasyon işlemlerimizi gerceklestiriyoruz.
4. servises klasörünün altında yer alan `admin.jsx` ile backende baglantı saglıyoruz.
5. admin users altında yer alan login ve register klasörleri ile kullanıcı girişi ve kaydını alıyoruz

## Admin alt başlıkları

[AdminBlogs](./admin/admin-blogs/)
[AdminCategory](./admin/admin-category/)
[AdminClass](./admin/admin-class/)
[AdminEducation](./admin/admin-education/)
[AdminNots](./admin/admin-nots/)
[AdminQuizs](./admin/admin-quiz/)
[AdminUsers](./admin/admin-users/)
[Validations](./admin/validations/)
