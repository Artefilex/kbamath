# kbamatematik

1. Uygulama bir matematik hocası için notlarını pdf resim video formatında yayınlayabilmeli
2. Matematik hocamızın ekstra blog alanına ihtiyacı var.
3. Fiyatlar belirleyebilecegi bir alana ihtiyacı var.
4. İlerleyen aşamalar için youtube videlolarını da ekleyebilecegi bir alana ihtiyacı var

## proje acıklaması

1. Backend

- Proje ihityaçları için expres mysql ile basit düzeyde bir server hazırlayacağız
- Bir adet blog alanı olacak bu blog editleme delete etme ve yeni blog işlemleri gerçekleştirebilecek.
- Öğretmen mevcutta yeni paketler ekleyebileck örnek TYT - 101 fiyat 300 lira saatlik. gibi aynı şekilde bu paketlerde http isteklerini gerceklestirebilecek.
- öğrtmenin pdfler ve fototgraflar gösterebilecegi bir notlar alanı olacak ve ilgili görsel pdf tıklanınca kullanıcı o notları indirebilecek

-kullanıcı için get requestlerini blog not ders için atacagız 
-    "/notlar"  "/bloglar" "/kitap önerisi"

## Frontend

1. öğretmen için temel seviyede ders fiyatlarını belirleyecegi bir component olacak bu component veriyi backenden cekecek bir görsel bir başlık bir fiyat bilgisi bu bir link olacak linke tıklanınca ilgili paket içeirgi ile alakalı fiyat bilgisin detayları görülecek . yani tememl component Link şeklinde olacak ve bizi dinamik olarak iligli pakete yönlendirecek

bir adet .env oluşturacagız  bir adet backend url olacak 

delete buttona id ve url gönderecegiz onsucces ne işe yaradıgını ögrenecegiz 
hem get hem post istegi yapıcaz bakalım hele 
utils oluşturabiliriz tüm fetcch işlemlerini ordan yapabiliriz 