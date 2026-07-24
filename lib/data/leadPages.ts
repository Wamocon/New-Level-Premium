import type { Locale } from '@/lib/types';
import { img } from '@/lib/images';

export interface LeadItem {
  title: Record<Locale, string>;
  text: Record<Locale, string>;
}
export interface LeadPageData {
  slug: string;
  image: string;
  formSubject: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  benefitsTitle: Record<Locale, string>;
  benefits: LeadItem[];
  stepsTitle: Record<Locale, string>;
  steps: LeadItem[];
}

export const leadPages: Record<string, LeadPageData> = {
  rent: {
    slug: 'rent',
    image: img('cleo2-hero', 1600, 1000),
    formSubject: 'New Level Group: rental enquiry',
    title: {
      en: 'Rentals in Alanya',
      ru: 'Аренда в Алании',
      tr: "Alanya'da kiralama",
    },
    intro: {
      en: 'Looking to rent a home by the sea, or to rent out your apartment for a steady income? Our rental team handles both, with verified tenants, full management and multilingual support across Alanya, Antalya and Mersin.',
      ru: 'Хотите арендовать жильё у моря или сдать свои апартаменты и получать стабильный доход? Наша команда аренды берёт на себя и то, и другое: проверенные арендаторы, полное управление и поддержка на нескольких языках в Аланье, Анталии и Мерсине.',
      tr: 'Deniz kenarında bir ev kiralamak ya da dairenizi kiraya verip istikrarlı gelir elde etmek mi istiyorsunuz? Kiralama ekibimiz her ikisini de üstlenir: doğrulanmış kiracılar, tam yönetim ve Alanya, Antalya ve Mersin genelinde çok dilli destek.',
    },
    benefitsTitle: {
      en: 'Renting made simple',
      ru: 'Аренда без хлопот',
      tr: 'Kiralama kolaylaştı',
    },
    benefits: [
      {
        title: { en: 'Short and long term', ru: 'Краткосрочно и долгосрочно', tr: 'Kısa ve uzun dönem' },
        text: {
          en: 'From a two-week holiday stay to a multi-year lease, we cover every rental format.',
          ru: 'От двухнедельного отпуска до многолетней аренды, мы закрываем любой формат.',
          tr: 'İki haftalık tatilden yıllarca sürecek kiralamaya kadar her formatı kapsıyoruz.',
        },
      },
      {
        title: { en: 'Verified tenants', ru: 'Проверенные арендаторы', tr: 'Doğrulanmış kiracılar' },
        text: {
          en: 'We screen and register every tenant, so your property is in safe hands.',
          ru: 'Мы проверяем и регистрируем каждого арендатора, ваша недвижимость в надёжных руках.',
          tr: 'Her kiracıyı kontrol eder ve kaydederiz, mülkünüz güvenli ellerdedir.',
        },
      },
      {
        title: { en: 'Guaranteed rent for owners', ru: 'Гарантированная аренда', tr: 'Ev sahipleri için garantili kira' },
        text: {
          en: 'Earn a fixed income that does not depend on occupancy. We find tenants and manage everything.',
          ru: 'Получайте фиксированный доход, который не зависит от загрузки. Мы находим жильцов и управляем всем.',
          tr: 'Doluluğa bağlı olmayan sabit bir gelir elde edin. Kiracıları biz buluruz ve her şeyi yönetiriz.',
        },
      },
      {
        title: { en: 'Full management', ru: 'Полное управление', tr: 'Tam yönetim' },
        text: {
          en: 'Cleaning, maintenance, bills and check-ins, handled by our after-sales team.',
          ru: 'Уборка, обслуживание, счета и заселение, всё берёт на себя наш сервисный отдел.',
          tr: 'Temizlik, bakım, faturalar ve giriş işlemleri, satış sonrası ekibimizce yürütülür.',
        },
      },
      {
        title: { en: 'Legal contracts', ru: 'Юридические договоры', tr: 'Hukuki sözleşmeler' },
        text: {
          en: 'Bilingual lease agreements and official registration, fully compliant.',
          ru: 'Двуязычные договоры аренды и официальная регистрация, всё по закону.',
          tr: 'İki dilli kira sözleşmeleri ve resmi kayıt, tümüyle mevzuata uygun.',
        },
      },
      {
        title: { en: 'Multilingual team', ru: 'Многоязычная команда', tr: 'Çok dilli ekip' },
        text: {
          en: 'Russian, English, Turkish, Ukrainian and more, we speak your language.',
          ru: 'Русский, английский, турецкий, украинский и другие, мы говорим на вашем языке.',
          tr: 'Rusça, İngilizce, Türkçe, Ukraynaca ve daha fazlası, sizin dilinizi konuşuyoruz.',
        },
      },
    ],
    stepsTitle: {
      en: 'How it works',
      ru: 'Как это работает',
      tr: 'Nasıl çalışır',
    },
    steps: [
      {
        title: { en: 'Tell us what you need', ru: 'Расскажите, что нужно', tr: 'İhtiyacınızı söyleyin' },
        text: {
          en: 'Renting a home, or renting yours out? Send us the details.',
          ru: 'Снять жильё или сдать своё? Пришлите детали.',
          tr: 'Ev mi kiralıyorsunuz, yoksa kiraya mı veriyorsunuz? Ayrıntıları gönderin.',
        },
      },
      {
        title: { en: 'We match or list', ru: 'Подбираем или публикуем', tr: 'Eşleştirir veya ilan veririz' },
        text: {
          en: 'We find you the right home, or place your apartment with verified tenants.',
          ru: 'Находим вам подходящее жильё или размещаем ваши апартаменты у проверенных жильцов.',
          tr: 'Size doğru evi buluruz ya da dairenizi doğrulanmış kiracılarla buluştururuz.',
        },
      },
      {
        title: { en: 'Contracts and keys', ru: 'Договор и ключи', tr: 'Sözleşme ve anahtarlar' },
        text: {
          en: 'We prepare the lease, register it and hand over the keys.',
          ru: 'Готовим договор, регистрируем его и передаём ключи.',
          tr: 'Kira sözleşmesini hazırlar, kaydeder ve anahtarları teslim ederiz.',
        },
      },
      {
        title: { en: 'Move in or earn', ru: 'Заселяйтесь или зарабатывайте', tr: 'Taşının veya kazanın' },
        text: {
          en: 'Enjoy your new home, or start receiving your rental income.',
          ru: 'Наслаждайтесь новым домом или начинайте получать доход от аренды.',
          tr: 'Yeni evinizin tadını çıkarın ya da kira gelirinizi almaya başlayın.',
        },
      },
    ],
  },

  partners: {
    slug: 'partners',
    image: img('premium-hero', 1600, 1000),
    formSubject: 'New Level Group: partner enquiry',
    title: {
      en: 'Partner with New Level Group',
      ru: 'Партнёрство с New Level Group',
      tr: 'New Level Group ile iş ortaklığı',
    },
    intro: {
      en: 'Grow your business with a developer that designs, builds and sells its own projects on the Alanya coast. Competitive commissions, ready marketing materials and full transaction support for agencies and referral partners worldwide.',
      ru: 'Развивайте бизнес вместе с застройщиком, который проектирует, строит и продаёт собственные проекты на побережье Алании. Конкурентные комиссии, готовые маркетинговые материалы и полное сопровождение сделок для агентств и партнёров по всему миру.',
      tr: 'Alanya kıyısında kendi projelerini tasarlayan, inşa eden ve satan bir geliştiriciyle işinizi büyütün. Dünya genelindeki acenteler ve yönlendirme ortakları için rekabetçi komisyonlar, hazır pazarlama materyalleri ve tam işlem desteği.',
    },
    benefitsTitle: {
      en: 'Why partner with us',
      ru: 'Почему стоит работать с нами',
      tr: 'Neden bizimle ortak olmalısınız',
    },
    benefits: [
      {
        title: { en: 'Competitive commission', ru: 'Конкурентная комиссия', tr: 'Rekabetçi komisyon' },
        text: {
          en: 'Attractive, transparent commissions paid on time, directly from the developer with no chain of intermediaries.',
          ru: 'Привлекательные, прозрачные комиссии, выплачиваемые вовремя напрямую от застройщика без цепочки посредников.',
          tr: 'Aracı zinciri olmadan doğrudan geliştiriciden, zamanında ödenen cazip ve şeffaf komisyonlar.',
        },
      },
      {
        title: { en: 'Direct-from-developer stock', ru: 'Объекты напрямую от застройщика', tr: 'Doğrudan geliştiriciden stok' },
        text: {
          en: 'Sell our own residential complexes with real availability, live pricing and interest-free installment options.',
          ru: 'Продавайте наши собственные жилые комплексы с реальным наличием, актуальными ценами и беспроцентной рассрочкой.',
          tr: 'Gerçek müsaitlik, güncel fiyatlandırma ve faizsiz taksit seçenekleriyle kendi konut komplekslerimizi satın.',
        },
      },
      {
        title: { en: 'Ready marketing kit', ru: 'Готовый маркетинговый кит', tr: 'Hazır pazarlama kiti' },
        text: {
          en: 'Renders, brochures, floor plans, drone footage and price lists, ready to share with your clients in three languages.',
          ru: 'Рендеры, брошюры, планировки, аэросъёмка и прайс-листы, готовые к отправке клиентам на трёх языках.',
          tr: 'Müşterilerinizle üç dilde paylaşmaya hazır render, broşür, kat planı, drone görüntüsü ve fiyat listeleri.',
        },
      },
      {
        title: { en: 'Dedicated partner manager', ru: 'Персональный менеджер', tr: 'Özel ortak yöneticisi' },
        text: {
          en: 'One person who knows the inventory and answers fast, in your language.',
          ru: 'Один менеджер, который знает все объекты и быстро отвечает на вашем языке.',
          tr: 'Envanteri bilen ve kendi dilinizde hızlı yanıt veren tek bir yetkili.',
        },
      },
      {
        title: { en: 'Co-broking support', ru: 'Поддержка ко-брокинга', tr: 'Ortak satış desteği' },
        text: {
          en: 'We host your client viewings, handle paperwork and TAPU, and keep you in the loop end to end.',
          ru: 'Мы проводим показы для ваших клиентов, готовим документы и TAPU и держим вас в курсе на каждом этапе.',
          tr: 'Müşteri görüşmelerinizi biz yapar, evrak ve TAPU işlemlerini yürütür ve sizi baştan sona bilgilendiririz.',
        },
      },
      {
        title: { en: 'After-sales you can trust', ru: 'Надёжный послепродажный сервис', tr: 'Güvenebileceğiniz satış sonrası' },
        text: {
          en: 'Property management, residence permit and citizenship support keep your clients happy long after the deal.',
          ru: 'Управление недвижимостью, помощь с ВНЖ и гражданством, ваши клиенты довольны и после сделки.',
          tr: 'Emlak yönetimi, oturma izni ve vatandaşlık desteği, müşterilerinizi anlaşmadan çok sonra da memnun tutar.',
        },
      },
    ],
    stepsTitle: {
      en: 'How it works',
      ru: 'Как это работает',
      tr: 'Nasıl çalışır',
    },
    steps: [
      {
        title: { en: 'Apply', ru: 'Заявка', tr: 'Başvuru' },
        text: {
          en: 'Send us your details and we set up your partner account.',
          ru: 'Отправьте свои данные, и мы откроем ваш партнёрский аккаунт.',
          tr: 'Bilgilerinizi gönderin, ortak hesabınızı oluşturalım.',
        },
      },
      {
        title: { en: 'Get access', ru: 'Доступ', tr: 'Erişim' },
        text: {
          en: 'Receive live inventory, prices and the full marketing kit.',
          ru: 'Получите актуальные объекты, цены и полный маркетинговый кит.',
          tr: 'Güncel envanter, fiyatlar ve tam pazarlama kitini alın.',
        },
      },
      {
        title: { en: 'Bring your client', ru: 'Приводите клиента', tr: 'Müşterinizi getirin' },
        text: {
          en: 'We host the viewing and support the sale together.',
          ru: 'Мы проводим показ и вместе ведём сделку.',
          tr: 'Görüşmeyi biz yapar, satışı birlikte destekleriz.',
        },
      },
      {
        title: { en: 'Close and get paid', ru: 'Сделка и выплата', tr: 'Kapatın ve ödeme alın' },
        text: {
          en: 'The deal closes, TAPU is issued and your commission is paid.',
          ru: 'Сделка закрывается, оформляется TAPU, выплачивается комиссия.',
          tr: 'Anlaşma tamamlanır, TAPU verilir ve komisyonunuz ödenir.',
        },
      },
    ],
  },

  'sell-property': {
    slug: 'sell-property',
    image: img('type-apartment', 1600, 1000),
    formSubject: 'New Level Group: sell my property',
    title: {
      en: 'Sell your property in Alanya',
      ru: 'Продайте вашу недвижимость в Алании',
      tr: "Alanya'daki mülkünüzü satın",
    },
    intro: {
      en: 'List your home with a team that sells across Europe, Russia and Türkiye. Free valuation, professional photography and a database of ready, pre-qualified buyers, with full legal and TAPU support all the way to the deal.',
      ru: 'Доверьте продажу команде, которая работает с покупателями из Европы, России и Турции. Бесплатная оценка, профессиональная съёмка и база готовых покупателей, с полным юридическим сопровождением и TAPU вплоть до сделки.',
      tr: 'Avrupa, Rusya ve Türkiye genelinde satış yapan bir ekibe evinizi emanet edin. Ücretsiz değerleme, profesyonel fotoğraf ve hazır, ön onaylı alıcı veritabanı; anlaşmaya kadar tam hukuki ve TAPU desteğiyle.',
    },
    benefitsTitle: {
      en: 'Why sell with us',
      ru: 'Почему стоит продавать с нами',
      tr: 'Neden bizimle satmalısınız',
    },
    benefits: [
      {
        title: { en: 'Free market valuation', ru: 'Бесплатная оценка', tr: 'Ücretsiz değerleme' },
        text: {
          en: 'An accurate, data-driven price based on live demand in your district, at no cost and no obligation.',
          ru: 'Точная цена на основе реального спроса в вашем районе, бесплатно и без обязательств.',
          tr: 'Bölgenizdeki güncel talebe dayalı doğru fiyat, ücretsiz ve yükümlülük olmadan.',
        },
      },
      {
        title: { en: 'International buyer network', ru: 'Международная база покупателей', tr: 'Uluslararası alıcı ağı' },
        text: {
          en: 'We show your property to our multilingual clients who are already looking to buy on the coast.',
          ru: 'Мы показываем ваш объект нашей многоязычной базе клиентов, которые уже ищут жильё на побережье.',
          tr: 'Mülkünüzü, kıyıda aktif olarak satın almak isteyen çok dilli müşteri tabanımıza gösteririz.',
        },
      },
      {
        title: { en: 'Professional media', ru: 'Профессиональная съёмка', tr: 'Profesyonel medya' },
        text: {
          en: 'Photography, drone footage and a polished listing that make your property stand out.',
          ru: 'Фотосъёмка, аэросъёмка и продуманное объявление, которые выделяют ваш объект.',
          tr: 'Mülkünüzü öne çıkaran fotoğraf, drone çekimi ve özenli bir ilan.',
        },
      },
      {
        title: { en: 'Legal and TAPU support', ru: 'Юридическая помощь и TAPU', tr: 'Hukuki ve TAPU desteği' },
        text: {
          en: 'We handle contracts, translations and the title transfer so the sale is safe and smooth.',
          ru: 'Мы берём на себя договоры, переводы и передачу собственности, продажа проходит безопасно и спокойно.',
          tr: 'Sözleşmeleri, çevirileri ve tapu devrini biz yürütürüz; satış güvenli ve sorunsuz olur.',
        },
      },
      {
        title: { en: 'No upfront fees', ru: 'Без предоплаты', tr: 'Ön ödeme yok' },
        text: {
          en: 'You pay only when the sale completes. Valuation and listing cost you nothing.',
          ru: 'Вы платите только после завершения продажи. Оценка и размещение бесплатны.',
          tr: 'Yalnızca satış tamamlandığında ödersiniz. Değerleme ve ilan ücretsizdir.',
        },
      },
      {
        title: { en: 'Multilingual negotiation', ru: 'Переговоры на вашем языке', tr: 'Çok dilli müzakere' },
        text: {
          en: 'Russian, English, Turkish, Ukrainian and more, we speak your buyer’s language.',
          ru: 'Русский, английский, турецкий, украинский и другие, мы говорим на языке вашего покупателя.',
          tr: 'Rusça, İngilizce, Türkçe, Ukraynaca ve daha fazlası; alıcınızın dilini konuşuyoruz.',
        },
      },
    ],
    stepsTitle: {
      en: 'From listing to keys',
      ru: 'От объявления до ключей',
      tr: 'İlandan anahtara',
    },
    steps: [
      {
        title: { en: 'Request a valuation', ru: 'Запросите оценку', tr: 'Değerleme isteyin' },
        text: {
          en: 'Tell us about your property and we prepare a free market valuation.',
          ru: 'Расскажите о вашем объекте, и мы подготовим бесплатную оценку.',
          tr: 'Mülkünüzü anlatın, ücretsiz bir değerleme hazırlayalım.',
        },
      },
      {
        title: { en: 'We photograph and list', ru: 'Мы снимаем и публикуем', tr: 'Fotoğraflar ve ilan veririz' },
        text: {
          en: 'Professional media and a listing across our channels in three languages.',
          ru: 'Профессиональная съёмка и публикация на наших каналах на трёх языках.',
          tr: 'Profesyonel medya ve kanallarımızda üç dilde ilan.',
        },
      },
      {
        title: { en: 'We match buyers', ru: 'Подбираем покупателей', tr: 'Alıcı buluruz' },
        text: {
          en: 'We introduce pre-qualified buyers and arrange viewings.',
          ru: 'Приводим проверенных покупателей и организуем показы.',
          tr: 'Ön onaylı alıcıları tanıtır ve görüşmeleri ayarlarız.',
        },
      },
      {
        title: { en: 'We close the deal', ru: 'Закрываем сделку', tr: 'Anlaşmayı kapatırız' },
        text: {
          en: 'Contracts, payment and TAPU transfer, handled end to end.',
          ru: 'Договоры, оплата и передача TAPU, полностью под ключ.',
          tr: 'Sözleşmeler, ödeme ve TAPU devri, baştan sona yönetilir.',
        },
      },
    ],
  },

  vacancies: {
    slug: 'vacancies',
    image: 'https://newlevel-group.com/storage/1789/conversions/1-w800.webp',
    formSubject: 'New Level Group: job application / CV',
    title: {
      en: 'Careers at New Level Group',
      ru: 'Вакансии в New Level Group',
      tr: "New Level Group'ta kariyer",
    },
    intro: {
      en: 'Join a fast-growing team on the Mediterranean coast, with offices in Alanya, Antalya and Mersin. We are always glad to meet talented sales managers, agents and support specialists. No open role that fits right now? Send your CV anyway, we keep great people in mind.',
      ru: 'Присоединяйтесь к быстрорастущей команде на побережье Средиземного моря, с офисами в Аланье, Анталии и Мерсине. Мы всегда рады талантливым менеджерам по продажам, агентам и специалистам поддержки. Нет подходящей вакансии сейчас? Присылайте резюме, мы помним о сильных кандидатах.',
      tr: 'Alanya, Antalya ve Mersin ofisleriyle Akdeniz kıyısında hızla büyüyen bir ekibe katılın. Yetenekli satış müdürleri, danışmanlar ve destek uzmanlarıyla tanışmaktan her zaman memnuniyet duyarız. Şu an size uygun bir pozisyon yok mu? Yine de CV’nizi gönderin, iyi insanları aklımızda tutarız.',
    },
    benefitsTitle: {
      en: 'Why join us',
      ru: 'Почему стоит присоединиться',
      tr: 'Neden bize katılmalısınız',
    },
    benefits: [
      {
        title: { en: 'International team', ru: 'Международная команда', tr: 'Uluslararası ekip' },
        text: {
          en: 'Work alongside a multilingual team serving clients from across Europe, Russia and Türkiye.',
          ru: 'Работайте в многоязычной команде, которая обслуживает клиентов из Европы, России и Турции.',
          tr: 'Avrupa, Rusya ve Türkiye’den müşterilere hizmet veren çok dilli bir ekiple çalışın.',
        },
      },
      {
        title: { en: 'Real growth', ru: 'Реальный рост', tr: 'Gerçek büyüme' },
        text: {
          en: 'A developer expanding across the coast, with room to grow your career with us.',
          ru: 'Застройщик, растущий по всему побережью, с возможностями для развития карьеры.',
          tr: 'Kıyı boyunca büyüyen bir geliştirici; kariyerinizi geliştirmeniz için alan.',
        },
      },
      {
        title: { en: 'Competitive pay and bonuses', ru: 'Достойная оплата и бонусы', tr: 'Rekabetçi ücret ve primler' },
        text: {
          en: 'A strong base plus performance bonuses that reward results.',
          ru: 'Хорошая база плюс бонусы за результат.',
          tr: 'Güçlü bir taban maaş ve sonuçları ödüllendiren performans primleri.',
        },
      },
      {
        title: { en: 'Modern offices by the sea', ru: 'Современные офисы у моря', tr: 'Deniz kenarında modern ofisler' },
        text: {
          en: 'Bright, well-located offices in Alanya, Antalya and Mersin.',
          ru: 'Светлые офисы в удобных локациях Аланьи, Анталии и Мерсина.',
          tr: 'Alanya, Antalya ve Mersin’de aydınlık, merkezi ofisler.',
        },
      },
      {
        title: { en: 'Training and mentorship', ru: 'Обучение и наставничество', tr: 'Eğitim ve mentorluk' },
        text: {
          en: 'Onboarding, product training and mentoring from experienced managers.',
          ru: 'Адаптация, обучение по продукту и наставничество от опытных менеджеров.',
          tr: 'Oryantasyon, ürün eğitimi ve deneyimli yöneticilerden mentorluk.',
        },
      },
      {
        title: { en: 'Relocation support', ru: 'Помощь с переездом', tr: 'Taşınma desteği' },
        text: {
          en: 'Moving to Türkiye? We help with the practical side of settling in.',
          ru: 'Переезжаете в Турцию? Мы помогаем с практическими вопросами обустройства.',
          tr: 'Türkiye’ye mi taşınıyorsunuz? Yerleşmenin pratik tarafında yardımcı oluruz.',
        },
      },
    ],
    stepsTitle: {
      en: 'How to apply',
      ru: 'Как откликнуться',
      tr: 'Nasıl başvurulur',
    },
    steps: [
      {
        title: { en: 'Send your CV', ru: 'Отправьте резюме', tr: 'CV’nizi gönderin' },
        text: {
          en: 'Fill in the form or message us on WhatsApp with your CV attached.',
          ru: 'Заполните форму или напишите нам в WhatsApp с прикреплённым резюме.',
          tr: 'Formu doldurun veya CV’nizi ekleyerek WhatsApp’tan yazın.',
        },
      },
      {
        title: { en: 'Short call', ru: 'Короткий звонок', tr: 'Kısa görüşme' },
        text: {
          en: 'We get to know you and tell you about the role and the team.',
          ru: 'Мы знакомимся и рассказываем о роли и команде.',
          tr: 'Sizi tanır, pozisyon ve ekip hakkında bilgi veririz.',
        },
      },
      {
        title: { en: 'Meet the team', ru: 'Встреча с командой', tr: 'Ekiple tanışma' },
        text: {
          en: 'An in-person or online meeting at one of our offices.',
          ru: 'Личная или онлайн встреча в одном из наших офисов.',
          tr: 'Ofislerimizden birinde yüz yüze veya çevrimiçi görüşme.',
        },
      },
      {
        title: { en: 'Welcome aboard', ru: 'Добро пожаловать', tr: 'Aramıza hoş geldiniz' },
        text: {
          en: 'Onboarding, training and your first clients, we set you up to win.',
          ru: 'Адаптация, обучение и первые клиенты, мы помогаем вам добиваться результата.',
          tr: 'Oryantasyon, eğitim ve ilk müşterileriniz; başarmanız için sizi hazırlarız.',
        },
      },
    ],
  },
};

export const leadSlugs = Object.keys(leadPages);
