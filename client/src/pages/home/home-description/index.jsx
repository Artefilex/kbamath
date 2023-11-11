
import aim from "../../../assests/image/aim2.svg"
function HomeDescription() {
  return (
    <div className="w-full  relative flex items-center  justify-center flex-col nobile:mt-[15rem] laptop:mt-[20rem]  deskop:[24rem] font-semibold">
     <img src={aim} alt="" className=" h-[36rem] w-full opacity-20 top-0 mobile:-top-[40%] tablet:-top-[100%]  -z-[1] absolute" />
     
      <div className="text-[1.4rem] text-center w-[90%]  contrast-200 ">
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
}
export default  HomeDescription