import type { Locale } from '@/lib/types';

export interface UnitType { layout: string; area: string; priceFrom: string | null; }
export interface Distance { to: Record<Locale, string>; value: string; }
export interface ComplexDetailData {
  slug: string;
  images: string[];
  floorPlans: string[];
  coordinates: { lat: number; lng: number };
  complexArea: Record<Locale, string | null>;
  status: Record<Locale, string | null>;
  description: Record<Locale, string>;
  benefits: Record<Locale, string[]>;
  unitTypes: UnitType[];
  infrastructure: Record<Locale, string[]>;
  paymentTerms: Record<Locale, string>;
  distances: Distance[];
}

// Auto-generated from the extracted complex data (scratchpad/complexes/*.json).
export const complexDetails: Record<string, ComplexDetailData> = {
  "new-level-city": {
    "slug": "new-level-city",
    "images": [
      "https://newlevel-group.com/storage/1469/01.jpeg",
      "https://newlevel-group.com/storage/1470/02.jpeg",
      "https://newlevel-group.com/storage/1471/04.jpeg",
      "https://newlevel-group.com/storage/1472/09.jpeg",
      "https://newlevel-group.com/storage/1473/10.jpeg",
      "https://newlevel-group.com/storage/1474/11.jpg",
      "https://newlevel-group.com/storage/1475/12.jpeg",
      "https://newlevel-group.com/storage/1476/03.JPG",
      "https://newlevel-group.com/storage/1477/05.JPG",
      "https://newlevel-group.com/storage/1478/06.JPG",
      "https://newlevel-group.com/storage/1479/01.jpeg",
      "https://newlevel-group.com/storage/1480/02.jpeg",
      "https://newlevel-group.com/storage/1481/05.jpeg",
      "https://newlevel-group.com/storage/1482/04.jpg",
      "https://newlevel-group.com/storage/1483/06.jpg",
      "https://newlevel-group.com/storage/1484/03.jpg",
      "https://newlevel-group.com/storage/1485/01.jpeg",
      "https://newlevel-group.com/storage/1486/04.jpeg",
      "https://newlevel-group.com/storage/1487/06.jpeg",
      "https://newlevel-group.com/storage/1488/07.jpeg",
      "https://newlevel-group.com/storage/1489/08.jpeg",
      "https://newlevel-group.com/storage/1490/09.jpeg",
      "https://newlevel-group.com/storage/1491/02.JPG",
      "https://newlevel-group.com/storage/1492/03.JPG",
      "https://newlevel-group.com/storage/1493/05.JPG",
      "https://newlevel-group.com/storage/1497/01.jpeg"
    ],
    "floorPlans": [
      "https://newlevel-group.com/storage/1494/1.-ZEMIN-KAT-PLANI",
      "https://newlevel-group.com/storage/1495/2.-NORMAL-KAT-PLANI",
      "https://newlevel-group.com/storage/1496/3.-ÇATI-KAT-PLANI"
    ],
    "coordinates": {
      "lat": 36.545406,
      "lng": 31.997254
    },
    "complexArea": {
      "en": "17 apartments (compact format)",
      "ru": "17 апартаментов (камерный формат)",
      "tr": "17 daire (kompakt format)"
    },
    "status": {
      "en": "Built and ready for occupancy",
      "ru": "Построен и готов к заселению",
      "tr": "İnşa edildi ve yerleşime hazır"
    },
    "description": {
      "en": "A calm, comfortable home a short walk from the sea, for people who like the pace of the city and want the centre right outside the door. A central address like this holds its value and rents well all year. And because it sits in the city centre, it also qualifies for a residence permit, which matters to investors and to families settling in Turkey for good.\n\nAbout the project\nThis modern five-storey city-style residential complex is already built and ready for occupancy. The residence has just 17 apartments with well-planned layouts and quality finishing. The ground floor holds the commercial units, while the four residential floors above, plus an attic level, hold warm, easy homes with the whole centre on the doorstep. The complex is deliberately small, so it stays quiet and personal while every city convenience is a step away.\n\nAll apartments are delivered with high-quality turnkey finishing.\n\nPayment terms:\n✅ Installments up to 36 months with a down payment from 20%\n✅ Occupancy possible after the first payment\n✅ TAPU processing at 50% payment of the apartment value\n✅ Individual payment terms by arrangement with the developer\n\nSpecial advantages:\n✅ Direct sales from the developer, no intermediaries or overpayments\n✅ Flexible, fair payment terms that keep the purchase within reach",
      "ru": "Спокойный, уютный дом в нескольких минутах ходьбы от моря, для тех, кто любит городской ритм и хочет, чтобы центр был прямо за порогом. Такая центральная локация стабильно держит цену и хорошо сдаётся круглый год. К тому же центр подходит для оформления ВНЖ, а это важно и инвесторам, и семьям, которые перебираются в Турцию насовсем.\n\nО проекте\nСовременный пятиэтажный жилой комплекс городского типа уже построен и готов к заселению. Всего в резиденции 17 апартаментов с продуманными планировками и качественной отделкой. Первый этаж занимают коммерческие помещения, а на четырёх жилых этажах и в мансарде расположены тёплые, удобные для жизни квартиры с центром города прямо у порога. Комплекс намеренно небольшой, поэтому здесь тихо и по-домашнему, а любая городская мелочь в шаге от дома.\n\nВсе квартиры передаются с качественной чистовой отделкой «под ключ».\n\nУсловия оплаты:\n✅ Рассрочка до 36 месяцев при первоначальном взносе от 20%\n✅ Возможность заселения уже после первого платежа\n✅ Оформление ТАПУ при оплате 50% стоимости квартиры\n✅ Индивидуальные условия оплаты по договорённости с застройщиком\n\nСпециальные преимущества:\n✅ Прямые продажи от застройщика, без посредников и переплат\n✅ Гибкие и честные условия оплаты делают покупку доступной",
      "tr": "Denize yürüme mesafesinde, sakin ve konforlu bir ev; şehrin ritmini seven ve merkezi kapısının önünde isteyenler için. Böyle merkezi bir konum değerini korur ve yıl boyu rahat kiraya verilir. Ayrıca şehir merkezi oturma izni için de uygundur; bu da onu Türkiye'ye kalıcı yerleşen yatırımcılar ve aileler için değerli kılar.\n\nProje hakkında\nModern beş katlı şehir tipi konut kompleksi hâlihazırda inşa edilmiş ve yerleşime hazırdır. Rezidansta toplam yalnızca 17 daire var; her biri akıllıca planlanmış ve özenle işlenmiş. Zemin katta ticari birimler yer alır; üstteki dört konut katı ile çatı katında ise merkez hemen kapının önündeyken rahat yaşanacak sıcak evler bulunur. Kompleks bilinçli olarak küçük tutulmuş, böylece sakin ve samimi kalırken şehrin her olanağı bir adım ötede.\n\nTüm daireler yüksek kaliteli anahtar teslim işçilikle teslim edilir.\n\nÖdeme koşulları:\n✅ %20'den başlayan peşinatla 36 aya kadar taksit\n✅ İlk ödemeden sonra yerleşim imkânı\n✅ Daire bedelinin %50'si ödendiğinde tapu işlemi\n✅ Geliştiriciyle mutabakatla bireysel ödeme koşulları\n\nÖzel avantajlar:\n✅ Geliştiriciden doğrudan satış, aracı veya ek ödeme yok\n✅ Esnek ve adil ödeme koşulları satın alımı erişilebilir kılar"
    },
    "benefits": {
      "en": [
        "Located in the very centre of tourist Alanya",
        "Just 50 metres to Ataturk Boulevard",
        "650 metres to the harbour promenade and Keykubat Beach",
        "Supermarkets, boutiques, cafes and restaurants within 500 metres",
        "The city centre qualifies for a residence permit",
        "High rental and investment potential",
        "Direct sales from the developer with no overpayments"
      ],
      "ru": [
        "Локация в самом центре туристической Алании",
        "Всего 50 метров до бульвара Ататюрка",
        "650 метров до портовой набережной и пляжа Кейкубат",
        "В радиусе 500 метров супермаркеты, бутики, кафе, рестораны",
        "Центр города открыт для получения ВНЖ",
        "Высокий арендный и инвестиционный потенциал",
        "Прямые продажи от застройщика без переплат"
      ],
      "tr": [
        "Turistik Alanya'nın tam merkezinde konum",
        "Atatürk Bulvarı'na yalnızca 50 metre",
        "Liman sahiline ve Keykubat Plajı'na 650 metre",
        "500 metre çapında süpermarketler, butikler, kafeler ve restoranlar",
        "Şehir merkezi oturma izni için uygun",
        "Yüksek kira ve yatırım potansiyeli",
        "Geliştiriciden doğrudan satış, ek ödeme yok"
      ]
    },
    "unitTypes": [
      {
        "layout": "1+1",
        "area": "49 m²",
        "priceFrom": "149 900 EUR"
      },
      {
        "layout": "Penthouse 1+1 / 2+1",
        "area": "49,5 + 89 m² and 52,5 + 97 m²",
        "priceFrom": null
      }
    ],
    "infrastructure": {
      "en": [
        "Video cameras"
      ],
      "ru": [
        "Видеокамеры"
      ],
      "tr": [
        "Video kameralar"
      ]
    },
    "paymentTerms": {
      "en": "Installments up to 36 months with down payment from 20%; occupancy possible after the first payment; TAPU processing at 50% payment. Installment provided until 31.12.2027. Payment frequency: quarterly. Receiving the TAPU: after 100% payment.",
      "ru": "Рассрочка до 36 месяцев при первоначальном взносе от 20%; заселение после первого платежа; оформление ТАПУ при оплате 50%. Рассрочка предоставляется до 31.12.2027 г. Периодичность платежей: ежеквартально. Получение ТАПУ: после 100% оплаты.",
      "tr": "%20 peşinatla 36 aya kadar faizsiz taksit. Taksit son tarihi 31.12.2027. Ödeme sıklığı: her üç ayda bir. Tapu alımı: tam ödeme sonrası."
    },
    "distances": [
      {
        "to": {
          "en": "Ataturk Boulevard",
          "ru": "Бульвар Ататюрка",
          "tr": "Atatürk Bulvarı"
        },
        "value": "50 m"
      },
      {
        "to": {
          "en": "Keykubat Beach",
          "ru": "Пляж Кейкубат",
          "tr": "Keykubat Plajı"
        },
        "value": "650 m"
      },
      {
        "to": {
          "en": "Center of Alanya",
          "ru": "Центр Алании",
          "tr": "Alanya merkezi"
        },
        "value": "walking distance"
      },
      {
        "to": {
          "en": "Gazipasa Airport",
          "ru": "Аэропорт Газипаша",
          "tr": "Gazipaşa Havalimanı"
        },
        "value": "~40 km"
      },
      {
        "to": {
          "en": "Antalya Airport",
          "ru": "Аэропорт Анталии",
          "tr": "Antalya Havalimanı"
        },
        "value": "~125 km"
      }
    ]
  },
  "new-level-cleopatra-1": {
    "slug": "new-level-cleopatra-1",
    "images": [
      "https://newlevel-group.com/storage/1565/02.jpeg",
      "https://newlevel-group.com/storage/1566/01.jpeg",
      "https://newlevel-group.com/storage/1567/03.JPG",
      "https://newlevel-group.com/storage/1568/04.JPG",
      "https://newlevel-group.com/storage/1569/09.jpg",
      "https://newlevel-group.com/storage/1570/10.jpg",
      "https://newlevel-group.com/storage/1571/05.JPG",
      "https://newlevel-group.com/storage/1564/location.png",
      "https://newlevel-group.com/storage/1572/01.jpg",
      "https://newlevel-group.com/storage/1573/02.jpg",
      "https://newlevel-group.com/storage/1574/03.jpg",
      "https://newlevel-group.com/storage/1575/04.jpg",
      "https://newlevel-group.com/storage/1576/05.jpg",
      "https://newlevel-group.com/storage/1577/06.jpg",
      "https://newlevel-group.com/storage/1578/07.jpg",
      "https://newlevel-group.com/storage/1579/snimok_ekrana_2025_07_26_v_172114.png",
      "https://newlevel-group.com/storage/1580/snimok_ekrana_2025_07_26_v_172107.png",
      "https://newlevel-group.com/storage/1581/snimok_ekrana_2025_07_26_v_172059.png",
      "https://newlevel-group.com/storage/1582/01.jpg",
      "https://newlevel-group.com/storage/1583/02.jpg",
      "https://newlevel-group.com/storage/1584/03.jpg",
      "https://newlevel-group.com/storage/1585/04.jpg",
      "https://newlevel-group.com/storage/1586/05.jpg",
      "https://newlevel-group.com/storage/1587/06.jpg",
      "https://newlevel-group.com/storage/1588/07.jpg",
      "https://newlevel-group.com/storage/1589/02.jpeg",
      "https://newlevel-group.com/storage/1590/01.jpeg",
      "https://newlevel-group.com/storage/1591/04.JPG"
    ],
    "floorPlans": [],
    "coordinates": {
      "lat": 36.556395,
      "lng": 31.977052
    },
    "complexArea": {
      "en": "2 746 m²",
      "ru": "2 746 м²",
      "tr": "2 746 m²"
    },
    "status": {
      "en": null,
      "ru": null,
      "tr": null
    },
    "description": {
      "en": "New Level Group brings you a new comfort-class residence that works just as well as a first home, a holiday base or an investment.\n\nStrong rental demand, a sought-after address and modern infrastructure make it a sound pick for anyone who wants steady income from property in Turkey.\n\nAbout the project\nThe complex sits just 450 metres from the famous Cleopatra Beach, on a 2,746 m² plot. The residence has two modern blocks, with commercial premises on the ground floors and apartments above. There are only 42 apartments and a private, secured territory with thoughtful infrastructure for comfortable living all year round.\n\nAll apartments are delivered with high-quality turnkey finishing.\n\nConstruction stages:\nStart of construction: summer 2023\nCompletion: January 2025\n\nPayment terms:\n✅ Installments up to 36 months\n✅ Down payment from 30%\n✅ No overpayments or hidden fees\n✅ 5% discount for full payment\n\nSpecial advantages:\n✅ Eligible for Turkish citizenship\n✅ High liquidity and steady price growth\n✅ A unique balance of price, quality and location",
      "ru": "Компания New Level Group представляет новый жилой комплекс комфорт-класса, который одинаково хорошо подойдёт и под своё жильё, и под отдых, и под инвестиции.\n\nВысокий спрос на аренду, престижная локация и современная инфраструктура делают его удачным выбором для тех, кто хочет стабильный доход от недвижимости в Турции.\n\nО проекте\nЖилой комплекс расположен всего в 450 метрах от знаменитого пляжа Клеопатра, на участке площадью 2 746 м². Резиденция состоит из двух современных блоков, где первые этажи отведены под коммерческие помещения, а выше, жилые квартиры. В комплексе всего 42 квартиры и закрытая охраняемая территория с продуманной инфраструктурой для комфортного проживания круглый год.\n\nВсе квартиры передаются с качественной чистовой отделкой «под ключ».\n\nЭтапы строительства:\nСтарт строительства: лето 2023\nСдача в эксплуатацию: январь 2025\n\nУсловия оплаты:\n✅ Рассрочка до 36 месяцев\n✅ Первоначальный взнос от 30%\n✅ Без переплат и скрытых комиссий\n✅ Скидка 5% при полной оплате\n\nСпециальные преимущества:\n✅ Проект подходит для получения турецкого гражданства\n✅ Высокая ликвидность и стабильный рост цен\n✅ Уникальное соотношение цены, качества и локации",
      "tr": "New Level Group, ister kendi eviniz ister tatil ister yatırım için, konfor sınıfı yeni bir rezidans sunuyor.\n\nGüçlü kira talebi, gözde bir konum ve modern altyapı, Türkiye'de gayrimenkulden istikrarlı gelir isteyen herkes için onu sağlam bir tercih yapıyor.\n\nProje hakkında\nKompleks, ünlü Kleopatra Plajı'na yalnızca 450 metre mesafede, 2.746 m²'lik bir arsa üzerinde yer alır. Rezidans, zemin katları ticari, üst katları konut olan iki modern bloktan oluşur. Komplekste yalnızca 42 daire ve düşünülmüş altyapıya sahip kapalı, güvenlikli bir alan bulunur; yıl boyu konforlu yaşam için.\n\nTüm daireler yüksek kaliteli anahtar teslim işçilikle teslim edilir.\n\nİnşaat aşamaları:\nİnşaat başlangıcı: yaz 2023\nTamamlanma: Ocak 2025\n\nÖdeme koşulları:\n✅ 36 aya kadar taksit\n✅ %30'dan başlayan peşinat\n✅ Ek ödeme veya gizli ücret yok\n✅ Tam ödemede %5 indirim\n\nÖzel avantajlar:\n✅ Türk vatandaşlığına uygun\n✅ Yüksek likidite ve istikrarlı fiyat artışı\n✅ Eşsiz fiyat, kalite ve konum dengesi"
    },
    "benefits": {
      "en": [
        "Located in the very centre of Alanya, next to Cleopatra Beach",
        "Suitable for a residence permit and citizenship",
        "Modern infrastructure and a secured territory",
        "High investment potential and steady rental income",
        "Full finishing and a built-in kitchen included in the price",
        "Direct sales from the developer, no overpayments or fees"
      ],
      "ru": [
        "Локация в самом центре Алании, рядом с пляжем Клеопатра",
        "Подходит для ВНЖ и получения гражданства",
        "Современная инфраструктура и охраняемая территория",
        "Высокий инвестиционный потенциал и стабильный доход от аренды",
        "Полная чистовая отделка и встроенная кухня в цене",
        "Прямые продажи от застройщика, без переплат и комиссий"
      ],
      "tr": [
        "Alanya'nın tam merkezinde, Kleopatra Plajı'nın yanında",
        "Oturma izni ve vatandaşlık için uygun",
        "Modern altyapı ve güvenlikli alan",
        "Yüksek yatırım potansiyeli ve istikrarlı kira geliri",
        "Tam işçilik ve ankastre mutfak fiyata dahil",
        "Geliştiriciden doğrudan satış, ek ödeme veya komisyon yok"
      ]
    },
    "unitTypes": [
      {
        "layout": "1+1",
        "area": "67 m²",
        "priceFrom": "189 499 EUR"
      },
      {
        "layout": "2+1",
        "area": "81 m²",
        "priceFrom": "259 500 EUR"
      },
      {
        "layout": "Penthouse 2+1",
        "area": "126 m²",
        "priceFrom": "299 500 EUR"
      },
      {
        "layout": "Penthouse 4+1",
        "area": "212 m²",
        "priceFrom": "384 800 EUR"
      }
    ],
    "infrastructure": {
      "en": [
        "Generator",
        "Gym",
        "Satellite TV",
        "Sauna",
        "Security 24/7",
        "Mini club",
        "Elevator",
        "Concierge",
        "Internet",
        "Intercom",
        "Playground",
        "Water park",
        "Video cameras",
        "BBQ",
        "Outdoor swimming pool"
      ],
      "ru": [
        "Генератор",
        "Тренажерный зал",
        "Спутниковое ТВ",
        "Сауна",
        "Охрана 24/7",
        "Мини клуб",
        "Лифт",
        "Консьерж",
        "Интернет",
        "Домофон",
        "Детская площадка",
        "Аквапарк",
        "Видеокамеры",
        "Барбекю",
        "Открытый бассейн"
      ],
      "tr": [
        "Jeneratör",
        "Spor salonu",
        "Uydu TV",
        "Sauna",
        "Güvenlik 24/7",
        "Mini kulüp",
        "Asansör",
        "Kapıcı",
        "İnternet",
        "İnterkom",
        "Oyun alanı",
        "Su parkı",
        "Video kameralar",
        "Mangal",
        "Açık yüzme havuzu"
      ]
    },
    "paymentTerms": {
      "en": "Installments up to 36 months, down payment from 30%, no overpayments or hidden fees, 5% discount for full payment. Installment provided until 01.01.2028. Payment frequency: quarterly. Receiving the TAPU: after 100% payment.",
      "ru": "Рассрочка до 36 месяцев, первоначальный взнос от 30%, без переплат и скрытых комиссий, скидка 5% при полной оплате. Рассрочка предоставляется до 01.01.2028 г. Периодичность платежей: ежеквартально. Получение ТАПУ: после 100% оплаты.",
      "tr": "36 aya kadar taksit, %30'dan başlayan peşinat, ek ödeme veya gizli ücret yok, tam ödemede %5 indirim. Taksit son tarihi 01.01.2028. Ödeme sıklığı: her üç ayda bir. Tapu alımı: tam ödeme sonrası."
    },
    "distances": [
      {
        "to": {
          "en": "Cleopatra Beach",
          "ru": "Пляж Клеопатра",
          "tr": "Kleopatra Plajı"
        },
        "value": "450 m"
      },
      {
        "to": {
          "en": "Ataturk Boulevard",
          "ru": "Бульвар Ататюрка",
          "tr": "Atatürk Bulvarı"
        },
        "value": "300 m"
      },
      {
        "to": {
          "en": "Center of Alanya",
          "ru": "Центр Алании",
          "tr": "Alanya merkezi"
        },
        "value": "walking distance"
      },
      {
        "to": {
          "en": "Gazipasa Airport",
          "ru": "Аэропорт Газипаша",
          "tr": "Gazipaşa Havalimanı"
        },
        "value": "40 km"
      },
      {
        "to": {
          "en": "Antalya Airport",
          "ru": "Аэропорт Анталии",
          "tr": "Antalya Havalimanı"
        },
        "value": "120 km"
      }
    ]
  },
  "new-level-cleopatra-2": {
    "slug": "new-level-cleopatra-2",
    "images": [
      "https://newlevel-group.com/storage/1530/1.jpeg",
      "https://newlevel-group.com/storage/1764/dji_20260102161804_0003_d.JPG",
      "https://newlevel-group.com/storage/1765/dji_20260102162548_0021_d.JPG",
      "https://newlevel-group.com/storage/1766/dji_20260102162611_0022_d.JPG",
      "https://newlevel-group.com/storage/1506/dji_20250701152647_0002_d.JPG",
      "https://newlevel-group.com/storage/1505/dji_20250701152617_0001_d.JPG",
      "https://newlevel-group.com/storage/1507/dji_20250701152720_0003_d.JPG",
      "https://newlevel-group.com/storage/1508/dji_20250701152825_0004_d.JPG",
      "https://newlevel-group.com/storage/1509/dji_20250701152900_0005_d.JPG",
      "https://newlevel-group.com/storage/1510/dji_20250701152930_0006_d.JPG",
      "https://newlevel-group.com/storage/1511/dji_20250701153014_0007_d.JPG",
      "https://newlevel-group.com/storage/1512/dji_20250701153031_0008_d.JPG",
      "https://newlevel-group.com/storage/1513/dji_20250701153409_0011_d.JPG",
      "https://newlevel-group.com/storage/1514/dji_20250701153514_0013_d.JPG",
      "https://newlevel-group.com/storage/1515/dji_20250701153432_0012_d.JPG",
      "https://newlevel-group.com/storage/1516/360_photo.JPG",
      "https://newlevel-group.com/storage/1517/1.jpg",
      "https://newlevel-group.com/storage/1518/2.jpg",
      "https://newlevel-group.com/storage/1519/3.jpg",
      "https://newlevel-group.com/storage/1520/4.jpg",
      "https://newlevel-group.com/storage/1521/5.jpg",
      "https://newlevel-group.com/storage/1522/1.jpeg",
      "https://newlevel-group.com/storage/1523/2.jpeg",
      "https://newlevel-group.com/storage/1524/3.jpeg",
      "https://newlevel-group.com/storage/1525/4.jpeg",
      "https://newlevel-group.com/storage/1526/5.jpeg",
      "https://newlevel-group.com/storage/1527/6.jpeg",
      "https://newlevel-group.com/storage/1528/7.jpeg",
      "https://newlevel-group.com/storage/1529/8.jpeg",
      "https://newlevel-group.com/storage/1563/location.png",
      "https://newlevel-group.com/storage/1531/2.jpeg",
      "https://newlevel-group.com/storage/1532/3.jpeg",
      "https://newlevel-group.com/storage/1533/4.jpeg",
      "https://newlevel-group.com/storage/1534/5.jpeg",
      "https://newlevel-group.com/storage/1535/1.jpeg",
      "https://newlevel-group.com/storage/1536/2.jpeg",
      "https://newlevel-group.com/storage/1537/3.jpeg",
      "https://newlevel-group.com/storage/1538/4.jpeg",
      "https://newlevel-group.com/storage/1539/5.jpeg",
      "https://newlevel-group.com/storage/1540/snimok_ekrana_2025_07_20_v_170252.png",
      "https://newlevel-group.com/storage/1541/snimok_ekrana_2025_07_20_v_170247.png",
      "https://newlevel-group.com/storage/1542/snimok_ekrana_2025_07_20_v_170240.png",
      "https://newlevel-group.com/storage/1543/snimok_ekrana_2025_07_20_v_170225.png",
      "https://newlevel-group.com/storage/1544/snimok_ekrana_2025_07_20_v_170217.png",
      "https://newlevel-group.com/storage/1545/snimok_ekrana_2025_07_20_v_170209.png",
      "https://newlevel-group.com/storage/1546/snimok_ekrana_2025_07_20_v_170159.png",
      "https://newlevel-group.com/storage/1547/snimok_ekrana_2025_07_20_v_170149.png",
      "https://newlevel-group.com/storage/1548/snimok_ekrana_2025_07_20_v_170136.png",
      "https://newlevel-group.com/storage/1549/snimok_ekrana_2025_07_20_v_170126.png",
      "https://newlevel-group.com/storage/1550/snimok_ekrana_2025_07_20_v_170115.png",
      "https://newlevel-group.com/storage/1551/snimok_ekrana_2025_07_20_v_170100.png",
      "https://newlevel-group.com/storage/1552/1.jpeg",
      "https://newlevel-group.com/storage/1553/2.jpeg",
      "https://newlevel-group.com/storage/1554/3.jpeg",
      "https://newlevel-group.com/storage/1555/5.jpeg",
      "https://newlevel-group.com/storage/1556/4.jpeg",
      "https://newlevel-group.com/storage/1557/1.jpeg",
      "https://newlevel-group.com/storage/1558/2.jpeg",
      "https://newlevel-group.com/storage/1559/3.jpeg",
      "https://newlevel-group.com/storage/1560/4.jpeg",
      "https://newlevel-group.com/storage/1561/5.jpeg",
      "https://newlevel-group.com/storage/1562/location.png"
    ],
    "floorPlans": [],
    "coordinates": {
      "lat": 36.557445,
      "lng": 31.977861
    },
    "complexArea": {
      "en": "3 030 m²",
      "ru": "3 030 м²",
      "tr": "3 030 m²"
    },
    "status": {
      "en": "Completed and ready for occupancy (iskan received)",
      "ru": "Комплекс сдан в эксплуатацию, получен искан",
      "tr": "Tamamlandı ve yerleşime hazır (iskan alındı)"
    },
    "description": {
      "en": "An ultra-modern residence with hotel-grade infrastructure, a natural fit for investment, holidays or a move to the sea.\n\nWe built it for buyers who want quality property in Turkey without overpaying. It suits year-round living, a seasonal base and rental income alike, and it qualifies for a Turkish residence permit and citizenship.\n\nAbout the project\nThe complex stands just 600 metres from the sea and beach, on a 3,030 m² plot. Inside the grounds are two 4-storey blocks with 58 apartments and fully landscaped surroundings. Every detail is worked through, from the architecture to the smallest piece of on-site infrastructure. It is a rare chance to buy premium property in Turkey directly from the developer, with no overpayment.\n\nAll apartments are delivered with high-quality turnkey finishing.\n\nConstruction stages:\nStart of construction: June 2024\nCompletion: December 2025\nThe complex is completed and the iskan has been received.\n\nPayment terms:\n✅ Installments up to 36 months\n✅ Down payment from 30%\n✅ No overpayments or hidden fees\n✅ 5% discount for full payment\n\nSpecial advantages:\n✅ Eligible for Turkish citizenship\n✅ High liquidity and steady price growth\n✅ A unique balance of price, quality and location",
      "ru": "Ультрасовременный жилой комплекс с отельной инфраструктурой, точный выбор для инвестиций, отдыха и переезда к морю.\n\nМы строили его для тех, кто ищет качественную недвижимость в Турции без переплат. Он одинаково хорош и для постоянной жизни, и для сезонного отдыха, и для дохода от аренды, а главное, подходит для оформления ВНЖ и гражданства Турции.\n\nО проекте\nКомплекс стоит всего в 600 метрах от моря и пляжа, на участке площадью 3 030 м². На территории два 4-этажных блока на 58 квартир и полностью благоустроенная территория. Здесь продумана каждая деталь, от архитектуры до самой мелкой части внутренней инфраструктуры. Это редкая возможность купить элитную недвижимость в Турции напрямую от застройщика, без переплат.\n\nВсе квартиры передаются с качественной чистовой отделкой «под ключ».\n\nЭтапы строительства:\nСтарт строительства: июнь 2024\nСдача в эксплуатацию: декабрь 2025\nКомплекс сдан в эксплуатацию, получен искан\n\nУсловия оплаты:\n✅ Рассрочка до 36 месяцев\n✅ Первоначальный взнос от 30%\n✅ Без переплат и скрытых комиссий\n✅ Скидка 5% при полной оплате\n\nСпециальные преимущества:\n✅ Проект подходит для получения турецкого гражданства\n✅ Высокая ликвидность и стабильный рост цен\n✅ Уникальное соотношение цены, качества и локации",
      "tr": "Otel seviyesinde altyapıya sahip ultra modern bir rezidans; yatırım, tatil ve deniz kenarına taşınmak için tam isabet bir seçim.\n\nBunu, Türkiye'de fazla ödeme yapmadan kaliteli gayrimenkul isteyenler için inşa ettik. Yıl boyu yaşama, sezonluk tatile ve kira gelirine aynı ölçüde uygun; en önemlisi, Türk oturma izni ve vatandaşlığı için de uygun.\n\nProje hakkında\nKompleks, denize ve plaja yalnızca 600 metre mesafede, 3.030 m²'lik bir arsa üzerinde yer alır. Alanda 58 daireli iki adet 4 katlı blok ve tamamen düzenlenmiş bir çevre bulunur. Mimariden en küçük altyapı detayına kadar her şey düşünülmüş. Geliştiriciden doğrudan, ek ödeme yapmadan Türkiye'de premium gayrimenkul almak için ender bir fırsat.\n\nTüm daireler yüksek kaliteli anahtar teslim işçilikle teslim edilir.\n\nİnşaat aşamaları:\nİnşaat başlangıcı: Haziran 2024\nTamamlanma: Aralık 2025\nKompleks tamamlandı ve iskan alındı\n\nÖdeme koşulları:\n✅ 36 aya kadar taksit\n✅ %30'dan başlayan peşinat\n✅ Ek ödeme veya gizli ücret yok\n✅ Tam ödemede %5 indirim\n\nÖzel avantajlar:\n✅ Türk vatandaşlığına uygun\n✅ Yüksek likidite ve istikrarlı fiyat artışı\n✅ Eşsiz fiyat, kalite ve konum dengesi"
    },
    "benefits": {
      "en": [
        "Suitable for a residence permit and citizenship",
        "Ultra-modern architecture and hotel-grade infrastructure",
        "Excellent location, just 600 metres to the beach",
        "Intimate format: 58 apartments across two blocks",
        "Spacious layouts and quality finishing",
        "High rental and investment potential",
        "Direct sales from the developer, no commissions"
      ],
      "ru": [
        "Подходит для ВНЖ и получения гражданства",
        "Ультрасовременная архитектура и отельная инфраструктура",
        "Отличное расположение, всего 600 метров до пляжа",
        "Камерный формат: 58 квартир, два блока",
        "Просторные планировки и качественная отделка",
        "Высокий арендный и инвестиционный потенциал",
        "Прямые продажи от застройщика, без комиссий"
      ],
      "tr": [
        "Oturma izni ve vatandaşlık için uygun",
        "Ultra modern mimari ve otel seviyesinde altyapı",
        "Mükemmel konum, plaja yalnızca 600 metre",
        "Butik format: iki blokta 58 daire",
        "Ferah planlar ve kaliteli işçilik",
        "Yüksek kira ve yatırım potansiyeli",
        "Geliştiriciden doğrudan satış, komisyon yok"
      ]
    },
    "unitTypes": [
      {
        "layout": "1+1",
        "area": "67 m²",
        "priceFrom": "215 000 EUR"
      },
      {
        "layout": "2+1",
        "area": "82 m²",
        "priceFrom": "286 500 EUR"
      },
      {
        "layout": "3+1",
        "area": "129 m²",
        "priceFrom": "309 000 EUR"
      }
    ],
    "infrastructure": {
      "en": [
        "Generator",
        "Gym",
        "Hamam",
        "Satellite TV",
        "Sauna",
        "Landscaped garden",
        "Security 24/7",
        "Mini club",
        "Elevator",
        "Concierge",
        "Internet",
        "Indoor swimming pool",
        "Closed parking",
        "Intercom",
        "Playground",
        "Video cameras",
        "BBQ",
        "Outdoor swimming pool"
      ],
      "ru": [
        "Генератор",
        "Тренажерный зал",
        "Хамам",
        "Спутниковое ТВ",
        "Сауна",
        "Ландшафтный сад",
        "Охрана 24/7",
        "Мини клуб",
        "Лифт",
        "Консьерж",
        "Интернет",
        "Закрытый бассейн",
        "Закрытая парковка",
        "Домофон",
        "Детская площадка",
        "Видеокамеры",
        "Барбекю",
        "Открытый бассейн"
      ],
      "tr": [
        "Jeneratör",
        "Spor salonu",
        "Hamam",
        "Uydu TV",
        "Sauna",
        "Peyzaj bahçesi",
        "Güvenlik 24/7",
        "Mini kulüp",
        "Asansör",
        "Kapıcı",
        "İnternet",
        "Kapalı yüzme havuzu",
        "Kapalı otopark",
        "İnterkom",
        "Oyun alanı",
        "Video kameralar",
        "Mangal",
        "Açık yüzme havuzu"
      ]
    },
    "paymentTerms": {
      "en": "Installments up to 36 months, down payment from 30%, no overpayments or hidden fees, 5% discount for full payment. Installment provided until 01.06.2028. Payment frequency: quarterly. Receiving the TAPU: after 100% payment.",
      "ru": "Рассрочка до 36 месяцев, первоначальный взнос от 30%, без переплат и скрытых комиссий, скидка 5% при полной оплате. Рассрочка предоставляется до 01.06.2028 г. Периодичность платежей: ежеквартально. Получение ТАПУ: после 100% оплаты.",
      "tr": "36 aya kadar taksit, %30'dan başlayan peşinat, ek ödeme veya gizli ücret yok, tam ödemede %5 indirim. Taksit son tarihi 01.06.2028. Ödeme sıklığı: her üç ayda bir. Tapu alımı: tam ödeme sonrası."
    },
    "distances": [
      {
        "to": {
          "en": "Beach",
          "ru": "Пляж",
          "tr": "Plaj"
        },
        "value": "600 m"
      },
      {
        "to": {
          "en": "Center of Alanya",
          "ru": "Центр Алании",
          "tr": "Alanya merkezi"
        },
        "value": "0 km"
      },
      {
        "to": {
          "en": "Gazipasa Airport",
          "ru": "Аэропорт Газипаша",
          "tr": "Gazipaşa Havalimanı"
        },
        "value": "~60 km"
      },
      {
        "to": {
          "en": "Antalya Airport",
          "ru": "Аэропорт Анталии",
          "tr": "Antalya Havalimanı"
        },
        "value": "~120 km"
      }
    ]
  },
  "new-level-panorama": {
    "slug": "new-level-panorama",
    "images": [
      "https://newlevel-group.com/storage/1592/02.JPG",
      "https://newlevel-group.com/storage/1593/04.png",
      "https://newlevel-group.com/storage/1594/05.JPG",
      "https://newlevel-group.com/storage/1595/06.png",
      "https://newlevel-group.com/storage/1596/07.png",
      "https://newlevel-group.com/storage/1597/08.jpg",
      "https://newlevel-group.com/storage/1598/09.jpeg",
      "https://newlevel-group.com/storage/1599/10.jpeg",
      "https://newlevel-group.com/storage/1600/11.jpg",
      "https://newlevel-group.com/storage/1601/12.jpeg",
      "https://newlevel-group.com/storage/1602/13.jpeg",
      "https://newlevel-group.com/storage/1603/14.jpeg",
      "https://newlevel-group.com/storage/1604/15.jpeg",
      "https://newlevel-group.com/storage/1605/16.jpg",
      "https://newlevel-group.com/storage/1606/17.jpeg",
      "https://newlevel-group.com/storage/1607/18.jpeg",
      "https://newlevel-group.com/storage/1608/19.jpeg",
      "https://newlevel-group.com/storage/1609/20.jpeg",
      "https://newlevel-group.com/storage/1610/21.png",
      "https://newlevel-group.com/storage/1611/22.png",
      "https://newlevel-group.com/storage/1612/23.jpg",
      "https://newlevel-group.com/storage/1613/24.png",
      "https://newlevel-group.com/storage/1614/01.png",
      "https://newlevel-group.com/storage/1615/03.png",
      "https://newlevel-group.com/storage/1616/01.jpeg",
      "https://newlevel-group.com/storage/1617/02.jpeg",
      "https://newlevel-group.com/storage/1618/03.jpeg",
      "https://newlevel-group.com/storage/1619/04.jpeg",
      "https://newlevel-group.com/storage/1620/05.jpg",
      "https://newlevel-group.com/storage/1621/06.jpeg",
      "https://newlevel-group.com/storage/1622/07.jpeg",
      "https://newlevel-group.com/storage/1623/08.jpeg",
      "https://newlevel-group.com/storage/1624/09.jpeg",
      "https://newlevel-group.com/storage/1625/10.jpeg",
      "https://newlevel-group.com/storage/1626/11.jpeg",
      "https://newlevel-group.com/storage/1627/12.jpeg",
      "https://newlevel-group.com/storage/1628/13.jpeg",
      "https://newlevel-group.com/storage/1629/14.jpeg",
      "https://newlevel-group.com/storage/1630/15.jpeg",
      "https://newlevel-group.com/storage/1631/16.jpeg",
      "https://newlevel-group.com/storage/1632/17.jpeg",
      "https://newlevel-group.com/storage/1633/18.jpeg",
      "https://newlevel-group.com/storage/1634/19.jpeg",
      "https://newlevel-group.com/storage/1635/20.jpg",
      "https://newlevel-group.com/storage/1636/21.jpeg",
      "https://newlevel-group.com/storage/1637/22.jpeg",
      "https://newlevel-group.com/storage/1638/23.jpeg",
      "https://newlevel-group.com/storage/1639/24.jpg",
      "https://newlevel-group.com/storage/1640/25.jpeg",
      "https://newlevel-group.com/storage/1641/26.jpeg",
      "https://newlevel-group.com/storage/1642/27.jpeg",
      "https://newlevel-group.com/storage/1643/28.jpeg",
      "https://newlevel-group.com/storage/1644/snimok_ekrana_2025_09_02_v_113539.png",
      "https://newlevel-group.com/storage/1645/snimok_ekrana_2025_09_02_v_113532.png",
      "https://newlevel-group.com/storage/1646/snimok_ekrana_2025_09_02_v_113527.png",
      "https://newlevel-group.com/storage/1647/02.jpeg",
      "https://newlevel-group.com/storage/1648/03.jpeg",
      "https://newlevel-group.com/storage/1649/04.jpeg",
      "https://newlevel-group.com/storage/1650/05.jpeg",
      "https://newlevel-group.com/storage/1651/07.jpeg",
      "https://newlevel-group.com/storage/1652/09.jpeg",
      "https://newlevel-group.com/storage/1653/10.jpeg",
      "https://newlevel-group.com/storage/1654/12.jpeg",
      "https://newlevel-group.com/storage/1655/13.jpeg",
      "https://newlevel-group.com/storage/1656/14.jpeg",
      "https://newlevel-group.com/storage/1657/15.jpeg",
      "https://newlevel-group.com/storage/1658/16.jpeg",
      "https://newlevel-group.com/storage/1659/01.jpeg",
      "https://newlevel-group.com/storage/1660/02.jpeg",
      "https://newlevel-group.com/storage/1661/03.jpeg",
      "https://newlevel-group.com/storage/1662/04.jpeg",
      "https://newlevel-group.com/storage/1663/05.jpg",
      "https://newlevel-group.com/storage/1664/06.jpeg",
      "https://newlevel-group.com/storage/1665/07.jpeg",
      "https://newlevel-group.com/storage/1666/08.jpeg",
      "https://newlevel-group.com/storage/1667/09.jpeg",
      "https://newlevel-group.com/storage/1668/10.jpeg",
      "https://newlevel-group.com/storage/1669/11.jpeg",
      "https://newlevel-group.com/storage/1670/12.jpeg",
      "https://newlevel-group.com/storage/1671/13.jpeg",
      "https://newlevel-group.com/storage/1672/14.jpeg",
      "https://newlevel-group.com/storage/1673/15.jpeg",
      "https://newlevel-group.com/storage/1674/16.jpeg",
      "https://newlevel-group.com/storage/1675/17.jpeg",
      "https://newlevel-group.com/storage/1676/18.jpeg",
      "https://newlevel-group.com/storage/1677/19.jpeg",
      "https://newlevel-group.com/storage/1678/20.jpg",
      "https://newlevel-group.com/storage/1679/21.jpeg",
      "https://newlevel-group.com/storage/1680/22.jpeg",
      "https://newlevel-group.com/storage/1681/23.jpeg",
      "https://newlevel-group.com/storage/1682/24.jpg",
      "https://newlevel-group.com/storage/1683/25.jpeg",
      "https://newlevel-group.com/storage/1684/26.jpeg",
      "https://newlevel-group.com/storage/1685/27.jpeg",
      "https://newlevel-group.com/storage/1686/28.jpeg"
    ],
    "floorPlans": [],
    "coordinates": {
      "lat": 36.554331,
      "lng": 32.004419
    },
    "complexArea": {
      "en": "boutique format (1 block / 10 apartments)",
      "ru": "бутик-формат (1 блок / 10 апартаментов)",
      "tr": "boutique format (1 blok / 10 daire)"
    },
    "status": {
      "en": null,
      "ru": null,
      "tr": null
    },
    "description": {
      "en": "This project is for people who want privacy, quiet luxury and comfort on the Mediterranean coast.\n\nIts spot in the Kucuk Hasbahce area brings prestige along with quick access to central Alanya and the beaches. With a single block and only 10 apartments, it is a genuine boutique residence where privacy is the point.\n\nAbout the project:\n✔ Boutique-format plot\n✔ Just 1 block / 10 apartments\n✔ Panoramic glazing\n✔ Modern architecture\n✔ Individual style and a thoughtful concept\n✔ Rooftop lounge with a kitchen and BBQ area\n\nAll apartments are delivered with high-quality turnkey finishing.\n\nInvestment terms:\n✅ Direct sales from the developer\n✅ Convenient installments (details on request)\n✅ High potential for value growth\n✅ Long-term or short-term rental option\n\nWhy choose New Level Panorama:\n✔ A rare format with panoramic views and an intimate atmosphere\n✔ Close to the centre, yet away from the crowds\n✔ Maximum privacy and comfort\n✔ A rare offer on the Alanya property market",
      "ru": "Проект для тех, кто ценит уединение, спокойную роскошь и комфорт на побережье Средиземного моря.\n\nРасположение в районе Кючюк Хасбахче дарит не только престиж, но и близость к центру Аланьи и пляжам. Комплекс состоит всего из 1 блока и 10 апартаментов, а значит, это настоящая бутик-резиденция с атмосферой приватности.\n\nО проекте:\n✔ Общая площадь участка, бутик-формат\n✔ Всего 1 блок / 10 апартаментов\n✔ Панорамные стекла\n✔ Современная архитектура\n✔ Индивидуальный стиль и продуманная концепция\n✔ Лаунж-зона на крыше с кухней и зоной BBQ\n\nВсе квартиры передаются с качественной чистовой отделкой «под ключ».\n\nИнвестиционные условия:\n✅ Прямые продажи от застройщика\n✅ Удобная рассрочка (уточняйте индивидуально)\n✅ Высокий потенциал роста стоимости\n✅ Возможность аренды на долгий или короткий срок\n\nПочему стоит выбрать New Level Panorama:\n✔ Редкий формат с панорамными видами и камерной атмосферой\n✔ Рядом с центром, но без городской суеты\n✔ Максимальная приватность и комфорт\n✔ Редкое предложение на рынке недвижимости Аланьи",
      "tr": "Bu proje, Akdeniz kıyısında mahremiyete, sakin lükse ve konfora değer verenler için hazırlandı.\n\nKüçük Hasbahçe bölgesindeki konum yalnızca prestij değil, Alanya merkezine ve plajlara yakınlık da demek. Tek blok ve yalnızca 10 daireyle burası, mahremiyetin öne çıktığı gerçek bir butik rezidans.\n\nProje hakkında:\n✔ Butik formatlı arsa\n✔ Yalnızca 1 blok / 10 daire\n✔ Panoramik camlar\n✔ Modern mimari\n✔ Kişiye özel tasarım ve özenli konsept\n✔ Mutfak ve BBQ alanı bulunan çatı lounge alanı\n\nTüm daireler yüksek kaliteli anahtar teslim işçilikle teslim edilir.\n\nYatırım koşulları:\n✅ Geliştiriciden doğrudan satış\n✅ Uygun taksit imkanı (ayrıntılar için bize ulaşın)\n✅ Yüksek değer artış potansiyeli\n✅ Uzun veya kısa süreli kiralama imkanı\n\nNeden New Level Panorama:\n✔ Panoramik manzaralı ve samimi atmosferli nadir bir format\n✔ Merkeze yakın, ama şehir gürültüsünden uzak\n✔ Maksimum mahremiyet ve konfor\n✔ Alanya emlak piyasasında ender bir fırsat"
    },
    "benefits": {
      "en": [
        "Suitable for a Turkish residence permit and citizenship",
        "Large apartments and spacious layouts",
        "Panoramic views of the sea, mountains and central Alanya",
        "A unique format, just 10 apartments in the complex",
        "Exclusive rooftop lounge: gym, BBQ area, open kitchen",
        "Electric sliding roof on the terrace",
        "A private residence format for those who value seclusion",
        "Ideal for living, holidays or investment"
      ],
      "ru": [
        "Подходит для получения ВНЖ и гражданства Турции",
        "Большие площади квартир и просторные планировки",
        "Панорамный вид на море, горы и центр Аланьи",
        "Уникальный формат, всего 10 квартир в комплексе",
        "Эксклюзивная лаунж-зона на крыше: тренажерный зал, зона барбекю, открытая кухня",
        "Электрическая раздвижная крыша на террасе",
        "Закрытый формат резиденции для ценителей уединения",
        "Идеально для жизни, отдыха или инвестиций"
      ],
      "tr": [
        "Türkiye oturma izni ve vatandaşlığı için uygun",
        "Geniş daireler ve ferah planlar",
        "Deniz, dağ ve Alanya merkezinin panoramik manzarası",
        "Eşsiz format, komplekste yalnızca 10 daire",
        "Ayrıcalıklı çatı lounge: spor salonu, BBQ alanı, açık mutfak",
        "Terasta elektrikli sürgülü tavan",
        "Mahremiyete değer verenler için kapalı rezidans formatı",
        "Yaşam, tatil veya yatırım için ideal"
      ]
    },
    "unitTypes": [
      {
        "layout": "2+1",
        "area": "90 m²",
        "priceFrom": "249 900 EUR"
      },
      {
        "layout": "3+1",
        "area": "110 m²",
        "priceFrom": "239 900 EUR"
      },
      {
        "layout": "3+1 (standard)",
        "area": "from 210 m²",
        "priceFrom": null
      }
    ],
    "infrastructure": {
      "en": [],
      "ru": [],
      "tr": []
    },
    "paymentTerms": {
      "en": "Down payment of 35%, remaining amount in interest-free installments per the contract schedule. Installment provided until 01.12.2025. Payment frequency: quarterly. Receiving the TAPU: after 100% payment.",
      "ru": "Первоначальный взнос 35%, оставшаяся сумма, беспроцентная рассрочка по графику договора. Рассрочка предоставляется до 01.12.2025 г. Периодичность платежей: ежеквартально. Получение ТАПУ: после 100% оплаты.",
      "tr": "%35 peşinat, kalan tutar sözleşme planına göre faizsiz taksit. Taksit son tarihi 01.12.2025. Ödeme sıklığı: her üç ayda bir. Tapu alımı: tam ödeme sonrası."
    },
    "distances": [
      {
        "to": {
          "en": "Sea / beach",
          "ru": "Море / пляж",
          "tr": "Deniz / plaj"
        },
        "value": "1.75 km"
      },
      {
        "to": {
          "en": "Center of Alanya",
          "ru": "Центр Аланьи",
          "tr": "Alanya merkezi"
        },
        "value": "under 5 min by car"
      },
      {
        "to": {
          "en": "Gazipasa Airport",
          "ru": "Аэропорт Газипаша",
          "tr": "Gazipaşa Havalimanı"
        },
        "value": "50 km"
      },
      {
        "to": {
          "en": "Antalya Airport",
          "ru": "Аэропорт Анталии",
          "tr": "Antalya Havalimanı"
        },
        "value": "120 km"
      }
    ]
  },
  "new-level-premium-share-of-apartments": {
    "slug": "new-level-premium-share-of-apartments",
    "images": [
      "https://newlevel-group.com/storage/1722/1.jpeg",
      "https://newlevel-group.com/storage/136155/whatsapp_image_2026_07_10_at_161817.jpeg",
      "https://newlevel-group.com/storage/136153/whatsapp_image_2026_07_10_at_161814.jpeg",
      "https://newlevel-group.com/storage/136154/whatsapp_image_2026_07_10_at_161816.jpeg",
      "https://newlevel-group.com/storage/136164/whatsapp_image_2026_07_10_at_161835.jpeg",
      "https://newlevel-group.com/storage/1693/dji_20250918103343_0035_d.JPG",
      "https://newlevel-group.com/storage/1702/01.jpg",
      "https://newlevel-group.com/storage/1703/02.jpg",
      "https://newlevel-group.com/storage/1704/03.jpg",
      "https://newlevel-group.com/storage/1711/10.jpg",
      "https://newlevel-group.com/storage/1712/11.jpg",
      "https://newlevel-group.com/storage/1713/12.jpg",
      "https://newlevel-group.com/storage/136152/whatsapp_image_2026_07_10_at_161812.jpeg",
      "https://newlevel-group.com/storage/136156/whatsapp_image_2026_07_10_at_161819.jpeg",
      "https://newlevel-group.com/storage/136157/whatsapp_image_2026_07_10_at_161820.jpeg",
      "https://newlevel-group.com/storage/136158/whatsapp_image_2026_07_10_at_161823.jpeg",
      "https://newlevel-group.com/storage/136159/whatsapp_image_2026_07_10_at_161824.jpeg",
      "https://newlevel-group.com/storage/136160/whatsapp_image_2026_07_10_at_161825.jpeg",
      "https://newlevel-group.com/storage/136161/whatsapp_image_2026_07_10_at_161831.jpeg",
      "https://newlevel-group.com/storage/136162/whatsapp_image_2026_07_10_at_161830.jpeg",
      "https://newlevel-group.com/storage/136163/whatsapp_image_2026_07_10_at_161833.jpeg",
      "https://newlevel-group.com/storage/136165/whatsapp_image_2026_07_10_at_161832.jpeg",
      "https://newlevel-group.com/storage/136166/whatsapp_image_2026_07_10_at_161815.jpeg",
      "https://newlevel-group.com/storage/136167/whatsapp_image_2026_07_10_at_161818.jpeg",
      "https://newlevel-group.com/storage/136168/whatsapp_image_2026_07_10_at_161823_1.jpeg",
      "https://newlevel-group.com/storage/136169/whatsapp_image_2026_07_10_at_161827.jpeg",
      "https://newlevel-group.com/storage/136170/whatsapp_image_2026_07_10_at_161828.jpeg",
      "https://newlevel-group.com/storage/136171/whatsapp_image_2026_07_10_at_161829.jpeg",
      "https://newlevel-group.com/storage/136172/whatsapp_image_2026_07_10_at_161836.jpeg",
      "https://newlevel-group.com/storage/136173/whatsapp_image_2026_07_10_at_161837.jpeg",
      "https://newlevel-group.com/storage/136174/dji_20260703114424_0002_d.JPG",
      "https://newlevel-group.com/storage/136175/dji_20260703114638_0008_d.JPG",
      "https://newlevel-group.com/storage/136176/dji_20260703114819_0011_d.JPG",
      "https://newlevel-group.com/storage/136177/dji_20260703114831_0012_d.JPG",
      "https://newlevel-group.com/storage/136178/dji_20260703114902_0013_d.JPG",
      "https://newlevel-group.com/storage/136179/dji_20260703115004_0015_d.JPG",
      "https://newlevel-group.com/storage/136180/dji_20260703115222_0020_d.JPG",
      "https://newlevel-group.com/storage/136181/dji_20260703115319_0021_d.JPG",
      "https://newlevel-group.com/storage/136182/dji_20260703115442_0023_d.JPG",
      "https://newlevel-group.com/storage/136183/dji_20260703115659_0028_d.JPG",
      "https://newlevel-group.com/storage/136184/dji_20260703115405_0022_d.JPG",
      "https://newlevel-group.com/storage/136185/dji_20260703115728_0029_d.JPG",
      "https://newlevel-group.com/storage/136186/dji_20260703115808_0032_d.JPG",
      "https://newlevel-group.com/storage/136187/dji_20260703115800_0031_d.JPG",
      "https://newlevel-group.com/storage/136188/dji_20260703115820_0033_d.JPG",
      "https://newlevel-group.com/storage/136189/dji_20260703120419_0043_d.JPG",
      "https://newlevel-group.com/storage/1723/2.jpeg",
      "https://newlevel-group.com/storage/1724/3.jpeg",
      "https://newlevel-group.com/storage/1725/4.jpeg",
      "https://newlevel-group.com/storage/1726/5.jpeg",
      "https://newlevel-group.com/storage/1727/6.jpeg",
      "https://newlevel-group.com/storage/1728/7.jpeg",
      "https://newlevel-group.com/storage/1729/8.jpeg",
      "https://newlevel-group.com/storage/1730/9.jpeg",
      "https://newlevel-group.com/storage/1731/10.jpeg",
      "https://newlevel-group.com/storage/1732/11.jpeg",
      "https://newlevel-group.com/storage/1733/12.jpeg",
      "https://newlevel-group.com/storage/1734/13.jpeg",
      "https://newlevel-group.com/storage/1735/14.jpeg",
      "https://newlevel-group.com/storage/1736/15.jpeg",
      "https://newlevel-group.com/storage/1738/1.jpeg",
      "https://newlevel-group.com/storage/1739/2.jpeg",
      "https://newlevel-group.com/storage/1740/3.jpeg",
      "https://newlevel-group.com/storage/1741/4.jpeg",
      "https://newlevel-group.com/storage/1742/5.jpeg",
      "https://newlevel-group.com/storage/1743/6.jpeg",
      "https://newlevel-group.com/storage/1744/7.jpeg",
      "https://newlevel-group.com/storage/1745/8.jpeg",
      "https://newlevel-group.com/storage/1746/9.jpeg",
      "https://newlevel-group.com/storage/1747/10.jpeg",
      "https://newlevel-group.com/storage/1748/11.jpeg",
      "https://newlevel-group.com/storage/1749/12.jpeg",
      "https://newlevel-group.com/storage/1750/13.jpeg",
      "https://newlevel-group.com/storage/1751/14.jpeg",
      "https://newlevel-group.com/storage/1752/15.jpeg"
    ],
    "floorPlans": [
      "https://newlevel-group.com/storage/1737/26_g_blok_tip_kat_plani.png"
    ],
    "coordinates": {
      "lat": 36.643284,
      "lng": 31.755508
    },
    "complexArea": {
      "en": "52,000 m²",
      "ru": "52 000 м²",
      "tr": "52.000 m²"
    },
    "status": {
      "en": null,
      "ru": null,
      "tr": null
    },
    "description": {
      "en": "A smart investment by the sea, a format that rolls a home, holidays and income into one.\n\nIt gives you the things buyers actually ask for: full ownership, time to relax in your own apartment, short-term rental income and 5-star hotel service. This is more than an apartment; it is a working asset in the green resort area of Avsallar, with real infrastructure, sandy beaches and rare natural surroundings around it.\n\nIn our New Level Premium project, Block G sets aside a limited number of apartments where you can buy a share with the right to use it for a chosen month. Each is a fully furnished, fully equipped 1+1, ready for a comfortable stay.\n\nAbout the project\nThe project is located on a 52,000 m² plot in one of the most picturesque corners of Avsallar, just 900 metres from the Blue Flag awarded Incekum Beach. The territory will house a 5-star hotel with year-round operation, 7 residential blocks, and extensive social and entertainment infrastructure. One detail worth noting: the land next to the complex is a protected zone, so no new construction will go up to block the views of the sea and the nature around it.",
      "ru": "Умная инвестиция у моря, формат, который объединяет жильё, отдых и доход.\n\nЗдесь есть то, о чём обычно и спрашивают: полноценное право собственности, возможность отдохнуть в собственных апартаментах, доход от краткосрочной аренды и сервис 5-звёздочного отеля. Это не просто квартира, а работающий актив в экологичном курортном районе Авсаллар, с развитой инфраструктурой, песчаными пляжами и редкой природой вокруг.\n\nВ нашем проекте New Level Premium в блоке G выделено всего несколько квартир, где можно приобрести долю с правом пользования в выбранный месяц. Каждая, это полностью меблированная и оснащённая квартира 1+1, готовая к комфортному отдыху.\n\nО проекте\nПроект расположен на участке площадью 52 000 м² в одном из самых живописных уголков Авсаллара, всего в 900 метрах от пляжа Инжекум, отмеченного «Голубым флагом». На территории будут располагаться 5-звёздочный отель с круглогодичной работой, 7 жилых блоков и просторная социальная и развлекательная инфраструктура. Отдельно стоит отметить: земля рядом с комплексом относится к заповедной зоне, а значит, новых строек здесь не появится и панорамные виды на море и природу сохранятся.",
      "tr": "Deniz kenarında akıllı bir yatırım; konutu, tatili ve geliri tek formatta buluşturuyor.\n\nAlıcıların gerçekten istediği şeyler burada: tam mülkiyet, kendi dairenizde dinlenme imkânı, kısa süreli kira geliri ve 5 yıldızlı otel hizmeti. Bu yalnızca bir daire değil; gelişmiş altyapısı, kumlu plajları ve eşsiz doğasıyla Avsallar'ın çevre dostu tatil bölgesinde çalışan bir yatırım varlığı.\n\nNew Level Premium projemizin G Blokunda, seçtiğiniz bir ay boyunca kullanım hakkıyla pay satın alabileceğiniz sınırlı sayıda daire var. Her biri, konforlu bir tatile hazır, tamamen mobilyalı ve donatılmış 1+1 daire.\n\nProje hakkında\nProje, Avsallar'ın en güzel köşelerinden birinde, Mavi Bayrak ödüllü İncekum Plajı'na sadece 900 metre mesafede, 52.000 m²'lik bir arsa üzerinde yer alır. Bölgede yıl boyu hizmet veren 5 yıldızlı bir otel, 7 konut bloğu ve kapsamlı sosyal ve eğlence altyapısı yer alacak. Şunu da belirtelim: kompleksin bitişiğindeki alan koruma altında, yani buraya yeni yapı çıkmayacak ve denizle doğanın panoramik manzarası olduğu gibi kalacak."
    },
    "benefits": {
      "en": [
        "You are the owner, with a TAPU registered at the Turkish Land Registry",
        "Ownership during selected months, a flexible occupancy schedule",
        "Short-term rental license, income when you are not using the apartment",
        "Premium finishes, furniture and appliances included in the price",
        "Hotel infrastructure: service, transfer, spa, cleaning, reception",
        "Interest-free installment plan, flexible ownership format",
        "A unique format with no reservations and no ongoing hotel-style costs",
        "Sell your share or rent it out at any time",
        "Low investment threshold"
      ],
      "ru": [
        "Вы собственник с TAPU, зарегистрированным в Земельном кадастре Турции",
        "Владение в выбранные месяцы, гибкий график проживания",
        "Лицензия на краткосрочную аренду, доход, когда вы не пользуетесь апартаментами",
        "Премиальная отделка, мебель и техника включены в стоимость",
        "Отельная инфраструктура: обслуживание, трансфер, SPA, уборка, ресепшн",
        "Беспроцентная рассрочка, гибкий формат владения",
        "Уникальный формат без бронирований и без постоянных затрат, как в отеле",
        "Возможность в любой момент продать свою долю или сдать в аренду",
        "Низкий порог инвестиций"
      ],
      "tr": [
        "Tapunuz Türkiye Tapu Sicilinde kayıtlı, sahibi sizsiniz",
        "Belirli aylarda mülk sahipliği, esnek oturma planı",
        "Kısa süreli kiralama lisansı, daireyi kullanmadığınızda gelir",
        "Fiyata birinci sınıf kaplama, mobilya ve beyaz eşya dahil",
        "Otel altyapısı: hizmet, transfer, spa, temizlik, resepsiyon",
        "Faizsiz taksit planı, esnek mülkiyet formatı",
        "Otel gibi rezervasyon ve sürekli masraf gerektirmeyen benzersiz format",
        "Payınızı dilediğiniz zaman satma veya kiralama imkanı",
        "Düşük yatırım eşiği"
      ]
    },
    "unitTypes": [
      {
        "layout": "1+1",
        "area": "51 m²",
        "priceFrom": "5 400 EUR"
      }
    ],
    "infrastructure": {
      "en": [
        "Generator",
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
        "Security 24/7",
        "Table tennis",
        "Mini club",
        "Massage rooms",
        "Shop",
        "Elevator",
        "Concierge",
        "Cafe",
        "Playroom",
        "Internet",
        "Indoor swimming pool",
        "Closed parking",
        "Intercom",
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
        "Охрана 24/7",
        "Настольный теннис",
        "Мини клуб",
        "Массажные кабинеты",
        "Магазин",
        "Лифт",
        "Консьерж",
        "Кафе",
        "Игровая комната",
        "Интернет",
        "Закрытый бассейн",
        "Закрытая парковка",
        "Домофон",
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
        "Güvenlik 24/7",
        "Masa tenisi",
        "Mini kulüp",
        "Masaj odaları",
        "Mağaza",
        "Asansör",
        "Kapıcı",
        "Kafe",
        "Oyun odası",
        "İnternet",
        "Kapalı yüzme havuzu",
        "Kapalı otopark",
        "İnterkom",
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
      "en": "Down payment 35%. The remaining amount is an interest-free installment until the completion of construction. Installment provided until 11.12.2025. Payment frequency: quarterly. Receiving the TAPU: after 100% payment.",
      "ru": "Первоначальный взнос 35%. Оставшаяся сумма, беспроцентная рассрочка до окончания строительства. Рассрочка предоставляется до 11.12.2025 г. Периодичность платежей: ежеквартально. Получение ТАПУ: после 100% оплаты.",
      "tr": "Peşinat %35. Kalan tutar, inşaat tamamlanana kadar faizsiz taksit. Taksit son tarihi 11.12.2025. Ödeme sıklığı: her üç ayda bir. Tapu alımı: tam ödeme sonrası."
    },
    "distances": [
      {
        "to": {
          "en": "Incekum Beach",
          "ru": "Пляж Инжекум",
          "tr": "İncekum Plajı"
        },
        "value": "900 m"
      },
      {
        "to": {
          "en": "Center of Avsallar",
          "ru": "Центр Авсаллара",
          "tr": "Avsallar merkezi"
        },
        "value": "2 km"
      },
      {
        "to": {
          "en": "Center of Alanya",
          "ru": "Центр Алании",
          "tr": "Alanya şehir merkezi"
        },
        "value": "22 km"
      },
      {
        "to": {
          "en": "Gazipasa Airport",
          "ru": "Аэропорт Газипаша",
          "tr": "Gazipaşa Havalimanı"
        },
        "value": "60 km"
      },
      {
        "to": {
          "en": "Antalya Airport",
          "ru": "Аэропорт Анталии",
          "tr": "Antalya Havalimanı"
        },
        "value": "105 km"
      }
    ]
  },
  "new-level-premium": {
    "slug": "new-level-premium",
    "images": [
      "https://newlevel-group.com/storage/1233/8.jpeg",
      "https://newlevel-group.com/storage/136197/whatsapp_image_2026_07_10_at_161819.jpeg",
      "https://newlevel-group.com/storage/1232/02.jpg",
      "https://newlevel-group.com/storage/1225/10.jpg",
      "https://newlevel-group.com/storage/136198/whatsapp_image_2026_07_10_at_161812.jpeg",
      "https://newlevel-group.com/storage/136199/whatsapp_image_2026_07_10_at_161814.jpeg",
      "https://newlevel-group.com/storage/136200/whatsapp_image_2026_07_10_at_161816.jpeg",
      "https://newlevel-group.com/storage/136201/whatsapp_image_2026_07_10_at_161817.jpeg",
      "https://newlevel-group.com/storage/136202/whatsapp_image_2026_07_10_at_161820.jpeg",
      "https://newlevel-group.com/storage/136203/whatsapp_image_2026_07_10_at_161823.jpeg",
      "https://newlevel-group.com/storage/136204/whatsapp_image_2026_07_10_at_161824.jpeg",
      "https://newlevel-group.com/storage/136205/whatsapp_image_2026_07_10_at_161825.jpeg",
      "https://newlevel-group.com/storage/136206/whatsapp_image_2026_07_10_at_161831.jpeg",
      "https://newlevel-group.com/storage/136207/whatsapp_image_2026_07_10_at_161830.jpeg",
      "https://newlevel-group.com/storage/136208/whatsapp_image_2026_07_10_at_161833.jpeg",
      "https://newlevel-group.com/storage/136209/whatsapp_image_2026_07_10_at_161832.jpeg",
      "https://newlevel-group.com/storage/136210/whatsapp_image_2026_07_10_at_161835.jpeg",
      "https://newlevel-group.com/storage/136211/whatsapp_image_2026_07_10_at_161815.jpeg",
      "https://newlevel-group.com/storage/136212/whatsapp_image_2026_07_10_at_161818.jpeg",
      "https://newlevel-group.com/storage/136213/whatsapp_image_2026_07_10_at_161823_1.jpeg",
      "https://newlevel-group.com/storage/136214/whatsapp_image_2026_07_10_at_161827.jpeg",
      "https://newlevel-group.com/storage/136215/whatsapp_image_2026_07_10_at_161829.jpeg",
      "https://newlevel-group.com/storage/136216/whatsapp_image_2026_07_10_at_161828.jpeg",
      "https://newlevel-group.com/storage/136217/whatsapp_image_2026_07_10_at_161836.jpeg",
      "https://newlevel-group.com/storage/136218/whatsapp_image_2026_07_10_at_161837.jpeg",
      "https://newlevel-group.com/storage/136219/whatsapp_image_2026_07_10_at_161809.jpeg",
      "https://newlevel-group.com/storage/136220/whatsapp_image_2026_07_10_at_161812_1.jpeg",
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
      "https://newlevel-group.com/storage/1234/1.jpeg",
      "https://newlevel-group.com/storage/1235/2.jpeg",
      "https://newlevel-group.com/storage/1236/5.jpeg",
      "https://newlevel-group.com/storage/1237/15.jpeg",
      "https://newlevel-group.com/storage/1238/10.jpeg",
      "https://newlevel-group.com/storage/1240/2.jpeg",
      "https://newlevel-group.com/storage/1241/8.jpeg",
      "https://newlevel-group.com/storage/1242/16.jpg",
      "https://newlevel-group.com/storage/1243/04.jpg",
      "https://newlevel-group.com/storage/1244/17.jpg",
      "https://newlevel-group.com/storage/1245/15.jpeg",
      "https://newlevel-group.com/storage/1246/10.jpeg",
      "https://newlevel-group.com/storage/1247/5.jpeg",
      "https://newlevel-group.com/storage/1248/4.jpeg",
      "https://newlevel-group.com/storage/1249/1.jpeg",
      "https://newlevel-group.com/storage/1299/22.jpg",
      "https://newlevel-group.com/storage/1300/01_7.JPG",
      "https://newlevel-group.com/storage/136237/5388931681915444070.jpg",
      "https://newlevel-group.com/storage/136238/5388931681915444074.jpg",
      "https://newlevel-group.com/storage/136239/5388931681915444073.jpg",
      "https://newlevel-group.com/storage/136240/5388931681915444071.jpg",
      "https://newlevel-group.com/storage/136241/5388931681915444068.jpg",
      "https://newlevel-group.com/storage/136242/5388931681915444069.jpg",
      "https://newlevel-group.com/storage/136243/5388931681915444075.jpg"
    ],
    "floorPlans": [
      "https://newlevel-group.com/storage/1280/2_a_blok_tip_kat_plani.jpg",
      "https://newlevel-group.com/storage/1281/3_a_blok_8_kat_plani.jpg",
      "https://newlevel-group.com/storage/1282/4_a_blok_cati_arasi_plani.jpg",
      "https://newlevel-group.com/storage/1283/6_b_blok_tip_kat_plani.jpg",
      "https://newlevel-group.com/storage/1284/7_b_blok_8_kat_plani.jpg",
      "https://newlevel-group.com/storage/1285/8_b_blok_cati_arasi_plani.jpg",
      "https://newlevel-group.com/storage/1286/10_c_blok_tip_kat_plani.jpg",
      "https://newlevel-group.com/storage/1287/11_c_blok_8_kat_plani.jpg",
      "https://newlevel-group.com/storage/1288/12_c_blok_cati_arasi_plani.jpg",
      "https://newlevel-group.com/storage/1289/14_d_blok_tip_kat_plani.jpg",
      "https://newlevel-group.com/storage/1290/15_d_blok_8_kat_plani.jpg",
      "https://newlevel-group.com/storage/1291/16_d_blok_cati_arasi_plani.jpg",
      "https://newlevel-group.com/storage/1292/19_e_blok_8_kat_plani.jpg",
      "https://newlevel-group.com/storage/1293/20_e_blok_cati_arasi_plani.jpg",
      "https://newlevel-group.com/storage/1294/22_f_blok_tip_kat_plani.jpg",
      "https://newlevel-group.com/storage/1295/23_f_blok_8_kat_plani.jpg",
      "https://newlevel-group.com/storage/1296/24_f_blok_cati_arasi_plani.jpg",
      "https://newlevel-group.com/storage/1297/27_g_blok_8_kat_plani.jpg",
      "https://newlevel-group.com/storage/1298/28_g_blok_cati_arasi_plani.jpg"
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
      "en": "New Level Premium is a large-scale residence in Avsallar, one of Alanya's most sought-after districts. It brings together spacious grounds, first-class infrastructure, a private beach and open natural scenery. Standing just 900 meters from the famous Blue Flag Incekum Beach, it offers seclusion among pine forests and wide views over the Mediterranean and the mountains.\n\nAbout the project\nThe project is located on a 52,000 m² plot in one of the most picturesque corners of Avsallar, just 900 meters from the Blue Flag awarded Incekum Beach. The territory will house a 5-star hotel with year-round operation, 7 residential blocks, and extensive social and entertainment infrastructure. One detail worth noting: the land next to the complex is a protected area, so no new construction will go up to block the views of the sea and the nature around it.\n\nAll apartments are delivered with high-quality finishing on a turnkey basis.",
      "ru": "New Level Premium, масштабный жилой проект в Авсалларе, одном из самых востребованных районов Алании. Современный комплекс объединяет просторную территорию, первоклассную инфраструктуру, собственный пляж и живописные природные пейзажи. Всего в 900 метрах от знаменитого пляжа Инжекум с «Голубым флагом», он дарит уединение среди сосновых лесов и панорамы на Средиземное море и горные вершины.\n\nО проекте\nПроект расположен на участке площадью 52 000 м² в одном из самых живописных уголков Авсаллара, всего в 900 метрах от пляжа Инжекум, отмеченного «Голубым флагом». На территории будут располагаться 5-звездочный отель с круглогодичной работой, 7 жилых блоков и просторная социальная и развлекательная инфраструктура. Отдельно стоит отметить: земля рядом с комплексом относится к заповедной зоне, а значит, новых строек здесь не появится и панорамные виды на море и природу сохранятся.\n\nВсе квартиры передаются с качественной чистовой отделкой «под ключ».",
      "tr": "New Level Premium, Alanya'nın en gözde bölgelerinden Avsallar'da büyük ölçekli bir konut projesi. Bu modern kompleks; geniş arazileri, birinci sınıf altyapısı, özel plajı ve doğal manzaralarıyla öne çıkıyor. Ünlü Mavi Bayraklı İncekum Plajı'na yalnızca 900 metre mesafede yer alan kompleks, çam ormanları arasında tenha bir ortam ve Akdeniz ile dağ zirvelerine panoramik manzaralar sunuyor.\n\nProje hakkında\nProje, Avsallar'ın en güzel köşelerinden birinde, Mavi Bayrak ödüllü İncekum Plajı'na sadece 900 metre mesafede, 52.000 m²'lik bir arsa üzerinde yer almaktadır. Bu bölgede yıl boyu hizmet veren 5 yıldızlı bir otel, 7 konut bloğu ve kapsamlı sosyal ve eğlence altyapısı yer alacak. Şunu da belirtelim: kompleksin bitişiğindeki alan koruma altında, yani buraya yeni yapı çıkmayacak ve denizle doğanın panoramik manzarası olduğu gibi kalacak.\n\nTüm daireler yüksek kaliteli işçilikle anahtar teslimi olarak teslim edilmektedir."
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
