import lesson from "../../assests/image/nots1.svg";
import thinking from "../../assests/image/nots3.svg";
import applied from "../../assests/image/nots2.svg";
import CardLeftBox from "../../components/card-left-box";
import CardRightBox from "../../components/card-right-box";
function NotsCard() {
  return (
    <main className="flex items-center justify-center w-full flex-col gap-4 pt-5">
      <header className="w-[95%] ">
        Merhaba Değerli Öğrenciler, <br /><br /> Bu platformda sizlere sunulan matematik
        notları, sadece dersleri geçmekle kalmayıp, matematikle kurduğunuz
        ilişkiyi derinleştirmenize de yardımcı olacaktır. Bu notlar, matematiği
        sadece bir dersten ibaret görmemenizi amaçlar; aksine, matematikle
        düşünme becerilerinizi geliştirmenizi, analitik düşünceyi
        kuvvetlendirmenizi ve sık sık karşılaştığınız problemlere yaratıcı
        çözümler üretebilmenizi hedefler.
      </header>
      <div className="w-full text-center text-[2rem]">Neden Bu Notları Kullanmalısınız?</div>
      <CardLeftBox
        image={lesson}
        descrp={
          " Bu notlar, matematik dersleriyle ilgili temel konuları içerir. Ancak sadece derslerde sınırlı kalmaz, aynı zamanda matematikle ilgili temel becerilerinizi de güçlendirir."
        }
        header={"Temel Bilgi ve Beceriler"}
      />
      <CardRightBox
        image={applied}
        descrp={
          "Sadece teorik bilgi değil, aynı zamanda problemleri çözmek ve matematikle ilgili kavramları uygulamak için pratik örnekler içerir."
        }
        header={"Uygulamalı Öğrenme"}
      />
      <CardLeftBox
        image={thinking}
        descrp={`Bu notlar, sadece bilgiyi öğrenmekle kalmaz, aynı zamanda bu bilgiyi kullanma ve daha karmaşık sorunları çözme yeteneklerinizi geliştirmenize katkıda bulunur.`}
        header={"İleri Düzey Düşünme:"}
      />
    </main>
  );
}

export default NotsCard;
