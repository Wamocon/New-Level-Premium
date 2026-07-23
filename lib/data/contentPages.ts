import type { Locale } from '@/lib/types';

export type PageLayout = 'default' | 'timeline' | 'team';
export interface PageCard { title: string; text: string; }
export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
  languages: string;
  photo: string;
  department: string;
}
export interface ContentPageData {
  slug: string;
  layout: PageLayout;
  images: string[];
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  body: Record<Locale, string>;
  cards: Record<Locale, PageCard[]>;
  team: Record<Locale, TeamMember[]>;
  departments: Record<Locale, string[]>;
}

// Auto-generated from the extracted content pages (scratchpad/pages/*.json).
export const contentPages: Record<string, ContentPageData> = {
  "about": {
    "slug": "about",
    "layout": "default",
    "images": [
      "https://newlevel-group.com/storage/5/conversions/1-medium.webp",
      "https://newlevel-group.com/storage/6/conversions/4-medium.webp",
      "https://newlevel-group.com/storage/7/conversions/3-medium.webp",
      "https://newlevel-group.com/storage/8/conversions/2-medium.webp"
    ],
    "title": {
      "en": "About the company",
      "ru": "О компании",
      "tr": "Şirket hakkında"
    },
    "intro": {
      "en": "NEW LEVEL GROUP is a Turkish developer specializing in the construction of comfortable, high-quality and stylish housing on the Mediterranean coast.\n\nWe combined the experience and achievements gained in real estate, tourism and the hotel business to found a construction company. For over 10 years we have successfully implemented our own projects across various districts of Alanya. We create not just residential complexes, but spaces of a new level of comfort. Each New Level Group project is a unique architectural concept developed with modern trends and advanced technologies in mind.",
      "ru": "NEW LEVEL GROUP, турецкий застройщик, специализирующийся на возведении комфортного, качественного и стильного жилья на побережье Средиземного моря.\n\nМы объединили опыт и достижения, полученные в сферах риелторской деятельности, туризма и отельного бизнеса, и основали строительную компанию. И уже на протяжении 10 лет успешно реализуем собственные проекты в разных районах Алании. Мы создаем не просто жилые комплексы, а пространства нового уровня комфорта. Каждый проект New Level Group, это уникальная архитектурная концепция, разработанная с учетом современных тенденций и передовых технологий.",
      "tr": "NEW LEVEL GROUP, Akdeniz kıyısında konforlu, yüksek kaliteli ve şık konutlar inşa eden bir Türk geliştiricisidir.\n\nGayrimenkul, turizm ve otelcilik sektörlerinde edindiğimiz deneyim ve başarıları birleştirerek bir inşaat şirketi kurduk. Ve 10 yıldır Alanya'nın farklı bölgelerinde kendi projelerimizi başarıyla hayata geçiriyoruz. Sadece konut kompleksleri değil, aynı zamanda yeni bir konfor seviyesinde yaşam alanları yaratıyoruz. New Level Group'un her projesi, modern trendler ve ileri teknolojiler göz önünde bulundurularak geliştirilen özgün bir mimari konsepttir."
    },
    "body": {
      "en": "Our mission\n\nWe are focused on the complete satisfaction of our clients' requests and wishes. We build high-class modern residential properties that provide comfortable conditions for living and holidays on the picturesque Mediterranean coast of Türkiye.\n\nOur strategy\n\nWe strive to be the best in our business, so we approach every task responsibly and guarantee full quality control at all stages of construction, from selecting the plot and working through every detail to the timely commissioning of the project. The coordinated work of a team of professionals is the foundation of our success.\n\nWe are implementing the largest project in the region\n\nWe are building the largest project on the coast by number of apartments, New Level Premium, which has no equal in the Mediterranean region. Besides residential blocks, the luxury residence includes a 5-star hotel and every amenity. The complex sits in a picturesque location, directly opposite the best beach in Alanya, Incekum.\n\nWe are building the largest cruise yacht on the coast\n\nMany years of experience in tourism and the yachting business let us see the potential in property investment. That is why we are already implementing our new, promising project, the construction of the largest cruise yacht on the coast, New Level Dream.\n\nBuilding and chartering cruise yachts for VIP tours is a guaranteed profitable investment case thanks to its independence from location and season, as well as high demand. There is no real and worthy alternative to such an exclusive service in the world today.",
      "ru": "Наша миссия\n\nМы ориентированы на полное удовлетворение запросов и пожеланий клиентов. Строим высококлассные современные объекты жилой недвижимости, которые обеспечивают комфортные условия для жизни и отдыха на живописном побережье Средиземного моря в Турции.\n\nНаша стратегия\n\nМы стремимся быть лучшими в своем деле, поэтому ответственно подходим к решению любых задач, гарантируем полный контроль качества на всех этапах строительства, от выбора участка и проработки каждой детали до своевременной сдачи объекта в эксплуатацию. Скоординированная работа команды профессионалов, основа нашего успеха!\n\nРеализуем самый крупный проект в регионе\n\nСтроим самый большой по количеству квартир проект на побережье, New Level Premium, аналогов которому в Средиземноморском регионе нет. Помимо жилых блоков на территории роскошной резиденции предусмотрен отель 5 звезд и все удобства. Комплекс расположен в живописной локации, прямо напротив лучшего пляжа Алании, Инжекум.\n\nСтроим самую большую круизную яхту на побережье\n\nМноголетний опыт в сфере туризма и яхтенного бизнеса позволил нам увидеть перспективу в инвестировании в недвижимое имущество. Поэтому уже сейчас мы реализуем наш новый, многообещающий проект, строительство самой большой круизной яхты на побережье New Level Dream.\n\nСтроительство и аренда круизных яхт под VIP-туры, гарантированно выгодный инвестиционный кейс благодаря отсутствию привязки к локации и сезону, а также высокому спросу. Реальной и достойной альтернативы такой эксклюзивной услуге сегодня в мире нет.",
      "tr": "Misyonumuz\n\nMüşterilerimizin istek ve dileklerinin tam olarak karşılanmasına odaklandık. Türkiye'nin Akdeniz kıyılarında, konforlu yaşam ve dinlenme koşulları sağlayan, yüksek kaliteli, modern konut projeleri inşa ediyoruz.\n\nStratejimiz\n\nİşimizde en iyi olmayı hedefliyoruz; bu nedenle sorunlara karşı sorumlu bir yaklaşım sergiliyor ve inşaatın tüm aşamalarında, saha seçiminden her ayrıntının hazırlanmasına ve tesisin zamanında devreye alınmasına kadar, tam kalite kontrolü sağlıyoruz. Başarımızın temeli profesyonel bir ekibin koordineli çalışmasıdır!\n\nBölgenin en büyük projesini hayata geçiriyoruz\n\nAkdeniz bölgesinde eşi benzeri olmayan, daire sayısı bakımından kıyı şeridinin en büyük projesi olan New Level Premium'u inşa ediyoruz. Lüks rezidansta konut birimlerinin yanı sıra 5 yıldızlı bir otel ve tüm olanaklar yer alıyor. Kompleks, Alanya'nın en güzel plajı olan İncekum'un tam karşısında, pitoresk bir konumda yer almaktadır.\n\nKıyıdaki en büyük seyir yatının inşası\n\nTurizm ve yatçılık sektöründeki uzun yıllara dayanan deneyimimiz, gayrimenkule yatırım yapmanın olanaklarını görmemizi sağladı. İşte bu nedenle, kıyı şeridindeki en büyük yolcu yatının inşası olan New Level Dream adlı yeni ve gelecek vaat eden projemizi şimdiden hayata geçiriyoruz.\n\nVIP turlar için kruvaziyer yatlarının yapımı ve kiralanması, lokasyon ve sezonla bağlantısı olmaması ve yüksek talep nedeniyle garantili karlı bir yatırım örneğidir. Bugün dünyada böylesine ayrıcalıklı bir hizmetin gerçek ve değerli bir alternatifi yoktur."
    },
    "cards": {
      "en": [
        {
          "title": "Construction",
          "text": "We manage the entire process, from selecting the best locations and design to the construction of residential properties and their subsequent maintenance."
        },
        {
          "title": "Real estate agency",
          "text": "We specialize in the sale and rental of real estate in Türkiye and have our own extensive catalog of liquid, high-demand housing."
        },
        {
          "title": "Tourism and yachts",
          "text": "Our experience in tourism includes running our own chain of hotels, organizing yacht tours, and designing and building yachts."
        },
        {
          "title": "Related areas",
          "text": "We are successfully developing in furniture production, agriculture and the restaurant business, which lets us offer clients and partners comprehensive cooperation."
        },
        {
          "title": "A large selection of properties for any purpose",
          "text": "We offer a wide selection of real estate, from modern apartments to elite villas, including completed complexes and projects under construction. Every apartment is suitable for short-term rental, with options for a residence permit and citizenship by investment. Our projects comply with the latest legal requirements. We build exclusively with our own funds and always finish on time, justifying the trust of partners and investors."
        },
        {
          "title": "Optimal value for money",
          "text": "Thanks to exclusive terms for purchasing land plots, we can offer our clients a variety of properties at the most favorable prices. We will help you choose optimal solutions that combine a good location, high build quality, full amenities and an affordable price."
        },
        {
          "title": "Favorable payment terms",
          "text": "When buying any apartment in New Level Group's projects under construction, our clients can count on an interest-free installment plan. We will agree on mutually beneficial purchase terms, settle the down payment and select a convenient, individual installment schedule."
        },
        {
          "title": "Advanced construction technologies",
          "text": "Quality without compromise is the core principle we follow. We use the most advanced construction technologies and materials certified by the Turkish Standards Institute. This lets us guarantee comfortable, safe living and the durability of our properties."
        },
        {
          "title": "Premium locations by the sea",
          "text": "We select only first-class land plots on the Mediterranean coast of Türkiye so you can enjoy stunning views from your own apartment. Building our residential complexes includes creating diverse, modern infrastructure."
        },
        {
          "title": "Fully prepared and custom designed",
          "text": "New Level Group apartments are delivered with fully finished, high-quality interiors, kitchen units and plumbing from leading manufacturers. When buying at an early construction stage, owners can adapt the interior finish and design to their preferences."
        },
        {
          "title": "Guaranteed reliable investments",
          "text": "We strive to be the best on the market and value our reputation. Each of our projects reflects high professionalism and the meticulous work of the whole team. That is why apartments in New Level Group complexes rise in value right after commissioning, guaranteeing investors real profit."
        },
        {
          "title": "Property management",
          "text": "When you buy property in our projects, you will not need to look for a management company. We handle everything related to maintaining your property, from technical and utility service to rental and financial reporting. Our specialists ensure the safety, comfort and security of your property, letting you enjoy ownership without unnecessary worries."
        }
      ],
      "ru": [
        {
          "title": "Строительство",
          "text": "Мы ведем весь процесс, от выбора лучших локаций и проектирования до возведения жилых объектов и их дальнейшего обслуживания."
        },
        {
          "title": "Агентство недвижимости",
          "text": "Специализируемся на продаже и аренде недвижимости в Турции, имеем собственный обширный каталог ликвидного жилья."
        },
        {
          "title": "Туризм и яхты",
          "text": "Наш опыт в туризме включает управление собственной сетью отелей, организацию яхтенных туров, а также проектирование и строительство яхт."
        },
        {
          "title": "Смежные сферы",
          "text": "Успешно развиваемся в производстве мебели, сельском хозяйстве и ресторанном бизнесе, что позволяет предлагать нашим клиентам и партнерам комплексное сотрудничество."
        },
        {
          "title": "Большой выбор объектов под любые цели",
          "text": "Предлагаем широкий выбор недвижимости: от современных квартир до элитных вилл, включая готовые комплексы и проекты на этапе строительства. Все апартаменты подходят для сдачи в краткосрочную аренду, есть варианты под ВНЖ и гражданство за инвестиции. Наши проекты соответствуют новым требованиям законодательства. Строим исключительно за счет собственных средств и всегда завершаем работы в срок, оправдывая доверие партнеров и инвесторов."
        },
        {
          "title": "Оптимальное соотношение цены и качества",
          "text": "Мы имеем возможность предлагать нашим клиентам разнообразные варианты недвижимости по самым выгодным ценам за счет эксклюзивных условий покупки земельных участков. Поможем подобрать оптимальные решения, сочетающие хорошее расположение, высокое качество исполнения, полное благоустройство и доступную стоимость."
        },
        {
          "title": "Выгодные условия оплаты",
          "text": "При покупке любой квартиры в строящихся жилых комплексах New Level Group наши клиенты могут рассчитывать на оформление беспроцентной рассрочки платежа. Договоримся о взаимовыгодных условиях покупки, согласуем сумму первоначального взноса и подберем удобный, индивидуальный график погашения рассрочки."
        },
        {
          "title": "Передовые технологии строительства",
          "text": "Качество без компромиссов, основной принцип, которого мы придерживаемся в работе. Мы применяем самые передовые строительные технологии и материалы, прошедшие сертификацию Институтом стандартизации Турции. Это позволяет нам гарантировать комфортное, безопасное проживание и долговечность наших объектов."
        },
        {
          "title": "Премиальные локации у моря",
          "text": "Мы выбираем только первоклассные земельные участки на побережье Средиземного моря в Турции, чтобы вы могли наслаждаться шикарными видами из собственных апартаментов. Строительство жилых комплексов включает создание разноплановой современной инфраструктуры."
        },
        {
          "title": "Полная готовность и индивидуальный дизайн",
          "text": "Апартаменты от New Level Group сдаются с полностью готовой качественной чистовой отделкой, кухонным гарнитуром и сантехникой от ведущих производителей. При покупке жилья на раннем этапе строительства собственники смогут адаптировать внутреннюю отделку и дизайн интерьера под свои предпочтения."
        },
        {
          "title": "Гарантированно надежные инвестиции",
          "text": "Мы стремимся быть лучшими на рынке и дорожим своей репутацией. Каждый наш проект, это показатель высокого профессионализма и результат кропотливого труда всей команды. Именно поэтому апартаменты в жилых комплексах New Level Group растут в цене сразу же после сдачи в эксплуатацию, гарантируя реальную прибыль инвесторам."
        },
        {
          "title": "Управление недвижимостью",
          "text": "При покупке недвижимости в наших проектах вам не придется искать управляющую компанию. Мы берем на себя все вопросы, связанные с обслуживанием вашей недвижимости: от технического и коммунального обслуживания до сдачи в аренду и финансовой отчетности. Наши специалисты обеспечат безопасность, комфорт и сохранность вашего объекта, позволяя вам наслаждаться владением недвижимостью без лишних забот."
        }
      ],
      "tr": [
        {
          "title": "Yapı",
          "text": "En iyi lokasyonların seçilmesinden, konut projelerinin tasarlanmasına, inşasına ve sonrasında bakımına kadar tüm süreci yönetiyoruz."
        },
        {
          "title": "Emlak acenteliği",
          "text": "Türkiye'de gayrimenkul satışı ve kiralaması konusunda uzmanlaştık ve geniş bir likit konut kataloğuna sahibiz."
        },
        {
          "title": "Turizm ve yatlar",
          "text": "Turizm sektöründeki deneyimimiz, kendi otel zincirimizi yönetmeyi, yat turları düzenlemeyi, yat tasarımı ve inşasını kapsamaktadır."
        },
        {
          "title": "İlgili alanlar",
          "text": "Mobilya üretimi, tarım ve restoran işletmeciliği alanlarında başarılı bir şekilde gelişiyoruz, bu da müşterilerimize ve ortaklarımıza kapsamlı işbirliği sunmamızı sağlıyor."
        },
        {
          "title": "Herhangi bir amaç için geniş bir nesne yelpazesi",
          "text": "Modern dairelerden lüks villalara, tamamlanmış komplekslerden inşaat halindeki projelere kadar geniş bir gayrimenkul yelpazesi sunuyoruz. Tüm daireler kısa dönem kiralamaya uygundur, oturma izni ve yatırım yoluyla vatandaşlık seçenekleri mevcuttur. Projelerimiz yürürlükteki mevzuat gerekliliklerine uygundur. Tamamen kendi kaynaklarımızla inşa ettiğimiz projelerimizde, her zaman zamanında iş bitirerek, ortaklarımızın ve yatırımcılarımızın güvenini kazanıyoruz."
        },
        {
          "title": "Paranın karşılığında en iyi değer",
          "text": "Arsa satın alımında ayrıcalıklı koşullar sayesinde müşterilerimize en uygun fiyatlarla çeşitli gayrimenkul seçenekleri sunma imkânına sahibiz. İyi bir lokasyon, yüksek kaliteli işçilik, tüm olanaklar ve uygun maliyeti bir arada sunan en iyi çözümleri seçmenize yardımcı olacağız."
        },
        {
          "title": "Uygun ödeme koşulları",
          "text": "Müşterilerimiz New Level Group'un inşa ettiği konut komplekslerinden herhangi bir daireyi satın aldıklarında faizsiz taksitlendirme imkanından yararlanabilirler. Karşılıklı olarak avantajlı satın alma koşulları üzerinde anlaşacağız, peşinat miktarını belirleyeceğiz ve uygun, kişiye özel taksit ödeme planı seçeceğiz."
        },
        {
          "title": "İleri inşaat teknolojileri",
          "text": "Çalışmalarımızda ödünsüz kalite, bağlı kaldığımız temel ilkedir. Türk Standardları Enstitüsü tarafından belgelendirilmiş en ileri inşaat teknolojilerini ve malzemelerini kullanıyoruz. Bu sayede konforlu, güvenli bir yaşam ve mülklerimizin dayanıklılığını garanti altına alabiliyoruz."
        },
        {
          "title": "Deniz kenarındaki birinci sınıf lokasyonlar",
          "text": "Türkiye'nin Akdeniz kıyısındaki en güzel arsaları seçiyoruz, böylece kendi dairenizden muhteşem manzaraların tadını çıkarabilirsiniz. Konut komplekslerinin inşası, çeşitli ve modern bir altyapının oluşturulmasını içerir."
        },
        {
          "title": "Tamamen hazırlanmış ve özel olarak tasarlanmış",
          "text": "New Level Group'un daireleri, önde gelen üreticilerin mutfak üniteleri ve sıhhi tesisat armatürleri ile birlikte, tam donanımlı ve yüksek kaliteli malzemelerle kiraya verilmektedir. İnşaatın erken aşamasında bir ev satın alındığında, sahipleri iç dekorasyon ve iç tasarımı kendi tercihlerine göre uyarlayabilirler."
        },
        {
          "title": "Garantili güvenilir yatırımlar",
          "text": "Piyasada en iyi olmayı hedefliyoruz ve itibarımıza değer veriyoruz. Projelerimizin her biri yüksek profesyonelliğin göstergesi ve tüm ekibin özenli çalışmasının sonucudur. İşte bu nedenle New Level Group konut komplekslerindeki dairelerin fiyatları devreye alındıktan hemen sonra artarak, yatırımcılarına gerçek kazanç garantisi sağlıyor."
        },
        {
          "title": "Emlak yönetimi",
          "text": "Projelerimizde gayrimenkul satın aldığınızda yönetim şirketi aramanıza gerek kalmayacak. Emlakınızın bakımıyla ilgili tüm konularla ilgileniyoruz: teknik ve kamu hizmetlerinden kiralama ve finansal raporlamaya kadar. Uzmanlarımız mülkünüzün emniyetini, konforunu ve güvenliğini sağlayarak, gereksiz endişeler yaşamadan gayrimenkul sahibi olmanın keyfini yaşamanızı sağlar."
        }
      ]
    },
    "team": {
      "en": [],
      "ru": [],
      "tr": []
    },
    "departments": {
      "en": [],
      "ru": [],
      "tr": []
    }
  },
  "history": {
    "slug": "history",
    "layout": "timeline",
    "images": [
      "https://newlevel-group.com/storage/1789/conversions/1-w800.webp",
      "https://newlevel-group.com/storage/1790/conversions/2-w800.webp",
      "https://newlevel-group.com/storage/1854/new_level_premium_avsallar.jpg",
      "https://newlevel-group.com/storage/1855/img_8722.JPG",
      "https://newlevel-group.com/storage/1856/img_8732.JPG",
      "https://newlevel-group.com/storage/1857/img_8733.JPG",
      "https://newlevel-group.com/storage/1858/img_8735.JPG",
      "https://newlevel-group.com/storage/1859/img_8719.JPG",
      "https://newlevel-group.com/storage/1860/img_8716.JPG",
      "https://newlevel-group.com/storage/1861/img_8715.JPG",
      "https://newlevel-group.com/storage/1862/img_8736.JPG"
    ],
    "title": {
      "en": "History of New Level Group",
      "ru": "История компании New Level Group",
      "tr": "New Level Group şirketinin tarihi"
    },
    "intro": {
      "en": "",
      "ru": "",
      "tr": ""
    },
    "body": {
      "en": "",
      "ru": "",
      "tr": ""
    },
    "cards": {
      "en": [
        {
          "title": "2015, First office",
          "text": "Our journey started here. In 2015, Ataberk Estate opened its first office at Alanya Marina, the point from which the story of a company that today helps hundreds of clients find a home by the sea began."
        },
        {
          "title": "2018, Second office",
          "text": "In 2018, Ataberk Estate opened its second office, an important step in expanding the company and strengthening its position in the Alanya real estate market."
        },
        {
          "title": "2020, New office in Alanya",
          "text": "A new level. We opened a spacious office in the very center of Alanya, near the legendary Cleopatra Beach. Now two directions sit under one roof: Ataberk Estate and Ataberk Yacht."
        },
        {
          "title": "2021, New office in Antalya",
          "text": "A step into Antalya. A new Ataberk Estate office opened in the popular Konyaalti district, expanding our presence and opportunities for clients."
        },
        {
          "title": "2022, A Proje Pazarlama",
          "text": "The opening of the A Proje Pazarlama office in Alanya was an important step in the company's development and service improvement."
        },
        {
          "title": "2023, New office in Mersin",
          "text": "Expansion into Mersin. The Mersin office became an important part of our development strategy and work with clients in the region."
        },
        {
          "title": "2023, New Level City boutique complex",
          "text": "A complex in the very center of Alanya. Built and commissioned."
        },
        {
          "title": "2023, Start of New Level Premium Avsallar",
          "text": "The largest new complex on the coast by number of apartments: 7 residential blocks and a 5-star hotel on site."
        },
        {
          "title": "2024, New Level's own projects",
          "text": "Construction work began at New Level Premium Avsallar."
        },
        {
          "title": "2024, New office in Antalya",
          "text": "In 2024 we opened a modern office in Antalya, continuing to expand opportunities for our clients."
        },
        {
          "title": "2024, New Level Villas",
          "text": "The villas are located in the Incekum area of Alanya. Built and commissioned."
        },
        {
          "title": "2024, New Level Panorama",
          "text": "A sea-view complex in central Alanya. Large layouts and apartments with views. Built and commissioned."
        },
        {
          "title": "2024, New Level Akropora in Konakli",
          "text": "The complex has been commissioned and put into operation."
        },
        {
          "title": "2024, New Level Cleopatra 1 and Cleopatra 2",
          "text": "Complexes with infrastructure in the center of Alanya. Built and commissioned."
        },
        {
          "title": "2025, New office in Alanya",
          "text": "The start of a new stage in Alanya. We opened a new office to be even closer to our clients and to offer the best solutions on the Turkish real estate market."
        },
        {
          "title": "2025, New Level Dream",
          "text": "The MEGAYACHTS project, a unique opportunity for ambitious businesspeople to take a profitable investment niche and reach a new level of earnings."
        },
        {
          "title": "2025, Elis Concept furniture store in Alanya and Antalya",
          "text": "Elis Concept's own furniture factory and store, together with Vestel home appliances."
        }
      ],
      "ru": [
        {
          "title": "2015, Первый офис",
          "text": "Наш путь начался здесь. В 2015 году Ataberk Estate открыла свой первый офис. Alanya Marina, с этой точки и стартовала история компании, которая сегодня помогает сотням клиентов найти дом у моря."
        },
        {
          "title": "2018, Второй офис",
          "text": "В 2018 году открылся второй офис Ataberk Estate, важный этап расширения компании и укрепления позиций на рынке недвижимости Аланьи."
        },
        {
          "title": "2020, Новый офис в Алании",
          "text": "Новый уровень. Мы открыли просторный офис в самом центре Аланьи, рядом с легендарным пляжем Клеопатры. Теперь под одной крышей два направления: Ataberk Estate и Ataberk Yacht."
        },
        {
          "title": "2021, Новый офис в Анталье",
          "text": "Шаг в Анталью. Новый офис Ataberk Estate открыт в популярном районе Коньяалты, расширяя наше присутствие и возможности для клиентов."
        },
        {
          "title": "2022, A Proje Pazarlama",
          "text": "Открытие офиса A Proje Pazarlama в Аланье стало важным шагом в развитии компании и улучшении сервиса."
        },
        {
          "title": "2023, Новый офис в Мерсине",
          "text": "Расширение в Мерсине. Офис в Мерсине стал важной частью нашей стратегии развития и работы с клиентами в регионе."
        },
        {
          "title": "2023, Строительство бутик комплекса New Level City",
          "text": "Комплекс в самом центре Аланьи. Построен и сдан в эксплуатацию."
        },
        {
          "title": "2023, Начало строительства собственных проектов New Level",
          "text": "Запуск строительства New Level Premium Avsallar, самый крупный новый комплекс на побережье по количеству квартир: 7 жилых блоков и отель 5 звезд на территории."
        },
        {
          "title": "2023, Начало строительства мега проекта New Level Premium Avsallar",
          "text": "Самый масштабный проект на побережье: 7 жилых блоков и отель 5 звезд на территории."
        },
        {
          "title": "2024, Новый офис в Анталье",
          "text": "В 2024 году мы открыли современный офис в Анталии, продолжая расширять возможности для наших клиентов."
        },
        {
          "title": "2024, Строительство вилл New Level Villas",
          "text": "Виллы расположены в районе Инджекум Аланья. Построены и сданы в эксплуатацию."
        },
        {
          "title": "2024, Комплекс с видом на море в центре Аланьи New Level Panorama",
          "text": "Большие планировки, видовые квартиры. Комплекс построен и сдан в эксплуатацию."
        },
        {
          "title": "2024, Начало строительства New Level Akropora в Конаклы Аланья",
          "text": "Комплекс сдан и введен в эксплуатацию."
        },
        {
          "title": "2024, Комплексы в центре Аланьи New Level Cleopatra 1 и New Level Cleopatra 2",
          "text": "Комплексы с инфраструктурой в центре Аланьи. Построены и сданы в эксплуатацию."
        },
        {
          "title": "2025, Новый офис в Аланье",
          "text": "Старт нового этапа в Аланье. Мы открыли новый офис, чтобы ещё ближе быть к нашим клиентам и предоставлять лучшие решения на рынке недвижимости Турции."
        },
        {
          "title": "2025, New Level Dream",
          "text": "Проект МЕГАЯХТЫ, уникальная возможность для амбициозных бизнесменов занять прибыльную инвестиционную нишу и выйти на новый уровень заработка."
        },
        {
          "title": "2025, Открытие мебельного магазина Elis Concept в Аланье и Анталии",
          "text": "Собственная мебельная фабрика и магазин мебели Elis Concept и бытовой техники Vestel."
        }
      ],
      "tr": [
        {
          "title": "2015, İlk ofis",
          "text": "Yolculuğumuz burada başladı. 2015 yılında Ataberk Estate ilk ofisini açtı. Alanya Marina, bugün yüzlerce müşteriye deniz kenarında ev bulmalarında yardımcı olan şirketin hikayesi burada başladı."
        },
        {
          "title": "2018, İkinci ofis",
          "text": "2018 yılında Ataberk Estate ikinci ofisini açtı, bu, şirketin büyümesi ve Alanya gayrimenkul pazarındaki konumunu güçlendirmesi için önemli bir adımdı."
        },
        {
          "title": "2020, Alanya'da yeni ofis",
          "text": "Yeni bir seviye. Alanya'nın tam merkezinde, efsanevi Kleopatra Plajı'nın yakınında geniş bir ofis açtık. Artık tek çatı altında iki alan: Ataberk Estate ve Ataberk Yacht."
        },
        {
          "title": "2021, Antalya'da yeni ofis",
          "text": "Antalya'ya adım. Ataberk Estate'in yeni ofisi popüler Konyaalti bölgesinde açıldı ve müşteriler için fırsatlarımızı genişletti."
        },
        {
          "title": "2022, A Proje Pazarlama",
          "text": "Alanya'da A Proje Pazarlama ofisinin açılması, şirketin gelişimi ve hizmet iyileştirmesinde önemli bir adım oldu."
        },
        {
          "title": "2023, Mersin'de yeni ofis",
          "text": "Mersin'de genişleme. Mersin ofisi, bölgedeki gelişim stratejimiz ve müşteri ilişkilerimizin önemli bir parçası haline geldi."
        },
        {
          "title": "2023, New Level City butik kompleksinin inşaatı",
          "text": "Alanya'nın tam merkezinde yer alan bir kompleks. İnşa edildi ve hizmete açıldı."
        },
        {
          "title": "2023, New Level Premium Avsallar mega projesinin inşaatına başlandı",
          "text": "Sahil şeridindeki en büyük proje: 7 konut bloğu ve yerinde 5 yıldızlı bir otel."
        },
        {
          "title": "2024, New Level'in kendi projelerinin inşaatına başlanması",
          "text": "New Level Premium Avsallar'da inşaat çalışmaları başladı."
        },
        {
          "title": "2024, Antalya'da yeni ofis",
          "text": "2024 yılında Antalya'da modern bir ofis açarak müşterilerimiz için fırsatları genişletmeye devam ettik."
        },
        {
          "title": "2024, New Level Villas inşaatı",
          "text": "Villalar Alanya'nın İncekum bölgesinde yer almaktadır. İnşa edilmiş ve hizmete açılmışlardır."
        },
        {
          "title": "2024, New Level Panorama",
          "text": "Alanya'nın merkezinde deniz manzaralı bir kompleks. Geniş yerleşim planları, manzaralı daireler. Kompleks inşa edilmiş ve kullanıma açılmıştır."
        },
        {
          "title": "2024, Alanya Konakli'da New Level Akropora inşaatı başladı",
          "text": "Tesis devreye alındı ve kullanıma sunuldu."
        },
        {
          "title": "2024, Alanya merkezinde New Level Cleopatra 1 ve New Level Cleopatra 2 kompleksleri",
          "text": "Alanya merkezinde, altyapısı tamamlanmış kompleksler. İnşa edildi ve kullanıma açıldı."
        },
        {
          "title": "2025, Alanya'da yeni ofis",
          "text": "Alanya'da yeni bir dönemin başlangıcı. Müşterilerimize daha da yakın olmak ve Türk gayrimenkul piyasasında en iyi çözümleri sunmak için Alanya'da yeni bir ofis açtık."
        },
        {
          "title": "2025, New Level Dream",
          "text": "MEGAYACHTS projesi, hırslı iş insanları için karlı bir yatırım nişinde yer edinmek ve yeni bir gelir seviyesine ulaşmak için eşsiz bir fırsattır."
        },
        {
          "title": "2025, Alanya ve Antalya'da Elis Concept mobilya mağazası",
          "text": "Elis Concept'in kendi mobilya fabrikası ve mağazası, ayrıca Vestel ev aletleri."
        }
      ]
    },
    "team": {
      "en": [],
      "ru": [],
      "tr": []
    },
    "departments": {
      "en": [],
      "ru": [],
      "tr": []
    }
  },
  "privacy": {
    "slug": "privacy",
    "layout": "default",
    "images": [],
    "title": {
      "en": "Privacy Policy",
      "ru": "Политика конфиденциальности",
      "tr": "Gizlilik Politikası"
    },
    "intro": {
      "en": "New Level Group respects your privacy. This page explains what personal data we collect through this website, why we collect it, and the rights you have.",
      "ru": "New Level Group уважает вашу конфиденциальность. На этой странице описано, какие персональные данные мы собираем через этот сайт, зачем и какие у вас есть права.",
      "tr": "New Level Group gizliliğinize saygı duyar. Bu sayfa, bu web sitesi aracılığıyla hangi kişisel verileri topladığımızı, neden topladığımızı ve sahip olduğunuz hakları açıklar."
    },
    "body": {
      "en": "About this policy\nThis policy is aligned with the Turkish Personal Data Protection Law (KVKK) and, where applicable, the EU General Data Protection Regulation (GDPR).\n\nData we collect\nWe only collect the data you choose to share with us, typically your name, phone number, email address and any message you send through our contact and consultation forms, or when you reach us on WhatsApp, by phone or by email.\n\nHow we use your data\nWe use your data to respond to your enquiry, arrange viewings and consultations, prepare property offers, and provide the after-sales, residence permit and citizenship services you request. We do not sell your personal data.\n\nLegal basis\nWe process your data on the basis of your consent and to take steps at your request before entering into a contract.\n\nSharing\nWe may share only the necessary data with our own team and with trusted partners such as notaries, translators or banks, strictly to deliver the service you asked for. We do not share your data for third party marketing.\n\nCookies\nThis website uses only the cookies needed to make it work and to understand basic, anonymous usage. You can control cookies in your browser settings.\n\nYour rights\nYou may request access to your data, ask us to correct or delete it, or withdraw your consent at any time. To exercise these rights, contact us using the details below.\n\nData retention\nWe keep your data only for as long as needed to serve you and to meet our legal obligations, then delete it.\n\nContact\nFor any privacy question or request, email info@newlevel-group.com or call +90 545 422 40 70. This policy may be updated from time to time, so please check this page for the latest version.",
      "ru": "Об этой политике\nПолитика соответствует турецкому Закону о защите персональных данных (KVKK) и, где применимо, Общему регламенту ЕС по защите данных (GDPR).\n\nКакие данные мы собираем\nМы собираем только те данные, которыми вы решаете поделиться: как правило, имя, номер телефона, адрес электронной почты и сообщение, которое вы отправляете через формы обратной связи и консультации, либо когда вы пишете нам в WhatsApp, звоните или пишете на почту.\n\nКак мы используем данные\nМы используем данные, чтобы ответить на ваш запрос, организовать показы и консультации, подготовить предложения по недвижимости и оказать запрошенные вами услуги: послепродажный сервис, ВНЖ и гражданство. Мы не продаём ваши персональные данные.\n\nПравовое основание\nМы обрабатываем данные на основании вашего согласия и для совершения действий по вашему запросу до заключения договора.\n\nПередача данных\nМы можем передавать только необходимые данные нашей команде и проверенным партнёрам, таким как нотариусы, переводчики или банки, исключительно для оказания запрошенной вами услуги. Мы не передаём данные для стороннего маркетинга.\n\nФайлы cookie\nСайт использует только те cookie, которые нужны для его работы и для базовой анонимной аналитики. Управлять cookie можно в настройках браузера.\n\nВаши права\nВы можете запросить доступ к своим данным, попросить исправить или удалить их либо отозвать согласие в любой момент. Для этого свяжитесь с нами по контактам ниже.\n\nСрок хранения\nМы храним данные только столько, сколько необходимо для обслуживания и выполнения наших юридических обязательств, после чего удаляем их.\n\nКонтакты\nПо любым вопросам о конфиденциальности пишите на info@newlevel-group.com или звоните +90 545 422 40 70. Политика может периодически обновляться, поэтому проверяйте эту страницу для актуальной версии.",
      "tr": "Bu politika hakkında\nBu politika, Türkiye Kişisel Verilerin Korunması Kanunu (KVKK) ve uygun olduğu durumlarda AB Genel Veri Koruma Tüzüğü (GDPR) ile uyumludur.\n\nTopladığımız veriler\nYalnızca paylaşmayı seçtiğiniz verileri toplarız; genellikle adınız, telefon numaranız, e-posta adresiniz ve iletişim ile danışmanlık formlarımız aracılığıyla gönderdiğiniz mesaj, ya da bize WhatsApp, telefon veya e-posta ile ulaştığınızda paylaştığınız bilgiler.\n\nVerilerinizi nasıl kullanırız\nVerilerinizi talebinize yanıt vermek, görüşme ve danışmanlık ayarlamak, gayrimenkul teklifleri hazırlamak ve talep ettiğiniz satış sonrası, oturma izni ve vatandaşlık hizmetlerini sunmak için kullanırız. Kişisel verilerinizi satmayız.\n\nHukuki dayanak\nVerilerinizi, açık rızanıza dayanarak ve bir sözleşme kurulmadan önce talebiniz üzerine adım atmak için işleriz.\n\nPaylaşım\nYalnızca gerekli verileri kendi ekibimizle ve talep ettiğiniz hizmeti sunmak amacıyla noter, tercüman veya bankalar gibi güvenilir iş ortaklarıyla paylaşabiliriz. Verilerinizi üçüncü taraf pazarlaması için paylaşmayız.\n\nÇerezler\nBu web sitesi yalnızca çalışması ve temel, anonim kullanımı anlamak için gereken çerezleri kullanır. Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz.\n\nHaklarınız\nVerilerinize erişim talep edebilir, düzeltilmesini veya silinmesini isteyebilir ya da rızanızı istediğiniz zaman geri çekebilirsiniz. Bu hakları kullanmak için aşağıdaki bilgilerden bize ulaşın.\n\nVerilerin saklanması\nVerilerinizi yalnızca size hizmet vermek ve yasal yükümlülüklerimizi yerine getirmek için gereken süre boyunca saklar, ardından sileriz.\n\nİletişim\nGizlilikle ilgili her türlü soru veya talep için info@newlevel-group.com adresine e-posta gönderin veya +90 545 422 40 70 numarasını arayın. Bu politika zaman zaman güncellenebilir, bu nedenle en güncel sürüm için bu sayfayı kontrol edin."
    },
    "cards": {
      "en": [],
      "ru": [],
      "tr": []
    },
    "team": {
      "en": [],
      "ru": [],
      "tr": []
    },
    "departments": {
      "en": [],
      "ru": [],
      "tr": []
    }
  },
  "team": {
    "slug": "team",
    "layout": "team",
    "images": [],
    "title": {
      "en": "New Level Group team",
      "ru": "Команда New Level Group",
      "tr": "Ekibimiz"
    },
    "intro": {
      "en": "The people behind every project, sale and key handover. A multilingual team across Alanya, Antalya and Mersin.",
      "ru": "Люди, которые стоят за каждым проектом, сделкой и передачей ключей. Многоязычная команда в Аланье, Анталии и Мерсине.",
      "tr": "Her projenin, satışın ve anahtar tesliminin arkasındaki insanlar. Alanya, Antalya ve Mersin'de çok dilli bir ekip."
    },
    "body": {
      "en": "",
      "ru": "",
      "tr": ""
    },
    "cards": {
      "en": [],
      "ru": [],
      "tr": []
    },
    "team": {
      "en": [
        {
          "name": "FATIH KABAKCI",
          "role": "partner and head of the company",
          "phone": "+905078122181",
          "phoneHref": "tel:+905078122181",
          "languages": "Turkish, Russian",
          "photo": "https://newlevel-group.com/storage/1868/conversions/fd147c3c_5ebf_4ffd_a39f_de04a163709b-w400_crop.webp",
          "department": "Leadership"
        },
        {
          "name": "MUSTAFA AKKUŞ",
          "role": "Head of the Alanya office",
          "phone": "+905455746640",
          "phoneHref": "tel:+905455746640",
          "languages": "Turkish, English",
          "photo": "https://newlevel-group.com/storage/1869/conversions/1288ef5e_8ccb_4dee_b6f5_b940551e05e4-w400_crop.webp",
          "department": "Leadership"
        },
        {
          "name": "ALEXANDRA KABAKCHI",
          "role": "director and partner of the company",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Ukrainian, English, Turkish",
          "photo": "https://newlevel-group.com/storage/1864/conversions/c9fde162_6d7d_4e9c_829a_e59511a67eff-w400_crop.webp",
          "department": "Real Estate Agency"
        },
        {
          "name": "TATYANA OSIPOVA AIDOS",
          "role": "Head of Sales",
          "phone": "+905551420084",
          "phoneHref": "tel:+905551420084",
          "languages": "Russian, Ukrainian, Turkish, English",
          "photo": "https://newlevel-group.com/storage/1870/conversions/1261bff9_8ae9_4587_be7c_9dc278fca7e8-w400_crop.webp",
          "department": "Real Estate Agency"
        },
        {
          "name": "MARIA FILATOVA",
          "role": "online consultant",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Ukrainian, Turkish, English",
          "photo": "https://newlevel-group.com/storage/1867/conversions/be02db62_a599_4c1b_b4fd_6788c35f4f12-w400_crop.webp",
          "department": "Real Estate Agency"
        },
        {
          "name": "MARAL",
          "role": "Sales Manager in Alanya and Mersin",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish, English",
          "photo": "https://newlevel-group.com/storage/1953/conversions/a6985a31_90cf_44b4_a3ab_b1a676c1132e-w400_crop.webp",
          "department": "Real Estate Agency"
        },
        {
          "name": "VICTORIA SAKIN",
          "role": "sales manager",
          "phone": "+905051420087",
          "phoneHref": "tel:+905051420087",
          "languages": "Russian, Ukrainian, Turkish",
          "photo": "https://newlevel-group.com/storage/1966/conversions/dizain_bez_nazvaniia_12-w400_crop.webp",
          "department": "Real Estate Agency"
        },
        {
          "name": "ALEXANDER DUBOVIK",
          "role": "sales manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish",
          "photo": "https://newlevel-group.com/storage/1967/conversions/dizain_bez_nazvaniia_13-w400_crop.webp",
          "department": "Real Estate Agency"
        },
        {
          "name": "ELENA CHERNYAVSKAYA",
          "role": "sales manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish",
          "photo": "https://newlevel-group.com/storage/1968/conversions/dizain_bez_nazvaniia_14-w400_crop.webp",
          "department": "Real Estate Agency"
        },
        {
          "name": "DARIA RESHETNYUK",
          "role": "sales manager",
          "phone": "+905522970084",
          "phoneHref": "tel:+905522970084",
          "languages": "Russian",
          "photo": "https://newlevel-group.com/storage/1944/chatgpt_image_17_maia_2026_g_15_57_49.png",
          "department": "Construction"
        },
        {
          "name": "MUSA SARACH",
          "role": "Sales and Portfolio Manager",
          "phone": "+905491356569",
          "phoneHref": "tel:+905491356569",
          "languages": "Turkish",
          "photo": "https://newlevel-group.com/storage/1945/b6ccf4ea_677b_41e2_ab5a_223969cbaac9.PNG",
          "department": "Construction"
        },
        {
          "name": "ELMIRA HUSSEIN",
          "role": "sales manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish",
          "photo": "https://newlevel-group.com/storage/1946/4f5ed18d_a483_4faf_97c0_c9cfc3bffd81.PNG",
          "department": "Construction"
        },
        {
          "name": "VASILY POTAKHIN",
          "role": "Head of Hotel Rental Department",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish",
          "photo": "https://newlevel-group.com/storage/1866/83c27106_2327_4697_b5e4_5b94091eed94_2.jpg",
          "department": "Rental"
        },
        {
          "name": "ELENA KHARENKO",
          "role": "rental manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Ukrainian, Russian, English, Turkish, German",
          "photo": "https://newlevel-group.com/storage/1961/dizain_bez_nazvaniia_7.png",
          "department": "Rental"
        },
        {
          "name": "NURIA KHAIROVA",
          "role": "rental manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, English, Turkish",
          "photo": "https://newlevel-group.com/storage/1963/dizain_bez_nazvaniia_9.png",
          "department": "Rental"
        },
        {
          "name": "ALEXANDER BUNAKALYA",
          "role": "rental manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Ukrainian",
          "photo": "https://newlevel-group.com/storage/1964/dizain_bez_nazvaniia_10.png",
          "department": "Rental"
        },
        {
          "name": "EMRE ULUG",
          "role": "Head of After-Sales Service Department",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Turkish, Russian",
          "photo": "https://newlevel-group.com/storage/1958/dizain_bez_nazvaniia_4.png",
          "department": "After-sales service"
        },
        {
          "name": "OLGA UYSAL",
          "role": "after-sales department manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Ukrainian, Turkish",
          "photo": "https://newlevel-group.com/storage/1957/dizain_bez_nazvaniia_3.png",
          "department": "After-sales service"
        },
        {
          "name": "ŞÜKRÜ TÜRKYELI",
          "role": "financial director",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Turkish",
          "photo": "https://newlevel-group.com/storage/1969/dizain_bez_nazvaniia_15.png",
          "department": "Accounting and legal"
        },
        {
          "name": "PELIN SINEM SEZER",
          "role": "accountant of the construction department",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Turkish",
          "photo": "https://newlevel-group.com/storage/1947/img_9263.PNG",
          "department": "Accounting and legal"
        },
        {
          "name": "JULIA BARUT",
          "role": "Head of the Antalya Office",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish, English",
          "photo": "https://newlevel-group.com/storage/1959/dizain_bez_nazvaniia_5.png",
          "department": "Antalya office"
        },
        {
          "name": "VICTORIA KALYN",
          "role": "sales manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish",
          "photo": "https://newlevel-group.com/storage/1960/dizain_bez_nazvaniia_6.png",
          "department": "Antalya office"
        },
        {
          "name": "NATALIA YILMAZ",
          "role": "sales manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish",
          "photo": "https://newlevel-group.com/storage/1952/752f637b_ca95_4b68_adec_50b58bb2b30a.PNG",
          "department": "Antalya office"
        },
        {
          "name": "DANILA GASILIN",
          "role": "portfolio manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Russian, Turkish",
          "photo": "https://newlevel-group.com/storage/1962/dizain_bez_nazvaniia_8.png",
          "department": "Portfolio"
        },
        {
          "name": "HAKAN AKYLLY",
          "role": "portfolio manager",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Turkish",
          "photo": "https://newlevel-group.com/storage/1970/dizain_bez_nazvaniia_16.png",
          "department": "Portfolio"
        }
      ],
      "ru": [
        {
          "name": "ФАТИХ КАБАКЧИ",
          "role": "партнер и руководитель компании",
          "phone": "+905078122181",
          "phoneHref": "tel:+905078122181",
          "languages": "турецкий, русский",
          "photo": "https://newlevel-group.com/storage/1868/conversions/fd147c3c_5ebf_4ffd_a39f_de04a163709b-w400_crop.webp",
          "department": "Руководители"
        },
        {
          "name": "МУСТАФА АККУШ",
          "role": "руководитель офиса в Аланье",
          "phone": "+905455746640",
          "phoneHref": "tel:+905455746640",
          "languages": "турецкий, английский",
          "photo": "https://newlevel-group.com/storage/1869/conversions/1288ef5e_8ccb_4dee_b6f5_b940551e05e4-w400_crop.webp",
          "department": "Руководители"
        },
        {
          "name": "АЛЕКСАНДРА КАБАКЧИ",
          "role": "руководитель и партнер компании",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, украинский, английский, турецкий",
          "photo": "https://newlevel-group.com/storage/1864/conversions/c9fde162_6d7d_4e9c_829a_e59511a67eff-w400_crop.webp",
          "department": "Отдел агентства недвижимости"
        },
        {
          "name": "ТАТЬЯНА ОСИПОВА АЙДОС",
          "role": "руководитель отдела продаж",
          "phone": "+905551420084",
          "phoneHref": "tel:+905551420084",
          "languages": "русский, украинский, турецкий, английский",
          "photo": "https://newlevel-group.com/storage/1870/conversions/1261bff9_8ae9_4587_be7c_9dc278fca7e8-w400_crop.webp",
          "department": "Отдел агентства недвижимости"
        },
        {
          "name": "МАРИЯ ФИЛАТОВА",
          "role": "онлайн консультант",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, украинский, турецкий, английский",
          "photo": "https://newlevel-group.com/storage/1867/conversions/be02db62_a599_4c1b_b4fd_6788c35f4f12-w400_crop.webp",
          "department": "Отдел агентства недвижимости"
        },
        {
          "name": "МАРАЛ",
          "role": "менеджер по продажам в Аланье и Мерсине",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий, английский",
          "photo": "https://newlevel-group.com/storage/1953/conversions/a6985a31_90cf_44b4_a3ab_b1a676c1132e-w400_crop.webp",
          "department": "Отдел агентства недвижимости"
        },
        {
          "name": "ВИКТОРИЯ САКИН",
          "role": "менеджер по продажам",
          "phone": "+905051420087",
          "phoneHref": "tel:+905051420087",
          "languages": "русский, украинский, турецкий",
          "photo": "https://newlevel-group.com/storage/1966/conversions/dizain_bez_nazvaniia_12-w400_crop.webp",
          "department": "Отдел агентства недвижимости"
        },
        {
          "name": "АЛЕКСАНДР ДУБОВИК",
          "role": "менеджер по продажам",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий",
          "photo": "https://newlevel-group.com/storage/1967/conversions/dizain_bez_nazvaniia_13-w400_crop.webp",
          "department": "Отдел агентства недвижимости"
        },
        {
          "name": "ЕЛЕНА ЧЕРНЯВСКАЯ",
          "role": "менеджер по продажам",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий",
          "photo": "https://newlevel-group.com/storage/1968/conversions/dizain_bez_nazvaniia_14-w400_crop.webp",
          "department": "Отдел агентства недвижимости"
        },
        {
          "name": "ДАРЬЯ РЕШЕТНЮК",
          "role": "менеджер по продажам",
          "phone": "+905522970084",
          "phoneHref": "tel:+905522970084",
          "languages": "русский",
          "photo": "https://newlevel-group.com/storage/1944/chatgpt_image_17_maia_2026_g_15_57_49.png",
          "department": "Строительный департамент"
        },
        {
          "name": "МУСА САРАЧ",
          "role": "менеджер по продажам и портфолио",
          "phone": "+905491356569",
          "phoneHref": "tel:+905491356569",
          "languages": "турецкий",
          "photo": "https://newlevel-group.com/storage/1945/b6ccf4ea_677b_41e2_ab5a_223969cbaac9.PNG",
          "department": "Строительный департамент"
        },
        {
          "name": "ЭЛЬМИРА ХУСЕЙН",
          "role": "менеджер по продажам",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий",
          "photo": "https://newlevel-group.com/storage/1946/4f5ed18d_a483_4faf_97c0_c9cfc3bffd81.PNG",
          "department": "Строительный департамент"
        },
        {
          "name": "ВАСИЛИЙ ПОТАХИН",
          "role": "руководитель отдела аренды",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий",
          "photo": "https://newlevel-group.com/storage/1866/83c27106_2327_4697_b5e4_5b94091eed94_2.jpg",
          "department": "Отдел аренды"
        },
        {
          "name": "ЕЛЕНА ХАРЕНКО",
          "role": "менеджер по аренде",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "украинский, русский, английский, турецкий, немецкий",
          "photo": "https://newlevel-group.com/storage/1961/dizain_bez_nazvaniia_7.png",
          "department": "Отдел аренды"
        },
        {
          "name": "НУРИЯ ХАИРОВА",
          "role": "менеджер по аренде",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, английский, турецкий",
          "photo": "https://newlevel-group.com/storage/1963/dizain_bez_nazvaniia_9.png",
          "department": "Отдел аренды"
        },
        {
          "name": "АЛЕКСАНДР БУНАКАЛЯ",
          "role": "менеджер по аренде",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, украинский",
          "photo": "https://newlevel-group.com/storage/1964/dizain_bez_nazvaniia_10.png",
          "department": "Отдел аренды"
        },
        {
          "name": "ЭМРЕ УЛУГ",
          "role": "руководитель отдела постпродажного обслуживания",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "турецкий, русский",
          "photo": "https://newlevel-group.com/storage/1958/dizain_bez_nazvaniia_4.png",
          "department": "Постпродажное обслуживание"
        },
        {
          "name": "ОЛЬГА УЙСАЛ",
          "role": "менеджер постпродажного отдела",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, украинский, турецкий",
          "photo": "https://newlevel-group.com/storage/1957/dizain_bez_nazvaniia_3.png",
          "department": "Постпродажное обслуживание"
        },
        {
          "name": "ШЮКРЮ ТЮРКЙЕЛИ",
          "role": "финансовый директор",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "турецкий",
          "photo": "https://newlevel-group.com/storage/1969/dizain_bez_nazvaniia_15.png",
          "department": "Бухгалтерия и юридический отдел"
        },
        {
          "name": "ПЕЛИН СИНЕМ СЕЗЕР",
          "role": "бухгалтер строительного отдела",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "турецкий",
          "photo": "https://newlevel-group.com/storage/1947/img_9263.PNG",
          "department": "Бухгалтерия и юридический отдел"
        },
        {
          "name": "ЮЛИЯ БАРУТ",
          "role": "руководитель офиса в Анталии",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий, английский",
          "photo": "https://newlevel-group.com/storage/1959/dizain_bez_nazvaniia_5.png",
          "department": "Офис в Анталии"
        },
        {
          "name": "ВИКТОРИЯ КАЛЫН",
          "role": "менеджер по продажам",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий",
          "photo": "https://newlevel-group.com/storage/1960/dizain_bez_nazvaniia_6.png",
          "department": "Офис в Анталии"
        },
        {
          "name": "НАТАЛИЯ ЙЫЛМАЗ",
          "role": "менеджер по продажам",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий",
          "photo": "https://newlevel-group.com/storage/1952/752f637b_ca95_4b68_adec_50b58bb2b30a.PNG",
          "department": "Офис в Анталии"
        },
        {
          "name": "ДАНИЛА ГАСИЛИН",
          "role": "менеджер по портфолио",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "русский, турецкий",
          "photo": "https://newlevel-group.com/storage/1962/dizain_bez_nazvaniia_8.png",
          "department": "Отдел портфолио"
        },
        {
          "name": "ХАКАН АКЫЛЛЫ",
          "role": "менеджер по портфолио",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "турецкий",
          "photo": "https://newlevel-group.com/storage/1970/dizain_bez_nazvaniia_16.png",
          "department": "Отдел портфолио"
        }
      ],
      "tr": [
        {
          "name": "FATİH KABAKCİ",
          "role": "ortak ve şirket başkanı",
          "phone": "+905078122181",
          "phoneHref": "tel:+905078122181",
          "languages": "Türkçe, Rusça",
          "photo": "https://newlevel-group.com/storage/1868/conversions/fd147c3c_5ebf_4ffd_a39f_de04a163709b-w400_crop.webp",
          "department": "Yöneticiler"
        },
        {
          "name": "MUSTAFA AKKUŞ",
          "role": "Alanya ofisi müdürü",
          "phone": "+905455746640",
          "phoneHref": "tel:+905455746640",
          "languages": "Türkçe, İngilizce",
          "photo": "https://newlevel-group.com/storage/1869/conversions/1288ef5e_8ccb_4dee_b6f5_b940551e05e4-w400_crop.webp",
          "department": "Yöneticiler"
        },
        {
          "name": "ALEXANDRA KABAKCHİ",
          "role": "şirketin direktörü ve ortağı",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Ukraynaca, İngilizce, Türkçe",
          "photo": "https://newlevel-group.com/storage/1864/conversions/c9fde162_6d7d_4e9c_829a_e59511a67eff-w400_crop.webp",
          "department": "Emlak Acenteliği Departmanı"
        },
        {
          "name": "TATYANA OSİPOVA AİDOS",
          "role": "Satış Müdürü",
          "phone": "+905551420084",
          "phoneHref": "tel:+905551420084",
          "languages": "Rusça, Ukraynaca, Türkçe, İngilizce",
          "photo": "https://newlevel-group.com/storage/1870/conversions/1261bff9_8ae9_4587_be7c_9dc278fca7e8-w400_crop.webp",
          "department": "Emlak Acenteliği Departmanı"
        },
        {
          "name": "MARİA FİLATOVA",
          "role": "çevrimiçi danışman",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Ukraynaca, Türkçe, İngilizce",
          "photo": "https://newlevel-group.com/storage/1867/conversions/be02db62_a599_4c1b_b4fd_6788c35f4f12-w400_crop.webp",
          "department": "Emlak Acenteliği Departmanı"
        },
        {
          "name": "MARAL",
          "role": "Alanya ve Mersin'de Satış Müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe, İngilizce",
          "photo": "https://newlevel-group.com/storage/1953/conversions/a6985a31_90cf_44b4_a3ab_b1a676c1132e-w400_crop.webp",
          "department": "Emlak Acenteliği Departmanı"
        },
        {
          "name": "VİCTORİA SAKİN",
          "role": "satış müdürü",
          "phone": "+905051420087",
          "phoneHref": "tel:+905051420087",
          "languages": "Rusça, Ukraynaca, Türkçe",
          "photo": "https://newlevel-group.com/storage/1966/conversions/dizain_bez_nazvaniia_12-w400_crop.webp",
          "department": "Emlak Acenteliği Departmanı"
        },
        {
          "name": "ALEXANDER DUBOVİK",
          "role": "satış müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe",
          "photo": "https://newlevel-group.com/storage/1967/conversions/dizain_bez_nazvaniia_13-w400_crop.webp",
          "department": "Emlak Acenteliği Departmanı"
        },
        {
          "name": "ELENA CHERNHAVSKAYA",
          "role": "satış müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe",
          "photo": "https://newlevel-group.com/storage/1968/conversions/dizain_bez_nazvaniia_14-w400_crop.webp",
          "department": "Emlak Acenteliği Departmanı"
        },
        {
          "name": "DARİA RESHETNYUK",
          "role": "satış müdürü",
          "phone": "+905522970084",
          "phoneHref": "tel:+905522970084",
          "languages": "Rusça",
          "photo": "https://newlevel-group.com/storage/1944/chatgpt_image_17_maia_2026_g_15_57_49.png",
          "department": "İnşaat Departmanı"
        },
        {
          "name": "MUSA SARACH",
          "role": "Satış ve Portföy Yöneticisi",
          "phone": "+905491356569",
          "phoneHref": "tel:+905491356569",
          "languages": "Türkçe",
          "photo": "https://newlevel-group.com/storage/1945/b6ccf4ea_677b_41e2_ab5a_223969cbaac9.PNG",
          "department": "İnşaat Departmanı"
        },
        {
          "name": "ELMİRA HÜSEYİN",
          "role": "satış müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe",
          "photo": "https://newlevel-group.com/storage/1946/4f5ed18d_a483_4faf_97c0_c9cfc3bffd81.PNG",
          "department": "İnşaat Departmanı"
        },
        {
          "name": "VASİLİ POTAKHİN",
          "role": "Otel Kiralama Departmanı Başkanı",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe",
          "photo": "https://newlevel-group.com/storage/1866/83c27106_2327_4697_b5e4_5b94091eed94_2.jpg",
          "department": "Kiralama Departmanı"
        },
        {
          "name": "ELENA KHARENKO",
          "role": "kiralama müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Ukraynaca, Rusça, İngilizce, Türkçe, Almanca",
          "photo": "https://newlevel-group.com/storage/1961/dizain_bez_nazvaniia_7.png",
          "department": "Kiralama Departmanı"
        },
        {
          "name": "NURİA KHAİROVA",
          "role": "kiralama müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, İngilizce, Türkçe",
          "photo": "https://newlevel-group.com/storage/1963/dizain_bez_nazvaniia_9.png",
          "department": "Kiralama Departmanı"
        },
        {
          "name": "ALEXANDER BUNAKALYA",
          "role": "kiralama müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Ukraynaca",
          "photo": "https://newlevel-group.com/storage/1964/dizain_bez_nazvaniia_10.png",
          "department": "Kiralama Departmanı"
        },
        {
          "name": "EMRE ULUG",
          "role": "Satış Sonrası Servis Departmanı Başkanı",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Türkçe, Rusça",
          "photo": "https://newlevel-group.com/storage/1958/dizain_bez_nazvaniia_4.png",
          "department": "Satış Sonrası Servis"
        },
        {
          "name": "OLGA UYSAL",
          "role": "satış sonrası departman müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Ukraynaca, Türkçe",
          "photo": "https://newlevel-group.com/storage/1957/dizain_bez_nazvaniia_3.png",
          "department": "Satış Sonrası Servis"
        },
        {
          "name": "ŞÜKRÜ TÜRKYELİ",
          "role": "mali direktör",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Türkçe",
          "photo": "https://newlevel-group.com/storage/1969/dizain_bez_nazvaniia_15.png",
          "department": "Muhasebe ve Hukuk Departmanı"
        },
        {
          "name": "PELİN SİNEM SEZER",
          "role": "inşaat departmanının muhasebecisi",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Türkçe",
          "photo": "https://newlevel-group.com/storage/1947/img_9263.PNG",
          "department": "Muhasebe ve Hukuk Departmanı"
        },
        {
          "name": "JULİA BARUT",
          "role": "Antalya Ofisi Müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe, İngilizce",
          "photo": "https://newlevel-group.com/storage/1959/dizain_bez_nazvaniia_5.png",
          "department": "Antalya Ofisi"
        },
        {
          "name": "VİCTORİA KALIN",
          "role": "satış müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe",
          "photo": "https://newlevel-group.com/storage/1960/dizain_bez_nazvaniia_6.png",
          "department": "Antalya Ofisi"
        },
        {
          "name": "NATALİA YILMAZ",
          "role": "satış müdürü",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe",
          "photo": "https://newlevel-group.com/storage/1952/752f637b_ca95_4b68_adec_50b58bb2b30a.PNG",
          "department": "Antalya Ofisi"
        },
        {
          "name": "DANİLA GASİLİN",
          "role": "portföy yöneticisi",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Rusça, Türkçe",
          "photo": "https://newlevel-group.com/storage/1962/dizain_bez_nazvaniia_8.png",
          "department": "Portföy Departmanı"
        },
        {
          "name": "HAKAN AKILLI",
          "role": "portföy yöneticisi",
          "phone": "+905454224070",
          "phoneHref": "tel:+905454224070",
          "languages": "Türkçe",
          "photo": "https://newlevel-group.com/storage/1970/dizain_bez_nazvaniia_16.png",
          "department": "Portföy Departmanı"
        }
      ]
    },
    "departments": {
      "en": [
        "Leadership",
        "Real Estate Agency",
        "Construction",
        "Rental",
        "After-sales service",
        "Accounting and legal",
        "Antalya office",
        "Portfolio"
      ],
      "ru": [
        "Руководители",
        "Отдел агентства недвижимости",
        "Строительный департамент",
        "Отдел аренды",
        "Постпродажное обслуживание",
        "Бухгалтерия и юридический отдел",
        "Офис в Анталии",
        "Отдел портфолио"
      ],
      "tr": [
        "Yöneticiler",
        "Emlak Acenteliği Departmanı",
        "İnşaat Departmanı",
        "Kiralama Departmanı",
        "Satış Sonrası Servis",
        "Muhasebe ve Hukuk Departmanı",
        "Antalya Ofisi",
        "Portföy Departmanı"
      ]
    }
  }
};
