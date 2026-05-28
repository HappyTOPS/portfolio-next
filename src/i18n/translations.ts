export type Lang = "hy" | "ru" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  hy: {
    "nav.home": "Գլխավոր",
    "nav.experience": "Փորձ",
    "nav.skills": "Հմտություններ",
    "nav.projects": "Նախագծեր",
    "nav.contact": "Կապ",
    "hero.greeting": "Բարև, ես",
    "hero.name": "Լևոնն եմ",
    "hero.title": "Product Engineer",
    "hero.desc":
      "Ես ստեղծում եմ թվային արտադրանքներ, որոնք համատեղում են մաքուր դիզայնը, հզոր ինժեներիան և օգտատիրոջ հիանալի փորձը:",
    "hero.cta": "Կապվել",
    "hero.projects": "Նախագծեր",
    "exp.title": "Աշխատանքային Փորձ",
    "exp.job1.title": "Senior Frontend Engineer",
    "exp.job1.company": "TechCo",
    "exp.job1.date": "2022 - ներկա",
    "exp.job1.desc":
      "Մշակում եմ մասշտաբային React հավելվածներ, ղեկավարում եմ frontend թիմը, ներդրել եմ նոր ճարտարապետություն և բարելավել performance-ը 40%-ով։",
    "exp.job2.title": "Full Stack Developer",
    "exp.job2.company": "StartupXYZ",
    "exp.job2.date": "2020 - 2022",
    "exp.job2.desc":
      "Կառուցել եմ full-stack հավելվածներ Next.js-ով, նախագծել եմ REST API, աշխատել եմ PostgreSQL և Redis հետ:",
    "exp.job3.title": "Junior Developer",
    "exp.job3.company": "WebAgency",
    "exp.job3.date": "2018 - 2020",
    "exp.job3.desc":
      "Մասնակցել եմ վեբ կայքերի մշակմանը, սովորել եմ React, TypeScript և ագիլ մեթոդոլոգիաներ:",
    "skills.title": "Հմտություններ",
    "projects.title": "Նախագծեր",
    "projects.proj1.title": "E-Commerce Platform",
    "projects.proj1.desc":
      "Անձնական պորտֆոլիո կայք՝ կառուցված Next.js 16-ով, Tailwind CSS v4-ով և Framer Motion-ով: Լրիվ responsive, multilingual (hy/ru/en), մութ/լուսային թեմա:",
    "projects.proj2.title": "Open Source Contributions",
    "projects.proj2.desc": "Մասնակցություն բաց կոդով նախագծերին, ներառյալ bug fixes, feature development և code review հանրային repositories-ներում:",
    "projects.proj3.title": "CLI Tools",
    "projects.proj3.desc":
      "Node.js-ով կառուցված CLI գործիքներ ավտոմատացման համար՝ տվյալների մշակում, API փոխազդեցություն և DevOps սկրիպտինգ:",
    "chat.title": "Կապ",
    "chat.placeholder": "Գրեք հաղորդագրություն...",
    "chat.send": "Ուղարկել",
    "chat.bot.welcome":
      "Բարև! Ես Լևոնի AI օգնականն եմ: Ինչպե՞ս կարող եմ օգնել:",
    "footer.text": "© 2026 Լևոն. Բոլոր իրավունքները պաշտպանված են:",
  },
  ru: {
    "nav.home": "Главная",
    "nav.experience": "Опыт",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.contact": "Связь",
    "hero.greeting": "Привет, я",
    "hero.name": "Левон",
    "hero.title": "Product Engineer",
    "hero.desc":
      "Я создаю цифровые продукты, сочетающие чистый дизайн, мощную инженерию и отличный пользовательский опыт.",
    "hero.cta": "Связаться",
    "hero.projects": "Проекты",
    "exp.title": "Опыт Работы",
    "exp.job1.title": "Senior Frontend Engineer",
    "exp.job1.company": "TechCo",
    "exp.job1.date": "2022 - настоящее",
    "exp.job1.desc":
      "Разрабатываю масштабируемые React-приложения, руководию frontend-командой, внедрил новую архитектуру, улучшил производительность на 40%.",
    "exp.job2.title": "Full Stack Developer",
    "exp.job2.company": "StartupXYZ",
    "exp.job2.date": "2020 - 2022",
    "exp.job2.desc":
      "Строил full-stack приложения на Next.js, проектировал REST API, работал с PostgreSQL и Redis.",
    "exp.job3.title": "Junior Developer",
    "exp.job3.company": "WebAgency",
    "exp.job3.date": "2018 - 2020",
    "exp.job3.desc":
      "Участвовал в разработке веб-сайтов, изучил React, TypeScript и гибкие методологии.",
    "skills.title": "Навыки",
    "projects.title": "Проекты",
    "projects.proj1.title": "E-Commerce Platform",
    "projects.proj1.desc":
      "Персональный сайт-портфолио на Next.js 16, Tailwind CSS v4 и Framer Motion. Полностью адаптивный, мультиязычный (hy/ru/en), тёмная/светлая тема.",
    "projects.proj2.title": "Open Source Contributions",
    "projects.proj2.desc":
      "Участие в open source проектах: исправление ошибок, разработка новых функций и ревью кода в публичных репозиториях.",
    "projects.proj3.title": "CLI Tools",
    "projects.proj3.desc":
      "Инструменты командной строки на Node.js для автоматизации: обработка данных, взаимодействие с API и DevOps скриптинг.",
    "chat.title": "Связь",
    "chat.placeholder": "Напишите сообщение...",
    "chat.send": "Отправить",
    "chat.bot.welcome":
      "Привет! Я AI-помощник Левона. Чем могу помочь?",
    "footer.text": "© 2026 Левон. Все права защищены.",
  },
  en: {
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm",
    "hero.name": "Levon",
    "hero.title": "Product Engineer",
    "hero.desc":
      "I build digital products that blend clean design, robust engineering, and great user experiences.",
    "hero.cta": "Get in touch",
    "hero.projects": "Projects",
    "exp.title": "Experience",
    "exp.job1.title": "Senior Frontend Engineer",
    "exp.job1.company": "TechCo",
    "exp.job1.date": "2022 - Present",
    "exp.job1.desc":
      "Building scalable React applications, leading the frontend team, introduced new architecture improving performance by 40%.",
    "exp.job2.title": "Full Stack Developer",
    "exp.job2.company": "StartupXYZ",
    "exp.job2.date": "2020 - 2022",
    "exp.job2.desc":
      "Built full-stack applications with Next.js, designed REST APIs, worked with PostgreSQL and Redis.",
    "exp.job3.title": "Junior Developer",
    "exp.job3.company": "WebAgency",
    "exp.job3.date": "2018 - 2020",
    "exp.job3.desc":
      "Participated in website development, learned React, TypeScript and agile methodologies.",
    "skills.title": "Skills",
    "projects.title": "Projects",
    "projects.proj1.title": "E-Commerce Platform",
    "projects.proj1.desc":
      "Personal portfolio site built with Next.js 16, Tailwind CSS v4, and Framer Motion. Fully responsive, multilingual (hy/ru/en), dark/light theme.",
    "projects.proj2.title": "Open Source Contributions",
    "projects.proj2.desc": "Contributing to open source projects including bug fixes, feature development, and code review in public repositories.",
    "projects.proj3.title": "CLI Tools",
    "projects.proj3.desc":
      "Node.js CLI tools for automation: data processing, API interaction, and DevOps scripting.",
    "chat.title": "Contact",
    "chat.placeholder": "Type a message...",
    "chat.send": "Send",
    "chat.bot.welcome":
      "Hi! I'm Levon's AI assistant. How can I help you?",
    "footer.text": "© 2026 Levon. All rights reserved.",
  },
};
