import { Content, Language } from './types';

export const TRANSLATIONS: Record<Language, Content> = {
  en: {
    nav: {
      home: "Home",
      services: "Solutions",
      process: "Process",
      about: "Company",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      title: "Secure Your Assets,",
      highlight: "Empower Your Network",
      subtitle: "Israel's premier specialists in low-voltage systems. From advanced CCTV and alarm integration to enterprise-grade fiber optics and server rooms.",
      cta: "Get a Free Consultation",
      secondaryCta: "View Services",
      badge: "Licensed Installers",
    },
    services: {
      sectionTitle: "Our Expertise",
      sectionSubtitle: "We provide end-to-end technical solutions, splitting our focus between uncompromising security and robust network infrastructure.",
      securityTitle: "Security & Communication",
      securitySubtitle: "Protecting what matters most.",
      infraTitle: "Network Infrastructure",
      infraSubtitle: "The backbone of your operations.",
      cctv: {
        title: "CCTV & Surveillance",
        description: "State-of-the-art video monitoring systems designed to eliminate blind spots. We install IP cameras, NVRs, and remote viewing setups.",
        features: ["4K Night Vision Cameras", "Remote Mobile Access", "License Plate Recognition", "Cloud Storage Integration"]
      },
      alarms: {
        title: "Alarms & Access Control",
        description: "Comprehensive perimeter protection. We integrate smart alarm systems with biometric access control to regulate entry.",
        features: ["Motion Detection Sensors", "Biometric/Card Access", "Intercom Integration", "24/7 Alert Systems"]
      },
      telephony: {
        title: "Telephony & Intercoms",
        description: "Crystal clear communication solutions for offices and residential buildings. IP-PBX systems and smart video intercoms.",
        features: ["VoIP/Cloud Telephony", "Video Intercoms", "Multi-room Systems", "Conference Room Audio"]
      },
      networking: {
        title: "Structured Cabling",
        description: "The nervous system of your IT. We plan and install Cat6/Cat7 cabling ensuring speed, organization, and scalability.",
        features: ["Cat6/Cat7 Installation", "Cable Management", "Fluke Testing", "Office Points Termination"]
      },
      fiber: {
        title: "Fiber Optics",
        description: "High-speed data transmission over long distances. Precision fusion splicing and OTDR testing for zero signal loss.",
        features: ["Fusion Splicing", "OTDR Testing", "Backbone Cabling", "Fiber Repair Services"]
      },
      racks: {
        title: "Server Room Assembly",
        description: "Professional assembly of communication cabinets (Racks). We focus on airflow, labeling, and aesthetic organization.",
        features: ["Rack Design & Assembly", "Cooling Optimization", "Patch Panel Termination", "Legacy Cleanup"]
      }
    },
    process: {
      title: "How We Work",
      subtitle: "A structured approach to ensure excellence.",
      steps: [
        { title: "Site Survey", description: "We visit your location to assess needs, measure cable runs, and identify security vulnerabilities." },
        { title: "Custom Design", description: "We engineer a solution tailored to your layout and budget, selecting the right hardware." },
        { title: "Installation", description: "Our certified technicians execute the work with minimal disruption and maximum cleanliness." },
        { title: "Support", description: "We don't just leave. We provide training on systems and offer ongoing maintenance packages." }
      ]
    },
    about: {
      title: "About onTech",
      subtitle: "Precision Engineering Since 2018",
      description1: "onTech is a leading infrastructure firm based in Tel Aviv, serving clients nationwide. We noticed a gap in the market: technical contractors were often messy, unreliable, or lacked knowledge of modern standards. onTech was built to change that.",
      description2: "We combine the grit of construction with the precision of IT. Whether it's a complex server room for a startup or a security system for a logistics center, we treat every cable and every camera with obsessive attention to detail.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Common questions about our services and process.",
      items: [
        { question: "Do you work with private homes or only businesses?", answer: "We serve both! We install smart home security and networks for luxury residences, as well as comprehensive systems for offices and industrial facilities." },
        { question: "What brands of cameras do you install?", answer: "We work with top-tier brands like Hikvision, Dahua, Uniview, and Axis, ensuring reliability and long-term warranty support." },
        { question: "Do you provide warranties?", answer: "Yes, all our installations come with a standard workmanship warranty, alongside the manufacturer's warranty for the hardware." },
        { question: "Can you fix an existing messy server rack?", answer: "Absolutely. Rack reorganization is one of our specialties. We can trace, label, and tidy up 'spaghetti' cables to improve airflow and manageability." }
      ]
    },
    gallery: {
      title: "Our Work",
      subtitle: "A glimpse into our recent projects and installations.",
      viewAll: "View Gallery",
      close: "Close",
    },
    contact: {
      title: "Start Your Project",
      subtitle: "Ready to upgrade your security or speed up your network?",
      formTitle: "Get a Quote",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      phonePlaceholder: "Phone Number",
      messagePlaceholder: "Tell us about your project...",
      submitButton: "Send Request",
      address: "Carlebach 10, Tel Aviv (By appointment)",
    },
    footer: {
      rights: "All rights reserved.",
      description: "Advanced infrastructure solutions for the modern world.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Решения",
      process: "Процесс",
      about: "О нас",
      gallery: "Галерея",
      contact: "Контакты",
    },
    hero: {
      title: "Защита активов,",
      highlight: "Мощность сети",
      subtitle: "Ведущие специалисты Израиля по слаботочным системам. От установки камер и сигнализаций до оптоволокна и серверных комнат.",
      cta: "Бесплатная консультация",
      secondaryCta: "Наши услуги",
      badge: "Лицензированные специалисты",
    },
    services: {
      sectionTitle: "Наши Услуги",
      sectionSubtitle: "Мы предоставляем полные технические решения, уделяя особое внимание безопасности и сетевой инфраструктуре.",
      securityTitle: "Безопасность и Связь",
      securitySubtitle: "Защита того, что важно.",
      infraTitle: "Сетевая Инфраструктура",
      infraSubtitle: "Фундамент вашего бизнеса.",
      cctv: {
        title: "Видеонаблюдение (CCTV)",
        description: "Современные системы видеомониторинга. Установка IP-камер, NVR и настройка удаленного доступа с телефона.",
        features: ["4K Ночное видение", "Удаленный доступ", "Распознавание номеров", "Облачное хранение"]
      },
      alarms: {
        title: "Сигнализации и Контроль доступа",
        description: "Комплексная защита периметра. Интеграция умных сигнализаций с биометрическими системами доступа.",
        features: ["Датчики движения", "Биометрия и карты", "Интеграция с домофоном", "Оповещения 24/7"]
      },
      telephony: {
        title: "Телефония и Домофоны",
        description: "Чистая связь для офисов и жилых зданий. IP-АТС, облачная телефония и умные видеодомофоны.",
        features: ["VoIP/Облачная АТС", "Видеодомофоны", "Конференц-связь", "Мультирум системы"]
      },
      networking: {
        title: "Структурированные кабельные сети",
        description: "Нервная система вашего IT. Проектирование и монтаж Cat6/Cat7 для скорости и масштабируемости.",
        features: ["Монтаж Cat6/Cat7", "Кабель-менеджмент", "Fluke тесты", "Установка розеток"]
      },
      fiber: {
        title: "Оптоволокно",
        description: "Высокоскоростная передача данных. Точная сварка оптоволокна и рефлектометрия (OTDR) без потерь сигнала.",
        features: ["Сварка волокна", "OTDR тестирование", "Магистральные линии", "Ремонт оптики"]
      },
      racks: {
        title: "Сборка серверных шкафов",
        description: "Профессиональная сборка коммуникационных шкафов. Организация воздушных потоков, маркировка и эстетика.",
        features: ["Сборка стоек", "Оптимизация охлаждения", "Кроссировка патч-панелей", "Упорядочивание старых шкафов"]
      }
    },
    process: {
      title: "Как мы работаем",
      subtitle: "Структурированный подход к качеству.",
      steps: [
        { title: "Осмотр объекта", description: "Мы приезжаем, оцениваем потребности, замеряем трассы кабелей и выявляем уязвимости." },
        { title: "Проектирование", description: "Разрабатываем решение под ваш бюджет и планировку, подбирая лучшее оборудование." },
        { title: "Монтаж", description: "Наши сертифицированные техники выполняют работу чисто, быстро и аккуратно." },
        { title: "Поддержка", description: "Мы обучаем пользоваться системами и предлагаем пакеты технического обслуживания." }
      ]
    },
    about: {
      title: "О компании onTech",
      subtitle: "Инженерная точность с 2018 года",
      description1: "onTech — ведущая инфраструктурная компания в Тель-Авиве, работающая по всей стране. Мы заметили проблему: технические подрядчики часто работают неаккуратно. onTech создана, чтобы это изменить.",
      description2: "Мы объединяем мощь строительства с точностью IT. Будь то сложная серверная для стартапа или система безопасности для склада — мы относимся к каждому кабелю и камере с предельным вниманием.",
    },
    faq: {
      title: "Частые вопросы",
      subtitle: "Ответы на популярные вопросы о наших услугах.",
      items: [
        { question: "Вы работаете с частными домами или только с бизнесом?", answer: "Со всеми! Мы устанавливаем умный дом и безопасность в частных виллах, а также сложные системы для офисов и заводов." },
        { question: "Камеры каких брендов вы ставите?", answer: "Мы работаем с надежными брендами: Hikvision, Dahua, Uniview и Axis, гарантируя качество и долгосрочную поддержку." },
        { question: "Есть ли гарантия?", answer: "Да, на все работы предоставляется гарантия, плюс официальная гарантия производителя на оборудование." },
        { question: "Можете ли вы навести порядок в старом серверном шкафу?", answer: "Конечно. Реорганизация стоек — наша специализация. Мы распутаем «спагетти» из проводов, промаркируем и аккуратно уложим всё." }
      ]
    },
    gallery: {
      title: "Наши работы",
      subtitle: "Взгляните на наши недавние проекты и установки.",
      viewAll: "Открыть галерею",
      close: "Закрыть",
    },
    contact: {
      title: "Начните проект",
      subtitle: "Готовы обновить безопасность или ускорить сеть?",
      formTitle: "Получить предложение",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Email",
      phonePlaceholder: "Телефон",
      messagePlaceholder: "Расскажите о проекте...",
      submitButton: "Отправить запрос",
      address: "Карлибах 10, Тель-Авив (по записи)",
    },
    footer: {
      rights: "Все права защищены.",
      description: "Передовые инфраструктурные решения.",
    },
  },
  he: {
    nav: {
      home: "בית",
      services: "פתרונות",
      process: "תהליך עבודה",
      about: "אודות",
      gallery: "גלריה",
      contact: "צור קשר",
    },
    hero: {
      title: "אבטחה ללא פשרות,",
      highlight: "תקשורת מתקדמת",
      subtitle: "המומחים של ישראל למערכות מתח נמוך. מהתקנת מצלמות ואזעקות חכמות ועד לתשתיות סיבים וחדרי שרתים.",
      cta: "קבל ייעוץ חינם",
      secondaryCta: "לשירותים שלנו",
      badge: "מתקינים מורשים",
    },
    services: {
      sectionTitle: "המומחיות שלנו",
      sectionSubtitle: "אנו מספקים מעטפת טכנית מלאה, עם דגש על פתרונות אבטחה מתקדמים ותשתיות רשת יציבות.",
      securityTitle: "אבטחה ותקשורת",
      securitySubtitle: "להגן על מה שחשוב באמת.",
      infraTitle: "תשתיות רשת",
      infraSubtitle: "עמוד השדרה של העסק שלך.",
      cctv: {
        title: "מצלמות אבטחה (CCTV)",
        description: "מערכות צילום במעגל סגור לכיסוי שטחים מתים. התקנת מצלמות IP, הקלטה (NVR) וצפייה מרחוק בנייד.",
        features: ["ראיית לילה 4K", "גישה מרחוק", "זיהוי לוחיות רישוי", "גיבוי בענן"]
      },
      alarms: {
        title: "אזעקות ובקרת כניסה",
        description: "הגנה היקפית מלאה. אינטגרציה של מערכות אזעקה חכמות עם בקרות כניסה ביומטריות ואינטרקום.",
        features: ["גלאי תנועה ונפח", "כניסה ביומטרית", "אינטגרציה לאינטרקום", "התראות 24/7"]
      },
      telephony: {
        title: "טלפוניה ואינטרקום",
        description: "תקשורת צלולה למשרדים ולמגורים. מרכזיות IP מתקדמות, טלפוניה בענן ואינטרקום וידאו חכם.",
        features: ["מרכזיות ענן/VoIP", "אינטרקום וידאו", "מערכות לחדרי ישיבות", "מערכות כריזה"]
      },
      networking: {
        title: "תשתיות תקשורת",
        description: "מערכת העצבים של המחשוב. תכנון והתקנת כבילה בדרגות Cat6/Cat7 למהירות וסדר מופתי.",
        features: ["התקנת נקודות רשת", "סידור כבלים", "בדיקות פלוק (Fluke)", "פריסת כבילה"]
      },
      fiber: {
        title: "סיבים אופטיים",
        description: "העברת נתונים במהירות האור. ריתוך סיבים מדויק ובדיקות OTDR למניעת איבוד אותות.",
        features: ["ריתוך פיוז'ן", "בדיקות OTDR", "תשתיות ליבה (Backbone)", "תיקון סיבים"]
      },
      racks: {
        title: "סידור ארונות תקשורת",
        description: "הרכבה מקצועית של ארונות שרתים. דגש על זרימת אוויר, סימון ברור ואסתטיקה גבוהה.",
        features: ["תכנון והרכבת ארונות", "אופטימיזציית קירור", "סידור פאץ' פאנל", "סידור ארונות מבולגנים"]
      }
    },
    process: {
      title: "איך אנחנו עובדים",
      subtitle: "גישה מובנית למצוינות.",
      steps: [
        { title: "סקר אתר", description: "אנו מגיעים אליך להערכת צרכים, מדידת תוואי כבילה וזיהוי פרצות אבטחה." },
        { title: "תכנון מותאם", description: "תכנון פתרון המותאם לתקציב ולמבנה, תוך בחירת הציוד האמין והמתאים ביותר." },
        { title: "התקנה", description: "הצוות המוסמך שלנו מבצע את העבודה בניקיון, מהירות ומינימום הפרעה לשגרה." },
        { title: "תמיכה", description: "אנחנו לא נעלמים. הדרכה מלאה על המערכות ואפשרויות לתחזוקה שוטפת." }
      ]
    },
    about: {
      title: "אודות onTech",
      subtitle: "הנדסה מדויקת מאז 2018",
      description1: "onTech היא חברת תשתיות מובילה בתל אביב, המשרתת לקוחות בפריסה ארצית. זיהינו צורך בשוק: קבלני תקשורת היו לרוב מבולגנים או חסרי ידע בתקנים מודרניים. הקמנו את onTech כדי לשנות זאת.",
      description2: "אנו משלבים את העוצמה של עולם הבינוי עם הדיוק של עולם ההייטק. בין אם מדובר בחדר שרתים לסטארטאפ או מערך מצלמות למרכז לוגיסטי - אנו מתייחסים לכל כבל ולכל מצלמה בתשומת לב אובססיבית.",
    },
    faq: {
      title: "שאלות נפוצות",
      subtitle: "תשובות לשאלות שעולות בדרך כלל.",
      items: [
        { question: "האם אתם עובדים עם בתים פרטיים?", answer: "כן! אנו מתקינים בתים חכמים, מצלמות ורשתות בווילות יוקרה, לצד פרויקטים למשרדים ומפעלים." },
        { question: "עם אילו מותגי מצלמות אתם עובדים?", answer: "אנו עובדים עם המותגים המובילים כמו Hikvision, Dahua, Uniview ו-Axis, כדי להבטיח אמינות ואחריות." },
        { question: "האם יש אחריות על העבודה?", answer: "בוודאי. כל ההתקנות שלנו מגיעות עם אחריות על העבודה, בנוסף לאחריות היצרן על הציוד." },
        { question: "האם אתם יכולים לסדר ארון שרתים מבולגן?", answer: "בהחלט. סידור ארונות זו אחת ההתמחויות שלנו. נהפוך את הספגטי של הכבלים לסדר מופתי שישפר את זרימת האוויר." }
      ]
    },
    gallery: {
      title: "העבודות שלנו",
      subtitle: "הצצה לפרויקטים וההתקנות האחרונים שלנו.",
      viewAll: "צפה בגלריה",
      close: "סגור",
    },
    contact: {
      title: "בואו נתחיל",
      subtitle: "מוכנים לשדרג את האבטחה או להאיץ את הרשת?",
      formTitle: "קבל הצעת מחיר",
      namePlaceholder: "שם מלא",
      emailPlaceholder: "כתובת אימייל",
      phonePlaceholder: "מספר טלפון",
      messagePlaceholder: "ספר לנו על הפרויקט...",
      submitButton: "שלח פנייה",
      address: "קרליבך 10, תל אביב (בתיאום מראש)",
    },
    footer: {
      rights: "כל הזכויות שמורות.",
      description: "פתרונות תשתית מתקדמים לעולם המודרני.",
    },
  },
};