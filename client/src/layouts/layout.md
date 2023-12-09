# Layout Description

[Navbar](./navbar/):

1. Kullanıcının gezinmeyi kolaylaştıran, menü öğeleri ve bağlantıları içeren, react-router-dom ile oluşturulmuş arayüz elemanınıdır.
2. ismobile bağlı olarak responsive bir tasarım ile kullanım kolaylığı saglar .

[MainLayout](./index.jsx):

1. Web sitesinin Kullanıcılar için oluşturulmuş ana iskeletidir
2. locationa baglı olarak pathler , login ve register ise footer gizlenir
3. themaların 3. parti animasyon kütüphanelerin kullanıldığı yerdir

[AdminLayout](./AdminLayout.jsx):

1. Admin için oluşturuluan MainLayoutun kullanım amacıyla aynı olan iskelet yapımızdır

[AdminSideBar](./admin-sidebar/index.jsx):

1. Adminin gezinmeyi kolaylaştıran, menü öğeleri ve bağlantıları içeren, react-router-dom ile oluşturulmuş arayüz elemanınıdır.

2. MainLayout aksine admin için Sidebar Yapısı kullanılmaktadır.

[Footer](./footer/):

1. Footer, Sayfamızın hızlı ulaşım pathlerini , İletişim Bilgilerini ve Son iki bloğumuzu gösterdiğimiz alandır
