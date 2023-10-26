import lesson from "../../../assests/lesson.svg"
import grup from "../../../assests/grup.svg"
import question from "../../../assests/question.svg"

export default function LessonMain() {
  return (
    <div className="py-5">

      <main className="flex items-center justify-center w-full flex-col gap-4 pt-5">
      <section className="flex w-full flex-col-reverse xtablet:items-center xtablet:flex-row gap-4" >
     
        <div className="flex w-full  flex-col"> 
        <h1 className="text-[1.775rem] font-bold "> Neden Özel Ders Almalısınız?</h1>
          <p className="">
            Matematik özel dersleri, size sadece matematikte değil, hayatınızın
            birçok alanında yardımcı olacak özel bir öğrenme deneyimi sunar.
            Özel dersler, öğrenme sürecini eğlenceli ve etkili hale getirir. Siz
            ve özel öğretmeniniz, matematikteki güçlü ve zayıf yönlerinizi
            keşfedecek ve birlikte başarıya ulaşmanın yolunu çizeceksiniz.
          </p>
        </div>
        <img src={lesson} className="h-[20rem]  mobile:h-[22rem] " /> 
        </section>

        <section  className="flex w-full flex-col xtablet:items-center xtablet:flex-row gap-4">
        <img src={question} className="h-[20rem]  mobile:h-[22rem] " /> 
        <div  className="flex w-full  flex-col">
        <h1 className="text-[1.775rem] font-bold "> Özel Ders Programında Sizi Neler Bekliyor?</h1>
          <p className="">
            Matematik özel ders programlarımız size tamamen kişiselleştirilmiş
            bir öğrenme deneyimi sunar. Uzman öğretmenlerimiz, ihtiyaçlarınıza
            uygun özel ders planları hazırlar ve ders saatlerini sizin için en
            uygun zamanlara ayarlar. Bu, öğrenmeyi kolaylaştırır ve daha etkili
            hale getirir.
          </p>
        </div>
        </section>

        <section className="flex w-full flex-col-reverse xtablet:items-center xtablet:flex-row gap-4">
       
         <div className="flex w-full  flex-col">
         <h1 className="text-[1.775rem] font-bold "> Grup Özel Dersi Nedir? Avantajları Nelerdir ? </h1>
          <p >
            Grup özel ders, matematik öğrenmeyi eğlenceli ve sosyal bir deneyim
            haline getirir. Siz ve arkadaşlarınız aynı konuda çalışarak
            birbirinize destek olabilirsiniz. Aynı zamanda, daha ekonomik bir
            seçenek sunar, çünkü maliyetleri paylaşabilirsiniz.
          </p>
         </div>
         <img src={grup} className="h-[20rem]  mobile:h-[22rem] " /> 
        </section>
      </main>
    </div>
  );
}
