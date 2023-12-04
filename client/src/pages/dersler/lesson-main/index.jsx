import lesson from "../../../assests/image/lesson.svg"
import grup from "../../../assests/image/grup.svg"
import question from "../../../assests/image/question.svg"
import CardLeftBox from "../../../components/card-left-box";
import CardRightBox from "../../../components/card-right-box";

export default function LessonCard() {
  return (

      <main className="flex items-center justify-center w-full flex-col gap-4 pt-5">
      <CardLeftBox 
           image={lesson}
           descrp={" Matematik özel dersleri, size sadece matematikte değil, hayatınızın birçok alanında yardımcı olacak özel bir öğrenme deneyimi sunar. Özel dersler, öğrenme sürecini eğlenceli ve etkili hale getirir. Siz ve özel öğretmeniniz, matematikteki güçlü ve zayıf yönlerinizi keşfedecek ve birlikte başarıya ulaşmanın yolunu çizeceksiniz."}
           header={"Neden Özel Ders Almalısınız?"}
         />
         <CardRightBox 
          image={question}
          descrp={"   Matematik özel ders programlarımız size tamamen kişiselleştirilmiş bir öğrenme deneyimi sunar. Uzman öğretmenlerimiz, ihtiyaçlarınıza uygun özel ders planları hazırlar ve ders saatlerini sizin için en uygun zamanlara ayarlar. Bu, öğrenmeyi kolaylaştırır ve daha etkili hale getirir."}
          header={"Özel Ders Programında Sizi Neler Bekliyor?"}
         />
         <CardLeftBox 
          image={grup}
          descrp={` Grup özel ders, matematik öğrenmeyi eğlenceli ve sosyal bir deneyim
          haline getirir. Siz ve arkadaşlarınız aynı konuda çalışarak
          birbirinize destek olabilirsiniz. Aynı zamanda, daha ekonomik bir
          seçenek sunar, çünkü maliyetleri paylaşabilirsiniz.`}
          header={"Grup Özel Dersi Nedir? Avantajları Nelerdir ?"}
         />


      </main>
   
  );
}
