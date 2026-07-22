import type { Locale } from '@/lib/types';

export interface UnitType { layout: string; area: string; priceFrom: string; }
export interface Distance { to: Record<Locale, string>; value: string; }
export interface ComplexDetailData {
  slug: string;
  images: string[];
  coordinates: { lat: number; lng: number };
  complexArea: Record<Locale, string>;
  status: Record<Locale, string>;
  description: Record<Locale, string>;
  benefits: Record<Locale, string[]>;
  unitTypes: UnitType[];
  infrastructure: Record<Locale, string[]>;
  paymentTerms: Record<Locale, string>;
  distances: Distance[];
}

// Auto-generated from the extracted complex data (scratchpad/complexes/*.json).
export const complexDetails: Record<string, ComplexDetailData> = {
  "new-level-premium": {
    "slug": "new-level-premium",
    "images": [
      "https://newlevel-group.com/storage/1232/02.jpg",
      "https://newlevel-group.com/storage/1225/10.jpg",
      "https://newlevel-group.com/storage/136221/dji_20260703114424_0002_d.JPG",
      "https://newlevel-group.com/storage/136222/dji_20260703114638_0008_d.JPG",
      "https://newlevel-group.com/storage/136223/dji_20260703114819_0011_d.JPG",
      "https://newlevel-group.com/storage/136224/dji_20260703114831_0012_d.JPG",
      "https://newlevel-group.com/storage/136225/dji_20260703114902_0013_d.JPG",
      "https://newlevel-group.com/storage/136226/dji_20260703115004_0015_d.JPG",
      "https://newlevel-group.com/storage/136227/dji_20260703115222_0020_d.JPG",
      "https://newlevel-group.com/storage/136228/dji_20260703115319_0021_d.JPG",
      "https://newlevel-group.com/storage/136229/dji_20260703115442_0023_d.JPG",
      "https://newlevel-group.com/storage/136230/dji_20260703115659_0028_d.JPG",
      "https://newlevel-group.com/storage/136231/dji_20260703115405_0022_d.JPG",
      "https://newlevel-group.com/storage/136232/dji_20260703115800_0031_d.JPG",
      "https://newlevel-group.com/storage/136233/dji_20260703115728_0029_d.JPG",
      "https://newlevel-group.com/storage/136234/dji_20260703115820_0033_d.JPG",
      "https://newlevel-group.com/storage/136235/dji_20260703115808_0032_d.JPG",
      "https://newlevel-group.com/storage/136236/dji_20260703120419_0043_d.JPG",
      "https://newlevel-group.com/storage/1233/8.jpeg",
      "https://newlevel-group.com/storage/1234/1.jpeg",
      "https://newlevel-group.com/storage/1235/2.jpeg",
      "https://newlevel-group.com/storage/1236/5.jpeg",
      "https://newlevel-group.com/storage/1237/15.jpeg",
      "https://newlevel-group.com/storage/1238/10.jpeg"
    ],
    "coordinates": {
      "lat": 36.643352,
      "lng": 31.755674
    },
    "complexArea": {
      "en": "52,000 m²",
      "ru": "52 000 м²",
      "tr": "52.000 m²"
    },
    "status": {
      "en": "Under construction (Launch: June 2023, Completion August 2026)",
      "ru": "Строится (Старт: июнь 2023 года, Завершение: август 2026 года)",
      "tr": "İnşaat halinde (Lansman: Haziran 2023, Tamamlanma: Ağustos 2026)"
    },
    "description": {
      "en": "Welcome to New Level Premium, a large-scale residential project of a new level in one of the most sought-after areas of Alanya, Avsallar. This modern complex combines spacious grounds, first-class infrastructure, a private beach, and picturesque natural landscapes. Situated just 900 meters from the famous Blue Flag-awarded Incekum Beach, the complex offers seclusion amid pine forests and panoramic views of the Mediterranean Sea and mountain peaks.\n\nAbout the project\nThe project is located on a 52,000 m² plot in one of the most picturesque corners of Avsallar, just 900 meters from the Blue Flag awarded Incekum Beach. The territory will house a 5-star hotel with year-round operation, 7 residential blocks, and extensive social and entertainment infrastructure. An important feature: the area adjacent to the complex is a protected area, which guarantees the absence of new construction and the preservation of panoramic views of the sea and nature.\n\nAll apartments are delivered with high-quality finishing on a turnkey basis.",
      "ru": "Добро пожаловать в New Level Premium, масштабный жилой проект нового уровня в одном из самых востребованных районов Алании, Авсалларе. Этот современный комплекс объединяет в себе просторную территорию, первоклассную инфраструктуру, собственный пляж и живописные природные ландшафты. Расположенный всего в 900 метрах от знаменитого пляжа Инжекум, отмеченного «Голубым флагом», комплекс предлагает уединение среди сосновых лесов и панорамы на Средиземное море и горные вершины.\n\nО проекте\nПроект расположен на участке площадью 52 000 м² в одном из самых живописных уголков Авсаллара, всего в 900 метрах от пляжа Инжекум, отмеченного «Голубым флагом». На территории будут располагаться 5-звездочный отель с круглогодичной работой, 7 жилых блоков и просторная социальная и развлекательная инфраструктура. Важная особенность: территория, прилегающая к комплексу, является заповедной зоной, что гарантирует отсутствие новых строек и сохранение панорамных видов на море и природу.\n\nВсе квартиры передаются с качественной чистовой отделкой «под ключ».",
      "tr": "Alanya'nın en gözde bölgelerinden Avsallar'da, yepyeni bir standartta büyük ölçekli bir konut projesi olan New Level Premium'a hoş geldiniz. Bu modern kompleks, geniş arazileri, birinci sınıf altyapısı, özel plajı ve pitoresk doğal manzaralarıyla öne çıkıyor. Ünlü Mavi Bayraklı İncekum Plajı'na sadece 900 metre mesafede yer alan kompleks, çam ormanları arasında tenha bir ortam ve Akdeniz ile dağ zirvelerinin panoramik manzaralarını sunuyor.\n\nProje hakkında\nProje, Avsallar'ın en güzel köşelerinden birinde, Mavi Bayrak ödüllü İncekum Plajı'na sadece 900 metre mesafede, 52.000 m²'lik bir arsa üzerinde yer almaktadır. Bu bölgede yıl boyu hizmet veren 5 yıldızlı bir otel, 7 konut bloğu ve kapsamlı sosyal ve eğlence altyapısı yer alacak. Önemli bir özellik: kompleksin bitişiğindeki alan koruma altındadır; bu da yeni yapılaşmanın önlenmesini ve denizin ve doğanın panoramik manzaralarının korunmasını garanti eder.\n\nTüm daireler yüksek kaliteli işçilikle anahtar teslimi olarak teslim edilmektedir."
    },
    "benefits": {
      "en": [
        "Premium project with a high liquidity index",
        "Suitable for residence permit and investment citizenship",
        "The first timeshare system in the region",
        "Direct access to Incekum beach (900 m) plus transfer",
        "Located next to a nature reserve",
        "Five-star hotel and comprehensive internal infrastructure",
        "Services, food, spa, and gym at a discount for residents",
        "Reception and technical support service for owners",
        "Rental guarantee from the developer",
        "Steady price growth as construction progresses",
        "Ideal for investment and comfortable living"
      ],
      "ru": [
        "Проект премиум-класса с высоким индексом ликвидности",
        "Подходит для ВНЖ и инвестиционного гражданства",
        "Первая система таймшеринга в регионе",
        "Прямой доступ к пляжу Инжекум (900 м) плюс трансфер",
        "Расположение рядом с природной заповедной зоной",
        "Пятизвездочный отель и комплексная внутренняя инфраструктура",
        "Сервис, питание, СПА и тренажерный зал со скидкой для жильцов",
        "Служба ресепшн и технической поддержки собственников",
        "Гарантия аренды от застройщика",
        "Устойчивый рост цен по мере строительства",
        "Идеально для инвестиций и комфортного проживания"
      ],
      "tr": [
        "Yüksek likidite endeksine sahip birinci sınıf proje",
        "Oturma izni ve yatırım yoluyla vatandaşlık için uygundur",
        "Bölgedeki ilk devre mülk sistemi",
        "İncekum plajına doğrudan erişim (900 m) artı transfer",
        "Doğa koruma alanının hemen yanında yer almaktadır",
        "Beş yıldızlı otel ve kapsamlı iç altyapı",
        "Bölge sakinleri için hizmetler, yemek, spa ve spor salonunda indirimler",
        "Mülk sahipleri için resepsiyon ve teknik destek hizmeti",
        "Geliştirici tarafından kiralama garantisi",
        "İnşaat ilerledikçe istikrarlı fiyat artışı",
        "Yatırım ve konforlu yaşam için ideal"
      ]
    },
    "unitTypes": [
      {
        "layout": "1+1",
        "area": "53 m²",
        "priceFrom": "136 400 EUR"
      },
      {
        "layout": "2+1",
        "area": "130 m²",
        "priceFrom": "253 000 EUR"
      },
      {
        "layout": "3+1",
        "area": "130 m²",
        "priceFrom": "228 496 EUR"
      },
      {
        "layout": "3+1",
        "area": "150 m²",
        "priceFrom": "330 000 EUR"
      }
    ],
    "infrastructure": {
      "en": [
        "Generator",
        "Football field",
        "Gym",
        "Transfer to the beach",
        "Tennis court",
        "Hamam",
        "Satellite TV",
        "Private beach",
        "Sauna",
        "Landscape garden",
        "Reception",
        "Walking paths",
        "Steam room",
        "Bicycle parking",
        "Security 24/7",
        "Table tennis",
        "Mini club",
        "Mini golf",
        "Massage rooms",
        "Shop",
        "Lobby",
        "Elevator",
        "Concierge",
        "Cafe",
        "Playroom",
        "Internet",
        "Indoor swimming pool",
        "Closed parking",
        "Intercom",
        "Jacuzzi",
        "Children's pool",
        "Playground",
        "Water park",
        "Volleyball court",
        "Video cameras",
        "Alcove",
        "Basketball court",
        "BBQ",
        "Open parking",
        "Outdoor swimming pool"
      ],
      "ru": [
        "Генератор",
        "Футбольное поле",
        "Тренажерный зал",
        "Трансфер до пляжа",
        "Теннисный корт",
        "Хамам",
        "Спутниковое ТВ",
        "Собственный пляж",
        "Сауна",
        "Ландшафтный сад",
        "Ресепшн",
        "Прогулочные дорожки",
        "Парная",
        "Парковка для велосипедов",
        "Охрана 24/7",
        "Настольный теннис",
        "Мини клуб",
        "Мини гольф",
        "Массажные кабинеты",
        "Магазин",
        "Лобби",
        "Лифт",
        "Консьерж",
        "Кафе",
        "Игровая комната",
        "Интернет",
        "Закрытый бассейн",
        "Закрытая парковка",
        "Домофон",
        "Джакузи",
        "Детский бассейн",
        "Детская площадка",
        "Аквапарк",
        "Волейбольная площадка",
        "Видеокамеры",
        "Беседка",
        "Баскетбольная площадка",
        "Барбекю",
        "Открытая парковка",
        "Открытый бассейн"
      ],
      "tr": [
        "Jeneratör",
        "Futbol sahası",
        "Spor salonu",
        "Plaja transfer",
        "Tenis kortu",
        "Hamam",
        "Uydu TV",
        "Özel plaj",
        "Sauna",
        "Peyzaj bahçesi",
        "Resepsiyon",
        "Yürüyüş yolları",
        "Buhar odası",
        "Bisiklet park yeri",
        "Güvenlik 24/7",
        "Masa tenisi",
        "Mini kulüp",
        "Mini golf",
        "Masaj odaları",
        "Mağaza",
        "Lobi",
        "Asansör",
        "Kapıcı",
        "Kafe",
        "Oyun odası",
        "İnternet",
        "Kapalı yüzme havuzu",
        "Kapalı otopark",
        "İnterkom",
        "Jakuzi",
        "Çocuk havuzu",
        "Oyun alanı",
        "Su parkı",
        "Voleybol sahası",
        "Video kameralar",
        "Oyuk",
        "Basketbol sahası",
        "Mangal",
        "Açık otopark",
        "Açık yüzme havuzu"
      ]
    },
    "paymentTerms": {
      "en": "Purchase at the construction stage with an interest-free installment plan, subject to an initial payment of 35%. The remaining amount is paid in equal installments according to the payment schedule specified in the contract. Installment provided until 10.12.2025. Down payment 35%: from 136 400 EUR. Payment frequency: quarterly. Receiving the TAPU: after 100% payment.",
      "ru": "Покупка на стадии строительства с рассрочкой без процентов при первоначальном взносе 35%. Оставшаяся сумма выплачивается равными частями по графику, зафиксированному в договоре. Рассрочка предоставляется до 10.12.2025 г. Первоначальный взнос 35%: от 136 400 EUR. Периодичность платежей: ежеквартально. Получение ТАПУ: после 100% оплаты.",
      "tr": "İnşaat aşamasında %35 peşinat ile faizsiz taksit imkanıyla satın alma. Kalan tutar, sözleşmede belirtilen ödeme planına göre eşit taksitler halinde ödenir. Taksit son tarihi: 10.12.2025. Peşinat %35: 136 400 EUR'dan başlar. Ödeme sıklığı: üç ayda bir. Tapu alımı: tam ödeme sonrası."
    },
    "distances": [
      {
        "to": {
          "en": "Incekum Beach",
          "ru": "пляж Инжекум",
          "tr": "İncekum Plajı"
        },
        "value": "900 m"
      },
      {
        "to": {
          "en": "The center of Avsallar",
          "ru": "центр Авсаллара",
          "tr": "Avsallar merkezi"
        },
        "value": "2 km"
      },
      {
        "to": {
          "en": "The center of Alanya",
          "ru": "центр Алании",
          "tr": "Alanya şehir merkezi"
        },
        "value": "22 km"
      },
      {
        "to": {
          "en": "Gazipasa Airport",
          "ru": "аэропорт Газипаша",
          "tr": "Gazipaşa Havalimanı"
        },
        "value": "60 km"
      },
      {
        "to": {
          "en": "Antalya Airport",
          "ru": "аэропорт Анталии",
          "tr": "Antalya Havalimanı"
        },
        "value": "105 km"
      }
    ]
  }
};
