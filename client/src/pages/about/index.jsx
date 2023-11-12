
import SectionMain from "../../components/section-main";

export default function About() {
  const date = new Date().getFullYear();
  const workTime = `${date - 2018} `;
  const bachleros = `${date - 2021} `;

  return (
    <SectionMain>
        <header className=" py-2 w-full flex-col min-h-[15rem] flex items-center gap-4 px-2 mobile:flex-row mobile:items-start transition-all duration-300">
      <div className="flex items-center justify-cente w-full min-h-[10rem] ">
         <img src="../../../assests/image/kba2.png" alt="" />
      </div>
      <div className="flex items-center justify-center w-full  ">
        <div className="flex flex-col ">
          <h1 className="font-bold text-[2rem] ">Kaan Bekir Akbulut </h1>
          <h2 className="font-semibold text-[1.5rem]">Lise Matematik </h2>
        </div>
      </div>
    </header>
    <section className="flex flex-col  gap-2 px-2">
      <div className="flex flex-col  gap-4">
        <h2 className="font-bold uppercase  text-[1.5rem] my-5"> Ben Kimim</h2>
        <p>
          Merhaba, ben Kaan Bekir Akbulut. Lise matematik öğretmeni olarak{" "}
          {workTime}
          yıldır eğitim sektöründe aktif olarak çalışıyorum. Matematiğe olan
          tutkum ve öğrencilerime bu alandaki bilgimi aktarmadaki kararlılığım,
          bu mesleği seçmemdeki temel etkenlerden biridir.
        </p>
      </div>

      <div className="flex flex-col  gap-4">
        <h1 className="font-bold uppercase  text-[1.5rem] my-5">
          Hedeflerimiz Manifesto
        </h1>
        <div className="flex flex-col  gap-4">
          <p>
            19 Mayıs Üniversitesi'nden mezun olmamın üzerinden {bachleros} yıl
            geçti, ancak matematik alanındaki bilgilerimi sürekli güncel tutmaya
            ve öğrencilerimi en iyi şekilde desteklemeye odaklanıyorum.
            Öğrencilerimin matematik konularını anlamalarına ve özgüvenlerini
            artırmalarına yardımcı olmak benim için büyük bir mutluluk
            kaynağıdır.
          </p>
          <p>
            Sınıf içinde, öğrencilerimin bireysel öğrenme gereksinimlerini
            anlamak ve onlara uygun öğretim yöntemlerini uygulamak için çaba
            sarf ediyorum. Matematiğin sadece bir ders değil, aynı zamanda
            günlük yaşamda karşılaşılan sorunları çözme becerilerini
            geliştirmenin bir aracı olduğuna inanıyorum. Öğrencilerimi
            matematiğin eğlenceli ve ilgi çekici bir konu olduğuna ikna etmek
            benim için önemlidir.
          </p>
          <p>
            Ayrıca, matematik eğitimi alanında yeni gelişmeleri takip etmeye ve
            sürekli olarak kendimi geliştirmeye odaklanıyorum. Bu, öğrencilerime
            en güncel bilgileri ve öğrenme kaynaklarını sunabilmemi sağlar.
          </p>

          <p>
            Eğer matematikle ilgili sorularınız varsa veya matematik öğrenme
            yolculuğunuzda yardım arıyorsanız, lütfen benimle iletişime
            geçmekten çekinmeyin. Sizlere matematiği sevdirmek ve başarılarınıza
            katkıda bulunmak için buradayım.
          </p>

          <p>
            Teşekkür ederim ve benimle iletişimde kalmanızı dört gözle
            bekliyorum!
          </p>
        </div>
      </div>
    </section>
    
    </SectionMain>
  );
}
