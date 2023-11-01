import { memo } from "react"
import aim from "../../../assests/image/aim2.svg"
const HomeDescription = memo(function HomeDescription() {
  return (
    <div className="w-full  relative flex items-center  justify-center flex-col mt-[5rem] font-semibold">
       <div className="h-[20rem] top-0 -z-[1] absolute w-[80%]">
       <img src={aim} alt="" className=" h-[30rem] w-full opacity-10" />
       </div>
      
      <div>Sizleri önemsiyoruz çünkü hedefimiz ....</div>
      <div className="text-[1.2rem] text-center w-[90%] mt-[10rem]">
        KBA Matematik olarak önceliğimiz, doğru kaynaklara erişimdir. İnternetin
        hayatımıza girmesiyle artık geniş bir bilgi havuzuna hızla erişme
        olanağımız var. Biz de teknolojik çağın getirdiği bu avantajı kullanarak
        eğitimlerimize online platformlar üzerinden devam etmeye karar verdik.
        Temel amacımız, siz öğrencilerimizle bir araya gelerek doğru bilgilere
        ve doğru öğrenme yöntemlerine ulaşmak. Bu yolla eğitim kalitemizi
        artırmayı hedefliyoruz.
      </div>
    </div>
  );
})
export default  HomeDescription