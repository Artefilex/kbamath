# Pages acıklama

about => kendi içinde about-header main ve index.jsx olarak ayrılıyor statik veriler iceriyor
admin => ses etme buralık işimiz yok şuan kafan burda yanacak
blogs => blog-details, blog-header index.jsx den oluşuyor index.jsde backende istek atıp blog datalarını cekiyor ve bunları bloglar pathinde blog-header ile birlikte link olarak gösteriyoruz linklere tıklanınca blog-detailse gibip ilgili bloga react-router-dom ile giriyoruz istegi direk detayın içinde atmısız bunu apiye utilse cekelim

dersler => leftbar-lesson ,lesson-details , lesson-main ve indx.jsx den oluşuyor. leftbar-lessonda mock data kullanmısız ona gore veriler gösterip aslında blogda yaptıgımız islemin aynısını yaptık . sadece leftbar olarak yaptık. lesson-details backenden gelen verilere göre sadece bir obje alacak ve içindeki verileri dönecek pathe göre özelllesek burdaki fetch islemini de apide utilsde yapalım lesson-mainde statik bilgi var index.jsx ise Main görevinde

Home => home/home-blogs home/home-description home/home-header home/home-lessons home/home-main home/home-nots
home-blogsda , home-lessons => slide ile döndük gelen verileri DataProvide ile istekte bulunduk
home-description , home-header , home-main => statick component


nots => nots/high-school , nots/left-navbar  high-scholl kendi altında dallanıp budaklanmıs ugrasıcaz burada lefth-bar bir drop-down modunda calısıyor 

quizs => quizs-detail ve ve genel quizsden oluşyuro quizde verileri google form icin tasarladık işemler aynı mock data kullanıyoruz suanlık 

