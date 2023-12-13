
import aim from "../../../assests/image/aim2.svg"
function HomeDescription() {
  return (
    <div className="w-full tablet:mt-[8rem] laptop:mt-[14rem]  deskop:mt-[20rem] font-semibold">
     <div className="relative   flex items-center  justify-center flex-col">
     <img src={aim} alt="" className=" h-[16rem] laptop:h-[26rem] deskop:h-[30rem] w-full opacity-20 top-0 mobile:-top-[40%] tablet:-top-[100%]  -z-[1] absolute" />
     
     <div className="text-[1rem] text-center w-[90%]  contrast-200 ">
       KBA Matematik olarak önceliğimiz, doğru kaynaklara erişimdir. İnternetin
       hayatımıza girmesiyle artık geniş bir bilgi havuzuna hızla erişme
       olanağımız var. Biz de teknolojik çağın getirdiği bu avantajı kullanarak
       eğitimlerimize online platformlar üzerinden devam etmeye karar verdik.
       Temel amacımız, siz öğrencilerimizle bir araya gelerek doğru bilgilere
       ve doğru öğrenme yöntemlerine ulaşmak. Bu yolla eğitim kalitemizi
       artırmayı hedefliyoruz.
     </div>
     </div>
    </div>
  );
}
export default  HomeDescription