

const Blog = require("../models/blog");
const slugField = require("../middleware/slugify");
const Education = require("../models/education");
const Nots = require("../models/nots");
const Quiz = require("../models/quiz");

async function populate() {
  const count = await Blog.count();
  if (count == 0) {
   
    const blog = await Blog.bulkCreate([
      {
        header: "BAŞTAN SAVMA ALIŞKANLIĞI",
        subtitle: "Nedir bu Component Tabanlı yaklaşım ?",
        content: "<p>Herkese merhaba arkadaşlar. Bugün, 2.5 yıllık yazılım kariyerimde keşke daha önceden dikkat etseydim dediğim bir mimariden bahsedeceğim.</p><p><br></p><p>Kodlamaya ilk başladığım dönemde, öğrendiklerimi hemen uygulamak istiyordum. Bu acelecilik, projelerimde kod dosyalarımın tek bir klasör altında karma karışık bir şekilde toplanmasına neden oldu. Hem HTML, hem CSS, hem de JS uzantıları aynı klasörde yer alıyordu.</p><p><br></p><p>Küçük bir projede belki sorun çıkarmayan bu davranış, proje büyüdükçe içinden çıkamayacağınız bir sorun yığınına dönüşmeye başlıyor.</p><p><br></p><p>İşte bu noktada, bir bütünü parçalara halinde düşünmek ve her uzantıyı kendine özgü isimler ve klasörler içinde tutmak hem zamandan tasarruf sağlarken diğer yandan da daha organize olmanıza olanak tanıyor.</p><p><br></p><h3><strong>Nedir bu Component Tabanlı yaklaşım ?</strong></h3><p><br></p><p><span style=\"color: rgb(52, 53, 65);\">Component tabanlı yaklaşım, yazılım mühendisliği ve frontend geliştirme alanlarında yaygın olarak kullanılan bir mimari yaklaşımdır. Bu yaklaşım, bir yazılımı bağımsız, yeniden kullanılabilir ve birbiriyle etkileşim halinde olan bileşenlere ayırarak geliştirme sürecini daha organize ve modüler hale getirir.</span></p><p><br></p><p><span style=\"color: rgb(52, 53, 65);\">Düşünün ki bir araba yapmak istiyorsunuz ve component tabanlı yaklaşımı kullanacaksınız. Bu durumda, arabayı farklı parçalara, yani bileşenlere ayırıyorsunuz. Her bir bileşen, arabada yer alan farklı özelliklere ve işlevlere sahip olan bağımsız bir yapıya sahip oluyor.</span></p><p><br></p><p><span style=\"color: rgb(52, 53, 65);\">Her bir bileşen, kendi işlevini bağımsız olarak yerine getirebilir ve aynı zamanda diğer bileşenlerle bir araya gelerek tam bir araba oluşturur. </span></p><p><br></p><p><span style=\"color: rgb(52, 53, 65);\">Bu yaklaşım sayesinde projelerim daha düzenli ve anlaşılır hale geldi. Kodları daha rahat yönetebiliyor ve projelerimi hızlıca geliştirebiliyorum.</span><strong style=\"color: rgb(52, 53, 65);\"> Component Tabanlı Yaklaşım</strong><span style=\"color: rgb(52, 53, 65);\">'ı erken keşfetseydim, projelerimdeki karmaşıklığı önleyebilirdim. Artık daha organize ve modüler bir şekilde çalışıyorum</span></p>",
        blogUrl: slugField("BAŞTAN SAVMA ALIŞKANLIĞI"),
      },
      {
        header: "BAŞTAN SAVMA ALIŞKANLIĞINA Son",
        subtitle: "Nedir bu Component Tabanlı yaklaşım ?",
        content: "<p>Herkese merhaba arkadaşlar. Bugün, 2.5 yıllık yazılım kariyerimde keşke daha önceden dikkat etseydim dediğim bir mimariden bahsedeceğim.</p><p><br></p><p>Kodlamaya ilk başladığım dönemde, öğrendiklerimi hemen uygulamak istiyordum. Bu acelecilik, projelerimde kod dosyalarımın tek bir klasör altında karma karışık bir şekilde toplanmasına neden oldu. Hem HTML, hem CSS, hem de JS uzantıları aynı klasörde yer alıyordu.</p><p><br></p><p>Küçük bir projede belki sorun çıkarmayan bu davranış, proje büyüdükçe içinden çıkamayacağınız bir sorun yığınına dönüşmeye başlıyor.</p><p><br></p><p>İşte bu noktada, bir bütünü parçalara halinde düşünmek ve her uzantıyı kendine özgü isimler ve klasörler içinde tutmak hem zamandan tasarruf sağlarken diğer yandan da daha organize olmanıza olanak tanıyor.</p><p><br></p><h3><strong>Nedir bu Component Tabanlı yaklaşım ?</strong></h3><p><br></p><p><span style=\"color: rgb(52, 53, 65);\">Component tabanlı yaklaşım, yazılım mühendisliği ve frontend geliştirme alanlarında yaygın olarak kullanılan bir mimari yaklaşımdır. Bu yaklaşım, bir yazılımı bağımsız, yeniden kullanılabilir ve birbiriyle etkileşim halinde olan bileşenlere ayırarak geliştirme sürecini daha organize ve modüler hale getirir.</span></p><p><br></p><p><span style=\"color: rgb(52, 53, 65);\">Düşünün ki bir araba yapmak istiyorsunuz ve component tabanlı yaklaşımı kullanacaksınız. Bu durumda, arabayı farklı parçalara, yani bileşenlere ayırıyorsunuz. Her bir bileşen, arabada yer alan farklı özelliklere ve işlevlere sahip olan bağımsız bir yapıya sahip oluyor.</span></p><p><br></p><p><span style=\"color: rgb(52, 53, 65);\">Her bir bileşen, kendi işlevini bağımsız olarak yerine getirebilir ve aynı zamanda diğer bileşenlerle bir araya gelerek tam bir araba oluşturur. </span></p><p><br></p><p><span style=\"color: rgb(52, 53, 65);\">Bu yaklaşım sayesinde projelerim daha düzenli ve anlaşılır hale geldi. Kodları daha rahat yönetebiliyor ve projelerimi hızlıca geliştirebiliyorum.</span><strong style=\"color: rgb(52, 53, 65);\"> Component Tabanlı Yaklaşım</strong><span style=\"color: rgb(52, 53, 65);\">'ı erken keşfetseydim, projelerimdeki karmaşıklığı önleyebilirdim. Artık daha organize ve modüler bir şekilde çalışıyorum</span></p>",
        blogUrl: slugField("BAŞTAN SAVMA ALIŞKANLIĞINA Son"),
      }
    ]);
    const quiz = await Quiz.bulkCreate([{
      quizHeader: "Polinomlar 101" ,
      iframeUrl:"https://docs.google.com/forms/d/e/1FAIpQLSepD32r12fOBkjx03YFtUEg54Exm4hiWtuigVO-VeycdNj5Vg/viewform?usp=sf_link" ,
      mainUrl: slugField("Polinomlar 101"),
      headerImg:"https://cdn.vectorstock.com/i/1000x1000/74/95/quiz-time-banner-template-ribbon-label-sign-vector-33567495.webp",
      height: "1330"
    },
    {
      quizHeader: "Polinomlar 201",
      iframeUrl:"https://docs.google.com/forms/d/e/1FAIpQLSepD32r12fOBkjx03YFtUEg54Exm4hiWtuigVO-VeycdNj5Vg/viewform?usp=sf_link",
      mainUrl: slugField("Polinomlar 201"),
      headerImg: "https://cdn.vectorstock.com/i/1000x1000/74/95/quiz-time-banner-template-ribbon-label-sign-vector-33567495.webp",
      height: "1330"
    },
    {
      quizHeader: "Polinomlar 301",
      iframeUrl:"https://docs.google.com/forms/d/e/1FAIpQLSepD32r12fOBkjx03YFtUEg54Exm4hiWtuigVO-VeycdNj5Vg/viewform?usp=sf_link",
      mainUrl: slugField("Polinomlar 301"),
      headerImg: "https://cdn.vectorstock.com/i/1000x1000/74/95/quiz-time-banner-template-ribbon-label-sign-vector-33567495.webp",
      height: "1330"
    },
    {
      quizHeader: "Polinomlar 401",
      iframeUrl:"https://docs.google.com/forms/d/e/1FAIpQLSepD32r12fOBkjx03YFtUEg54Exm4hiWtuigVO-VeycdNj5Vg/viewform?usp=sf_link",
      mainUrl: slugField("Polinomlar 401"),
      headerImg: "https://cdn.vectorstock.com/i/1000x1000/74/95/quiz-time-banner-template-ribbon-label-sign-vector-33567495.webp",
      height: "1330"
    },
    {
      quizHeader: "Polinomlar 501",
      iframeUrl:"https://docs.google.com/forms/d/e/1FAIpQLSepD32r12fOBkjx03YFtUEg54Exm4hiWtuigVO-VeycdNj5Vg/viewform?usp=sf_link",
      mainUrl: slugField("Polinomlar 501"),
      headerImg: "https://cdn.vectorstock.com/i/1000x1000/74/95/quiz-time-banner-template-ribbon-label-sign-vector-33567495.webp",
      height: "1330"
    },
  
  ])
  const education = await Education.bulkCreate([
    {
      title: "mülakat hazırlık",
      price: "Sadece 200 TL",
      imgUrl: "https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg",
      paramsUrl: slugField("mülakat hazırlık"),
      content:
        '<p><span style="color: rgb(52, 53, 65);">Herkese merhaba arkadaşlar. Bugün sizlere deprem sonrasında hayata tutunma hikayemi anlatmak istiyorum.</span></p><p><br></p><p><span style="color: rgb(52, 53, 65);">Kendimden kısaca bahsetmek gerekirse, ben Barış Tunçdemir. 23 yaşındayım. 6 Şubat\'taki depremlerde ailemle birlikte Malatya\'da yakalandık.</span></p><p><br></p><p>İlk iki gün her şey çok taze ve bulanıktı. Bunların kötü bir rüya olduğunu ve sonunda uyanacağımı düşündüm. Sonraki üç gün hep şunu dedim kendime:<strong> "Şu an sıfır noktasındayız ancak her şey geçecek."</strong></p><p><br></p><p>Depremlerden sonra evimiz yıkıldığı için İstanbul\'a ablamın yanına yerleştik. İstanbul\'a geldikten sonra bir taraftan eğitimlerime devam ettim, bir taraftan da içi boş bir CV ile önüme gelen birçok Frontend ilanına başvuru yapmaya başladım.</p><p><br></p><p>Başvurular sonucunda olumlu bir geri dönüş alamayınca, kendime <strong>"Sen olsan kendini işe alır mısın?"</strong> diye bir soru yönelttim. Bu sorunun cevabından sonra başvurulara ara verdim.</p><p><br></p><p>Cevabı değiştirebilmek için kendimi eğitimlerime ve proje geliştirmeye odakladım. Yoğun geçen 6 aylık süreç içerisinde React, Nodejs ve SQL teknolojilerini öğrenerek projeler geliştirdim.</p><p><br></p><p>İbreyi sıfır noktasından ileriye çevirdim. Geleceğime olan inancım ve çalışma azmim sayesinde başardım. Bugün sizlere bu yazıyı, her şeyini kendi yaptığım portfolyo websitemin blog kısmından paylaşıyorum.</p>',
    },
    {
      title: "1.sınf hazırlık",
      price: "Sadece 100 TL",
      imgUrl: "https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg",
      paramsUrl: slugField("1.sınf hazırlık"),
      content:
        '<p><span style="color: rgb(52, 53, 65);">Herkese merhaba arkadaşlar. Bugün sizlere deprem sonrasında hayata tutunma hikayemi anlatmak istiyorum.</span></p><p><br></p><p><span style="color: rgb(52, 53, 65);">Kendimden kısaca bahsetmek gerekirse, ben Barış Tunçdemir. 23 yaşındayım. 6 Şubat\'taki depremlerde ailemle birlikte Malatya\'da yakalandık.</span></p><p><br></p><p>İlk iki gün her şey çok taze ve bulanıktı. Bunların kötü bir rüya olduğunu ve sonunda uyanacağımı düşündüm. Sonraki üç gün hep şunu dedim kendime:<strong> "Şu an sıfır noktasındayız ancak her şey geçecek."</strong></p><p><br></p><p>Depremlerden sonra evimiz yıkıldığı için İstanbul\'a ablamın yanına yerleştik. İstanbul\'a geldikten sonra bir taraftan eğitimlerime devam ettim, bir taraftan da içi boş bir CV ile önüme gelen birçok Frontend ilanına başvuru yapmaya başladım.</p><p><br></p><p>Başvurular sonucunda olumlu bir geri dönüş alamayınca, kendime <strong>"Sen olsan kendini işe alır mısın?"</strong> diye bir soru yönelttim. Bu sorunun cevabından sonra başvurulara ara verdim.</p><p><br></p><p>Cevabı değiştirebilmek için kendimi eğitimlerime ve proje geliştirmeye odakladım. Yoğun geçen 6 aylık süreç içerisinde React, Nodejs ve SQL teknolojilerini öğrenerek projeler geliştirdim.</p><p><br></p><p>İbreyi sıfır noktasından ileriye çevirdim. Geleceğime olan inancım ve çalışma azmim sayesinde başardım. Bugün sizlere bu yazıyı, her şeyini kendi yaptığım portfolyo websitemin blog kısmından paylaşıyorum.</p>',
    },
  ])
  // const nots = await Nots.bulkCreate([
  //   {
  //     title:"Polinomlar" ,
  //     imgUrl: "https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg" ,
  //     category : "1.sınıf" ,
  //     children:[
  //       {
  //         desc: "TYT Matematik 4",
  //         konu: "polinom-101",
  //       },
  //       {
  //         desc: "TYT Matematik 4",
  //         konu: "polinom-201",
  
  //       },
  //     ]
  //   }
  // ])
   
    
   
  }
}

module.exports = populate;
