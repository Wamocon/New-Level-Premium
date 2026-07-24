import type {
  Property,
  PropertyType,
  PropertyTypeCard,
} from '@/lib/types';
import { img } from '@/lib/images';

export const propertyTypeLabels: Record<PropertyType, Record<'ru' | 'en' | 'tr', string>> = {
  apartment: { ru: 'Апартаменты', en: 'Apartments', tr: 'Daireler' },
  villa: { ru: 'Виллы', en: 'Villas', tr: 'Villalar' },
  penthouse: { ru: 'Пентхаусы', en: 'Penthouses', tr: 'Çatı katları' },
  land: { ru: 'Земля', en: 'Land', tr: 'Arsa' },
  commercial: { ru: 'Коммерция', en: 'Commercial', tr: 'Ticari' },
};

// Auto-generated from the live original catalogue (scratchpad/properties-raw.json).
export const properties: Property[] = [
  {
    "id": "apartment-avsallar-w35q4g",
    "ref": "NL-8191",
    "title": {
      "en": "2+1 Apartment in Avsallar",
      "ru": "Апартаменты 2+1, Авсаллар",
      "tr": "Avsallar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 136400,
    "rooms": "2+1",
    "area": 90,
    "floor": 1,
    "totalFloors": 8,
    "distanceToSea": 250,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/1871/whatsapp_image_2026_05_14_at_160153.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/1872/whatsapp_image_2026_05_14_at_160154.jpeg",
      "https://newlevel-group.com/storage/1873/whatsapp_image_2026_05_14_at_160155.jpeg",
      "https://newlevel-group.com/storage/1874/whatsapp_image_2026_05_14_at_160156.jpeg",
      "https://newlevel-group.com/storage/1875/whatsapp_image_2026_05_14_at_160157.jpeg",
      "https://newlevel-group.com/storage/1876/whatsapp_image_2026_05_14_at_160158.jpeg",
      "https://newlevel-group.com/storage/1877/whatsapp_image_2026_05_14_at_160203.jpeg"
    ],
    "featured": true
  },
  {
    "id": "1-bedroom-apartment-avsallar-8761kx",
    "ref": "NL-11413",
    "title": {
      "en": "1+1 Apartment in Avsallar",
      "ru": "Апартаменты 1+1, Авсаллар",
      "tr": "Avsallar, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 270000,
    "rooms": "1+1",
    "area": 50,
    "floor": 2,
    "totalFloors": 9,
    "distanceToSea": 1780,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/1971/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/1972/2.jpeg",
      "https://newlevel-group.com/storage/1973/3.jpeg",
      "https://newlevel-group.com/storage/1974/5.jpeg",
      "https://newlevel-group.com/storage/1975/6.jpeg",
      "https://newlevel-group.com/storage/1976/7.jpeg",
      "https://newlevel-group.com/storage/1977/8.jpeg"
    ],
    "featured": true
  },
  {
    "id": "apartment-center-6s580r",
    "ref": "NL-10461",
    "title": {
      "en": "2+1 Apartment in Center",
      "ru": "Апартаменты 2+1, Центр",
      "tr": "Merkez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 239900,
    "rooms": "2+1",
    "area": 90,
    "floor": 3,
    "totalFloors": 10,
    "distanceToSea": 1690,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2006/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2007/21.jpeg",
      "https://newlevel-group.com/storage/2008/2.jpeg",
      "https://newlevel-group.com/storage/2009/3.jpeg",
      "https://newlevel-group.com/storage/2010/4.jpeg",
      "https://newlevel-group.com/storage/2011/5.jpeg",
      "https://newlevel-group.com/storage/2012/6.jpeg"
    ],
    "featured": true
  },
  {
    "id": "apartment-oba-jxht22",
    "ref": "NL-8446",
    "title": {
      "en": "2+1 Apartment in Oba",
      "ru": "Апартаменты 2+1, Оба",
      "tr": "Oba, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-cleopatra-1",
    "city": "Alanya",
    "district": {
      "ru": "Оба",
      "en": "Oba",
      "tr": "Oba"
    },
    "price": 116350,
    "rooms": "2+1",
    "area": 90,
    "floor": 4,
    "totalFloors": 11,
    "distanceToSea": 1600,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2037/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2038/2.jpeg",
      "https://newlevel-group.com/storage/2039/3.jpeg",
      "https://newlevel-group.com/storage/2040/4.jpeg",
      "https://newlevel-group.com/storage/2041/5.jpeg",
      "https://newlevel-group.com/storage/2042/6.jpeg",
      "https://newlevel-group.com/storage/2043/7.jpeg"
    ],
    "featured": true
  },
  {
    "id": "apartment-oba-y2rcz3",
    "ref": "NL-12371",
    "title": {
      "en": "2+1 Apartment in Oba",
      "ru": "Апартаменты 2+1, Оба",
      "tr": "Oba, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-cleopatra-1",
    "city": "Alanya",
    "district": {
      "ru": "Оба",
      "en": "Oba",
      "tr": "Oba"
    },
    "price": 260000,
    "rooms": "2+1",
    "area": 90,
    "floor": 5,
    "totalFloors": 12,
    "distanceToSea": 1510,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2054/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2055/2.jpg",
      "https://newlevel-group.com/storage/2056/3.jpg",
      "https://newlevel-group.com/storage/2057/4.jpg",
      "https://newlevel-group.com/storage/2058/5.jpg",
      "https://newlevel-group.com/storage/2059/6.jpg",
      "https://newlevel-group.com/storage/2060/7.jpg"
    ],
    "featured": true
  },
  {
    "id": "2-bedroom-apartment-makhmutlar-nhplvh",
    "ref": "NL-12370",
    "title": {
      "en": "2+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 2+1, Махмутлар",
      "tr": "Mahmutlar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 229000,
    "rooms": "2+1",
    "area": 120,
    "floor": 6,
    "totalFloors": 13,
    "distanceToSea": 1420,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2068/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2069/2.jpeg",
      "https://newlevel-group.com/storage/2070/3.jpeg",
      "https://newlevel-group.com/storage/2071/4.jpeg",
      "https://newlevel-group.com/storage/2072/5.jpeg",
      "https://newlevel-group.com/storage/2073/6.jpeg",
      "https://newlevel-group.com/storage/2074/7.jpeg"
    ],
    "featured": true
  },
  {
    "id": "1-bedroom-apartment-center-q3cngm",
    "ref": "NL-12372",
    "title": {
      "en": "1+1 Apartment in Center",
      "ru": "Апартаменты 1+1, Центр",
      "tr": "Merkez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 189000,
    "rooms": "1+1",
    "area": 57,
    "floor": 7,
    "totalFloors": 14,
    "distanceToSea": 1330,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2118/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2119/2.jpg",
      "https://newlevel-group.com/storage/2120/3.jpg",
      "https://newlevel-group.com/storage/2121/4.jpg",
      "https://newlevel-group.com/storage/2122/5.jpg",
      "https://newlevel-group.com/storage/2123/6.jpg",
      "https://newlevel-group.com/storage/2124/7.jpg"
    ],
    "featured": true
  },
  {
    "id": "apartment-konyaalti-2ltdlx",
    "ref": "NL-12373",
    "title": {
      "en": "1+1 Apartment in Konyaaltı",
      "ru": "Апартаменты 1+1, Коньяалты",
      "tr": "Konyaaltı, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Konyaaltı",
      "ru": "Коньяалты",
      "tr": "Konyaaltı"
    },
    "price": 125000,
    "rooms": "1+1",
    "area": 55,
    "floor": 8,
    "totalFloors": 8,
    "distanceToSea": 1240,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2158/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2159/2.jpeg",
      "https://newlevel-group.com/storage/2160/3.jpeg",
      "https://newlevel-group.com/storage/2161/4.jpeg",
      "https://newlevel-group.com/storage/2162/5.jpeg",
      "https://newlevel-group.com/storage/2163/6.jpeg",
      "https://newlevel-group.com/storage/2164/7.jpeg"
    ],
    "featured": true
  },
  {
    "id": "apartment-konyaalti-fyy960",
    "ref": "NL-12374",
    "title": {
      "en": "2+1 Apartment in Konyaaltı",
      "ru": "Апартаменты 2+1, Коньяалты",
      "tr": "Konyaaltı, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Konyaaltı",
      "ru": "Коньяалты",
      "tr": "Konyaaltı"
    },
    "price": 138000,
    "rooms": "2+1",
    "area": 90,
    "floor": 1,
    "totalFloors": 9,
    "distanceToSea": 1150,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2178/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2179/2.jpeg",
      "https://newlevel-group.com/storage/2180/3.jpeg",
      "https://newlevel-group.com/storage/2181/4.jpeg",
      "https://newlevel-group.com/storage/2182/5.jpeg",
      "https://newlevel-group.com/storage/2183/6.jpeg",
      "https://newlevel-group.com/storage/2184/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "3-bedroom-penthouse-center-01xylt",
    "ref": "NL-12369",
    "title": {
      "en": "3+1 Penthouse in Center",
      "ru": "Пентхаус 3+1, Центр",
      "tr": "Merkez, 3+1 Çatı katı"
    },
    "type": "penthouse",
    "category": [
      "hot"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 420000,
    "rooms": "3+1",
    "area": 220,
    "floor": 2,
    "totalFloors": 10,
    "distanceToSea": 1060,
    "seaView": true,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2198/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2199/2.jpg",
      "https://newlevel-group.com/storage/2200/3.jpg",
      "https://newlevel-group.com/storage/2201/4.jpg",
      "https://newlevel-group.com/storage/2202/5.jpeg",
      "https://newlevel-group.com/storage/2203/6.jpeg",
      "https://newlevel-group.com/storage/2204/7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "3-bedroom-villa-kargicak-4vxgbj",
    "ref": "NL-12368",
    "title": {
      "en": "3+1 Villa in Kargicak",
      "ru": "Вилла 3+1, Каргыджак",
      "tr": "Kargıcak, 3+1 Villa"
    },
    "type": "villa",
    "category": [
      "new"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Каргыджак",
      "en": "Kargicak",
      "tr": "Kargıcak"
    },
    "price": 445000,
    "rooms": "3+1",
    "area": 240,
    "floor": 3,
    "totalFloors": 11,
    "distanceToSea": 970,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2270/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2271/2.jpg",
      "https://newlevel-group.com/storage/2272/3.jpg",
      "https://newlevel-group.com/storage/2273/4.jpg",
      "https://newlevel-group.com/storage/2274/5.jpg",
      "https://newlevel-group.com/storage/2275/61.jpg",
      "https://newlevel-group.com/storage/2276/6.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-villa-center-rj6xkv",
    "ref": "NL-12367",
    "title": {
      "en": "2+1 Villa in Center",
      "ru": "Вилла 2+1, Центр",
      "tr": "Merkez, 2+1 Villa"
    },
    "type": "villa",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 341500,
    "rooms": "2+1",
    "area": 140,
    "floor": 4,
    "totalFloors": 12,
    "distanceToSea": 880,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2304/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2305/2.jpg",
      "https://newlevel-group.com/storage/2306/3.jpg",
      "https://newlevel-group.com/storage/2307/4.jpg",
      "https://newlevel-group.com/storage/2308/5.jpg",
      "https://newlevel-group.com/storage/2309/6.jpg",
      "https://newlevel-group.com/storage/2310/7.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-center-7ymlmj",
    "ref": "NL-12366",
    "title": {
      "en": "2+1 Apartment in Center",
      "ru": "Апартаменты 2+1, Центр",
      "tr": "Merkez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 102000,
    "rooms": "2+1",
    "area": 110,
    "floor": 5,
    "totalFloors": 13,
    "distanceToSea": 790,
    "seaView": true,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2322/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2323/11.jpg",
      "https://newlevel-group.com/storage/2324/2.jpg",
      "https://newlevel-group.com/storage/2325/3.jpg",
      "https://newlevel-group.com/storage/2326/4.jpg",
      "https://newlevel-group.com/storage/2327/5.jpg",
      "https://newlevel-group.com/storage/2328/6.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-beylikduzu-w4jwvq",
    "ref": "NL-12365",
    "title": {
      "en": "2+1 Apartment in Beylikdüzü",
      "ru": "Апартаменты 2+1, Бейликдюзю",
      "tr": "Beylikdüzü, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Istanbul",
    "district": {
      "en": "Beylikdüzü",
      "ru": "Бейликдюзю",
      "tr": "Beylikdüzü"
    },
    "price": 247500,
    "rooms": "2+1",
    "area": 90,
    "floor": 6,
    "totalFloors": 14,
    "distanceToSea": 700,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2335/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2336/2.png",
      "https://newlevel-group.com/storage/2337/3.jpg",
      "https://newlevel-group.com/storage/2338/4.jpg",
      "https://newlevel-group.com/storage/2339/5.png",
      "https://newlevel-group.com/storage/2340/6.jpg",
      "https://newlevel-group.com/storage/2341/7.png"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-center-snvsn2",
    "ref": "NL-12375",
    "title": {
      "en": "1+1 Apartment in Center",
      "ru": "Апартаменты 1+1, Центр",
      "tr": "Merkez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 220500,
    "rooms": "1+1",
    "area": 50,
    "floor": 7,
    "totalFloors": 8,
    "distanceToSea": 610,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2382/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2383/2.jpg",
      "https://newlevel-group.com/storage/2384/4.jpg",
      "https://newlevel-group.com/storage/2385/5.jpg",
      "https://newlevel-group.com/storage/2386/6.jpg",
      "https://newlevel-group.com/storage/2387/7.jpg",
      "https://newlevel-group.com/storage/2388/8.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-avsallar-mqzbb8",
    "ref": "NL-12376",
    "title": {
      "en": "1+1 Apartment in Avsallar",
      "ru": "Апартаменты 1+1, Авсаллар",
      "tr": "Avsallar, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 75000,
    "rooms": "1+1",
    "area": 58,
    "floor": 8,
    "totalFloors": 9,
    "distanceToSea": 520,
    "seaView": true,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2426/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2427/2.jpeg",
      "https://newlevel-group.com/storage/2428/3.jpeg",
      "https://newlevel-group.com/storage/2429/4.jpeg",
      "https://newlevel-group.com/storage/2430/5.jpeg",
      "https://newlevel-group.com/storage/2431/6.jpeg",
      "https://newlevel-group.com/storage/2432/7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-tosmur-7jg5s2",
    "ref": "NL-12377",
    "title": {
      "en": "1+1 Apartment in Tosmur",
      "ru": "Апартаменты 1+1, Тосмур",
      "tr": "Tosmur, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-city",
    "city": "Alanya",
    "district": {
      "ru": "Тосмур",
      "en": "Tosmur",
      "tr": "Tosmur"
    },
    "price": 252000,
    "rooms": "1+1",
    "area": 60,
    "floor": 1,
    "totalFloors": 10,
    "distanceToSea": 430,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2458/2.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2459/3.jpeg",
      "https://newlevel-group.com/storage/2460/4.jpeg",
      "https://newlevel-group.com/storage/2461/5.jpeg",
      "https://newlevel-group.com/storage/2462/6.jpeg",
      "https://newlevel-group.com/storage/2463/7.jpeg",
      "https://newlevel-group.com/storage/2464/8.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-center-9cqwts",
    "ref": "NL-12364",
    "title": {
      "en": "1+1 Apartment in Center",
      "ru": "Апартаменты 1+1, Центр",
      "tr": "Merkez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 110500,
    "rooms": "1+1",
    "area": 65,
    "floor": 2,
    "totalFloors": 11,
    "distanceToSea": 340,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2496/c18b4940_94a5_4a9e_be9e_5e51c7cd3431.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2497/1.jpeg",
      "https://newlevel-group.com/storage/2498/2.jpeg",
      "https://newlevel-group.com/storage/2499/3.jpeg",
      "https://newlevel-group.com/storage/2500/4.jpeg",
      "https://newlevel-group.com/storage/2501/5.jpeg",
      "https://newlevel-group.com/storage/2502/6.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-center-01nybh",
    "ref": "NL-12363",
    "title": {
      "en": "1+1 Apartment in Center",
      "ru": "Апартаменты 1+1, Центр",
      "tr": "Merkez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 129000,
    "rooms": "1+1",
    "area": 51,
    "floor": 3,
    "totalFloors": 12,
    "distanceToSea": 250,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2506/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2507/2.jpeg",
      "https://newlevel-group.com/storage/2508/3.jpeg",
      "https://newlevel-group.com/storage/2509/4.jpeg",
      "https://newlevel-group.com/storage/2510/5.jpeg",
      "https://newlevel-group.com/storage/2511/6.jpeg",
      "https://newlevel-group.com/storage/2512/7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-avsallar-92xc9v",
    "ref": "NL-12362",
    "title": {
      "en": "2+1 Apartment in Avsallar",
      "ru": "Апартаменты 2+1, Авсаллар",
      "tr": "Avsallar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 105000,
    "rooms": "2+1",
    "area": 97,
    "floor": 4,
    "totalFloors": 13,
    "distanceToSea": 1780,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2539/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2540/2.jpeg",
      "https://newlevel-group.com/storage/2541/3.jpeg",
      "https://newlevel-group.com/storage/2542/4.jpeg",
      "https://newlevel-group.com/storage/2543/5.jpeg",
      "https://newlevel-group.com/storage/2544/6.jpeg",
      "https://newlevel-group.com/storage/2545/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-kepez-6tbp0z",
    "ref": "NL-12361",
    "title": {
      "en": "1+1 Apartment in Kepez",
      "ru": "Апартаменты 1+1, Кепез",
      "tr": "Kepez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kepez",
      "ru": "Кепез",
      "tr": "Kepez"
    },
    "price": 211500,
    "rooms": "1+1",
    "area": 61,
    "floor": 5,
    "totalFloors": 14,
    "distanceToSea": 1690,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2562/0.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2563/1.jpg",
      "https://newlevel-group.com/storage/2564/2.jpg",
      "https://newlevel-group.com/storage/2565/3.jpg",
      "https://newlevel-group.com/storage/2566/4.jpg",
      "https://newlevel-group.com/storage/2567/5.jpg",
      "https://newlevel-group.com/storage/2568/6.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-center-1019qk",
    "ref": "NL-12360",
    "title": {
      "en": "5+1 Apartment in Center",
      "ru": "Апартаменты 5+1, Центр",
      "tr": "Merkez, 5+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 650000,
    "rooms": "5+1",
    "area": 240,
    "floor": 6,
    "totalFloors": 8,
    "distanceToSea": 1600,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2595/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2596/2.jpeg",
      "https://newlevel-group.com/storage/2597/3.jpeg",
      "https://newlevel-group.com/storage/2598/4.jpeg",
      "https://newlevel-group.com/storage/2599/5.jpeg",
      "https://newlevel-group.com/storage/2600/6.jpeg",
      "https://newlevel-group.com/storage/2601/7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-makhmutlar-lvy4s0",
    "ref": "NL-12359",
    "title": {
      "en": "1+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 1+1, Махмутлар",
      "tr": "Mahmutlar, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 145000,
    "rooms": "1+1",
    "area": 72,
    "floor": 7,
    "totalFloors": 9,
    "distanceToSea": 1510,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2631/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2632/2.jpeg",
      "https://newlevel-group.com/storage/2633/3.jpeg",
      "https://newlevel-group.com/storage/2634/4.jpeg",
      "https://newlevel-group.com/storage/2635/5.jpeg",
      "https://newlevel-group.com/storage/2636/6.jpeg",
      "https://newlevel-group.com/storage/2637/7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-kestel-v73v0l",
    "ref": "NL-12358",
    "title": {
      "en": "1+1 Apartment in Kestel",
      "ru": "Апартаменты 1+1, Кестель",
      "tr": "Kestel, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Кестель",
      "en": "Kestel",
      "tr": "Kestel"
    },
    "price": 75000,
    "rooms": "1+1",
    "area": 75,
    "floor": 8,
    "totalFloors": 10,
    "distanceToSea": 1420,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2673/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2674/2.jpg",
      "https://newlevel-group.com/storage/2675/3.jpg",
      "https://newlevel-group.com/storage/2676/4.jpeg",
      "https://newlevel-group.com/storage/2677/5.jpg",
      "https://newlevel-group.com/storage/2678/6.jpeg",
      "https://newlevel-group.com/storage/2679/7.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-makhmutlar-dfxjnr",
    "ref": "NL-12357",
    "title": {
      "en": "1+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 1+1, Махмутлар",
      "tr": "Mahmutlar, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 72000,
    "rooms": "1+1",
    "area": 57,
    "floor": 1,
    "totalFloors": 11,
    "distanceToSea": 1330,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2711/3.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2712/4.jpg",
      "https://newlevel-group.com/storage/2713/5.jpg",
      "https://newlevel-group.com/storage/2714/6.jpg",
      "https://newlevel-group.com/storage/2715/7.jpg",
      "https://newlevel-group.com/storage/2716/8.jpg",
      "https://newlevel-group.com/storage/2717/9.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-gazipasha-fmj2lk",
    "ref": "NL-12356",
    "title": {
      "en": "2+1 Apartment in Gazipasa",
      "ru": "Апартаменты 2+1, Газипаша",
      "tr": "Gazipaşa, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Газипаша",
      "en": "Gazipasa",
      "tr": "Gazipaşa"
    },
    "price": 75000,
    "rooms": "2+1",
    "area": 90,
    "floor": 2,
    "totalFloors": 12,
    "distanceToSea": 1240,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2744/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/2745/2.jpg",
      "https://newlevel-group.com/storage/2746/4.jpg",
      "https://newlevel-group.com/storage/2747/3.jpg",
      "https://newlevel-group.com/storage/2748/1.jpeg",
      "https://newlevel-group.com/storage/2749/2.jpeg",
      "https://newlevel-group.com/storage/2750/3.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-turkler-hjgjsw",
    "ref": "NL-12355",
    "title": {
      "en": "1+1 Apartment in Türkler",
      "ru": "Апартаменты 1+1, Тюрклер",
      "tr": "Türkler, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Türkler",
      "ru": "Тюрклер",
      "tr": "Türkler"
    },
    "price": 152500,
    "rooms": "1+1",
    "area": 85,
    "floor": 3,
    "totalFloors": 13,
    "distanceToSea": 1150,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/2765/0_1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2766/0_2.jpeg",
      "https://newlevel-group.com/storage/2767/0_3.jpeg",
      "https://newlevel-group.com/storage/2768/0_4.jpeg",
      "https://newlevel-group.com/storage/2769/0_5.jpeg",
      "https://newlevel-group.com/storage/2770/0_6.jpeg",
      "https://newlevel-group.com/storage/2771/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-avsallar-tdfd4l",
    "ref": "NL-12354",
    "title": {
      "en": "2+1 Apartment in Avsallar",
      "ru": "Апартаменты 2+1, Авсаллар",
      "tr": "Avsallar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 146000,
    "rooms": "2+1",
    "area": 100,
    "floor": 4,
    "totalFloors": 14,
    "distanceToSea": 1060,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/2863/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/2864/2.jpg",
      "https://newlevel-group.com/storage/2865/3.jpeg",
      "https://newlevel-group.com/storage/2866/6.jpeg",
      "https://newlevel-group.com/storage/2867/7.jpeg",
      "https://newlevel-group.com/storage/2868/8.jpeg",
      "https://newlevel-group.com/storage/2869/9.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-penthouse-kestel-ntbnh0",
    "ref": "NL-11756",
    "title": {
      "en": "2+1 Penthouse in Kestel",
      "ru": "Пентхаус 2+1, Кестель",
      "tr": "Kestel, 2+1 Çatı katı"
    },
    "type": "penthouse",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Кестель",
      "en": "Kestel",
      "tr": "Kestel"
    },
    "price": 137790,
    "rooms": "2+1",
    "area": 90,
    "floor": 5,
    "totalFloors": 8,
    "distanceToSea": 970,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/3135/NL-11756-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/3137/NL-11756-3.jpg",
      "https://newlevel-group.com/storage/3138/NL-11756-4.jpg",
      "https://newlevel-group.com/storage/3136/NL-11756-2.jpg",
      "https://newlevel-group.com/storage/3139/NL-11756-5.jpg",
      "https://newlevel-group.com/storage/3140/NL-11756-6.jpg",
      "https://newlevel-group.com/storage/3141/NL-11756-7.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-makhmutlar-mvr2pv",
    "ref": "NL-12351",
    "title": {
      "en": "2+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 2+1, Махмутлар",
      "tr": "Mahmutlar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 88000,
    "rooms": "2+1",
    "area": 125,
    "floor": 6,
    "totalFloors": 9,
    "distanceToSea": 880,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/3712/NL-12351-26.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/3687/NL-12351-1.jpeg",
      "https://newlevel-group.com/storage/3688/NL-12351-2.jpeg",
      "https://newlevel-group.com/storage/3689/NL-12351-3.jpeg",
      "https://newlevel-group.com/storage/3690/NL-12351-4.jpeg",
      "https://newlevel-group.com/storage/3691/NL-12351-5.jpeg",
      "https://newlevel-group.com/storage/3692/NL-12351-6.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-makhmutlar-xl0hb3",
    "ref": "NL-12344",
    "title": {
      "en": "2+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 2+1, Махмутлар",
      "tr": "Mahmutlar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 239000,
    "rooms": "2+1",
    "area": 115,
    "floor": 7,
    "totalFloors": 10,
    "distanceToSea": 790,
    "seaView": true,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/4291/NL-12344-18.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/4296/NL-12344-23.jpeg",
      "https://newlevel-group.com/storage/4274/NL-12344-1.jpeg",
      "https://newlevel-group.com/storage/4275/NL-12344-2.jpeg",
      "https://newlevel-group.com/storage/4276/NL-12344-3.jpeg",
      "https://newlevel-group.com/storage/4277/NL-12344-4.jpeg",
      "https://newlevel-group.com/storage/4278/NL-12344-5.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-makhmutlar-32jt5d",
    "ref": "NL-12380",
    "title": {
      "en": "2+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 2+1, Махмутлар",
      "tr": "Mahmutlar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 304500,
    "rooms": "2+1",
    "area": 135,
    "floor": 8,
    "totalFloors": 11,
    "distanceToSea": 700,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/4927/NL-12380-8.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/4931/NL-12380-12.jpg",
      "https://newlevel-group.com/storage/4942/NL-12380-23.jpeg",
      "https://newlevel-group.com/storage/4941/NL-12380-22.jpg",
      "https://newlevel-group.com/storage/4943/NL-12380-24.jpeg",
      "https://newlevel-group.com/storage/4920/NL-12380-1.jpg",
      "https://newlevel-group.com/storage/4921/NL-12380-2.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-makhmutlar-6xgxcq",
    "ref": "NL-12386",
    "title": {
      "en": "1+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 1+1, Махмутлар",
      "tr": "Mahmutlar, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 74000,
    "rooms": "1+1",
    "area": 55,
    "floor": 1,
    "totalFloors": 12,
    "distanceToSea": 610,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/136367/0.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/136368/1.jpeg",
      "https://newlevel-group.com/storage/136369/2.jpeg",
      "https://newlevel-group.com/storage/136370/3.jpeg",
      "https://newlevel-group.com/storage/136371/4.jpeg",
      "https://newlevel-group.com/storage/136372/5.jpeg",
      "https://newlevel-group.com/storage/136373/6.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-makhmutlar-bfj14h",
    "ref": "NL-12388",
    "title": {
      "en": "1+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 1+1, Махмутлар",
      "tr": "Mahmutlar, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 157500,
    "rooms": "1+1",
    "area": 68,
    "floor": 2,
    "totalFloors": 13,
    "distanceToSea": 520,
    "seaView": true,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136326/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/136327/2.jpg",
      "https://newlevel-group.com/storage/136328/3.jpg",
      "https://newlevel-group.com/storage/136329/4.jpg",
      "https://newlevel-group.com/storage/136330/5.jpg",
      "https://newlevel-group.com/storage/136331/6.jpg",
      "https://newlevel-group.com/storage/136332/7.jpg"
    ],
    "featured": false
  },
  {
    "id": "land-avsallar-ntc7xy",
    "ref": "NL-12300",
    "title": {
      "en": "Land in Avsallar",
      "ru": "Земля, Авсаллар",
      "tr": "Avsallar, Arsa"
    },
    "type": "land",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 194500,
    "rooms": "",
    "area": 436,
    "floor": 0,
    "totalFloors": 14,
    "distanceToSea": 430,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/19740/NL-12300-9.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/19737/NL-12300-6.jpeg",
      "https://newlevel-group.com/storage/19738/NL-12300-7.jpeg",
      "https://newlevel-group.com/storage/19739/NL-12300-8.jpeg",
      "https://newlevel-group.com/storage/19735/NL-12300-4.jpeg",
      "https://newlevel-group.com/storage/19736/NL-12300-5.jpeg",
      "https://newlevel-group.com/storage/19741/NL-12300-10.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-kargicak-249w3l",
    "ref": "NL-12385",
    "title": {
      "en": "1+1 Apartment in Kargicak",
      "ru": "Апартаменты 1+1, Каргыджак",
      "tr": "Kargıcak, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Каргыджак",
      "en": "Kargicak",
      "tr": "Kargıcak"
    },
    "price": 77500,
    "rooms": "1+1",
    "area": 50,
    "floor": 4,
    "totalFloors": 8,
    "distanceToSea": 340,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/136396/3.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/136397/5.jpg",
      "https://newlevel-group.com/storage/136398/6.jpg",
      "https://newlevel-group.com/storage/136399/7.jpg",
      "https://newlevel-group.com/storage/136400/8.jpg",
      "https://newlevel-group.com/storage/136401/9.jpg",
      "https://newlevel-group.com/storage/136402/11.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-penthouse-center-37kw93",
    "ref": "NL-12391",
    "title": {
      "en": "2+1 Penthouse in Center",
      "ru": "Пентхаус 2+1, Центр",
      "tr": "Merkez, 2+1 Çatı katı"
    },
    "type": "penthouse",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 140000,
    "rooms": "2+1",
    "area": 100,
    "floor": 5,
    "totalFloors": 9,
    "distanceToSea": 250,
    "seaView": true,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136075/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/136076/2.jpeg",
      "https://newlevel-group.com/storage/136077/3.jpeg",
      "https://newlevel-group.com/storage/136078/4.jpeg",
      "https://newlevel-group.com/storage/136079/5.jpeg",
      "https://newlevel-group.com/storage/136080/6.jpeg",
      "https://newlevel-group.com/storage/136081/7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-makhmutlar-6136xw",
    "ref": "NL-12109",
    "title": {
      "en": "2+1 Apartment in Mahmutlar",
      "ru": "Апартаменты 2+1, Махмутлар",
      "tr": "Mahmutlar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 157000,
    "rooms": "2+1",
    "area": 90,
    "floor": 6,
    "totalFloors": 10,
    "distanceToSea": 1780,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/28755/NL-12109-10.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/28754/NL-12109-9.jpg",
      "https://newlevel-group.com/storage/28758/NL-12109-13.jpg",
      "https://newlevel-group.com/storage/28757/NL-12109-12.jpg",
      "https://newlevel-group.com/storage/28756/NL-12109-11.jpg",
      "https://newlevel-group.com/storage/28760/NL-12109-15.jpg",
      "https://newlevel-group.com/storage/28763/NL-12109-18.jpg"
    ],
    "featured": false
  },
  {
    "id": "studio-apartment-makhmutlar-0kvhqj",
    "ref": "NL-12136",
    "title": {
      "en": "1+0 Apartment in Mahmutlar",
      "ru": "Апартаменты 1+0, Махмутлар",
      "tr": "Mahmutlar, 1+0 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Mahmutlar",
      "ru": "Махмутлар",
      "tr": "Mahmutlar"
    },
    "price": 54000,
    "rooms": "1+0",
    "area": 55,
    "floor": 7,
    "totalFloors": 11,
    "distanceToSea": 1690,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/29459/NL-12136-10.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/29461/NL-12136-12.jpeg",
      "https://newlevel-group.com/storage/29453/NL-12136-4.jpeg",
      "https://newlevel-group.com/storage/29463/NL-12136-14.jpeg",
      "https://newlevel-group.com/storage/29456/NL-12136-7.jpeg",
      "https://newlevel-group.com/storage/29470/NL-12136-21.jpeg",
      "https://newlevel-group.com/storage/29450/NL-12136-1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-center-4tbh8b",
    "ref": "NL-12390",
    "title": {
      "en": "1+1 Apartment in Center",
      "ru": "Апартаменты 1+1, Центр",
      "tr": "Merkez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 82500,
    "rooms": "1+1",
    "area": 50,
    "floor": 8,
    "totalFloors": 12,
    "distanceToSea": 1600,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136298/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/136299/2.jpeg",
      "https://newlevel-group.com/storage/136300/3.jpeg",
      "https://newlevel-group.com/storage/136301/4.jpeg",
      "https://newlevel-group.com/storage/136302/5.jpeg",
      "https://newlevel-group.com/storage/136303/6.jpeg",
      "https://newlevel-group.com/storage/136304/7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-center-sbzz5h",
    "ref": "NL-12346",
    "title": {
      "en": "1+1 Apartment in Center",
      "ru": "Апартаменты 1+1, Центр",
      "tr": "Merkez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 126000,
    "rooms": "1+1",
    "area": 45,
    "floor": 1,
    "totalFloors": 13,
    "distanceToSea": 1510,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/36651/NL-12346-23.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/136566/1.jpeg",
      "https://newlevel-group.com/storage/136567/2.jpeg",
      "https://newlevel-group.com/storage/136568/3.jpeg",
      "https://newlevel-group.com/storage/136569/4.jpeg",
      "https://newlevel-group.com/storage/136570/5.jpeg",
      "https://newlevel-group.com/storage/136571/6.jpeg"
    ],
    "featured": false
  },
  {
    "id": "3-bedroom-penthouse-avsallar-x1tsm8",
    "ref": "NL-12383",
    "title": {
      "en": "3+1 Penthouse in Avsallar",
      "ru": "Пентхаус 3+1, Авсаллар",
      "tr": "Avsallar, 3+1 Çatı katı"
    },
    "type": "penthouse",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 157500,
    "rooms": "3+1",
    "area": 197,
    "floor": 2,
    "totalFloors": 14,
    "distanceToSea": 1420,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/39881/NL-12383-15.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/39885/NL-12383-19.jpg",
      "https://newlevel-group.com/storage/39880/NL-12383-14.jpg",
      "https://newlevel-group.com/storage/39883/NL-12383-17.jpg",
      "https://newlevel-group.com/storage/39884/NL-12383-18.jpg",
      "https://newlevel-group.com/storage/39882/NL-12383-16.jpg",
      "https://newlevel-group.com/storage/39890/NL-12383-24.jpg"
    ],
    "featured": false
  },
  {
    "id": "3-bedroom-villa-kargicak-sjl86h",
    "ref": "NL-12350",
    "title": {
      "en": "3+2 Villa in Kargicak",
      "ru": "Вилла 3+2, Каргыджак",
      "tr": "Kargıcak, 3+2 Villa"
    },
    "type": "villa",
    "category": [
      "investment"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Каргыджак",
      "en": "Kargicak",
      "tr": "Kargıcak"
    },
    "price": 178500,
    "rooms": "3+2",
    "area": 175,
    "floor": 3,
    "totalFloors": 8,
    "distanceToSea": 1330,
    "seaView": true,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/40059/NL-12350-31.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/40060/NL-12350-32.jpeg",
      "https://newlevel-group.com/storage/40062/NL-12350-34.jpg",
      "https://newlevel-group.com/storage/40029/NL-12350-1.jpg",
      "https://newlevel-group.com/storage/40030/NL-12350-2.jpg",
      "https://newlevel-group.com/storage/40031/NL-12350-3.jpg",
      "https://newlevel-group.com/storage/40032/NL-12350-4.jpg"
    ],
    "featured": false
  },
  {
    "id": "6-bedroom-villa-kargicak-vrtx79",
    "ref": "NL-12353",
    "title": {
      "en": "6+1 Villa in Kargicak",
      "ru": "Вилла 6+1, Каргыджак",
      "tr": "Kargıcak, 6+1 Villa"
    },
    "type": "villa",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Каргыджак",
      "en": "Kargicak",
      "tr": "Kargıcak"
    },
    "price": 2152500,
    "rooms": "6+1",
    "area": 600,
    "floor": 4,
    "totalFloors": 9,
    "distanceToSea": 1240,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/40161/NL-12353-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/40162/NL-12353-2.jpg",
      "https://newlevel-group.com/storage/40163/NL-12353-3.jpg",
      "https://newlevel-group.com/storage/40166/NL-12353-6.jpg",
      "https://newlevel-group.com/storage/40165/NL-12353-5.jpg",
      "https://newlevel-group.com/storage/40167/NL-12353-7.jpg",
      "https://newlevel-group.com/storage/40164/NL-12353-4.jpg"
    ],
    "featured": false
  },
  {
    "id": "3-bedroom-villa-kargicak-0nj5fr",
    "ref": "NL-12384",
    "title": {
      "en": "3+1 Villa in Kargicak",
      "ru": "Вилла 3+1, Каргыджак",
      "tr": "Kargıcak, 3+1 Villa"
    },
    "type": "villa",
    "category": [
      "hot"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Каргыджак",
      "en": "Kargicak",
      "tr": "Kargıcak"
    },
    "price": 350000,
    "rooms": "3+1",
    "area": 200,
    "floor": 5,
    "totalFloors": 10,
    "distanceToSea": 1150,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/135964/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/135965/2.jpeg",
      "https://newlevel-group.com/storage/135966/3.jpg",
      "https://newlevel-group.com/storage/135967/4.jpg",
      "https://newlevel-group.com/storage/135968/5.jpeg",
      "https://newlevel-group.com/storage/135969/6.jpg",
      "https://newlevel-group.com/storage/135970/7.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-avsallar-bsnt96",
    "ref": "NL-8546",
    "title": {
      "en": "1+1 Apartment in Avsallar",
      "ru": "Апартаменты 1+1, Авсаллар",
      "tr": "Avsallar, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 48500,
    "rooms": "1+1",
    "area": 64,
    "floor": 6,
    "totalFloors": 11,
    "distanceToSea": 1060,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/45085/NL-8546-45.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/45092/NL-8546-52.jpeg",
      "https://newlevel-group.com/storage/45091/NL-8546-51.jpeg",
      "https://newlevel-group.com/storage/45090/NL-8546-50.jpeg",
      "https://newlevel-group.com/storage/45069/NL-8546-29.jpeg",
      "https://newlevel-group.com/storage/45082/NL-8546-42.jpeg",
      "https://newlevel-group.com/storage/45070/NL-8546-30.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-kestel-q7qfqt",
    "ref": "NL-12387",
    "title": {
      "en": "1+1 Apartment in Kestel",
      "ru": "Апартаменты 1+1, Кестель",
      "tr": "Kestel, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Кестель",
      "en": "Kestel",
      "tr": "Kestel"
    },
    "price": 86000,
    "rooms": "1+1",
    "area": 55,
    "floor": 7,
    "totalFloors": 12,
    "distanceToSea": 970,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136363/1_1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/136361/3.jpg",
      "https://newlevel-group.com/storage/136362/6.jpg",
      "https://newlevel-group.com/storage/136360/4.jpg",
      "https://newlevel-group.com/storage/136364/8_1.jpg",
      "https://newlevel-group.com/storage/136365/9.jpg",
      "https://newlevel-group.com/storage/136345/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-kestel-slp4zq",
    "ref": "NL-12309",
    "title": {
      "en": "1+1 Apartment in Kestel",
      "ru": "Апартаменты 1+1, Кестель",
      "tr": "Kestel, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Кестель",
      "en": "Kestel",
      "tr": "Kestel"
    },
    "price": 132480,
    "rooms": "1+1",
    "area": 45,
    "floor": 8,
    "totalFloors": 13,
    "distanceToSea": 880,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/46647/NL-12309-1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/46648/NL-12309-2.jpeg",
      "https://newlevel-group.com/storage/46649/NL-12309-3.jpeg",
      "https://newlevel-group.com/storage/46650/NL-12309-4.jpeg",
      "https://newlevel-group.com/storage/46651/NL-12309-5.jpeg",
      "https://newlevel-group.com/storage/46652/NL-12309-6.jpeg",
      "https://newlevel-group.com/storage/46653/NL-12309-7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "commercial-center-bn0m4j",
    "ref": "NL-12389",
    "title": {
      "en": "Commercial Property in Center",
      "ru": "Коммерческая недвижимость, Центр",
      "tr": "Merkez, Ticari mülk"
    },
    "type": "commercial",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 283500,
    "rooms": "",
    "area": 110,
    "floor": 1,
    "totalFloors": 14,
    "distanceToSea": 790,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136314/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/136315/2.jpeg",
      "https://newlevel-group.com/storage/136316/3.jpg",
      "https://newlevel-group.com/storage/136317/4.jpg",
      "https://newlevel-group.com/storage/136318/5.jpg",
      "https://newlevel-group.com/storage/136319/7.jpg",
      "https://newlevel-group.com/storage/136320/6.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-cikcilli-1tssql",
    "ref": "NL-11918",
    "title": {
      "en": "2+1 Apartment in Cikcilli",
      "ru": "Апартаменты 2+1, Джикджилли",
      "tr": "Cikcilli, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Cikcilli",
      "ru": "Джикджилли",
      "tr": "Cikcilli"
    },
    "price": 118000,
    "rooms": "2+1",
    "area": 115,
    "floor": 2,
    "totalFloors": 8,
    "distanceToSea": 700,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/54794/NL-11918-11.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/54798/NL-11918-15.jpeg",
      "https://newlevel-group.com/storage/54796/NL-11918-13.jpeg",
      "https://newlevel-group.com/storage/54795/NL-11918-12.jpeg",
      "https://newlevel-group.com/storage/54799/NL-11918-16.jpg",
      "https://newlevel-group.com/storage/54801/NL-11918-18.jpeg",
      "https://newlevel-group.com/storage/54803/NL-11918-20.jpeg"
    ],
    "featured": false
  },
  {
    "id": "4-bedroom-apartment-yenisehir-ntwy8b",
    "ref": "NL-11105",
    "title": {
      "en": "4+1 Apartment in Yenişehir",
      "ru": "Апартаменты 4+1, Йенишехир",
      "tr": "Yenişehir, 4+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Yenişehir",
      "ru": "Йенишехир",
      "tr": "Yenişehir"
    },
    "price": 280000,
    "rooms": "4+1",
    "area": 200,
    "floor": 3,
    "totalFloors": 9,
    "distanceToSea": 610,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/56559/NL-11105-1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/56560/NL-11105-2.jpeg",
      "https://newlevel-group.com/storage/56561/NL-11105-3.jpeg",
      "https://newlevel-group.com/storage/56562/NL-11105-4.jpeg",
      "https://newlevel-group.com/storage/56563/NL-11105-5.jpeg",
      "https://newlevel-group.com/storage/56564/NL-11105-6.jpeg",
      "https://newlevel-group.com/storage/56565/NL-11105-7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "3-bedroom-villa-kargicak-t6ksg0",
    "ref": "NL-11404",
    "title": {
      "en": "3+1 Villa in Kargicak",
      "ru": "Вилла 3+1, Каргыджак",
      "tr": "Kargıcak, 3+1 Villa"
    },
    "type": "villa",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Каргыджак",
      "en": "Kargicak",
      "tr": "Kargıcak"
    },
    "price": 629000,
    "rooms": "3+1",
    "area": 240,
    "floor": 4,
    "totalFloors": 10,
    "distanceToSea": 520,
    "seaView": true,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/60036/NL-11404-2.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/60035/NL-11404-1.jpeg",
      "https://newlevel-group.com/storage/60037/NL-11404-3.jpeg",
      "https://newlevel-group.com/storage/60038/NL-11404-4.jpeg",
      "https://newlevel-group.com/storage/60040/NL-11404-6.jpeg",
      "https://newlevel-group.com/storage/60039/NL-11404-5.jpeg",
      "https://newlevel-group.com/storage/60041/NL-11404-7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-kestel-xrbblw",
    "ref": "NL-8694",
    "title": {
      "en": "2+1 Apartment in Kestel",
      "ru": "Апартаменты 2+1, Кестель",
      "tr": "Kestel, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-cleopatra-2",
    "city": "Alanya",
    "district": {
      "ru": "Кестель",
      "en": "Kestel",
      "tr": "Kestel"
    },
    "price": 170000,
    "rooms": "2+1",
    "area": 90,
    "floor": 5,
    "totalFloors": 11,
    "distanceToSea": 430,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136142/snimok_ekrana_2026_07_13_v_121952.png",
    "gallery": [
      "https://newlevel-group.com/storage/136143/snimok_ekrana_2026_07_13_v_122132.png",
      "https://newlevel-group.com/storage/136144/snimok_ekrana_2026_07_13_v_122106.png",
      "https://newlevel-group.com/storage/136145/snimok_ekrana_2026_07_13_v_122001.png",
      "https://newlevel-group.com/storage/136146/snimok_ekrana_2026_07_13_v_122118.png",
      "https://newlevel-group.com/storage/136147/snimok_ekrana_2026_07_13_v_122050.png",
      "https://newlevel-group.com/storage/136148/snimok_ekrana_2026_07_13_v_122007.png"
    ],
    "featured": false
  },
  {
    "id": "villa-avsallar-67c62n",
    "ref": "NL-5844",
    "title": {
      "en": "2+1 Villa in Avsallar",
      "ru": "Вилла 2+1, Авсаллар",
      "tr": "Avsallar, 2+1 Villa"
    },
    "type": "villa",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 620000,
    "rooms": "2+1",
    "area": 410,
    "floor": 6,
    "totalFloors": 12,
    "distanceToSea": 340,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/136244/6a9abf8b47a94195945c39d7f0bcc8de_bananalab_nb2_1k.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/136245/ca8816e1ec424b14a79d02af2a42f95a_bananalab_nb2_1k.jpg",
      "https://newlevel-group.com/storage/63609/NL-5844-5.jpeg",
      "https://newlevel-group.com/storage/63607/NL-5844-3.jpeg",
      "https://newlevel-group.com/storage/63608/NL-5844-4.jpeg",
      "https://newlevel-group.com/storage/63613/NL-5844-9.jpeg",
      "https://newlevel-group.com/storage/63610/NL-5844-6.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-avsallar-lr1mcz",
    "ref": "NL-10732",
    "title": {
      "en": "2+1 Apartment in Avsallar",
      "ru": "Апартаменты 2+1, Авсаллар",
      "tr": "Avsallar, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "ru": "Авсаллар",
      "en": "Avsallar",
      "tr": "Avsallar"
    },
    "price": 86000,
    "rooms": "2+1",
    "area": 97,
    "floor": 7,
    "totalFloors": 13,
    "distanceToSea": 250,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/66777/NL-10732-1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/66782/NL-10732-6.jpeg",
      "https://newlevel-group.com/storage/66781/NL-10732-5.jpeg",
      "https://newlevel-group.com/storage/66780/NL-10732-4.jpeg",
      "https://newlevel-group.com/storage/66778/NL-10732-2.jpeg",
      "https://newlevel-group.com/storage/66786/NL-10732-10.jpeg",
      "https://newlevel-group.com/storage/66785/NL-10732-9.jpeg"
    ],
    "featured": false
  },
  {
    "id": "land-center-x68t9b",
    "ref": "NL-12094",
    "title": {
      "en": "Land in Center",
      "ru": "Земля, Центр",
      "tr": "Merkez, Arsa"
    },
    "type": "land",
    "category": [
      "new"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 787500,
    "rooms": "",
    "area": 1586,
    "floor": 0,
    "totalFloors": 14,
    "distanceToSea": 1780,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/66803/NL-12094-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/66804/NL-12094-2.jpg",
      "https://newlevel-group.com/storage/66805/NL-12094-3.jpg",
      "https://newlevel-group.com/storage/66806/NL-12094-4.jpg",
      "https://newlevel-group.com/storage/66807/NL-12094-5.jpg",
      "https://newlevel-group.com/storage/66808/NL-12094-6.jpg",
      "https://newlevel-group.com/storage/66809/NL-12094-7.jpg"
    ],
    "featured": false
  },
  {
    "id": "land-center-fzqcq5",
    "ref": "NL-12095",
    "title": {
      "en": "Land in Center",
      "ru": "Земля, Центр",
      "tr": "Merkez, Arsa"
    },
    "type": "land",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 892500,
    "rooms": "",
    "area": 450,
    "floor": 0,
    "totalFloors": 8,
    "distanceToSea": 1690,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/66812/NL-12095-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/66814/NL-12095-3.jpg",
      "https://newlevel-group.com/storage/66813/NL-12095-2.jpg",
      "https://newlevel-group.com/storage/66815/NL-12095-4.jpg",
      "https://newlevel-group.com/storage/66816/NL-12095-5.jpg",
      "https://newlevel-group.com/storage/66817/NL-12095-6.jpg",
      "https://newlevel-group.com/storage/66818/NL-12095-7.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-oba-mvkl0w",
    "ref": "NL-10429",
    "title": {
      "en": "2+1 Apartment in Oba",
      "ru": "Апартаменты 2+1, Оба",
      "tr": "Oba, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-cleopatra-1",
    "city": "Alanya",
    "district": {
      "ru": "Оба",
      "en": "Oba",
      "tr": "Oba"
    },
    "price": 219000,
    "rooms": "2+1",
    "area": 89,
    "floor": 2,
    "totalFloors": 9,
    "distanceToSea": 1600,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136295/0bf6a7d6_15e2_4662_b33c_6e6695a483be.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/136296/9752260f_673d_478d_b350_38e2c229de75.jpeg",
      "https://newlevel-group.com/storage/136297/57f49619_bf8c_4a25_b975_d16bda0ff4f7.jpeg",
      "https://newlevel-group.com/storage/79131/NL-10429-31.jpeg",
      "https://newlevel-group.com/storage/79132/NL-10429-32.jpeg",
      "https://newlevel-group.com/storage/79134/NL-10429-34.jpeg",
      "https://newlevel-group.com/storage/79135/NL-10429-35.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-oba-wd3v8h",
    "ref": "NL-12349",
    "title": {
      "en": "1+1 Apartment in Oba",
      "ru": "Апартаменты 1+1, Оба",
      "tr": "Oba, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-cleopatra-1",
    "city": "Alanya",
    "district": {
      "ru": "Оба",
      "en": "Oba",
      "tr": "Oba"
    },
    "price": 106000,
    "rooms": "1+1",
    "area": 55,
    "floor": 3,
    "totalFloors": 10,
    "distanceToSea": 1510,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/84078/NL-12349-12.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/84067/NL-12349-1.jpeg",
      "https://newlevel-group.com/storage/84068/NL-12349-2.jpeg",
      "https://newlevel-group.com/storage/84069/NL-12349-3.jpeg",
      "https://newlevel-group.com/storage/84070/NL-12349-4.jpeg",
      "https://newlevel-group.com/storage/84071/NL-12349-5.jpeg",
      "https://newlevel-group.com/storage/84072/NL-12349-6.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-oba-wfl16m",
    "ref": "NL-12379",
    "title": {
      "en": "1+1 Apartment in Oba",
      "ru": "Апартаменты 1+1, Оба",
      "tr": "Oba, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-cleopatra-1",
    "city": "Alanya",
    "district": {
      "ru": "Оба",
      "en": "Oba",
      "tr": "Oba"
    },
    "price": 91000,
    "rooms": "1+1",
    "area": 50,
    "floor": 4,
    "totalFloors": 11,
    "distanceToSea": 1420,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/136449/1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/136450/2.jpg",
      "https://newlevel-group.com/storage/136451/3.jpg",
      "https://newlevel-group.com/storage/136452/4.jpg",
      "https://newlevel-group.com/storage/136453/5.jpg",
      "https://newlevel-group.com/storage/136454/6.jpg",
      "https://newlevel-group.com/storage/136455/7.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-oba-96rpts",
    "ref": "NL-8574",
    "title": {
      "en": "2+1 Apartment in Oba",
      "ru": "Апартаменты 2+1, Оба",
      "tr": "Oba, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-cleopatra-1",
    "city": "Alanya",
    "district": {
      "ru": "Оба",
      "en": "Oba",
      "tr": "Oba"
    },
    "price": 147500,
    "rooms": "2+1",
    "area": 49,
    "floor": 5,
    "totalFloors": 12,
    "distanceToSea": 1330,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136100/5.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/136096/1.jpg",
      "https://newlevel-group.com/storage/136097/2.jpg",
      "https://newlevel-group.com/storage/136098/3.jpg",
      "https://newlevel-group.com/storage/136099/4.jpg",
      "https://newlevel-group.com/storage/136101/6.jpg",
      "https://newlevel-group.com/storage/136102/7.jpg"
    ],
    "featured": false
  },
  {
    "id": "5-bedroom-penthouse-oba-r3vlhx",
    "ref": "NL-12381",
    "title": {
      "en": "5+1 Penthouse in Oba",
      "ru": "Пентхаус 5+1, Оба",
      "tr": "Oba, 5+1 Çatı katı"
    },
    "type": "penthouse",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-cleopatra-1",
    "city": "Alanya",
    "district": {
      "ru": "Оба",
      "en": "Oba",
      "tr": "Oba"
    },
    "price": 178500,
    "rooms": "5+1",
    "area": 250,
    "floor": 6,
    "totalFloors": 13,
    "distanceToSea": 1240,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/92099/NL-12381-3.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/92100/NL-12381-4.jpg",
      "https://newlevel-group.com/storage/92097/NL-12381-1.jpg",
      "https://newlevel-group.com/storage/92098/NL-12381-2.jpg",
      "https://newlevel-group.com/storage/92101/NL-12381-5.jpg",
      "https://newlevel-group.com/storage/92102/NL-12381-6.jpg",
      "https://newlevel-group.com/storage/92103/NL-12381-7.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-tosmur-tphsvg",
    "ref": "NL-12345",
    "title": {
      "en": "1+1 Apartment in Tosmur",
      "ru": "Апартаменты 1+1, Тосмур",
      "tr": "Tosmur, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-city",
    "city": "Alanya",
    "district": {
      "ru": "Тосмур",
      "en": "Tosmur",
      "tr": "Tosmur"
    },
    "price": 140000,
    "rooms": "1+1",
    "area": 55,
    "floor": 7,
    "totalFloors": 14,
    "distanceToSea": 1150,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/96930/NL-12345-19.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/96931/NL-12345-20.jpeg",
      "https://newlevel-group.com/storage/96912/NL-12345-1.jpeg",
      "https://newlevel-group.com/storage/96913/NL-12345-2.jpeg",
      "https://newlevel-group.com/storage/96914/NL-12345-3.jpeg",
      "https://newlevel-group.com/storage/96915/NL-12345-4.jpeg",
      "https://newlevel-group.com/storage/96916/NL-12345-5.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-penthouse-tosmur-tn4svl",
    "ref": "NL-12382",
    "title": {
      "en": "2+1 Penthouse in Tosmur",
      "ru": "Пентхаус 2+1, Тосмур",
      "tr": "Tosmur, 2+1 Çatı katı"
    },
    "type": "penthouse",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-city",
    "city": "Alanya",
    "district": {
      "ru": "Тосмур",
      "en": "Tosmur",
      "tr": "Tosmur"
    },
    "price": 147000,
    "rooms": "2+1",
    "area": 125,
    "floor": 8,
    "totalFloors": 8,
    "distanceToSea": 1060,
    "seaView": true,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/136426/1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/136427/2.jpeg",
      "https://newlevel-group.com/storage/136428/3.jpg",
      "https://newlevel-group.com/storage/136429/4.jpg",
      "https://newlevel-group.com/storage/136430/5.jpeg",
      "https://newlevel-group.com/storage/136431/6.jpeg",
      "https://newlevel-group.com/storage/136432/7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-turkler-ds96sc",
    "ref": "NL-10236",
    "title": {
      "en": "2+1 Apartment in Türkler",
      "ru": "Апартаменты 2+1, Тюрклер",
      "tr": "Türkler, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Türkler",
      "ru": "Тюрклер",
      "tr": "Türkler"
    },
    "price": 310000,
    "rooms": "2+1",
    "area": 157,
    "floor": 1,
    "totalFloors": 9,
    "distanceToSea": 970,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/99129/NL-10236-9.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/99133/NL-10236-13.jpeg",
      "https://newlevel-group.com/storage/99132/NL-10236-12.jpeg",
      "https://newlevel-group.com/storage/99131/NL-10236-11.jpeg",
      "https://newlevel-group.com/storage/99130/NL-10236-10.jpeg",
      "https://newlevel-group.com/storage/99141/NL-10236-21.jpg",
      "https://newlevel-group.com/storage/99139/NL-10236-19.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-turkler-p71g99",
    "ref": "NL-10237",
    "title": {
      "en": "2+1 Apartment in Türkler",
      "ru": "Апартаменты 2+1, Тюрклер",
      "tr": "Türkler, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Türkler",
      "ru": "Тюрклер",
      "tr": "Türkler"
    },
    "price": 278500,
    "rooms": "2+1",
    "area": 129,
    "floor": 2,
    "totalFloors": 10,
    "distanceToSea": 880,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/99353/NL-10237-9.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/99358/NL-10237-14.jpeg",
      "https://newlevel-group.com/storage/99354/NL-10237-10.jpeg",
      "https://newlevel-group.com/storage/99356/NL-10237-12.jpeg",
      "https://newlevel-group.com/storage/99357/NL-10237-13.jpeg",
      "https://newlevel-group.com/storage/99363/NL-10237-19.jpg",
      "https://newlevel-group.com/storage/99355/NL-10237-11.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-turkler-858j0t",
    "ref": "NL-12173",
    "title": {
      "en": "2+1 Apartment in Türkler",
      "ru": "Апартаменты 2+1, Тюрклер",
      "tr": "Türkler, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Türkler",
      "ru": "Тюрклер",
      "tr": "Türkler"
    },
    "price": 310000,
    "rooms": "2+1",
    "area": 195,
    "floor": 3,
    "totalFloors": 11,
    "distanceToSea": 790,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/100236/NL-12173-15.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/100237/NL-12173-16.jpeg",
      "https://newlevel-group.com/storage/100239/NL-12173-18.jpeg",
      "https://newlevel-group.com/storage/100238/NL-12173-17.jpeg",
      "https://newlevel-group.com/storage/100240/NL-12173-19.jpeg",
      "https://newlevel-group.com/storage/100241/NL-12173-20.jpeg",
      "https://newlevel-group.com/storage/100248/NL-12173-27.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-turkler-mr4z73",
    "ref": "NL-12277",
    "title": {
      "en": "2+1 Apartment in Türkler",
      "ru": "Апартаменты 2+1, Тюрклер",
      "tr": "Türkler, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Türkler",
      "ru": "Тюрклер",
      "tr": "Türkler"
    },
    "price": 178500,
    "rooms": "2+1",
    "area": 129,
    "floor": 4,
    "totalFloors": 12,
    "distanceToSea": 700,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/100431/NL-12277-1.HEIC",
    "gallery": [
      "https://newlevel-group.com/storage/100432/NL-12277-2.HEIC",
      "https://newlevel-group.com/storage/100433/NL-12277-3.HEIC",
      "https://newlevel-group.com/storage/100434/NL-12277-4.HEIC",
      "https://newlevel-group.com/storage/100435/NL-12277-5.HEIC",
      "https://newlevel-group.com/storage/100436/NL-12277-6.HEIC",
      "https://newlevel-group.com/storage/100437/NL-12277-7.HEIC"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-turkler-w1qvvq",
    "ref": "NL-12378",
    "title": {
      "en": "2+1 Apartment in Türkler",
      "ru": "Апартаменты 2+1, Тюрклер",
      "tr": "Türkler, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Alanya",
    "district": {
      "en": "Türkler",
      "ru": "Тюрклер",
      "tr": "Türkler"
    },
    "price": 315000,
    "rooms": "2+1",
    "area": 120,
    "floor": 5,
    "totalFloors": 13,
    "distanceToSea": 610,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/136487/0_1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/136488/0_2.jpeg",
      "https://newlevel-group.com/storage/136489/0_3.jpeg",
      "https://newlevel-group.com/storage/136490/0_4.jpeg",
      "https://newlevel-group.com/storage/136491/0_5.jpeg",
      "https://newlevel-group.com/storage/136492/0_6.jpeg",
      "https://newlevel-group.com/storage/136493/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-altyntas-yc4kq0",
    "ref": "NL-11762",
    "title": {
      "en": "1+1 Apartment in Altıntaş",
      "ru": "Апартаменты 1+1, Алтынташ",
      "tr": "Altıntaş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Altıntaş",
      "ru": "Алтынташ",
      "tr": "Altıntaş"
    },
    "price": 107000,
    "rooms": "1+1",
    "area": 55,
    "floor": 6,
    "totalFloors": 14,
    "distanceToSea": 520,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/103468/NL-11762-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/103471/NL-11762-4.jpg",
      "https://newlevel-group.com/storage/103470/NL-11762-3.jpg",
      "https://newlevel-group.com/storage/103469/NL-11762-2.jpg",
      "https://newlevel-group.com/storage/103474/NL-11762-7.jpg",
      "https://newlevel-group.com/storage/103473/NL-11762-6.jpg",
      "https://newlevel-group.com/storage/103472/NL-11762-5.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-altyntas-yzgnzs",
    "ref": "NL-11766",
    "title": {
      "en": "1+1 Apartment in Altıntaş",
      "ru": "Апартаменты 1+1, Алтынташ",
      "tr": "Altıntaş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Altıntaş",
      "ru": "Алтынташ",
      "tr": "Altıntaş"
    },
    "price": 107000,
    "rooms": "1+1",
    "area": 47,
    "floor": 7,
    "totalFloors": 8,
    "distanceToSea": 430,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/103537/NL-11766-2.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/103538/NL-11766-3.jpeg",
      "https://newlevel-group.com/storage/103539/NL-11766-4.jpeg",
      "https://newlevel-group.com/storage/103541/NL-11766-6.jpeg",
      "https://newlevel-group.com/storage/103540/NL-11766-5.jpeg",
      "https://newlevel-group.com/storage/103542/NL-11766-7.jpeg",
      "https://newlevel-group.com/storage/103543/NL-11766-8.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-altyntas-5b4k9x",
    "ref": "NL-12157",
    "title": {
      "en": "2+1 Apartment in Altıntaş",
      "ru": "Апартаменты 2+1, Алтынташ",
      "tr": "Altıntaş, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Altıntaş",
      "ru": "Алтынташ",
      "tr": "Altıntaş"
    },
    "price": 134800,
    "rooms": "2+1",
    "area": 90,
    "floor": 8,
    "totalFloors": 9,
    "distanceToSea": 340,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/103569/NL-12157-9.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/103571/NL-12157-11.jpg",
      "https://newlevel-group.com/storage/103570/NL-12157-10.jpg",
      "https://newlevel-group.com/storage/103561/NL-12157-1.png",
      "https://newlevel-group.com/storage/103568/NL-12157-8.jpg",
      "https://newlevel-group.com/storage/103572/NL-12157-12.jpg",
      "https://newlevel-group.com/storage/103573/NL-12157-13.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-altyntas-26691f",
    "ref": "NL-12301",
    "title": {
      "en": "2+1 Apartment in Altıntaş",
      "ru": "Апартаменты 2+1, Алтынташ",
      "tr": "Altıntaş, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Altıntaş",
      "ru": "Алтынташ",
      "tr": "Altıntaş"
    },
    "price": 95500,
    "rooms": "2+1",
    "area": 90,
    "floor": 1,
    "totalFloors": 10,
    "distanceToSea": 250,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/103607/NL-12301-12.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/103608/NL-12301-13.jpg",
      "https://newlevel-group.com/storage/103612/NL-12301-17.jpg",
      "https://newlevel-group.com/storage/103611/NL-12301-16.jpg",
      "https://newlevel-group.com/storage/103610/NL-12301-15.jpeg",
      "https://newlevel-group.com/storage/103609/NL-12301-14.jpeg",
      "https://newlevel-group.com/storage/103613/NL-12301-18.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-altyntas-ylqc8l",
    "ref": "NL-12330",
    "title": {
      "en": "1+1 Apartment in Altıntaş",
      "ru": "Апартаменты 1+1, Алтынташ",
      "tr": "Altıntaş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Altıntaş",
      "ru": "Алтынташ",
      "tr": "Altıntaş"
    },
    "price": 127500,
    "rooms": "1+1",
    "area": 65,
    "floor": 2,
    "totalFloors": 11,
    "distanceToSea": 1780,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/103632/NL-12330-1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/103636/NL-12330-5.jpeg",
      "https://newlevel-group.com/storage/103635/NL-12330-4.jpeg",
      "https://newlevel-group.com/storage/103634/NL-12330-3.jpeg",
      "https://newlevel-group.com/storage/103638/NL-12330-7.jpeg",
      "https://newlevel-group.com/storage/103640/NL-12330-9.jpeg",
      "https://newlevel-group.com/storage/103639/NL-12330-8.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-altyntas-kpd7r8",
    "ref": "NL-12335",
    "title": {
      "en": "1+1 Apartment in Altıntaş",
      "ru": "Апартаменты 1+1, Алтынташ",
      "tr": "Altıntaş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Altıntaş",
      "ru": "Алтынташ",
      "tr": "Altıntaş"
    },
    "price": 98000,
    "rooms": "1+1",
    "area": 47,
    "floor": 3,
    "totalFloors": 12,
    "distanceToSea": 1690,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/103664/NL-12335-13.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/103655/NL-12335-4.jpg",
      "https://newlevel-group.com/storage/103658/NL-12335-7.jpg",
      "https://newlevel-group.com/storage/103654/NL-12335-3.jpg",
      "https://newlevel-group.com/storage/103653/NL-12335-2.jpg",
      "https://newlevel-group.com/storage/103665/NL-12335-14.jpg",
      "https://newlevel-group.com/storage/103663/NL-12335-12.jpg"
    ],
    "featured": false
  },
  {
    "id": "4-bedroom-villa-belek-13z3lb",
    "ref": "NL-11887",
    "title": {
      "en": "4+1 Villa in Belek",
      "ru": "Вилла 4+1, Белек",
      "tr": "Belek, 4+1 Villa"
    },
    "type": "villa",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Belek",
      "ru": "Белек",
      "tr": "Belek"
    },
    "price": 420000,
    "rooms": "4+1",
    "area": 220,
    "floor": 4,
    "totalFloors": 13,
    "distanceToSea": 1600,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/107229/NL-11887-2.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/107228/NL-11887-1.jpg",
      "https://newlevel-group.com/storage/107230/NL-11887-3.jpg",
      "https://newlevel-group.com/storage/107233/NL-11887-6.jpg",
      "https://newlevel-group.com/storage/107231/NL-11887-4.jpg",
      "https://newlevel-group.com/storage/107232/NL-11887-5.jpg",
      "https://newlevel-group.com/storage/107234/NL-11887-7.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-center-2-kj8kdf",
    "ref": "NL-11760",
    "title": {
      "en": "2+1 Apartment in Center",
      "ru": "Апартаменты 2+1, Центр",
      "tr": "Merkez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 90000,
    "rooms": "2+1",
    "area": 90,
    "floor": 5,
    "totalFloors": 14,
    "distanceToSea": 1510,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/107664/NL-11760-1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/107665/NL-11760-2.jpeg",
      "https://newlevel-group.com/storage/107666/NL-11760-3.jpeg",
      "https://newlevel-group.com/storage/107667/NL-11760-4.jpeg",
      "https://newlevel-group.com/storage/107668/NL-11760-5.jpeg",
      "https://newlevel-group.com/storage/107669/NL-11760-6.jpeg",
      "https://newlevel-group.com/storage/107670/NL-11760-7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-center-2-85zddh",
    "ref": "NL-11879",
    "title": {
      "en": "2+1 Apartment in Center",
      "ru": "Апартаменты 2+1, Центр",
      "tr": "Merkez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 123200,
    "rooms": "2+1",
    "area": 48,
    "floor": 6,
    "totalFloors": 8,
    "distanceToSea": 1420,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/107692/NL-11879-6.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/107693/NL-11879-7.jpg",
      "https://newlevel-group.com/storage/107687/NL-11879-1.jpg",
      "https://newlevel-group.com/storage/107690/NL-11879-4.jpg",
      "https://newlevel-group.com/storage/107688/NL-11879-2.jpg",
      "https://newlevel-group.com/storage/107694/NL-11879-8.jpg",
      "https://newlevel-group.com/storage/107695/NL-11879-9.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-center-2-lv2h9y",
    "ref": "NL-12225",
    "title": {
      "en": "2+1 Apartment in Center",
      "ru": "Апартаменты 2+1, Центр",
      "tr": "Merkez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 211500,
    "rooms": "2+1",
    "area": 80,
    "floor": 7,
    "totalFloors": 9,
    "distanceToSea": 1330,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/107751/NL-12225-10.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/107752/NL-12225-11.jpeg",
      "https://newlevel-group.com/storage/107753/NL-12225-12.jpeg",
      "https://newlevel-group.com/storage/107742/NL-12225-1.jpeg",
      "https://newlevel-group.com/storage/107743/NL-12225-2.jpeg",
      "https://newlevel-group.com/storage/107744/NL-12225-3.jpeg",
      "https://newlevel-group.com/storage/107745/NL-12225-4.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-center-2-vr61v8",
    "ref": "NL-12158",
    "title": {
      "en": "2+1 Apartment in Center",
      "ru": "Апартаменты 2+1, Центр",
      "tr": "Merkez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 1650000,
    "rooms": "2+1",
    "area": 145,
    "floor": 8,
    "totalFloors": 10,
    "distanceToSea": 1240,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/107756/NL-12158-2.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/107757/NL-12158-3.jpg",
      "https://newlevel-group.com/storage/107758/NL-12158-4.jpg",
      "https://newlevel-group.com/storage/107759/NL-12158-5.jpg",
      "https://newlevel-group.com/storage/107761/NL-12158-7.jpg",
      "https://newlevel-group.com/storage/107755/NL-12158-1.png",
      "https://newlevel-group.com/storage/107760/NL-12158-6.jpg"
    ],
    "featured": false
  },
  {
    "id": "5-bedroom-penthouse-center-2-bf571g",
    "ref": "NL-12224",
    "title": {
      "en": "5+1 Penthouse in Center",
      "ru": "Пентхаус 5+1, Центр",
      "tr": "Merkez, 5+1 Çatı katı"
    },
    "type": "penthouse",
    "category": [
      "new"
    ],
    "projectId": "new-level-panorama",
    "city": "Alanya",
    "district": {
      "ru": "Центр",
      "en": "Center",
      "tr": "Merkez"
    },
    "price": 273500,
    "rooms": "5+1",
    "area": 240,
    "floor": 1,
    "totalFloors": 11,
    "distanceToSea": 1150,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/108091/NL-12224-19.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/108095/NL-12224-23.jpeg",
      "https://newlevel-group.com/storage/108092/NL-12224-20.jpeg",
      "https://newlevel-group.com/storage/108093/NL-12224-21.jpeg",
      "https://newlevel-group.com/storage/108073/NL-12224-1.jpeg",
      "https://newlevel-group.com/storage/108074/NL-12224-2.jpeg",
      "https://newlevel-group.com/storage/108075/NL-12224-3.jpeg"
    ],
    "featured": false
  },
  {
    "id": "6-bedroom-villa-doshemealty-nmv1fs",
    "ref": "NL-12164",
    "title": {
      "en": "6+1 Villa in Döşemealtı",
      "ru": "Вилла 6+1, Дёшемеалты",
      "tr": "Döşemealtı, 6+1 Villa"
    },
    "type": "villa",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Döşemealtı",
      "ru": "Дёшемеалты",
      "tr": "Döşemealtı"
    },
    "price": 840000,
    "rooms": "6+1",
    "area": 450,
    "floor": 2,
    "totalFloors": 12,
    "distanceToSea": 1060,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/108495/NL-12164-4.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/108496/NL-12164-5.jpg",
      "https://newlevel-group.com/storage/108497/NL-12164-6.jpg",
      "https://newlevel-group.com/storage/108498/NL-12164-7.jpg",
      "https://newlevel-group.com/storage/108499/NL-12164-8.jpg",
      "https://newlevel-group.com/storage/108500/NL-12164-9.jpg",
      "https://newlevel-group.com/storage/108501/NL-12164-10.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-kepez-qwgdxk",
    "ref": "NL-11727",
    "title": {
      "en": "2+1 Apartment in Kepez",
      "ru": "Апартаменты 2+1, Кепез",
      "tr": "Kepez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kepez",
      "ru": "Кепез",
      "tr": "Kepez"
    },
    "price": 97500,
    "rooms": "2+1",
    "area": 70,
    "floor": 3,
    "totalFloors": 13,
    "distanceToSea": 970,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/109979/NL-11727-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/109993/NL-11727-15.jpeg",
      "https://newlevel-group.com/storage/109980/NL-11727-2.jpg",
      "https://newlevel-group.com/storage/109981/NL-11727-3.jpg",
      "https://newlevel-group.com/storage/109996/NL-11727-18.jpeg",
      "https://newlevel-group.com/storage/109995/NL-11727-17.jpeg",
      "https://newlevel-group.com/storage/109994/NL-11727-16.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-kepez-pbyvzw",
    "ref": "NL-11745",
    "title": {
      "en": "2+1 Apartment in Kepez",
      "ru": "Апартаменты 2+1, Кепез",
      "tr": "Kepez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kepez",
      "ru": "Кепез",
      "tr": "Kepez"
    },
    "price": 276000,
    "rooms": "2+1",
    "area": 94,
    "floor": 4,
    "totalFloors": 14,
    "distanceToSea": 880,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/110068/NL-11745-20.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/110069/NL-11745-21.jpeg",
      "https://newlevel-group.com/storage/110073/NL-11745-25.jpeg",
      "https://newlevel-group.com/storage/110074/NL-11745-26.jpeg",
      "https://newlevel-group.com/storage/110077/NL-11745-29.jpeg",
      "https://newlevel-group.com/storage/110070/NL-11745-22.jpeg",
      "https://newlevel-group.com/storage/110071/NL-11745-23.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-kepez-ltzdv4",
    "ref": "NL-11813",
    "title": {
      "en": "1+1 Apartment in Kepez",
      "ru": "Апартаменты 1+1, Кепез",
      "tr": "Kepez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kepez",
      "ru": "Кепез",
      "tr": "Kepez"
    },
    "price": 67500,
    "rooms": "1+1",
    "area": 50,
    "floor": 5,
    "totalFloors": 8,
    "distanceToSea": 790,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/110108/NL-11813-24.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/110111/NL-11813-27.jpeg",
      "https://newlevel-group.com/storage/110106/NL-11813-22.jpeg",
      "https://newlevel-group.com/storage/110109/NL-11813-25.jpeg",
      "https://newlevel-group.com/storage/110110/NL-11813-26.jpeg",
      "https://newlevel-group.com/storage/110114/NL-11813-30.jpeg",
      "https://newlevel-group.com/storage/110115/NL-11813-31.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-kepez-b2k96z",
    "ref": "NL-12159",
    "title": {
      "en": "1+1 Apartment in Kepez",
      "ru": "Апартаменты 1+1, Кепез",
      "tr": "Kepez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kepez",
      "ru": "Кепез",
      "tr": "Kepez"
    },
    "price": 248000,
    "rooms": "1+1",
    "area": 57,
    "floor": 6,
    "totalFloors": 9,
    "distanceToSea": 700,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/110117/NL-12159-2.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/110121/NL-12159-6.jpeg",
      "https://newlevel-group.com/storage/110118/NL-12159-3.jpg",
      "https://newlevel-group.com/storage/110119/NL-12159-4.jpg",
      "https://newlevel-group.com/storage/110120/NL-12159-5.jpg",
      "https://newlevel-group.com/storage/110126/NL-12159-11.jpeg",
      "https://newlevel-group.com/storage/110125/NL-12159-10.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-kepez-4nxs4b",
    "ref": "NL-12165",
    "title": {
      "en": "2+1 Apartment in Kepez",
      "ru": "Апартаменты 2+1, Кепез",
      "tr": "Kepez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kepez",
      "ru": "Кепез",
      "tr": "Kepez"
    },
    "price": 411000,
    "rooms": "2+1",
    "area": 143,
    "floor": 7,
    "totalFloors": 10,
    "distanceToSea": 610,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/110197/NL-12165-56.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/110200/NL-12165-59.jpg",
      "https://newlevel-group.com/storage/110206/NL-12165-65.jpg",
      "https://newlevel-group.com/storage/110209/NL-12165-68.jpg",
      "https://newlevel-group.com/storage/110242/NL-12165-101.jpg",
      "https://newlevel-group.com/storage/110203/NL-12165-62.jpg",
      "https://newlevel-group.com/storage/110205/NL-12165-64.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-kepez-jd1pbt",
    "ref": "NL-12057",
    "title": {
      "en": "2+1 Apartment in Kepez",
      "ru": "Апартаменты 2+1, Кепез",
      "tr": "Kepez, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kepez",
      "ru": "Кепез",
      "tr": "Kepez"
    },
    "price": 70500,
    "rooms": "2+1",
    "area": 90,
    "floor": 8,
    "totalFloors": 11,
    "distanceToSea": 520,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/110265/NL-12057-1.png",
    "gallery": [
      "https://newlevel-group.com/storage/110269/NL-12057-5.jpg",
      "https://newlevel-group.com/storage/110266/NL-12057-2.png",
      "https://newlevel-group.com/storage/110267/NL-12057-3.png",
      "https://newlevel-group.com/storage/110268/NL-12057-4.jpg",
      "https://newlevel-group.com/storage/110273/NL-12057-9.jpg",
      "https://newlevel-group.com/storage/110275/NL-12057-11.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-kepez-jmwkkg",
    "ref": "NL-12329",
    "title": {
      "en": "1+1 Apartment in Kepez",
      "ru": "Апартаменты 1+1, Кепез",
      "tr": "Kepez, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kepez",
      "ru": "Кепез",
      "tr": "Kepez"
    },
    "price": 68000,
    "rooms": "1+1",
    "area": 40,
    "floor": 1,
    "totalFloors": 12,
    "distanceToSea": 430,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/110302/NL-12329-14.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/110305/NL-12329-17.jpg",
      "https://newlevel-group.com/storage/110309/NL-12329-21.jpg",
      "https://newlevel-group.com/storage/110304/NL-12329-16.jpg",
      "https://newlevel-group.com/storage/110303/NL-12329-15.jpg",
      "https://newlevel-group.com/storage/110308/NL-12329-20.jpg",
      "https://newlevel-group.com/storage/110306/NL-12329-18.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-konyaalti-vvt6w6",
    "ref": "NL-11720",
    "title": {
      "en": "1+1 Apartment in Konyaaltı",
      "ru": "Апартаменты 1+1, Коньяалты",
      "tr": "Konyaaltı, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Konyaaltı",
      "ru": "Коньяалты",
      "tr": "Konyaaltı"
    },
    "price": 124500,
    "rooms": "1+1",
    "area": 50,
    "floor": 2,
    "totalFloors": 13,
    "distanceToSea": 340,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/111445/NL-11720-13.png",
    "gallery": [
      "https://newlevel-group.com/storage/111440/NL-11720-8.jpeg",
      "https://newlevel-group.com/storage/111447/NL-11720-15.jpeg",
      "https://newlevel-group.com/storage/111444/NL-11720-12.jpeg",
      "https://newlevel-group.com/storage/111443/NL-11720-11.jpeg",
      "https://newlevel-group.com/storage/111442/NL-11720-10.jpeg",
      "https://newlevel-group.com/storage/111441/NL-11720-9.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-konyaalti-ksms6w",
    "ref": "NL-11738",
    "title": {
      "en": "2+1 Apartment in Konyaaltı",
      "ru": "Апартаменты 2+1, Коньяалты",
      "tr": "Konyaaltı, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Konyaaltı",
      "ru": "Коньяалты",
      "tr": "Konyaaltı"
    },
    "price": 400000,
    "rooms": "2+1",
    "area": 102,
    "floor": 3,
    "totalFloors": 14,
    "distanceToSea": 250,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/111563/NL-11738-63.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/111558/NL-11738-58.jpeg",
      "https://newlevel-group.com/storage/111560/NL-11738-60.png",
      "https://newlevel-group.com/storage/111561/NL-11738-61.png",
      "https://newlevel-group.com/storage/111579/NL-11738-79.jpeg",
      "https://newlevel-group.com/storage/111562/NL-11738-62.jpg",
      "https://newlevel-group.com/storage/111567/NL-11738-67.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-konyaalti-wpj1yj",
    "ref": "NL-12147",
    "title": {
      "en": "2+1 Apartment in Konyaaltı",
      "ru": "Апартаменты 2+1, Коньяалты",
      "tr": "Konyaaltı, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Konyaaltı",
      "ru": "Коньяалты",
      "tr": "Konyaaltı"
    },
    "price": 666750,
    "rooms": "2+1",
    "area": 97,
    "floor": 4,
    "totalFloors": 8,
    "distanceToSea": 1780,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/111630/NL-12147-50.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/111629/NL-12147-49.jpeg",
      "https://newlevel-group.com/storage/111631/NL-12147-51.jpeg",
      "https://newlevel-group.com/storage/111606/NL-12147-26.jpg",
      "https://newlevel-group.com/storage/111614/NL-12147-34.jpg",
      "https://newlevel-group.com/storage/111615/NL-12147-35.jpg",
      "https://newlevel-group.com/storage/111617/NL-12147-37.jpg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-konyaalti-9mlpm8",
    "ref": "NL-12146",
    "title": {
      "en": "2+1 Apartment in Konyaaltı",
      "ru": "Апартаменты 2+1, Коньяалты",
      "tr": "Konyaaltı, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Konyaaltı",
      "ru": "Коньяалты",
      "tr": "Konyaaltı"
    },
    "price": 289000,
    "rooms": "2+1",
    "area": 100,
    "floor": 5,
    "totalFloors": 9,
    "distanceToSea": 1690,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/111650/NL-12146-16.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/111652/NL-12146-18.jpeg",
      "https://newlevel-group.com/storage/111653/NL-12146-19.jpeg",
      "https://newlevel-group.com/storage/111654/NL-12146-20.jpeg",
      "https://newlevel-group.com/storage/111635/NL-12146-1.jpeg",
      "https://newlevel-group.com/storage/111651/NL-12146-17.jpeg",
      "https://newlevel-group.com/storage/111636/NL-12146-2.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-konyaalti-h196kf",
    "ref": "NL-12176",
    "title": {
      "en": "2+1 Apartment in Konyaaltı",
      "ru": "Апартаменты 2+1, Коньяалты",
      "tr": "Konyaaltı, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Konyaaltı",
      "ru": "Коньяалты",
      "tr": "Konyaaltı"
    },
    "price": 424000,
    "rooms": "2+1",
    "area": 112,
    "floor": 6,
    "totalFloors": 10,
    "distanceToSea": 1600,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/111662/NL-12176-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/111666/NL-12176-5.jpg",
      "https://newlevel-group.com/storage/111674/NL-12176-13.jpg",
      "https://newlevel-group.com/storage/111673/NL-12176-12.jpg",
      "https://newlevel-group.com/storage/111671/NL-12176-10.jpg",
      "https://newlevel-group.com/storage/111665/NL-12176-4.jpg",
      "https://newlevel-group.com/storage/111670/NL-12176-9.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-konyaalti-rhkjcn",
    "ref": "NL-12306",
    "title": {
      "en": "1+1 Apartment in Konyaaltı",
      "ru": "Апартаменты 1+1, Коньяалты",
      "tr": "Konyaaltı, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Konyaaltı",
      "ru": "Коньяалты",
      "tr": "Konyaaltı"
    },
    "price": 107000,
    "rooms": "1+1",
    "area": 60,
    "floor": 7,
    "totalFloors": 11,
    "distanceToSea": 1510,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/111741/NL-12306-9.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/111739/NL-12306-7.jpg",
      "https://newlevel-group.com/storage/111733/NL-12306-1.jpg",
      "https://newlevel-group.com/storage/111737/NL-12306-5.jpg",
      "https://newlevel-group.com/storage/111736/NL-12306-4.jpeg",
      "https://newlevel-group.com/storage/111735/NL-12306-3.jpg",
      "https://newlevel-group.com/storage/111740/NL-12306-8.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-kundu-t2dlb0",
    "ref": "NL-12292",
    "title": {
      "en": "2+1 Apartment in Kundu",
      "ru": "Апартаменты 2+1, Кунду",
      "tr": "Kundu, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Kundu",
      "ru": "Кунду",
      "tr": "Kundu"
    },
    "price": 294000,
    "rooms": "2+1",
    "area": 57,
    "floor": 8,
    "totalFloors": 12,
    "distanceToSea": 1420,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/113468/NL-12292-6.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/113463/NL-12292-1.jpg",
      "https://newlevel-group.com/storage/113467/NL-12292-5.jpg",
      "https://newlevel-group.com/storage/113466/NL-12292-4.jpg",
      "https://newlevel-group.com/storage/113465/NL-12292-3.jpg",
      "https://newlevel-group.com/storage/113471/NL-12292-9.jpg",
      "https://newlevel-group.com/storage/113470/NL-12292-8.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-lara-gysd6g",
    "ref": "NL-11748",
    "title": {
      "en": "1+1 Apartment in Lara",
      "ru": "Апартаменты 1+1, Лара",
      "tr": "Lara, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Lara",
      "ru": "Лара",
      "tr": "Lara"
    },
    "price": 147000,
    "rooms": "1+1",
    "area": 55,
    "floor": 1,
    "totalFloors": 13,
    "distanceToSea": 1330,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/114145/NL-11748-25.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/114146/NL-11748-26.jpeg",
      "https://newlevel-group.com/storage/114148/NL-11748-28.jpeg",
      "https://newlevel-group.com/storage/114147/NL-11748-27.jpeg",
      "https://newlevel-group.com/storage/114121/NL-11748-1.jpeg",
      "https://newlevel-group.com/storage/114122/NL-11748-2.jpeg",
      "https://newlevel-group.com/storage/114123/NL-11748-3.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-lara-hy2s2b",
    "ref": "NL-11761",
    "title": {
      "en": "2+1 Apartment in Lara",
      "ru": "Апартаменты 2+1, Лара",
      "tr": "Lara, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Lara",
      "ru": "Лара",
      "tr": "Lara"
    },
    "price": 452000,
    "rooms": "2+1",
    "area": 91,
    "floor": 2,
    "totalFloors": 14,
    "distanceToSea": 1240,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/114178/NL-11761-26.png",
    "gallery": [
      "https://newlevel-group.com/storage/114179/NL-11761-27.png",
      "https://newlevel-group.com/storage/114180/NL-11761-28.png",
      "https://newlevel-group.com/storage/114181/NL-11761-29.png",
      "https://newlevel-group.com/storage/114155/NL-11761-3.jpeg",
      "https://newlevel-group.com/storage/114153/NL-11761-1.jpeg",
      "https://newlevel-group.com/storage/114156/NL-11761-4.jpeg"
    ],
    "featured": false
  },
  {
    "id": "3-bedroom-apartment-lara-ydr6r4",
    "ref": "NL-12026",
    "title": {
      "en": "3+1 Apartment in Lara",
      "ru": "Апартаменты 3+1, Лара",
      "tr": "Lara, 3+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Lara",
      "ru": "Лара",
      "tr": "Lara"
    },
    "price": 354000,
    "rooms": "3+1",
    "area": 101,
    "floor": 3,
    "totalFloors": 8,
    "distanceToSea": 1150,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/114202/NL-12026-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/114203/NL-12026-2.jpg",
      "https://newlevel-group.com/storage/114206/NL-12026-5.png",
      "https://newlevel-group.com/storage/114205/NL-12026-4.png",
      "https://newlevel-group.com/storage/114204/NL-12026-3.png",
      "https://newlevel-group.com/storage/114209/NL-12026-8.jpg",
      "https://newlevel-group.com/storage/114207/NL-12026-6.png"
    ],
    "featured": false
  },
  {
    "id": "apartment-lara-fz49h3",
    "ref": "NL-12080",
    "title": {
      "en": "2+1 Apartment in Lara",
      "ru": "Апартаменты 2+1, Лара",
      "tr": "Lara, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Antalya",
    "district": {
      "en": "Lara",
      "ru": "Лара",
      "tr": "Lara"
    },
    "price": 375000,
    "rooms": "2+1",
    "area": 95,
    "floor": 4,
    "totalFloors": 9,
    "distanceToSea": 1060,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/114236/NL-12080-17.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/114237/NL-12080-18.jpg",
      "https://newlevel-group.com/storage/114238/NL-12080-19.jpg",
      "https://newlevel-group.com/storage/114246/NL-12080-27.jpg",
      "https://newlevel-group.com/storage/114247/NL-12080-28.jpg",
      "https://newlevel-group.com/storage/114249/NL-12080-30.jpg",
      "https://newlevel-group.com/storage/114245/NL-12080-26.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-beylikduzu-l5qmk1",
    "ref": "NL-11763",
    "title": {
      "en": "2+1 Apartment in Beylikdüzü",
      "ru": "Апартаменты 2+1, Бейликдюзю",
      "tr": "Beylikdüzü, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Istanbul",
    "district": {
      "en": "Beylikdüzü",
      "ru": "Бейликдюзю",
      "tr": "Beylikdüzü"
    },
    "price": 158000,
    "rooms": "2+1",
    "area": 100,
    "floor": 5,
    "totalFloors": 10,
    "distanceToSea": 970,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/115288/NL-11763-1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/115294/NL-11763-7.jpg",
      "https://newlevel-group.com/storage/115289/NL-11763-2.jpg",
      "https://newlevel-group.com/storage/115290/NL-11763-3.jpg",
      "https://newlevel-group.com/storage/115291/NL-11763-4.jpg",
      "https://newlevel-group.com/storage/115293/NL-11763-6.jpg",
      "https://newlevel-group.com/storage/115295/NL-11763-8.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-kuchukchekmece-s20kk8",
    "ref": "NL-11752",
    "title": {
      "en": "2+1 Apartment in Küçükçekmece",
      "ru": "Апартаменты 2+1, Кючюкчекмедже",
      "tr": "Küçükçekmece, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Istanbul",
    "district": {
      "en": "Küçükçekmece",
      "ru": "Кючюкчекмедже",
      "tr": "Küçükçekmece"
    },
    "price": 205000,
    "rooms": "2+1",
    "area": 66,
    "floor": 6,
    "totalFloors": 11,
    "distanceToSea": 880,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/115497/NL-11752-4.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/115498/NL-11752-5.jpg",
      "https://newlevel-group.com/storage/115494/NL-11752-1.jpg",
      "https://newlevel-group.com/storage/115495/NL-11752-2.jpg",
      "https://newlevel-group.com/storage/115496/NL-11752-3.jpg",
      "https://newlevel-group.com/storage/115499/NL-11752-6.jpg",
      "https://newlevel-group.com/storage/115500/NL-11752-7.jpg"
    ],
    "featured": false
  },
  {
    "id": "apartment-pendik-0h8s1s",
    "ref": "NL-11753",
    "title": {
      "en": "2+1 Apartment in Pendik",
      "ru": "Апартаменты 2+1, Пендик",
      "tr": "Pendik, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Istanbul",
    "district": {
      "en": "Pendik",
      "ru": "Пендик",
      "tr": "Pendik"
    },
    "price": 245500,
    "rooms": "2+1",
    "area": 86,
    "floor": 7,
    "totalFloors": 12,
    "distanceToSea": 790,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/115560/NL-11753-5.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/115562/NL-11753-7.jpg",
      "https://newlevel-group.com/storage/115563/NL-11753-8.jpg",
      "https://newlevel-group.com/storage/115564/NL-11753-9.jpg",
      "https://newlevel-group.com/storage/115566/NL-11753-11.jpg",
      "https://newlevel-group.com/storage/115556/NL-11753-1.jpg",
      "https://newlevel-group.com/storage/115557/NL-11753-2.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-arpachbakhshish-1lzp0j",
    "ref": "NL-11089",
    "title": {
      "en": "1+1 Apartment in Arpaçbahşiş",
      "ru": "Апартаменты 1+1, Арпачбахшиш",
      "tr": "Arpaçbahşiş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Arpaçbahşiş",
      "ru": "Арпачбахшиш",
      "tr": "Arpaçbahşiş"
    },
    "price": 48000,
    "rooms": "1+1",
    "area": 55,
    "floor": 8,
    "totalFloors": 13,
    "distanceToSea": 700,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/116762/NL-11089-1.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/116763/NL-11089-2.jpeg",
      "https://newlevel-group.com/storage/116764/NL-11089-3.jpeg",
      "https://newlevel-group.com/storage/116765/NL-11089-4.jpeg",
      "https://newlevel-group.com/storage/116766/NL-11089-5.jpeg",
      "https://newlevel-group.com/storage/116767/NL-11089-6.jpeg",
      "https://newlevel-group.com/storage/116768/NL-11089-7.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-arpachbakhshish-hbz1wc",
    "ref": "NL-11111",
    "title": {
      "en": "1+1 Apartment in Arpaçbahşiş",
      "ru": "Апартаменты 1+1, Арпачбахшиш",
      "tr": "Arpaçbahşiş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Arpaçbahşiş",
      "ru": "Арпачбахшиш",
      "tr": "Arpaçbahşiş"
    },
    "price": 44500,
    "rooms": "1+1",
    "area": 55,
    "floor": 1,
    "totalFloors": 14,
    "distanceToSea": 610,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/116784/NL-11111-10.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/116785/NL-11111-11.jpeg",
      "https://newlevel-group.com/storage/116775/NL-11111-1.jpeg",
      "https://newlevel-group.com/storage/116776/NL-11111-2.jpeg",
      "https://newlevel-group.com/storage/116777/NL-11111-3.jpeg",
      "https://newlevel-group.com/storage/116778/NL-11111-4.jpeg",
      "https://newlevel-group.com/storage/116779/NL-11111-5.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-arpachbakhshish-vnypvy",
    "ref": "NL-11113",
    "title": {
      "en": "1+1 Apartment in Arpaçbahşiş",
      "ru": "Апартаменты 1+1, Арпачбахшиш",
      "tr": "Arpaçbahşiş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Arpaçbahşiş",
      "ru": "Арпачбахшиш",
      "tr": "Arpaçbahşiş"
    },
    "price": 44500,
    "rooms": "1+1",
    "area": 55,
    "floor": 2,
    "totalFloors": 8,
    "distanceToSea": 520,
    "seaView": true,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/116793/NL-11113-7.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/116787/NL-11113-1.jpeg",
      "https://newlevel-group.com/storage/116788/NL-11113-2.jpeg",
      "https://newlevel-group.com/storage/116789/NL-11113-3.jpeg",
      "https://newlevel-group.com/storage/116790/NL-11113-4.jpeg",
      "https://newlevel-group.com/storage/116791/NL-11113-5.jpeg",
      "https://newlevel-group.com/storage/116792/NL-11113-6.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-arpachbakhshish-fhwclt",
    "ref": "NL-11112",
    "title": {
      "en": "1+1 Apartment in Arpaçbahşiş",
      "ru": "Апартаменты 1+1, Арпачбахшиш",
      "tr": "Arpaçbahşiş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Arpaçbahşiş",
      "ru": "Арпачбахшиш",
      "tr": "Arpaçbahşiş"
    },
    "price": 44500,
    "rooms": "1+1",
    "area": 55,
    "floor": 3,
    "totalFloors": 9,
    "distanceToSea": 430,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/116802/NL-11112-9.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/116803/NL-11112-10.jpeg",
      "https://newlevel-group.com/storage/116794/NL-11112-1.jpeg",
      "https://newlevel-group.com/storage/116795/NL-11112-2.jpeg",
      "https://newlevel-group.com/storage/116796/NL-11112-3.jpeg",
      "https://newlevel-group.com/storage/116797/NL-11112-4.jpeg",
      "https://newlevel-group.com/storage/116798/NL-11112-5.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-arpachbakhshish-ks0m7g",
    "ref": "NL-11179",
    "title": {
      "en": "1+1 Apartment in Arpaçbahşiş",
      "ru": "Апартаменты 1+1, Арпачбахшиш",
      "tr": "Arpaçbahşiş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Arpaçbahşiş",
      "ru": "Арпачбахшиш",
      "tr": "Arpaçbahşiş"
    },
    "price": 55000,
    "rooms": "1+1",
    "area": 65,
    "floor": 4,
    "totalFloors": 10,
    "distanceToSea": 340,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/116811/NL-11179-8.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/116804/NL-11179-1.jpeg",
      "https://newlevel-group.com/storage/116805/NL-11179-2.jpeg",
      "https://newlevel-group.com/storage/116806/NL-11179-3.jpeg",
      "https://newlevel-group.com/storage/116807/NL-11179-4.jpeg",
      "https://newlevel-group.com/storage/116808/NL-11179-5.jpeg",
      "https://newlevel-group.com/storage/116809/NL-11179-6.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-arpachbakhshish-scpfyw",
    "ref": "NL-11114",
    "title": {
      "en": "1+1 Apartment in Arpaçbahşiş",
      "ru": "Апартаменты 1+1, Арпачбахшиш",
      "tr": "Arpaçbahşiş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Arpaçbahşiş",
      "ru": "Арпачбахшиш",
      "tr": "Arpaçbahşiş"
    },
    "price": 43000,
    "rooms": "1+1",
    "area": 55,
    "floor": 5,
    "totalFloors": 11,
    "distanceToSea": 250,
    "seaView": true,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/116823/NL-11114-12.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/116822/NL-11114-11.jpeg",
      "https://newlevel-group.com/storage/116812/NL-11114-1.jpeg",
      "https://newlevel-group.com/storage/116813/NL-11114-2.jpeg",
      "https://newlevel-group.com/storage/116814/NL-11114-3.jpeg",
      "https://newlevel-group.com/storage/116815/NL-11114-4.jpeg",
      "https://newlevel-group.com/storage/116816/NL-11114-5.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-arpachbakhshish-79jmfm",
    "ref": "NL-11232",
    "title": {
      "en": "1+1 Apartment in Arpaçbahşiş",
      "ru": "Апартаменты 1+1, Арпачбахшиш",
      "tr": "Arpaçbahşiş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Arpaçbahşiş",
      "ru": "Арпачбахшиш",
      "tr": "Arpaçbahşiş"
    },
    "price": 54000,
    "rooms": "1+1",
    "area": 75,
    "floor": 6,
    "totalFloors": 12,
    "distanceToSea": 1780,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/116838/NL-11232-15.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/116839/NL-11232-16.jpeg",
      "https://newlevel-group.com/storage/116842/NL-11232-19.jpeg",
      "https://newlevel-group.com/storage/116824/NL-11232-1.jpeg",
      "https://newlevel-group.com/storage/116825/NL-11232-2.jpeg",
      "https://newlevel-group.com/storage/116826/NL-11232-3.jpeg",
      "https://newlevel-group.com/storage/116827/NL-11232-4.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-arpachbakhshish-qzrq5w",
    "ref": "NL-11388",
    "title": {
      "en": "1+1 Apartment in Arpaçbahşiş",
      "ru": "Апартаменты 1+1, Арпачбахшиш",
      "tr": "Arpaçbahşiş, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Arpaçbahşiş",
      "ru": "Арпачбахшиш",
      "tr": "Arpaçbahşiş"
    },
    "price": 59000,
    "rooms": "1+1",
    "area": 72,
    "floor": 7,
    "totalFloors": 13,
    "distanceToSea": 1690,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/116862/NL-11388-15.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/116861/NL-11388-14.jpeg",
      "https://newlevel-group.com/storage/116864/NL-11388-17.jpeg",
      "https://newlevel-group.com/storage/116860/NL-11388-13.jpeg",
      "https://newlevel-group.com/storage/116865/NL-11388-18.jpeg",
      "https://newlevel-group.com/storage/116866/NL-11388-19.jpeg",
      "https://newlevel-group.com/storage/116848/NL-11388-1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-cheshmeli-3ybl0v",
    "ref": "NL-11092",
    "title": {
      "en": "1+1 Apartment in Çeşmeli",
      "ru": "Апартаменты 1+1, Чешмели",
      "tr": "Çeşmeli, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Çeşmeli",
      "ru": "Чешмели",
      "tr": "Çeşmeli"
    },
    "price": 49000,
    "rooms": "1+1",
    "area": 55,
    "floor": 8,
    "totalFloors": 14,
    "distanceToSea": 1600,
    "seaView": false,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/119441/NL-11092-9.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/119442/NL-11092-10.jpeg",
      "https://newlevel-group.com/storage/119445/NL-11092-13.jpeg",
      "https://newlevel-group.com/storage/119433/NL-11092-1.jpeg",
      "https://newlevel-group.com/storage/119434/NL-11092-2.jpeg",
      "https://newlevel-group.com/storage/119435/NL-11092-3.jpeg",
      "https://newlevel-group.com/storage/119436/NL-11092-4.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-cheshmeli-pc0pq1",
    "ref": "NL-11226",
    "title": {
      "en": "1+1 Apartment in Çeşmeli",
      "ru": "Апартаменты 1+1, Чешмели",
      "tr": "Çeşmeli, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Çeşmeli",
      "ru": "Чешмели",
      "tr": "Çeşmeli"
    },
    "price": 77000,
    "rooms": "1+1",
    "area": 75,
    "floor": 1,
    "totalFloors": 8,
    "distanceToSea": 1510,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/119463/NL-11226-17.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/119465/NL-11226-19.jpeg",
      "https://newlevel-group.com/storage/119464/NL-11226-18.jpeg",
      "https://newlevel-group.com/storage/119447/NL-11226-1.jpeg",
      "https://newlevel-group.com/storage/119448/NL-11226-2.jpeg",
      "https://newlevel-group.com/storage/119449/NL-11226-3.jpeg",
      "https://newlevel-group.com/storage/119450/NL-11226-4.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-mezitli-1h44xb",
    "ref": "NL-11506",
    "title": {
      "en": "1+1 Apartment in Mezitli",
      "ru": "Апартаменты 1+1, Мезитли",
      "tr": "Mezitli, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Mezitli",
      "ru": "Мезитли",
      "tr": "Mezitli"
    },
    "price": 66000,
    "rooms": "1+1",
    "area": 58,
    "floor": 2,
    "totalFloors": 9,
    "distanceToSea": 1420,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/122271/NL-11506-13.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/122273/NL-11506-15.jpeg",
      "https://newlevel-group.com/storage/122272/NL-11506-14.jpeg",
      "https://newlevel-group.com/storage/122259/NL-11506-1.jpeg",
      "https://newlevel-group.com/storage/122260/NL-11506-2.jpeg",
      "https://newlevel-group.com/storage/122276/NL-11506-18.jpeg",
      "https://newlevel-group.com/storage/122270/NL-11506-12.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-teje-2p2hy1",
    "ref": "NL-11152",
    "title": {
      "en": "1+1 Apartment in Tece",
      "ru": "Апартаменты 1+1, Тедже",
      "tr": "Tece, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Tece",
      "ru": "Тедже",
      "tr": "Tece"
    },
    "price": 47000,
    "rooms": "1+1",
    "area": 60,
    "floor": 3,
    "totalFloors": 10,
    "distanceToSea": 1330,
    "seaView": false,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/126077/NL-11152-13.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/126076/NL-11152-12.jpeg",
      "https://newlevel-group.com/storage/126065/NL-11152-1.jpeg",
      "https://newlevel-group.com/storage/126066/NL-11152-2.jpeg",
      "https://newlevel-group.com/storage/126067/NL-11152-3.jpeg",
      "https://newlevel-group.com/storage/126068/NL-11152-4.jpeg",
      "https://newlevel-group.com/storage/126069/NL-11152-5.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-teje-bnhp0m",
    "ref": "NL-11145",
    "title": {
      "en": "1+1 Apartment in Tece",
      "ru": "Апартаменты 1+1, Тедже",
      "tr": "Tece, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Tece",
      "ru": "Тедже",
      "tr": "Tece"
    },
    "price": 49500,
    "rooms": "1+1",
    "area": 60,
    "floor": 4,
    "totalFloors": 11,
    "distanceToSea": 1240,
    "seaView": true,
    "furnished": false,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/126099/NL-11145-14.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/126096/NL-11145-11.jpeg",
      "https://newlevel-group.com/storage/126086/NL-11145-1.jpeg",
      "https://newlevel-group.com/storage/126087/NL-11145-2.jpeg",
      "https://newlevel-group.com/storage/126088/NL-11145-3.jpeg",
      "https://newlevel-group.com/storage/126089/NL-11145-4.jpeg",
      "https://newlevel-group.com/storage/126090/NL-11145-5.jpeg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-teje-tvpl28",
    "ref": "NL-11389",
    "title": {
      "en": "1+1 Apartment in Tece",
      "ru": "Апартаменты 1+1, Тедже",
      "tr": "Tece, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Tece",
      "ru": "Тедже",
      "tr": "Tece"
    },
    "price": 59000,
    "rooms": "1+1",
    "area": 70,
    "floor": 5,
    "totalFloors": 12,
    "distanceToSea": 1150,
    "seaView": true,
    "furnished": true,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/126116/NL-11389-13.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/126113/NL-11389-10.jpeg",
      "https://newlevel-group.com/storage/126104/NL-11389-1.jpeg",
      "https://newlevel-group.com/storage/126105/NL-11389-2.jpeg",
      "https://newlevel-group.com/storage/126117/NL-11389-14.jpeg",
      "https://newlevel-group.com/storage/126119/NL-11389-16.jpeg",
      "https://newlevel-group.com/storage/126106/NL-11389-3.jpeg"
    ],
    "featured": false
  },
  {
    "id": "3-bedroom-penthouse-teje-zhbklz",
    "ref": "NL-11153",
    "title": {
      "en": "3+1 Penthouse in Tece",
      "ru": "Пентхаус 3+1, Тедже",
      "tr": "Tece, 3+1 Çatı katı"
    },
    "type": "penthouse",
    "category": [
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Tece",
      "ru": "Тедже",
      "tr": "Tece"
    },
    "price": 107500,
    "rooms": "3+1",
    "area": 110,
    "floor": 6,
    "totalFloors": 13,
    "distanceToSea": 1060,
    "seaView": true,
    "furnished": false,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/128000/NL-11153-9.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/127999/NL-11153-8.jpeg",
      "https://newlevel-group.com/storage/127992/NL-11153-1.jpeg",
      "https://newlevel-group.com/storage/127993/NL-11153-2.jpeg",
      "https://newlevel-group.com/storage/127994/NL-11153-3.jpeg",
      "https://newlevel-group.com/storage/127995/NL-11153-4.jpeg",
      "https://newlevel-group.com/storage/127996/NL-11153-5.jpeg"
    ],
    "featured": false
  },
  {
    "id": "apartment-tomuk-8nx7z7",
    "ref": "NL-11098",
    "title": {
      "en": "1+1 Apartment in Tomuk",
      "ru": "Апартаменты 1+1, Томук",
      "tr": "Tomuk, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new",
      "investment"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Tomuk",
      "ru": "Томук",
      "tr": "Tomuk"
    },
    "price": 83000,
    "rooms": "1+1",
    "area": 68,
    "floor": 7,
    "totalFloors": 14,
    "distanceToSea": 970,
    "seaView": true,
    "furnished": true,
    "completionYear": 2025,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/128609/NL-11098-1.jpg",
    "gallery": [
      "https://newlevel-group.com/storage/128610/NL-11098-2.jpg",
      "https://newlevel-group.com/storage/128611/NL-11098-3.jpg",
      "https://newlevel-group.com/storage/128612/NL-11098-4.jpg",
      "https://newlevel-group.com/storage/128613/NL-11098-5.jpg",
      "https://newlevel-group.com/storage/128615/NL-11098-7.jpg",
      "https://newlevel-group.com/storage/128614/NL-11098-6.jpg"
    ],
    "featured": false
  },
  {
    "id": "1-bedroom-apartment-tomuk-wgw9sr",
    "ref": "NL-11366",
    "title": {
      "en": "1+1 Apartment in Tomuk",
      "ru": "Апартаменты 1+1, Томук",
      "tr": "Tomuk, 1+1 Daire"
    },
    "type": "apartment",
    "category": [
      "hot"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Tomuk",
      "ru": "Томук",
      "tr": "Tomuk"
    },
    "price": 54000,
    "rooms": "1+1",
    "area": 55,
    "floor": 8,
    "totalFloors": 8,
    "distanceToSea": 880,
    "seaView": true,
    "furnished": false,
    "completionYear": 2026,
    "status": "construction",
    "image": "https://newlevel-group.com/storage/128688/NL-11366-15.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/128691/NL-11366-18.jpeg",
      "https://newlevel-group.com/storage/128689/NL-11366-16.jpeg",
      "https://newlevel-group.com/storage/128690/NL-11366-17.jpeg",
      "https://newlevel-group.com/storage/128692/NL-11366-19.jpeg",
      "https://newlevel-group.com/storage/128674/NL-11366-1.jpeg",
      "https://newlevel-group.com/storage/128675/NL-11366-2.jpeg"
    ],
    "featured": false
  },
  {
    "id": "2-bedroom-apartment-tomuk-lq3lgy",
    "ref": "NL-11365",
    "title": {
      "en": "2+1 Apartment in Tomuk",
      "ru": "Апартаменты 2+1, Томук",
      "tr": "Tomuk, 2+1 Daire"
    },
    "type": "apartment",
    "category": [
      "new"
    ],
    "projectId": "new-level-premium",
    "city": "Mersin",
    "district": {
      "en": "Tomuk",
      "ru": "Томук",
      "tr": "Tomuk"
    },
    "price": 75000,
    "rooms": "2+1",
    "area": 72,
    "floor": 1,
    "totalFloors": 9,
    "distanceToSea": 790,
    "seaView": true,
    "furnished": true,
    "completionYear": 2024,
    "status": "ready",
    "image": "https://newlevel-group.com/storage/128758/NL-11365-17.jpeg",
    "gallery": [
      "https://newlevel-group.com/storage/128757/NL-11365-16.jpeg",
      "https://newlevel-group.com/storage/128742/NL-11365-1.jpeg",
      "https://newlevel-group.com/storage/128759/NL-11365-18.jpeg",
      "https://newlevel-group.com/storage/128743/NL-11365-2.jpeg",
      "https://newlevel-group.com/storage/128744/NL-11365-3.jpeg",
      "https://newlevel-group.com/storage/128745/NL-11365-4.jpeg"
    ],
    "featured": false
  }
];

export const featuredProperties = properties.filter((p) => p.featured);
export const propertyById = (id: string) => properties.find((p) => p.id === id);

const ALL_TYPES: PropertyType[] = ['apartment', 'villa', 'penthouse', 'land', 'commercial'];
export const propertyTypeCards: PropertyTypeCard[] = ALL_TYPES.map((type) => ({
  type,
  count: properties.filter((p) => p.type === type).length,
  image: img(`type-${type}`, 1000, 1200),
}));

export const totalListings = properties.length;
export const totalRentals = 27;
