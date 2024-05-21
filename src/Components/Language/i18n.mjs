import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      partners: "Partners",
      about: "About us",
      services: "Services",
      contacts: "Contacts",
      mainText: "We turn fantasies into reality",
      mainTextDesc: "The ",
      mainTextDesc2:
        " team offers you unique and sophisticated solutions to create your ideal kitchen and interior design",
      europeKitchen: "European Kitchen",
      europeKitchenDesc:
        "The basis of harmony in the development of a kitchen design project is knowledge of basic styles, their features, and how they fit together. Elegant classics, cozy Provence, modern high-tech, lush Empire style, and Art Deco. Choosing an interior design is not as easy as it seems. To make this task easier, we will look at the main popular styles. The photos on the site will help you get inspired by interesting kitchen design ideas.",
      mieleDesc:
        "For more than 120 years, the quality of Miele appliances has been unquestionable. We test our products over a long service life. This is why the Miele user remains loyal to their choice and recommends our products to others. For us, there are no compromises when it comes to quality and exclusivity!",
      moreBtn: "More",
      furniture: "Upholstered Furniture",
      mieleModalDesc:
        'For more than 120 years, the quality of Miele appliances has been unquestionable. We test our products over a long service life. This is why the Miele user remains loyal to their choice and recommends our products to others. For us, there are no compromises when it comes to quality and exclusivity!<1/> Miele home appliances provide excellent results with minimal energy consumption. Cutting-edge technologies with innovative features, exclusively offered by Miele, guarantee impeccable and gentle care for your laundry, home, and dishes, as well as the pleasure of preparing gourmet culinary masterpieces. This is confirmed by victories in numerous product tests carried out around the world.<1/> In many countries, Miele is the most attractive brand in its industry. In the German domestic market, Miele was recognized as the "Best Brand" among other German companies. This recognition speaks volumes: buyers of Miele products pay special attention to quality and are very demanding about the design, convenience, and environmental friendliness of household appliances. When purchasing Miele appliances, you can be sure of the correctness of your choice!',
      furnitureDesc:
        "Upholstered furniture is our comfort and convenience. Depending on the purpose and features of upholstered furniture, it helps us not only relax in a cozy atmosphere but also concentrate and work as comfortably as possible. Sofas, armchairs, and poufs are designed to surround us with comfort and be our soft helpers.",
      loewe:
        "The German brand Loewe produces premium TVs and audio equipment. Each product of this brand is the result of unique developments, a diamond that has received a magnificent cut: durable materials, timeless design, and excellent sound and picture quality.",
      smallHouse: "Small Household Appliances",
      smallHouseDesc:
        "Small household appliances are compact, portable appliances for cooking, caring for things, and maintaining a healthy indoor climate. The main difference between small and large household appliances is their size and mobility.",
      garderobFurniture: "Wardrobe",
      garderobFurnitureDesc:
        "A wardrobe is a place where you can neatly and rationally place clothes, shoes, and accessories while keeping them always accessible, preventing deformation or deterioration due to improper storage. Today, minimalist dressing rooms that are as functional as possible are especially relevant.",
      showroom: "Our showroom",
      ideas: "Ideas and projects",
      neoClassical: "Neo-Classical",
      classic: "Classic",
      loft: "Loft",
      modern: "Modern",
      classicKitchen: "Kitchen in Classic Style",
      classicKitchen: "Kitchen in Classic Style",
      classicKitchenDesc:
        "A classic kitchen design is the epitome of luxury. Chic facades with milling combine sophistication and style with a pompous and expensive appearance. Unlike more pretentious styles such as Empire, classic style does not shine with gold, maintaining severity and elegance despite its solemnity.",
      neoClassicalKtichen: "Kitchen in Neo-Classical Style",
      neoClassicalKtichenDesc:
        "Neo-classic is a modern adaptation of the classical style. It features classic framed fronts with a lightweight frame pattern and modern-style fittings. Neo-classicism is characterized by simple and clear lines. The complex decor and intricate fittings of the classical style are replaced by the strict functionality of forms and details.",
      loftStyle: "Loft Style Kitchen",
      loftStyleDesc:
        "Loft-style premises combine the strict attractiveness of industrial forms with a light touch of home comfort, harmoniously uniting two opposites. Cold metal, concrete, brick, and other materials give the finishing of such kitchens a slightly rough appearance, distinguishing them from most standard solutions. Heavy furniture and brutal forms are combined in a modern loft with absolute functionality of the interior, making this design not only original but also practical.",
      modernStyle: "Kitchen in Modern Style",
      modernStyleDesc:
        "Modern style is one of the most interesting and controversial trends in interior design. It symbolizes novelty and an expression of freedom, a desire for simplicity and functionality. Laconic modernism is universal, equally harmonious in small apartments and country houses, in living rooms and kitchens, and is in demand in different countries. A kitchen in this style is a combination of aesthetics and functionality, comfort, and practicality.",
      footerDest: "Stage 15, Rysgally building, Ashgabat, Turkmenistan",
      aboutImgDesc1: "Main showroom",
      aboutImgDesc2: "Best Price",
      aboutImgDesc3: "High quality",
      aboutImgDesc4: "Famous brands",
      aboutImgDesc5: "11 years of successful work",
      aboutImgDesc6: "Professional team",
      aboutText:
        "Buying European furniture and appliances cheaper than in Europe is EASY! Come to us! We are conveniently located in the center of the capital, at Stage 15, in the ",
      aboutText1:
        " building. Visit the official website and Instagram of the best showroom with 11 years of successful experience.",
      aboutText2:
        "In the salon, you can check out new products from partner factories and highly recommended brands. In addition to parts, we sell a full range of built-in appliances and room accessories to visitors.",
      aboutText3:
        "We offer you a choice of German and Italian kitchen furniture. If you want to make a purchase, investing profitably and with your heart, then come to us. If you want to enjoy convenience and reliability for many years, then come to us. Kitchens from German and Italian manufacturers at competitive prices are the right choice!",
      aboutText4:
        "Projects implemented by our designers meet the highest standards. Our service is organized according to high-level standards, ensuring confidence and reliability in cooperation with us. Trust the professionals, and your comfort at home will be guaranteed.<1/> Our showroom designs kitchens and dressing rooms for private homes, offices, and hotels. We also offer upholstered furniture and small household appliances.",
      byuro: "Planning project",
      design: "Full project",
      projectAgree: "Project approval",
      sizePlace: "Size of your room",
      materials: "Selection of necessary materials",
      designPersonal: "Personal project design",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      partners: "Партнеры",
      about: "О нас",
      services: "Услуги",
      contacts: "Контакты",
      mainText: "Мы воплощаем фантазии в реальность",
      mainTextDesc: "Команда ",
      mainTextDesc2:
        " предлагает вам уникальные и изысканные решения для создания вашей идеальной кухни и оформления интерьера",
      europeKitchen: "Европейские кухни",
      europeKitchenDesc:
        "Основа гармонии в разработке дизайн-проекта кухни — это знание базовых стилей, их особенностей, того, как они сочетаются между собой. Элегантная классика, уютный прованс, современный хай-тек, пышный ампир и ар-деко — выбрать оформление интерьера не так просто, как кажется. Чтобы упростить эту задачу, мы рассмотрим основные популярные стили, а фото на сайте помогут вдохновиться интересными идеями дизайна кухни.",
      mieleDesc:
        "Вот уже более 120 лет качество техники Miele не вызывает сомнений. Мы тестируем свою продукцию на долгий срок службы. Именно поэтому потребители Miele остаются преданными своему выбору и рекомендуют нашу продукцию другим. Для нас не существует никаких компромиссов, если речь идёт о качестве и долговечности!",
      moreBtn: "Узнать подробнeе",
      furniture: "Мягкие мебели",
      mieleModalDesc:
        "Вот уже более 120 лет качество техники Miele не вызывает сомнений. Мы тестируем свою продукцию на долгий срок службы. Именно поэтому потребители Miele остаются преданными своему выбору и рекомендуют нашу продукцию другим. Для нас не существует никаких компромиссов, если речь идёт о качестве и долговечности!<1/> Бытовая техника Miele обеспечивает превосходные результаты при минимальном потреблении электроэнергии. Передовые технологии с инновационными характеристиками, которые предлагает исключительно Miele, гарантируют безупречный и бережный уход за бельём, домом и посудой, а также удовольствие от приготовления изысканных кулинарных шедевров. Это подтверждается победами в многочисленных тестах продукции, проводимых по всему миру.<1/> Во многих странах Miele является наиболее привлекательным брендом в своей отрасли. На внутреннем рынке Германии Miele была признана «Лучшим брендом» среди других немецких компаний. Такое признание говорит о многом: покупатели продукции Miele уделяют особое внимание качеству и очень требовательны к дизайну, удобству и экологичности бытовой техники. Покупая технику Miele, вы можете быть уверены в правильности своего выбора!",
      furnitureDesc:
        "Мягкая мебель — это наш комфорт и удобство. В зависимости от назначения особенностей мягкой мебели, она помогает нам расслабиться и отдохнуть в уютной атмосфере или, напротив, сконцентрироваться и максимально комфортно трудиться. Диваны, кресла, пуфы призваны окружать нас удобством и быть нашими мягкими помощниками.",
      loewe:
        "Немецкий бренд Loewe производит телевизоры и аудиотехнику премиум-класса. Каждый продукт этой марки – результат уникальных разработок. Алмаз, который получил великолепную огранку: долговечные материалы, дизайн вне времени, превосходное качество звука и картинки. ",
      smallHouse: "Мелкая бытовая техника",
      smallHouseDesc:
        "Мелкая бытовая техника — это компактные переносные приборы для приготовления пищи, ухода за вещами, а также поддержания здорового микроклимата в помещении. Главное отличие мелкой бытовой техники от крупной — габариты и мобильность.",
      garderobFurniture: "Гардеробная мебель",
      garderobFurnitureDesc:
        "Гардеробная – это место, где можно аккуратно и рационально разместить одежду, обувь, аксессуары, при этом они всегда будут доступны, они не деформируются и не изветшают от неправильного хранения. Сегодня особенно актуальны минималистичные гардеробные, которые могут быть максимально функциональными.",
      showroom: "Наш шоурум",
      ideas: "Идеи и проекты",
      neoClassical: "Нео - классика",
      classic: "Kлассика",
      loft: "Лофт",
      modern: "Модерн",
      classicKitchen: "Кухня в стиле классика",
      classicKitchenDesc:
        "Классический интерьер на кухне — воплощенная роскошь. Шикарные фасады с фрезеровками сочетают утонченность и стиль с помпезностью и дорогим внешним видом. В отличие от более пафосных стилей, таких как ампир, классика не блещет золотом, сохраняя строгость и изящность несмотря на торжественность.",
      neoClassicalKtichen: "Кухня в стиле нео-классика",
      neoClassicalKtichenDesc:
        "Нео-классика - это современная адаптация классического стиля. Классические рамочные фасады с облегченным рисунком рамки и фурнитурой в современном стиле. Нео-классике присущи простые и четкие линии. Сложный декор и замысловатая фурнитура классики заменяются строгой функциональностью форм и деталей.",
      loftStyle: "Loft Style Kitchen",
      loftStyleDesc:
        "Помещения в стиле лофт совмещают в себе строгую притягательность индустриальных форм и легкий налет домашнего уюта, гармонично сочетая в себе две противоположности. Холодный металл, бетон, кирпич и другие материалы делают отделку таких кухонь немного грубой, что и отличает их от большинства стандартных решений. Тяжелая мебель и брутальные формы сочетаются в современном лофте с абсолютной функциональностью интерьера, что делает такой дизайн не только оригинальным, но и практичным.",
      modernStyle: "Кухня в стиле модерн",
      modernStyleDesc:
        "Стиль модерн — одно из самых интересных и неоднозначных направлений в дизайне интерьера. Это символ новизны и выражения свободы, стремление к простоте и функциональности. Лаконичный модерн универсален, он одинаково гармоничен в малогабаритных квартирах и загородных домах, в гостиных и кухнях и востребован в разных странах. Кухня в этом стиле — это сочетание эстетики и функциональности, комфорта и практичности.",
      footerDest: "15 этап, здание Рысгаллы, г. Aшгабад, Туркменистан",
      aboutImgDesc1: "Главный шоурум",
      aboutImgDesc2: "Лучшая цена",
      aboutImgDesc3: "Высокое качество",
      aboutImgDesc4: "Известные бренды",
      aboutImgDesc5: "11 лет успешной работы",
      aboutImgDesc6: "Профессиональная команда",
      aboutText:
        "Купить Европейскую мебель и технику дешевле чем в Европе — ЛЕГКО! Приезжайте к нам! Мы удобно расположились в центре столицы, на 15 этапе здание ",
      aboutText1:
        ". Официальный сайт и инстаграм лучшего шоурума с 11-летним опытом успешной работы.",
      aboutText2:
        "В салоне можно оценить новинки фабрик — партнеров, высоко зарекомендовавших марок. В дополнение к деталям, мы осуществляем продажу посетителям всего диапазона встраиваемой бытовой техники и дополнительных предметов комнаты.",
      aboutText3:
        "Мы вам предложим выбор немецкой и итальянской кухонной мебели.  Желаете совершить покупку, выгодно и душой вкладывая средства, то это к нам.  Хотите долгие годы радоваться удобству и надежности, то это к нам.  Кухни немецких и итальянских производителей по выгодным ценам — правильный выбор!",
      aboutText4:
        "  Проекты реализованные нашими дизайнерами соотвествуют самым высоким требованиям. <1/> А наш сервис - организован по стандартам высокого уровня. Это дает уверенность и надежность сотрудничества с нами. <1/> Доверьтесь профессионалам и ваш уют в доме будет гарантирован.",
      byuro: "Конструкторское бюро",
      design: "Полноценный дизайн - проект",
      projectAgree: "Согласование проекта",
      sizePlace: "Размер вашего помещения",
      materials: "Подбор необходимых материалов",
      designPersonal: "Дизайн персонального проекта",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: localStorage.getItem("lng"),
  interpolation: {
    escapeValue: false,
  },
  debug: true,
  initImmediate: false,
});
export default i18n;
