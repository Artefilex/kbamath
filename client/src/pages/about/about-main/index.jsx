import { memo } from "react"

const AboutMain = memo(function AboutMain() {
  const date = new Date().getFullYear();
  const workTime = `${date - 2018} `;
  const bachleros = `${date - 2021} `;
  return (
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
  );
})

export default  AboutMain