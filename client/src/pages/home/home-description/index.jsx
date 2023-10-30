import headerstudent from "../../../assests/image/homeheaderstudent.jpg"
export default function HomeDescription () {
    return (
      <div className="w-full ">
        <header className="w-full relative flex items-center justify-between mb-20 ">
            <div className="w-full">
              KBA MATH
            </div>
           
            <div className="w-full">
            {/* <div className="bg-[color:var(--bg-secondary)] w-[2px] h-[35rem  -rotate-55"/> */}
            <img src={headerstudent} alt=""  className="w-[30rem]  object-cover object-top header-clip "/>     
            </div>
         
        </header>
     <div>
     KBA Matematik olarak önceliğimiz doğru kaynak . 
      İnternetin hayatımıza girmesiyle Çok geniş bir kütüphanenın kapısında istediğim her şeye kısa bir sürede erişebiliyoruz . 
      Bizlerde teknolojik çağda yerimizi alarak eğitimlerimize online platformlar üzerinde devam etme kararı aldık 
      temel amacımız siz öğrencilerimizle bir araya gelerek doğru bilgiye doğru yöntemlerle erişebilmek istiyoruz. 
     </div>
      </div>
    )
    }