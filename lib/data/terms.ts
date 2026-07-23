import type { ContentPageData } from '@/lib/data/contentPages';

/**
 * Standard website Terms of Use. Like the privacy policy, this is a general
 * template provided for convenience and should be reviewed by the client's
 * legal advisers before final publication.
 */
export const termsPage: ContentPageData = {
  slug: 'terms-of-use',
  layout: 'default',
  images: [],
  title: {
    en: 'Terms of Use',
    ru: 'Условия использования',
    tr: 'Kullanım Koşulları',
  },
  intro: {
    en: 'Please read these terms carefully. They set out the rules for using the New Level Group website and the information it provides.',
    ru: 'Пожалуйста, внимательно прочитайте эти условия. Они определяют правила использования сайта New Level Group и представленной на нём информации.',
    tr: 'Lütfen bu koşulları dikkatlice okuyun. New Level Group web sitesinin ve sunduğu bilgilerin kullanımına ilişkin kuralları belirler.',
  },
  body: {
    en: `## Acceptance of these terms
By accessing or using the New Level Group website, you agree to these Terms of Use. If you do not agree, please do not use the site.

## Information on this website
The website presents information about New Level Group, its residential projects and its services. Property details, layouts, prices, availability and completion dates are indicative, may change without notice, and do not constitute a binding offer. Any purchase is governed solely by the signed contract and official documents.

## Intellectual property
All content on this website, including text, images, renderings, logos and design, belongs to New Level Group or its licensors and is protected by law. You may not copy, reproduce or distribute it without prior written permission.

## Acceptable use
You agree to use the website lawfully and not to attempt to disrupt, damage or gain unauthorised access to it or its systems.

## Third-party links and services
The website may link to third-party sites and services, including maps and messaging apps. We are not responsible for their content, availability or privacy practices.

## No warranty and limitation of liability
The website is provided on an "as is" basis. To the extent permitted by law, New Level Group is not liable for any loss arising from your use of, or reliance on, the website or its content.

## Governing law
These terms are governed by the laws of the Republic of Türkiye, and any dispute is subject to the competent courts of Alanya, Antalya.

## Changes to these terms
We may update these Terms of Use from time to time. The current version is always available on this page.

## Contact
For any question about these terms, contact us at info@newlevel-group.com or +90 545 422 40 70.`,
    ru: `## Принятие условий
Получая доступ к сайту New Level Group или используя его, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны, пожалуйста, не пользуйтесь сайтом.

## Информация на сайте
Сайт содержит информацию о компании New Level Group, её жилых проектах и услугах. Характеристики объектов, планировки, цены, наличие и сроки сдачи носят ориентировочный характер, могут меняться без уведомления и не являются публичной офертой. Любая покупка регулируется исключительно подписанным договором и официальными документами.

## Интеллектуальная собственность
Всё содержимое сайта, включая тексты, изображения, визуализации, логотипы и дизайн, принадлежит New Level Group или её лицензиарам и охраняется законом. Копирование, воспроизведение или распространение без письменного разрешения запрещено.

## Правила использования
Вы обязуетесь использовать сайт законно и не пытаться нарушить его работу, повредить его или получить несанкционированный доступ к нему или его системам.

## Ссылки и сервисы третьих сторон
Сайт может содержать ссылки на сторонние ресурсы и сервисы, включая карты и мессенджеры. Мы не несём ответственности за их содержание, доступность или политику конфиденциальности.

## Отказ от гарантий и ограничение ответственности
Сайт предоставляется на условиях «как есть». В пределах, допустимых законом, New Level Group не несёт ответственности за убытки, возникшие в связи с использованием сайта или его содержимого.

## Применимое право
Настоящие условия регулируются законодательством Турецкой Республики, а любые споры подлежат рассмотрению в компетентных судах Аланьи, Анталья.

## Изменения условий
Мы можем время от времени обновлять настоящие Условия использования. Актуальная версия всегда доступна на этой странице.

## Контакты
По любым вопросам, связанным с этими условиями, свяжитесь с нами: info@newlevel-group.com или +90 545 422 40 70.`,
    tr: `## Bu koşulların kabulü
New Level Group web sitesine erişerek veya siteyi kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz. Kabul etmiyorsanız lütfen siteyi kullanmayın.

## Bu web sitesindeki bilgiler
Site, New Level Group hakkında, konut projeleri ve hizmetleri hakkında bilgi sunar. Gayrimenkul özellikleri, planlar, fiyatlar, durum ve teslim tarihleri bilgilendirme amaçlıdır, önceden haber verilmeden değişebilir ve bağlayıcı bir teklif oluşturmaz. Her satış yalnızca imzalanan sözleşme ve resmi belgelerle düzenlenir.

## Fikri mülkiyet
Metinler, görseller, render'lar, logolar ve tasarım dahil sitedeki tüm içerik New Level Group'a veya lisans verenlerine aittir ve yasalarla korunur. Önceden yazılı izin olmadan kopyalayamaz, çoğaltamaz veya dağıtamazsınız.

## Kabul edilebilir kullanım
Siteyi yasalara uygun kullanmayı ve siteyi veya sistemlerini bozmaya, zarar vermeye ya da yetkisiz erişim sağlamaya çalışmamayı kabul edersiniz.

## Üçüncü taraf bağlantıları ve hizmetleri
Site, haritalar ve mesajlaşma uygulamaları dahil üçüncü taraf sitelerine ve hizmetlerine bağlantı verebilir. Bunların içeriğinden, erişilebilirliğinden veya gizlilik uygulamalarından sorumlu değiliz.

## Garanti reddi ve sorumluluğun sınırlandırılması
Site "olduğu gibi" sunulur. Yasaların izin verdiği ölçüde New Level Group, siteyi veya içeriğini kullanmanızdan ya da ona güvenmenizden doğan hiçbir zarardan sorumlu değildir.

## Uygulanacak hukuk
Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir ve her türlü uyuşmazlık Alanya, Antalya yetkili mahkemelerinde çözülür.

## Koşullardaki değişiklikler
Bu Kullanım Koşullarını zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada mevcuttur.

## İletişim
Bu koşullarla ilgili her türlü soru için bize ulaşın: info@newlevel-group.com veya +90 545 422 40 70.`,
  },
  cards: { en: [], ru: [], tr: [] },
  team: { en: [], ru: [], tr: [] },
  departments: { en: [], ru: [], tr: [] },
};
