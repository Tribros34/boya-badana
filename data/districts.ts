import type { District } from "@/lib/types";

type DistrictProfileKey =
  | "coastal-family"
  | "dense-urban"
  | "office-mixed"
  | "premium-residential"
  | "villa-lowrise"
  | "historic-core"
  | "modern-residential";

type DistrictSeed = {
  name: string;
  neighborhoods: string[];
  profile: DistrictProfileKey;
};

type DistrictProfile = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  customerProfile: string[];
  commonNeeds: string[];
  localHighlights: string[];
  serviceBridge: string[];
  services: string[];
  relatedBlogs: string[];
  relatedServices: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const districtProfiles: Record<DistrictProfileKey, DistrictProfile> = {
  "coastal-family": {
    metaTitle:
      "{district} Boya Badana | Aile Evleri ve Nemli Yüzeyler İçin Temiz Hizmet",
    metaDescription:
      "{district} bölgesinde aile evleri, taşınma öncesi daireler ve nem gören yüzeyler için temiz, planlı boya badana hizmeti sunuyoruz.",
    h1: "{district} Boya Badana Hizmeti ile Temiz ve Düzenli Yenileme",
    intro: [
      "{district} tarafında boya badana talepleri çoğu zaman aile yaşamını çok dağıtmadan evi yenileme ihtiyacından doğuyor. {areas} gibi bölgelerde kullanıcılar hem duvar sonucuna hem de koruma düzenine dikkat ediyor.",
      "Denize yakınlık, kuzey cephe serinliği ya da uzun süre kapalı kalan odalar nedeniyle bu ilçelerde bazen boya kararı yüzey sağlığıyla birlikte düşünülmeli. Bu yüzden işi yalnızca renk yenileme olarak değil, hazırlık ve teslim planı olarak ele alıyoruz.",
    ],
    customerProfile: [
      "{district} içinde en sık karşılaştığımız kullanıcı profili; taşınma öncesi dairesini toparlamak isteyen aileler, oturulan evde eşyalı uygulama isteyen kullanıcılar ve duvarda leke ya da nem izi gören ev sahipleri oluyor.",
      "Bu bölgede kullanıcılar genelde güvenilir ekip, temiz çalışma ve baştan konuşulmuş süre bekliyor. Özellikle çocuk odası, salon ve antre gibi yoğun kullanılan alanlarda boya tipi seçimi ayrıca önem kazanıyor.",
    ],
    commonNeeds: [
      "{district} boya badana işlerinde en sık gördüğümüz başlıklar eşyalı ev koruması, tavan yenilemesi, duvar lekeleri, lokal alçı tamiri ve gerektiğinde rutubet kaynaklı yüzey hazırlığı oluyor.",
      "Kullanıcıların önemli bir kısmı yalnızca yeni renk değil, daha ferah ve daha bakımlı bir görünüm istiyor. Bu nedenle silinebilir boya, düşük kokulu ürün ve düzenli maskeleme planı çoğu işte öne çıkıyor.",
    ],
    localHighlights: [
      "{areas} hattında yapı tipi ve hava koşulları boya sonucunu doğrudan etkileyebiliyor. Özellikle nemli duvar, serin oda ya da uzun süre kapalı kalmış alanlarda önce yüzeyi doğru okumak gerekiyor.",
      "{district} için yaklaşımımız hızlı ama kestirme olmayan bir plan kurmak. Evin günlük kullanımını, boyanacak alanın durumunu ve varsa koruma hassasiyetini birlikte değerlendiriyoruz.",
    ],
    serviceBridge: [
      "{district} için en çok talep edilen hizmetler ev boyama, eşyalı ev boyama, rutubet ve küf çözümü ile lokal alçı sıva zımpara işleri oluyor.",
      "İhtiyaç tek bir işlemle sınırlı değilse işleri ayrı ekipler yerine tek plan içinde birleştiriyoruz. Böylece hem zaman kaybı azalıyor hem de teslim kalitesi daha dengeli hale geliyor.",
    ],
    services: [
      "Ev boyama",
      "Eşyalı ev boyama",
      "Rutubet ve küf çözümü",
      "Alçı sıva zımpara",
    ],
    relatedBlogs: [
      "rutubetli-duvar-nasil-boyanir",
      "esyali-evde-boya-badana-nasil-yapilir",
      "silinebilir-boya-mi-plastik-boya-mi",
    ],
    relatedServices: [
      "ev-boyama",
      "esyali-ev-boyama",
      "rutubet-kuf-leke-cozumu",
    ],
    faqs: [
      {
        question: "{district} içinde rutubetli duvarlar da boyanabiliyor mu?",
        answer:
          "Evet, ancak önce yüzeydeki sorunun kaynağını değerlendirmek gerekir. Uygun temizlik, kurutma ve astar planı yapılmadan doğrudan boya geçmek kalıcı çözüm sağlamaz.",
      },
      {
        question: "{district} bölgesinde eşyalı ev boyama çok dağıtır mı?",
        answer:
          "Planlı koruma ve oda sıralamasıyla süreç kontrol altında tutulabilir. Amaç işi sadece bitirmek değil, yaşam alanını mümkün olduğunca düzenli bırakmaktır.",
      },
    ],
  },
  "dense-urban": {
    metaTitle:
      "{district} Boya Badana | Yoğun Yerleşimde Hızlı ve Temiz Uygulama",
    metaDescription:
      "{district} bölgesinde apartman daireleri ve yoğun yerleşim alanları için temiz, ekonomik ve planlı boya badana çözümleri sunuyoruz.",
    h1: "{district} Boya Badana Hizmeti ile Hızlı ve Düzenli Sonuç",
    intro: [
      "{district} tarafında boya badana ihtiyacı genelde taşınma, kiracı değişimi ya da uzun süredir yenilenmeyen dairelerin toparlanmasıyla birlikte geliyor. {areas} çevresinde kullanıcılar işi uzatmadan ama dağınık bir süreç yaşamadan sonuç almak istiyor.",
      "Bu tip ilçelerde erişim, apartman düzeni, dar çalışma alanı ve eşyalı kullanım boyanın kendisi kadar önemli hale geliyor. Bu yüzden planı sadece kaç oda boyanacağına göre değil, uygulama şartlarına göre kuruyoruz.",
    ],
    customerProfile: [
      "{district} içinde sık karşılaştığımız kullanıcılar arasında aileler, kiraya verilecek daire sahipleri, kısa sürede teslim bekleyen kiracılar ve bütçesini kontrollü kullanmak isteyen müşteriler öne çıkıyor.",
      "Bu bölgede en çok beklenen şey net fiyat, düzgün koruma ve söz verilen sürede teslim. Özellikle apartman içi düzen ve komşuluk hassasiyeti nedeniyle temiz çalışma fark yaratıyor.",
    ],
    commonNeeds: [
      "{district} boya badana işlerinde en sık görülen ihtiyaçlar koyu renkten açık tona geçiş, duvar darbe izlerinin toparlanması, tavan kararması, eşyalı ev koruması ve lokal alçı zımpara işlemleri oluyor.",
      "Kullanıcıların önemli bir kısmı ekonomik çözüm isterken işçilikten taviz vermek istemiyor. Bu nedenle hangi boya tipinin gerçekten gerekli olduğunu ve hangi işlerin ek maliyet oluşturduğunu baştan açıkça anlatıyoruz.",
    ],
    localHighlights: [
      "{areas} çevresinde daire sirkülasyonu ve yoğun kullanım nedeniyle hızlı teslim beklentisi daha belirgin. Ama hız uğruna köşe temizliği, maskeleme ya da yüzey hazırlığını atlamamak gerekiyor.",
      "{district} için yaklaşımımız kısa sürede biten ama sonradan problem çıkarmayan bir uygulama kurgulamak. Gerekirse tavan, duvar ve küçük onarımları tek program içinde topluyoruz.",
    ],
    serviceBridge: [
      "{district} için en çok talep edilen hizmetler ev boyama, eşyalı ev boyama, alçı sıva zımpara ve ihtiyaç olduğunda rutubet çözümü oluyor.",
      "Ön keşif sırasında dairenin boş ya da eşyalı olması, renk geçişi ve onarım ihtiyacı netleştiğinde iş planı da daha güvenli hale geliyor.",
    ],
    services: [
      "Ev boyama",
      "Eşyalı ev boyama",
      "Alçı sıva zımpara",
      "Rutubet ve küf çözümü",
    ],
    relatedBlogs: [
      "boya-badana-oncesi-ev-nasil-hazirlanir",
      "1-gunde-boya-badana-mumkun-mu",
      "istanbul-boya-badana-fiyatlari",
    ],
    relatedServices: [
      "ev-boyama",
      "esyali-ev-boyama",
      "alci-siva-zimpara",
    ],
    faqs: [
      {
        question: "{district} içinde boya badana işi aynı gün bitebilir mi?",
        answer:
          "Dairenin büyüklüğüne, eşyalı olup olmamasına ve onarım ihtiyacına göre değişir. Standart işlerde aynı gün teslim mümkün olabilir; detaylı hazırlık gereken durumlarda süreyi baştan netleştiriyoruz.",
      },
      {
        question: "{district} bölgesinde ekonomik boya seçeneği sunuyor musunuz?",
        answer:
          "Evet, ancak sadece düşük fiyatlı ürün değil kullanım ihtiyacına uygun boya önermeye çalışıyoruz. Böylece kısa vadeli tasarruf için uzun vadeli memnuniyetten ödün verilmemiş olur.",
      },
    ],
  },
  "office-mixed": {
    metaTitle:
      "{district} Boya Badana | Ofis ve Konutlar İçin Planlı Uygulama",
    metaDescription:
      "{district} bölgesinde ofis, daire ve ticari alanlar için düzenli, hızlı ve profesyonel boya badana hizmeti veriyoruz.",
    h1: "{district} Boya Badana Hizmeti ile Düzenli ve Profesyonel Plan",
    intro: [
      "{district} bölgesinde boya badana işleri çoğu zaman hem konut hem ofis ihtiyaçlarını aynı anda içeriyor. {areas} hattında kullanıcılar temiz görüntü, net zamanlama ve düzgün teslim beklentisiyle hareket ediyor.",
      "Bu bölgelerde yalnızca duvarı boyamak yeterli olmuyor; çalışma saatleri, personel düzeni, ofis ekipmanları ya da hızlı kiracı değişimi gibi başlıklar da planın merkezine yerleşiyor.",
    ],
    customerProfile: [
      "{district} içinde sık gördüğümüz müşteri profilleri arasında ofis yöneticileri, küçük işletmeler, kiraya verilecek daire sahipleri ve kısa sürede yenilenmiş görünüm isteyen kullanıcılar yer alıyor.",
      "Bu bölgede kullanıcıların en çok önemsediği şey dakiklik, iletişim ve iş sonunda alanın düzenli kalması. Özellikle hafta sonu ya da mesai dışı uygulama talepleri sık geliyor.",
    ],
    commonNeeds: [
      "{district} boya badana taleplerinde ofis duvarlarının yenilenmesi, toplantı odalarının temiz görünmesi, boş dairelerin kiracıya hazırlanması ve lokal tamir ihtiyacı sık öne çıkıyor.",
      "Bazı yapılarda eski boya, iz bırakan koyu renkler ya da tavan kirlenmesi de görülebiliyor. Bu nedenle sadece boya değil, hazırlık ve toparlama planı da teklifin önemli parçası oluyor.",
    ],
    localHighlights: [
      "{areas} çevresinde gün içinde yoğun kullanım olduğu için boya işini hayatı ya da işi gereksiz yere durdurmadan kurgulamak gerekiyor. Giriş çıkış saatleri, apartman kuralları ve iş akışı önceden konuşulduğunda süreç çok daha rahat ilerliyor.",
      "{district} için yaklaşımımız, özellikle ofis ve karma kullanım alanlarında görüntü kalitesi ile zaman yönetimini aynı anda korumak. Bu nedenle ürün seçimi kadar uygulama saatine de dikkat ediyoruz.",
    ],
    serviceBridge: [
      "{district} için en çok karşılık bulan başlıklar ofis boyama, ev boyama, alçı sıva zımpara ve ihtiyaç olduğunda rutubet çözümü oluyor.",
      "Alanın durumuna göre ofis, konut ve ortak kullanım alanlarını ayrı fazlara bölerek daha kontrollü bir teslim süreci oluşturabiliyoruz.",
    ],
    services: [
      "Ofis boyama",
      "Ev boyama",
      "Alçı sıva zımpara",
      "Rutubet ve küf çözümü",
    ],
    relatedBlogs: [
      "ofis-boyama-yapilirken-nelere-dikkat-edilmeli",
      "1-gunde-boya-badana-mumkun-mu",
      "istanbul-boya-badana-fiyatlari",
    ],
    relatedServices: [
      "ofis-boyama",
      "ev-boyama",
      "alci-siva-zimpara",
    ],
    faqs: [
      {
        question: "{district} içinde ofis boyama hafta sonu yapılabilir mi?",
        answer:
          "Uygun takvim ve bina kuralları elverdiğinde evet. Özellikle iş akışını bölmemek isteyen işletmeler için hafta sonu veya akşam planı daha verimli olabilir.",
      },
      {
        question: "{district} bölgesinde boya sırasında alan tamamen kapanır mı?",
        answer:
          "Her işte gerekmez. Alanın büyüklüğüne göre bölümlü ilerleme yaparak evin ya da ofisin tamamını aynı anda kullanım dışı bırakmadan çalışmak çoğu zaman mümkündür.",
      },
    ],
  },
  "premium-residential": {
    metaTitle:
      "{district} Boya Badana | Estetik Beklentiye Uygun Temiz İşçilik",
    metaDescription:
      "{district} bölgesinde seçici konut kullanıcıları için temiz çizgili, dikkatli korumalı ve estetik odaklı boya badana hizmeti sunuyoruz.",
    h1: "{district} Boya Badana Hizmeti ile Estetik ve Temiz Sonuç",
    intro: [
      "{district} tarafında boya badana talepleri çoğu zaman yalnızca renk değişimi değil, yaşam alanının algısını daha düzenli ve daha iyi hale getirme ihtiyacından doğuyor. {areas} çevresinde kullanıcılar ince işçilik, doğru ton seçimi ve temiz teslim konusunda daha seçici davranıyor.",
      "Bu ilçelerde duvar sonucunun düzgün görünmesi kadar kenar çizgileri, tavan geçişleri, koruma kalitesi ve mobilyayla uyum da önem kazanıyor. Bu yüzden uygulamayı baştan planlı ve kontrollü kurguluyoruz.",
    ],
    customerProfile: [
      "{district} içinde sık gördüğümüz kullanıcı profili; oturulan evi yenilemek isteyen aileler, taşınma öncesi daha iyi ilk izlenim arayan ev sahipleri ve seçili alanlarda dekoratif dokunuş isteyen müşteriler oluyor.",
      "Bu bölgede kullanıcılar çoğu zaman aceleyle çıkmış bir iş istemiyor. Beklenti; temiz çalışan, sözüne sadık ve boya tipi konusunda yönlendirme yapabilen bir ekip oluyor.",
    ],
    commonNeeds: [
      "{district} boya badana işlerinde açık tonlara geçiş, seçili vurgu duvarları, yüzey kusurlarının toparlanması, eşyalı ev koruması ve silinebilir boya tercihleri öne çıkıyor.",
      "Bazı evlerde dekoratif detay istenirken bazı kullanıcılar daha sade ama kaliteli bir görünüm arıyor. Bu nedenle malzeme seçimi kadar uygulama çizgisi ve teslim disiplini de belirleyici oluyor.",
    ],
    localHighlights: [
      "{areas} hattında estetik beklenti yükseldikçe boyanın tonu, doku tercihi ve duvar hazırlığı daha önemli hale geliyor. Özellikle ışık alan salonlarda kusurlar daha görünür olduğu için yüzey hazırlığını sağlam tutmak gerekiyor.",
      "{district} için yaklaşımımız gösterişli değil, dengeli ve zamana dayanıklı sonuç üretmek. Gerektiğinde dekoratif boya, lokal tamir ve standart iç cephe boyasını aynı proje içinde birleştiriyoruz.",
    ],
    serviceBridge: [
      "{district} için en çok talep edilen hizmetler ev boyama, eşyalı ev boyama, dekoratif boya ve alçı sıva zımpara işleri oluyor.",
      "Amaç yalnızca hızlı bitirmek değil; taşınma sonrası ya da günlük kullanım başladığında da memnuniyet veren daha düzgün bir görünüm oluşturmak.",
    ],
    services: [
      "Ev boyama",
      "Eşyalı ev boyama",
      "Dekoratif boya",
      "Alçı sıva zımpara",
    ],
    relatedBlogs: [
      "silinebilir-boya-mi-plastik-boya-mi",
      "tasinmadan-once-ev-boyatmak",
      "esyali-evde-boya-badana-nasil-yapilir",
    ],
    relatedServices: [
      "ev-boyama",
      "esyali-ev-boyama",
      "dekoratif-boya",
    ],
    faqs: [
      {
        question: "{district} içinde dekoratif boya için keşif gerekiyor mu?",
        answer:
          "Evet, seçilecek duvarın boyutu, mevcut yüzeyi ve ışık durumu sonucu doğrudan etkilediği için kısa keşif ya da net fotoğraf değerlendirmesi faydalı olur.",
      },
      {
        question: "{district} bölgesinde eşyalı evde temiz çalışma mümkün mü?",
        answer:
          "Doğru koruma ve oda planıyla mümkündür. Zemin, mobilya ve hassas yüzeyler iyi korunmadan bu tip evlerde beklenen kaliteye ulaşmak zordur.",
      },
    ],
  },
  "villa-lowrise": {
    metaTitle:
      "{district} Boya Badana | Villa ve Geniş Yapılarda Planlı Uygulama",
    metaDescription:
      "{district} bölgesinde villa, müstakil ev ve geniş yüzeyli daireler için planlı boya badana ve dış cephe çözümleri sunuyoruz.",
    h1: "{district} Boya Badana Hizmeti ile Geniş Yapılarda Kontrollü Süreç",
    intro: [
      "{district} tarafında boya badana işleri çoğu zaman daha geniş metrekare, site düzeni ya da müstakil yapı detayları nedeniyle standart daire işlerinden ayrılıyor. {areas} çevresinde kullanıcılar hem iç mekân hem bazı durumlarda dış cephe için planlı ekip bekliyor.",
      "Bu bölgelerde merdiven boşluğu, yüksek duvar, bahçe girişleri ya da çok bölümlü ev planı süre hesabını doğrudan etkileyebiliyor. Bu yüzden uygulamayı keşif aşamasından itibaren gerçekçi planlıyoruz.",
    ],
    customerProfile: [
      "{district} içinde sık karşılaştığımız müşteri profilleri arasında yeni taşınacak aileler, site içinde yaşayan kullanıcılar, villa sahipleri ve uzun süredir yenilenmeyen geniş evleri toparlamak isteyen müşteriler yer alıyor.",
      "Bu bölgede kullanıcılar genelde temiz teslim, net süre ve geniş alanda koordinasyon becerisi arıyor. Koruma planı ile ekip akışının düzgün olması memnuniyeti doğrudan etkiliyor.",
    ],
    commonNeeds: [
      "{district} boya badana işlerinde boş daire boyama, eşyalı aile evi yenilemesi, yüksek duvarlarda lokal onarım, tavan çalışmaları ve bazı yapılarda dış cephe yenilemesi öne çıkıyor.",
      "Geniş alanlı evlerde boya tipi, kat sayısı ve alanlar arası sıra önem kazanıyor. Aksi halde hem süre uzayabiliyor hem de ev içinde gereksiz dağınıklık oluşabiliyor.",
    ],
    localHighlights: [
      "{areas} hattında site kuralları, araç erişimi, asansör kullanımı ya da dış alan etkisi planı değiştirebiliyor. Bu yüzden yalnızca boyanacak alanı değil, uygulama koşullarını da önceden değerlendiriyoruz.",
      "{district} için yaklaşımımız işi parçalara bölmeden ama kontrolü kaybetmeden yürütmek. İç cephe, dış cephe ve lokal tamir ihtiyaçları varsa hepsini tek proje mantığında topluyoruz.",
    ],
    serviceBridge: [
      "{district} için öne çıkan hizmetler ev boyama, dış cephe boyama, alçı sıva zımpara ve eşyalı ev boyama oluyor.",
      "Özellikle taşınma öncesi ya da sezonluk hazırlık dönemlerinde keşfi erken yapmak, hem süreyi hem de malzeme planını daha sağlıklı hale getiriyor.",
    ],
    services: [
      "Ev boyama",
      "Dış cephe boyama",
      "Alçı sıva zımpara",
      "Eşyalı ev boyama",
    ],
    relatedBlogs: [
      "tasinmadan-once-ev-boyatmak",
      "boya-badana-oncesi-ev-nasil-hazirlanir",
      "1-gunde-boya-badana-mumkun-mu",
    ],
    relatedServices: [
      "ev-boyama",
      "dis-cephe-boyama",
      "alci-siva-zimpara",
    ],
    faqs: [
      {
        question: "{district} içinde villa ya da dubleks boya süresi nasıl belirlenir?",
        answer:
          "Metrekare, tavan yüksekliği, merdiven boşluğu ve onarım ihtiyacı süreyi doğrudan etkiler. Bu tip işlerde keşif sonrası etaplı plan yapmak daha sağlıklı olur.",
      },
      {
        question: "{district} bölgesinde dış cephe ile iç cephe birlikte planlanabilir mi?",
        answer:
          "Evet, yapının durumuna göre birlikte değerlendirilebilir. Ancak hava koşulları ve yüzey gereksinimleri nedeniyle çalışma sırasını baştan netleştirmek gerekir.",
      },
    ],
  },
  "historic-core": {
    metaTitle:
      "{district} Boya Badana | Eski Yapılarda Dikkatli Yüzey Hazırlığı",
    metaDescription:
      "{district} bölgesinde tarihi dokuya sahip binalar, eski daireler ve bakım isteyen yüzeyler için dikkatli boya badana hizmeti veriyoruz.",
    h1: "{district} Boya Badana Hizmeti ile Eski Yüzeylerde Doğru Hazırlık",
    intro: [
      "{district} bölgesinde boya badana işi çoğu zaman yalnızca yeni renk seçmekten ibaret olmuyor. {areas} çevresindeki eski yapı dokusu nedeniyle duvarın gerçek durumu, önceki katmanlar ve yer yer oluşan yorgun yüzeyler ayrıca değerlendirilmeli.",
      "Bu tip alanlarda iyi sonuç almak için aceleci uygulamadan çok doğru hazırlık gerekir. Lokal dökülme, çatlak, kabarma ya da leke varsa bunları boya öncesinde ele almak uzun vadede daha sağlıklı olur.",
    ],
    customerProfile: [
      "{district} içinde sık karşılaştığımız kullanıcı profili; eski dairesini yenilemek isteyen aileler, kiraya hazırlanacak konut sahipleri ve yüzey kusurlarını toparlayarak daha temiz görünüm isteyen müşteriler oluyor.",
      "Kullanıcılar genelde hem makul bütçe hem de işin sonradan tekrar istememesini önemsiyor. Bu yüzden gereksiz işlem önermeden, gerçekten ihtiyaç olan hazırlığı öne çıkarıyoruz.",
    ],
    commonNeeds: [
      "{district} boya badana işlerinde çatlak kapatma, eski boya katmanlarının toparlanması, tavan kararması, lokal rutubet izi ve alçı sıva zımpara ihtiyacı sık öne çıkıyor.",
      "Ayrıca dar merdivenli binalar, eski kapı kasaları ve hassas süpürgelikler nedeniyle koruma kalitesi de daha görünür hale geliyor. Bu yüzden temiz uygulama sonucu doğrudan etkiliyor.",
    ],
    localHighlights: [
      "{areas} çevresinde bina yaşı arttıkça duvar hazırlığı boya kadar önemli hale geliyor. Bazı yüzeylerde iyi görünüm için bir kat boya değil, önce düzgün tamir ve astar planı gerekiyor.",
      "{district} için yaklaşımımız, görüntüyü kısa süreli düzeltmek yerine daha sağlam bir temel kurmak. Böylece boya tamamlandıktan sonra yüzey kusurları tekrar öne çıkmıyor.",
    ],
    serviceBridge: [
      "{district} için en çok karşılık bulan hizmetler ev boyama, alçı sıva zımpara, rutubet ve küf çözümü ile seçili alanlarda dekoratif boya oluyor.",
      "Eski dairelerde hangi onarımın gerçekten gerekli olduğunu keşif sırasında netleştirmek, sonradan çıkabilecek sürprizleri azaltıyor.",
    ],
    services: [
      "Ev boyama",
      "Alçı sıva zımpara",
      "Rutubet ve küf çözümü",
      "Dekoratif boya",
    ],
    relatedBlogs: [
      "rutubetli-duvar-nasil-boyanir",
      "boya-badana-oncesi-ev-nasil-hazirlanir",
      "istanbul-boya-badana-fiyatlari",
    ],
    relatedServices: [
      "ev-boyama",
      "alci-siva-zimpara",
      "rutubet-kuf-leke-cozumu",
    ],
    faqs: [
      {
        question: "{district} içinde eski duvarlarda boya öncesi tamir şart mı?",
        answer:
          "Her zaman geniş kapsamlı tamir gerekmez; ancak çatlak, dökülme, delik ya da parlak eski boya geçişleri varsa yüzey hazırlığı iyi sonucu doğrudan etkiler.",
      },
      {
        question: "{district} bölgesinde tarihi ya da eski yapı dairelerinde boya ne kadar sürer?",
        answer:
          "Süre, duvarın durumuna ve onarım miktarına göre değişir. Standart yeni yapı dairelerine göre hazırlık aşaması biraz daha uzun sürebilir.",
      },
    ],
  },
  "modern-residential": {
    metaTitle:
      "{district} Boya Badana | Yeni Daire ve Sitelerde Temiz Uygulama",
    metaDescription:
      "{district} bölgesinde yeni daireler, siteler ve modern konutlar için temiz, hızlı ve planlı boya badana hizmeti sunuyoruz.",
    h1: "{district} Boya Badana Hizmeti ile Yeni Yapılarda Temiz Sonuç",
    intro: [
      "{district} tarafında boya badana talepleri çoğu zaman yeni taşınma, site içi yenileme ya da modern daireleri kısa sürede toparlama ihtiyacıyla geliyor. {areas} çevresinde kullanıcılar temiz kenar geçişleri, düzenli ekip ve hızlı teslim bekliyor.",
      "Yeni yapı stokunda duvarlar çok eski olmayabilir; ancak nakliye izleri, lokal darbeler, yanlış renk seçimi ya da kirlenmiş tavanlar yine de profesyonel uygulama gerektiriyor. Bu yüzden işi basit görünse bile planlı kurguluyoruz.",
    ],
    customerProfile: [
      "{district} içinde sık gördüğümüz müşteri profili; yeni eve taşınan aileler, site dairesini yenilemek isteyen kullanıcılar, kısa sürede temiz sonuç arayan müşteriler ve bazı bölgelerde ofis kullanıcıları oluyor.",
      "Bu ilçelerde kullanıcılar genelde hızlı randevu, ulaşılabilir muhatap ve net teklif bekliyor. Özellikle site düzeni nedeniyle çalışma saatleri ve ortak alan kullanımı önceden netleşmeli.",
    ],
    commonNeeds: [
      "{district} boya badana işlerinde açık renge geçiş, iz bırakan duvarların toparlanması, çocuk odası yenilemesi, eşyalı daire koruması ve gerekirse küçük alçı zımpara işleri öne çıkıyor.",
      "Yeni yapılarda kusurlar ışık altında daha belirgin görünebildiği için düzgün kenar çizgisi, iz bırakmayan uygulama ve kontrollü kat planı daha fazla önem kazanıyor.",
    ],
    localHighlights: [
      "{areas} hattında site kuralları ve zaman planı çoğu işte belirleyici oluyor. Asansör kullanımı, gürültü sınırı ve ortak alan koruması baştan konuşulduğunda süreç daha konforlu ilerliyor.",
      "{district} için yaklaşımımız az müdahale ile temiz sonuç elde etmek. Gerekli değilse gereksiz işlem önermeden, ama ihtiyaç varsa küçük onarımları boya öncesinde toparlayarak ilerliyoruz.",
    ],
    serviceBridge: [
      "{district} için en çok talep edilen hizmetler ev boyama, eşyalı ev boyama, ofis boyama ve bazı projelerde dekoratif boya oluyor.",
      "Taşınma takvimi ya da site kuralı sıkışıksa uygulamayı etaplara ayırıp daha kontrollü bir teslim planı hazırlayabiliyoruz.",
    ],
    services: [
      "Ev boyama",
      "Eşyalı ev boyama",
      "Ofis boyama",
      "Dekoratif boya",
    ],
    relatedBlogs: [
      "istanbul-boya-badana-fiyatlari",
      "1-gunde-boya-badana-mumkun-mu",
      "tasinmadan-once-ev-boyatmak",
    ],
    relatedServices: [
      "ev-boyama",
      "esyali-ev-boyama",
      "ofis-boyama",
    ],
    faqs: [
      {
        question: "{district} içinde site dairesi boyanırken yönetim kuralları sorun olur mu?",
        answer:
          "Birçok sitede çalışma saatleri ve ortak alan kullanımıyla ilgili kurallar bulunur. Bu bilgiler teklif aşamasında netleştiğinde uygulama daha sorunsuz ilerler.",
      },
      {
        question: "{district} bölgesinde taşınmadan hemen önce boya planlanabilir mi?",
        answer:
          "Çoğu durumda evet. Takvim sıkışıksa erken iletişime geçmek, keşif ve boya seçimini daha rahat organize etmeyi sağlar.",
      },
    ],
  },
};

const districtSeeds: DistrictSeed[] = [
  {
    name: "Adalar",
    neighborhoods: ["Büyükada", "Heybeliada", "Burgazada", "Kınalıada"],
    profile: "coastal-family",
  },
  {
    name: "Ataşehir",
    neighborhoods: ["İçerenköy", "Kayışdağı", "Yenişehir", "Atatürk"],
    profile: "modern-residential",
  },
  {
    name: "Bağcılar",
    neighborhoods: ["Güneşli", "Mahmutbey", "Kirazlı", "Yüzyıl"],
    profile: "dense-urban",
  },
  {
    name: "Bahçelievler",
    neighborhoods: ["Yenibosna", "Soğanlı", "Kocasinan", "Şirinevler"],
    profile: "dense-urban",
  },
  {
    name: "Bakırköy",
    neighborhoods: ["Ataköy", "Yeşilköy", "Florya", "Kartaltepe"],
    profile: "premium-residential",
  },
  {
    name: "Bayrampaşa",
    neighborhoods: ["Kocatepe", "Yıldırım", "Muratpaşa", "Altıntepsi"],
    profile: "dense-urban",
  },
  {
    name: "Beşiktaş",
    neighborhoods: ["Levent", "Gayrettepe", "Ortaköy", "Akatlar"],
    profile: "office-mixed",
  },
  {
    name: "Beykoz",
    neighborhoods: ["Kavacık", "Paşabahçe", "Çubuklu", "Acarkent"],
    profile: "villa-lowrise",
  },
  {
    name: "Beylikdüzü",
    neighborhoods: ["Adnan Kahveci", "Kavaklı", "Gürpınar", "Yakuplu"],
    profile: "modern-residential",
  },
  {
    name: "Beyoğlu",
    neighborhoods: ["Cihangir", "Kasımpaşa", "Galata", "Taksim"],
    profile: "historic-core",
  },
  {
    name: "Çatalca",
    neighborhoods: ["Kaleiçi", "Ferhatpaşa", "Çiftlikköy", "Muratbey"],
    profile: "villa-lowrise",
  },
  {
    name: "Çekmeköy",
    neighborhoods: ["Madenler", "Alemdağ", "Taşdelen", "Hamidiye"],
    profile: "villa-lowrise",
  },
  {
    name: "Esenler",
    neighborhoods: ["Menderes", "Birlik", "Turgut Reis", "Nine Hatun"],
    profile: "dense-urban",
  },
  {
    name: "Eyüpsultan",
    neighborhoods: ["Göktürk", "Alibeyköy", "Kemerburgaz", "Rami"],
    profile: "office-mixed",
  },
  {
    name: "Fatih",
    neighborhoods: ["Aksaray", "Fındıkzade", "Balat", "Çarşamba"],
    profile: "historic-core",
  },
  {
    name: "Gaziosmanpaşa",
    neighborhoods: ["Karadeniz", "Mevlana", "Küçükköy", "Yıldıztabya"],
    profile: "dense-urban",
  },
  {
    name: "Güngören",
    neighborhoods: ["Merkez", "Sanayi", "Haznedar", "Mareşal Çakmak"],
    profile: "dense-urban",
  },
  {
    name: "Kadıköy",
    neighborhoods: ["Moda", "Fenerbahçe", "Caddebostan", "Erenköy"],
    profile: "premium-residential",
  },
  {
    name: "Kağıthane",
    neighborhoods: ["Çağlayan", "Seyrantepe", "Hamidiye", "Gültepe"],
    profile: "office-mixed",
  },
  {
    name: "Kartal",
    neighborhoods: ["Atalar", "Soğanlık", "Yakacık", "Cevizli"],
    profile: "coastal-family",
  },
  {
    name: "Küçükçekmece",
    neighborhoods: ["Atakent", "Halkalı", "Sefaköy", "Cennet"],
    profile: "dense-urban",
  },
  {
    name: "Maltepe",
    neighborhoods: ["Altayçeşme", "İdealtepe", "Zümrütevler", "Küçükyalı"],
    profile: "coastal-family",
  },
  {
    name: "Pendik",
    neighborhoods: ["Kurtköy", "Yenişehir", "Esenyalı", "Kaynarca"],
    profile: "modern-residential",
  },
  {
    name: "Sancaktepe",
    neighborhoods: ["Sarıgazi", "Yenidoğan", "Samandıra", "Abdurrahmangazi"],
    profile: "modern-residential",
  },
  {
    name: "Sarıyer",
    neighborhoods: ["Tarabya", "İstinye", "Maslak", "Zekeriyaköy"],
    profile: "premium-residential",
  },
  {
    name: "Şişli",
    neighborhoods: ["Mecidiyeköy", "Fulya", "Bomonti", "Esentepe"],
    profile: "office-mixed",
  },
  {
    name: "Sultanbeyli",
    neighborhoods: ["Mecidiye", "Battalgazi", "Hamidiye", "Adil"],
    profile: "modern-residential",
  },
  {
    name: "Tuzla",
    neighborhoods: ["Aydınlı", "İçmeler", "Postane", "Orhanlı"],
    profile: "coastal-family",
  },
  {
    name: "Ümraniye",
    neighborhoods: ["Yamanevler", "Çakmak", "Ihlamurkuyu", "Atakent"],
    profile: "modern-residential",
  },
  {
    name: "Üsküdar",
    neighborhoods: ["Kuzguncuk", "Altunizade", "Çengelköy", "Acıbadem"],
    profile: "coastal-family",
  },
  {
    name: "Zeytinburnu",
    neighborhoods: ["Seyitnizam", "Veliefendi", "Merkezefendi", "Kazlıçeşme"],
    profile: "dense-urban",
  },
];

function slugifyDistrictName(name: string) {
  return name
    .toLocaleLowerCase("tr-TR")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fillTemplate(template: string, district: string, areas: string) {
  return template
    .replaceAll("{district}", district)
    .replaceAll("{areas}", areas);
}

function createDistrict(seed: DistrictSeed): District {
  const profile = districtProfiles[seed.profile];
  const areas = seed.neighborhoods.slice(0, 3).join(", ");

  return {
    name: seed.name,
    slug: `${slugifyDistrictName(seed.name)}-boya-badana`,
    title: `${seed.name} Boya Badana`,
    metaTitle: fillTemplate(profile.metaTitle, seed.name, areas),
    metaDescription: fillTemplate(profile.metaDescription, seed.name, areas),
    h1: fillTemplate(profile.h1, seed.name, areas),
    intro: profile.intro.map((item) => fillTemplate(item, seed.name, areas)),
    customerProfile: profile.customerProfile.map((item) =>
      fillTemplate(item, seed.name, areas),
    ),
    commonNeeds: profile.commonNeeds.map((item) =>
      fillTemplate(item, seed.name, areas),
    ),
    localHighlights: profile.localHighlights.map((item) =>
      fillTemplate(item, seed.name, areas),
    ),
    serviceBridge: profile.serviceBridge.map((item) =>
      fillTemplate(item, seed.name, areas),
    ),
    services: profile.services,
    neighborhoods: seed.neighborhoods,
    faqs: profile.faqs.map((item) => ({
      question: fillTemplate(item.question, seed.name, areas),
      answer: fillTemplate(item.answer, seed.name, areas),
    })),
    relatedBlogs: profile.relatedBlogs,
    relatedServices: profile.relatedServices,
  };
}

export const districts: District[] = districtSeeds.map(createDistrict);

export function getDistrictBySlug(slug: string) {
  return districts.find((district) => district.slug === slug);
}
