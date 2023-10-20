import {  useParams } from "react-router-dom";
import SectionMain from "../../../components/section-main";
import { useEffect, useState } from "react";
import { pakets } from "../../../mock";

export default function LessonsDetails() {

  const { lessonid } = useParams();


  const [detail, setDetail] = useState({
    title: "mülakat hazırlık",
    price: "Sadece 2000 TL",
    img: "https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg",
    url: "",
    content:
      '<p><span style="color: rgb(52, 53, 65);">Herkese merhaba arkadaşlar. Bugün sizlere deprem sonrasında hayata tutunma hikayemi anlatmak istiyorum.</span></p><p><br></p><p><span style="color: rgb(52, 53, 65);">Kendimden kısaca bahsetmek gerekirse, ben Barış Tunçdemir. 23 yaşındayım. 6 Şubat\'taki depremlerde ailemle birlikte Malatya\'da yakalandık.</span></p><p><br></p><p>İlk iki gün her şey çok taze ve bulanıktı. Bunların kötü bir rüya olduğunu ve sonunda uyanacağımı düşündüm. Sonraki üç gün hep şunu dedim kendime:<strong> "Şu an sıfır noktasındayız ancak her şey geçecek."</strong></p><p><br></p><p>Depremlerden sonra evimiz yıkıldığı için İstanbul\'a ablamın yanına yerleştik. İstanbul\'a geldikten sonra bir taraftan eğitimlerime devam ettim, bir taraftan da içi boş bir CV ile önüme gelen birçok Frontend ilanına başvuru yapmaya başladım.</p><p><br></p><p>Başvurular sonucunda olumlu bir geri dönüş alamayınca, kendime <strong>"Sen olsan kendini işe alır mısın?"</strong> diye bir soru yönelttim. Bu sorunun cevabından sonra başvurulara ara verdim.</p><p><br></p><p>Cevabı değiştirebilmek için kendimi eğitimlerime ve proje geliştirmeye odakladım. Yoğun geçen 6 aylık süreç içerisinde React, Nodejs ve SQL teknolojilerini öğrenerek projeler geliştirdim.</p><p><br></p><p>İbreyi sıfır noktasından ileriye çevirdim. Geleceğime olan inancım ve çalışma azmim sayesinde başardım. Bugün sizlere bu yazıyı, her şeyini kendi yaptığım portfolyo websitemin blog kısmından paylaşıyorum.</p>',
  });
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/dersler/${lessonid}`, {
      method: "GET",
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, [lessonid]);

 
  return (
    <SectionMain>
 
   {
      pakets.filter((paket)=> paket.url === lessonid).map((detail) => (
        <div key={detail.url} className="flex items-center  flex-col w-[90%] py-2 px-2">
        <header className="flex flex-col justify-between gap-5 w-full mobile:flex-row pb-10">
        <img src={detail.img} alt=""  className="max-w-[25rem]" />
          <div className="flex items-start flex-col w-full gap-16" >
           <h1 className="uppercase text-[2rem] font-bold "> {detail.title}</h1>
          <div className="uppercase text-[2rem] font-semibold  "> {detail.price} </div>
          </div>
        </header>
          <div className="text-justify flex  gap-1 flex-col w-full text-[color:var(--c-base)]" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
        </div>

      ))

   }
    </SectionMain>
  );
}
