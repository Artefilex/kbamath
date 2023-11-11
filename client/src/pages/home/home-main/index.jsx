import feadback from "../../../assests/image/teacherfead.svg";
import onlinelear from "../../../assests/image/onlinelearn.svg";
import focus from "../../../assests/image/personalfocus.svg";
import potential from "../../../assests/image/potential.svg";
import CardLeftBox from "../../../components/card-left-box";
import CardRightBox from "../../../components/card-right-box"

function HomeMain() {
  return (

    <main className="flex items-center justify-center w-full flex-col gap-4 pt-5 mt-[20rem]">
      <CardLeftBox 
       image={potential}
      header={"Programın İşleyişi:"}
      descrp={"  Öğrencilerimizin kendi potansiyelini keşfetmeleri için fırsatlar sunuyoruz. Bu, klasik online matematik kurslarından ve özel derslerden farklıdır. Birebir online matematik özel ders seansları, öğrencilerin iç motivasyonunu artırır. Potansiyelini keşfeden her öğrenci için başarı kaçınılmazdır."}
      />

    <CardRightBox 
       image={focus}
      header={"Kişi Odaklı Yaklaşım:"}
      descrp={"  Her öğrenciye eşit eğitim yerine kişi odaklı çalışmalar yaparız, böylece hak ettikleri kaliteli hizmeti alırlar."}
      />
    <CardLeftBox 
       image={onlinelear}
      header={"Tam Öğrenme Modeli:"}
      descrp={" Gerekli ortam, zaman ve imkanlar sağlandığında her öğrencimizin matematikte başarılı olabileceğine inanırız."}
      />
      <CardRightBox 
       image={feadback}
      header={"Takip ve Geri Bildirim:"}
      descrp={" Düzenli gelişim takibi sağlarız ve her ayın sonunda öğrenci izleme raporlarını değerlendirme fırsatı sunarız. Öğrencilerimizi tanımakla işe başlarız."}
      /> 
    
    </main>
    
  )
}

export default HomeMain