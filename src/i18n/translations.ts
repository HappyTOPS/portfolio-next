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
      "Ժամանակակից առցանց խանութ Next.js, Stripe, Sanity CMS հիմքի վրա",
    "projects.proj2.title": "AI Dashboard",
    "projects.proj2.desc": "AI-ով աշխատող վերլուծական վահանակ TensorFlow.js-ով",
    "projects.proj3.title": "Portfolio Builder",
    "projects.proj3.desc":
      "Դինամիկ պորտֆոլիո կառուցող Framer Motion-ով և Supabase-ով",
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
      "Современный интернет-магазин на Next.js, Stripe, Sanity CMS",
    "projects.proj2.title": "AI Dashboard",
    "projects.proj2.desc":
      "Аналитическая панель с AI на базе TensorFlow.js",
    "projects.proj3.title": "Portfolio Builder",
    "projects.proj3.desc":
      "Динамический конструктор портфолио с Framer Motion и Supabase",
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
      "Modern online store built with Next.js, Stripe, Sanity CMS",
    "projects.proj2.title": "AI Dashboard",
    "projects.proj2.desc": "AI-powered analytics dashboard with TensorFlow.js",
    "projects.proj3.title": "Portfolio Builder",
    "projects.proj3.desc":
      "Dynamic portfolio builder with Framer Motion and Supabase",
    "chat.title": "Contact",
    "chat.placeholder": "Type a message...",
    "chat.send": "Send",
    "chat.bot.welcome":
      "Hi! I'm Levon's AI assistant. How can I help you?",
    "footer.text": "© 2026 Levon. All rights reserved.",
  },
};
