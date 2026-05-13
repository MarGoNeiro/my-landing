# Research: Portfolio Landing Page for Digital Specialist
*Веб-сайты, приложения, ИИ-агенты*

> Исследование проведено 2026-05-13 с помощью 5 параллельных агентов.
> База знаний: до августа 2025 (Awwwards, Dribbble, CSS-Tricks, Smashing Magazine, CXL, Nielsen Norman, Tilda).

---

## Содержание

1. [Примеры портфолио конкурентов](#1-примеры-портфолио-конкурентов)
2. [Идеальная структура лендинга](#2-идеальная-структура-лендинга)
3. [Тренды 2025–2026](#3-тренды-20252026)
4. [Копирайтинг и позиционирование](#4-копирайтинг-и-позиционирование)
5. [Технический стек](#5-технический-стек)

---

## 1. Примеры портфолио конкурентов

### Bruno Simon — bruno-simon.com

- **Хук**: Вся главная страница — 3D-мир, по которому едешь на игрушечной машинке через клавиши-стрелки. Через 1 секунду забываешь, что это портфолио.
- **Секции**: Интерактивная 3D-среда (мир IS навигация), рекламные щиты-проекты по всей карте, зона "About", почтовый ящик-контакт, указатели-соцсети — всё встроено в 3D-сцену.
- **Стиль**: Тёмные землистые тона, desaturated зелёный и коричневый, тёплое янтарное освещение. Построено на Three.js/WebGL.
- **Анимации**: Физика в реальном времени — машина прыгает, заносит, сбивает объекты. Частицы при въезде в зоны. Камера с кинематографическим лагом.
- **Текст**: Почти нулевой. Работа говорит через взаимодействие. Проекты обозначены 3D-знаками.
- **Уникальный элемент**: Навигация-как-геймплей. Нет меню — физически едешь к нужной секции.

---

### Brittany Chiang — brittanychiang.com

- **Хук**: Тёмно-синий дизайн с левым sticky-сайдбаром. Читается как мгновенно профессиональный и спокойный — выделяется тем, чего НЕ делает (без вспышек, без гимиков).
- **Секции**: Hero (левый сайдбар с именем, заголовком, кратким Bio), About, Skills, Experience (вкладки по работодателям), Projects (featured + grid), Contact.
- **Стиль**: Тёмно-синий (#0a192f), акцент в ярком морском/teal-зелёном (#64ffda), вторичный текст в сланцево-сером. Шрифт: Calibre + SF Mono.
- **Анимации**: Scroll-triggered fade-and-slide-up. Анимированное подчёркивание у nav-ссылок. Teal-акцент на hover. Скорость — никогда не блокирует чтение.
- **Текст**: Первое лицо, тёплый но профессиональный. "I build things for the web."
- **Уникальный элемент**: Двухколоночный sticky-лейаут — левый фиксирован, правый скроллится. Ощущение product UI, не веб-страницы.

---

### Josh Comeau — joshwcomeau.com

- **Хук**: Яркий, игривый light-mode с кастомными иллюстрированными компонентами. Книга для детей, спроектированная senior-инженером.
- **Секции**: Hero, Featured Articles (основной value prop), Courses (платные продукты), Projects, About, Newsletter.
- **Стиль**: Светлый фон, пастельные акценты (фиолетовый, розовый, жёлтый), градиенты. Шрифт Wotfard + system mono. Тёмный/светлый режим.
- **Анимации**: Каждый элемент имеет микроанимацию. Кнопки с 3D-эффектом нажатия. Переключатель тёмного режима — миниатюрная сцена.
- **Текст**: Тёплый, разговорный, обучающий тон. "Hi, I'm Josh. I help developers build better user interfaces."
- **Уникальный элемент**: Интерактивные компоненты прямо на странице — портфолио само является обучающим опытом.

---

### Jack Jeznach — jacekjeznach.com

- **Хук**: Тёмная люксовая эстетика с горизонтальным скроллингом и кинематографической типографикой.
- **Секции**: Full-screen hero, Work (горизонтальный скролл карточек), About, Contact. Крайне минимальное количество секций.
- **Стиль**: Почти чёрный фон, белый текст, иногда тёплые золотые акценты. Эдиториальная типографика — крупный серифный display рядом с чистым sans-serif.
- **Анимации**: Горизонтальный скролл через колёсико. Clip-path reveals на hover. Кинетическая типографика. Кастомный курсор с circular follower.
- **Текст**: Немногословный и уверенный. Один параграф в "About" — никаких bullet points.
- **Уникальный элемент**: Горизонтальный скролл + замена курсора создают ощущение галереи-инсталляции.

---

### Robby Leonardi — rleonardi.com/interactive-resume

- **Хук**: В первые 2 секунды понимаешь, что это сайд-скроллер. Резюме — уровень платформера. Физика в стиле Mario.
- **Секции**: Experience (уровни = работодатели), Skills (предметы-powerups), Education (замок в конце). Одна непрерывная сцена.
- **Стиль**: Пиксельная эстетика в высококачественном CSS/SVG. Яркие насыщенные цвета, параллакс-облака.
- **Анимации**: Параллакс с несколькими слоями глубины. Спрайт-анимации. Физическая инерция.
- **Уникальный элемент**: Рабочее интерактивное резюме, одновременно являющееся полноценным игровым миром.

---

### Lynn Fisher — lynnandtonic.com

- **Хук**: Каждый год сайт получает полностью новый дизайн. При изменении размера окна браузера лейаут морфирует через разные дизайны.
- **Стиль**: Меняется ежегодно. Всегда высокое мастерство, всегда новая палитра.
- **Анимации**: Морф при изменении окна — чистый CSS без JavaScript. На определённой ширине полностью иные лейауты.
- **Текст**: Остроумный, самосознающий, с сухим юмором.
- **Уникальный элемент**: Resize-браузера как интерактивный медиум. Демонстрирует экстремальное мастерство CSS.

---

### Adham Dannaway — adhamdannaway.com

- **Хук**: Split-screen hero, разделённый ровно посередине — левая половина дизайнерская, правая кодерская. Движение мыши влево/вправо раскрывает каждую.
- **Секции**: Hero (split-screen), About, Skills, Work, Testimonials, Contact.
- **Анимации**: Signature mouse-tracking split reveal. Flip-карточки портфолио. Scroll-triggered счётчики статистик.
- **Текст**: "I'm a UI/UX Designer and Frontend Developer." Сразу устраняет двойственность роли.
- **Уникальный элемент**: Split-screen hero — самая умная визуализация dual-skill value proposition в каноне портфолио-дизайна.

---

### Paco Coursey — paco.me

- **Хук**: Экстремальный минимализм. Загружается мгновенно, почти ничего не показывает — имя, одна строка описания, несколько ссылок.
- **Стиль**: Чистый light mode, почти чёрный текст на белом. Системный стек шрифтов. Ноль изображений на главной.
- **Анимации**: Тонкие hover-состояния. Кастомный курсор чуть меньше стандартного. Воздержание и есть философия анимаций.
- **Текст**: Ультра-лаконичный. "I work on Raycast." Одно предложение.
- **Уникальный элемент**: Радикальное вычитание. В эпоху Three.js-роскоши нулевая декорация — сильное заявление.

---

### Lee Robinson — leerob.io

- **Хук**: Быстрый dark-mode с "build in public" философией. Сразу показывает последние статьи и роль в Vercel.
- **Секции**: Hero, Blog/Writing, Work history, Projects, Guestbook (интерактивный), Uses (инструменты), Gear.
- **Стиль**: Dark mode, очень чистый. Построен на Next.js + Tailwind — стек часть бренда.
- **Анимации**: Очень сдержанные. Скорость загрузки IS анимация.
- **Уникальный элемент**: Guestbook — реальная realtime фича, доказывающая full-stack компетентность. Превращает статичное портфолио в социальный объект.

---

### Maxime Heckel — blog.maximeheckel.com

- **Хук**: Glassmorphism и gradient meshes на крайнем уровне мастерства. Заголовок с анимированными gradient orbs, которые пульсируют и смещаются.
- **Стиль**: Dark mode. Тёмно-синий/чёрный с яркими gradient blobs — фиолетовый, синий, розовый. Glass-карточки. Inter с широким межстрочным интервалом.
- **Анимации**: Mesh/orb анимации через CSS custom properties. Интерактивные shader-эксперименты прямо в постах.
- **Уникальный элемент**: Анимированные gradient mesh фоны достигнутые через CSS — без WebGL. Плюс встроенные GLSL-площадки в блог-постах.

---

### Ключевые паттерны лучших портфолио

1. **Портфолио как product demo**: Лучшие не описывают навыки — они их демонстрируют. Портфолио IS рабочий образец.
2. **Один незабываемый хук за 3 секунды**: Не пять вещей. Одна. Немедленно, и напрямую связана с идентичностью и навыком.
3. **Радикальная сдержанность конкурирует с радикальным избытком**: Bruno Simon (максимум) vs Paco Coursey (минимум) — оба работают. Середина провальна.
4. **Навигация IS опыт**: Лучшие сайты растворяют навигацию в самом опыте.
5. **Dark mode как доверие**: Большинство сильных dev-портфолио используют тёмный режим по умолчанию — сигнал племенной принадлежности.
6. **Контент как портфолио**: Технические статьи убедительнее, чем галерея проектов для привлечения качественных клиентов.
7. **Производительность как дизайн**: Быстрая загрузка сигнализирует дисциплину и компетентность.

### Что стоит использовать для AI/Dev портфолио

- **Живая интерактивная демонстрация как hero** — встроенный рабочий AI-виджет превосходит любое описание
- **Двухколоночный sticky-лейаут Brittany Chiang** — сохраняет имя и CTA видимыми всегда
- **Концепция Guestbook/социального объекта** — любой realtime элемент доказывает full-stack + AI
- **Dark mode с одним ярким акцентом** (teal, violet, electric blue) — применяется только на интерактивных элементах
- **Писать как Josh Comeau, не как CV** — "Я помогаю [конкретной аудитории] достичь [конкретного результата]"
- **Максимум 4-6 секций** — Hero → Work (2-3 кейса) → Services → About → Contact

---

## 2. Идеальная структура лендинга

### Логика конверсии

Лендинг-портфолио цифрового специалиста — это фуннель доверия, а не витрина. Посетитель приходит с конкретной проблемой, умеренным скептицизмом и низкой готовностью к обязательствам. Оптимальная структура следует дуге **Проблема → Доверие → Решение → Доказательства → Действие**, где каждый блок устраняет конкретное возражение до того, как посетитель его сформулирует.

---

### Блок 1: Hero / Над линией прокрутки

**Цель**: Ответить на вопрос "Я в нужном месте?" за 3 секунды.

**Обязательные элементы**:
- Одна headline, сфокусированная на результате (что получает клиент, не что делаешь)
- Одна subheadline, уточняющая кому служишь и что строишь
- Один primary CTA ("Book a Free Call" > "Contact Me")
- Secondary anchor ("See my work ↓") для ещё не готовых
- Визуал, сигнализирующий мастерство: mockup устройства, короткое looping video, типографический лейаут — никогда не стоковое фото
- Один micro-сигнал доверия: лого клиента, короткая статистика, узнаваемый бренд

**Ошибки**:
- "I'm a freelance developer" (самоцентрично, нет выгоды)
- Два конкурирующих CTA равного веса
- Карусель-hero (убивает скорость и фокус)
- Абстрактные анимации фона, мешающие читать

**Для web+app+AI специалиста**: Не перечислять все три сервиса в headline. Umbrella outcome:
> *"I build the digital products your business actually needs — websites, apps, and AI systems that work."*

---

### Блок 2: Проблема / Мост релевантности

**Цель**: Показать, что понимаешь ситуацию посетителя до питча. Этот блок часто пропускают — и это причина большой части тихих отказов.

**Обязательные элементы**:
- 3–4 коротких эмпатичных утверждения, описывающих pain states идеального клиента
- Написаны во втором лице ("You've probably tried...")
- Мягкая pivot-строка в конце, переходящая к решению
- Не нужна сложная дизайн-структура — только сильная типографика

**Для web+app+AI специалиста**:
> *"Off-the-shelf tools don't fit your process. Big agencies overcharge and underdeliver. And AI tools built for everyone rarely solve your specific problem."*

---

### Блок 3: Сервисы / Что я делаю

**Цель**: Установить охват и просигнализировать специализацию.

**Обязательные элементы**:
- Ровно 3 категории услуг (сайты, приложения, AI-агенты)
- Каждый сервис: короткий title + 2 предложения outcome-языком + опциональная иконка
- Вторичный CTA под каждым сервисом ("See examples →")
- Избегать jargon без перевода

**Ошибки**:
- 6–8 сервисов в попытке выглядеть универсальным
- Технический жаргон без трансляции для клиентов
- Все карточки выглядят одинаково

**Для web+app+AI специалиста**: Позиционировать AI-агентов как high-value дифференциатор. Описание должно быть конкретным:
> *"I build custom AI agents that handle repeatable tasks inside your business — research, drafting, intake, analysis — without off-the-shelf tools."*

---

### Блок 4: Социальное доказательство / Доверие

**Цель**: Снизить восприятие риска. Ответ на вопрос: "Это работало для кого-то вроде меня?"

**Обязательные элементы**:
- 2–3 отзыва с: полным именем, компанией, должностью, фото, конкретным результатом (не "Great to work with!")
- Специфика — всё: "Время онбординга сократилось с 3 дней до 4 часов после запуска приложения"
- Лого клиентов если узнаваемы
- Короткий stat-bar: "X проектов / X клиентов / X лет"
- Опционально: видеоотзыв 60–90 секунд (самый высококонвертируемый элемент доверия)

**Ошибки**:
- Размещать отзывы ПОСЛЕ портфолио (доверие должно быть ДО доказательств)
- Дженерик-отзывы без конкретики
- Прятать отзывы в маленькую карусель (показывать статично)

---

### Блок 5: Портфолио / Кейсы

**Цель**: Конвертировать скептицизм в уверенность через доказательства.

**Обязательные элементы**:
- 3–6 проектов максимум (больше = парадокс выбора)
- Каждая карточка: название, клиент/индустрия, одно предложение результата, сильный визуал, ссылка на кейс
- Фильтр-вкладки по типу сервиса (Websites / Apps / AI)
- Минимум один кейс каждого типа, ведущий на реальную страницу
- Структура страницы кейса: Проблема → Что построено → Результаты → Отзыв

**Ошибки**:
- Показывать все проекты
- Включать студенческие проекты без пометки
- Ссылки на живые сайты без кейса (уводят посетителя)

**Для AI-проектов**: Использовать GIF screen recording или flow diagram входов/выходов. Before/after метрика критична:
*"До: 40 часов ручного research в неделю. После: 2 часа проверки."*

---

### Блок 6: О себе

**Цель**: Человеческая связь и сигнал совместимости ценностей. Клиенты нанимают людей, не профили.

**Обязательные элементы**:
- Реальное, актуальное профессиональное фото
- Короткий параграф (4–6 предложений) от первого лица: кто ты, что движет работой, одна специфическая философия
- 3–5 конкретных фактов (не навыки): годы опыта, типы компаний, что-то необычное-но-профессиональное
- НЕ progress bars навыков (React 90%, CSS 75%)
- Мягкий CTA: "Want to know if we're a good fit? →"

**Ошибки**:
- Третье лицо ("John is a developer who...")
- Начинать с credentials вместо личности
- Более длинный, чем секция услуг

**Для web+app+AI специалиста**: Опираться на необычную комбинацию:
> *"Most developers specialize in one layer. I work across the full stack — from the public-facing site to the backend app to the AI layer that makes it intelligent."*

---

### Блок 7: Процесс / Как это работает

**Цель**: Устранить тревогу "что будет дальше" — главный убийца конверсии в сервисном бизнесе.

**Обязательные элементы**:
- 4–5 пронумерованных шагов
- Каждый: короткий title + 2 предложения (что происходит + роль клиента)
- Предложенные шаги: Discovery → Proposal & Scope → Design & Build → Review & Launch → Support
- Подчеркнуть точки участия клиента
- Опционально: типичные временные рамки каждой фазы

**Ошибки**:
- Процесс целиком о своём workflow, не об опыте клиента
- 8+ шагов (перегрузка, сигнал бюрократии)
- Расплывчатые шаги "Strategy" и "Execution"

**Для AI-проектов**: Добавить "systems audit" в discovery-шаг. AI-проекты часто имеют неясный scope со стороны клиента — явное именование этого строит доверие.

---

### Блок 8: FAQ

**Цель**: Тихо обрабатывать возражения без звонка.

**Обязательные элементы**:
- 6–8 вопросов, написанных языком клиента
- Обязательные вопросы:
  - "Сколько стоит?" (дать диапазон — отказ отвечать убивает конверсию)
  - "Сколько времени займёт?"
  - "Что от меня нужно?"
  - "Работаете ли удалённо?"
  - "Есть ли поддержка после запуска?"
  - "Чем вы отличаетесь от агентства?"
- Аккордеон-формат для сканируемости
- Каждый ответ: 2–4 конкретных предложения

**Для AI специалиста**: Обязателен вопрос "What exactly is an AI agent and how is it different from ChatGPT?" — это вопрос в голове каждого потенциального клиента.

---

### Блок 9: Основной CTA / Контакт

**Цель**: Конвертировать убеждённого посетителя в лид.

**Обязательные элементы**:
- Одна ясная headline: "Ready to build something?" или "Let's talk about your project"
- Короткая форма: Name, Email, Project Type (dropdown: Website / App / AI Agent / Not sure), Budget Range (опционально), Short description
- ИЛИ Calendly embed — для сервисного бизнеса прямое бронирование конвертирует значительно лучше
- Время ответа: "I respond within 24 hours" или "Currently taking on 2 new projects for Q3"
- Вторичный контакт: email адрес открытым текстом
- Опционально: "This is a good fit if..." рядом с формой

**Ошибки**:
- Форма с 10+ полями
- "Contact Me" как headline без контекста
- Нет ожидания времени ответа
- Обязательный номер телефона
- Нет автоответа после отправки

**Для web+app+AI специалиста**: Dropdown типа проекта критичен. Добавить "Not sure what I need" — распространено для AI-запросов.

---

### Блок 10: Footer

**Обязательные элементы**:
- Имя и title/tagline (для запоминания бренда)
- Навигационные ссылки на ключевые секции
- Социальные ссылки: LinkedIn (обязательно), GitHub (полезно для разработчиков)
- Copyright строка
- Опционально: краткое заявление о доступности ("Open to new projects starting Q3 2026")

---

### Почему именно этот порядок?

**Проблема ДО сервисов**: Сервисы без контекста звучат как питч. После проблемы — как решение.

**Доверие ДО портфолио**: Посетитель, прочитавший три конкретных отзыва, видит каждый проект как подтверждённую компетентность. Обратный порядок — непроверенные утверждения.

**Процесс ДО CTA**: Последнее крупное возражение перед звонком к незнакомцу: "Я не знаю, что будет дальше." Блок процесса устраняет его.

**FAQ ДО CTA**: Посетители, прочитавшие FAQ — высокоинтентные. Размещение CTA сразу после захватывает их на пике готовности.

---

### Что избегать

1. **Identity Crisis Headline**: "Full-stack developer | UI/UX Designer | AI Enthusiast | Problem Solver" — сигнал, что ты не решил, кем быть для клиента
2. **Ghost Portfolio**: Миниатюры проектов без ссылок. Скриншот без бизнес-контекста — декорация.
3. **Skills Cemetery**: Секция с 30 лого технологий. Клиенты покупают результаты, не стеки.
4. **Invisible CTA**: Единственная ссылка "Contact Me" в nav. Каждая секция нужна контекстуальный micro-CTA.
5. **Professional Distance Trap**: Третье лицо, корпоративный язык, скрытое лицо. Соло-специалисты с человеческим голосом конвертируют лучше.

---

### Заметки по Tilda

| Секция | Рекомендуемые блоки Tilda |
|--------|--------------------------|
| Hero | CO1, CO7 (типографика), CO17, CO21 (mockup) |
| Problem/Bridge | BT блок, TX9 или TX16 |
| Services | TE1, TE2, TE4 (3 колонки), TE7, TE9 (текстоёмкие) |
| Testimonials | RE1, RE3 (статичная сетка, не карусель) |
| Portfolio | PO1, PO6 (с фильтр-вкладками) |
| Process | ST1, ST2 (горизонтальный), ST4, ST5 (вертикальный) |
| FAQ | AC1, AC5 (аккордеон) |
| Contact/CTA | CR7, CR12 (форма), T-HTML для Calendly iframe |

**Шрифты Tilda**: Body → Inter или Manrope. Display/heading → Clash Display, Cabinet Grotesk, или Plus Jakarta Sans. Максимум 2 гарнитуры.

---

## 3. Тренды 2025–2026

### Топ 10 трендов

---

#### Тренд 1: Dark Mode как Default (не опция)

Dark-first — не toggle-функция, а основной опыт. Глубокие чёрные (#0a0a0a, #0d0d0d) вместо тёмно-серых.

```css
:root {
  --bg: #0a0a0a;
  --surface: #111111;
  --surface-elevated: #1a1a1a;
  --text-primary: #f0f0f0;
  --text-muted: #888888;
  --accent: #7c3aed;
}
```

**Применимость для AI/dev портфолио**: Высокая — тёмный фон делает gradient-эффекты и синтаксис-подсветку значительно красивее.

---

#### Тренд 2: Bento Grid Layouts

Асимметричные сетки карточек разных размеров, каждая показывает один элемент (проект, навык, статистику, отзыв).

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
.card-wide  { grid-column: span 8; }
.card-tall  { grid-row: span 2; }
.card-small { grid-column: span 4; }
```

Карточки: border-radius 16–24px, subtle borders `1px solid rgba(255,255,255,0.08)`, микроанимации на hover.

**Применимость**: Высокая — идеально для навыков, GitHub-статистики, миниатюр проектов, иконок стека.

---

#### Тренд 3: Glassmorphism 2.0 (сдержанный)

Используется только для floating UI (nav, modals, cards). Blur 8–16px, очень низкая непрозрачность заливки, чёткий 1px border.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);
}
```

**Применимость**: Высокая — glass карточки на тёмном gradient-фоне выглядят превосходно.

---

#### Тренд 4: Mesh Gradients и Aurora Backgrounds

Мягкие многоточечные радиальные градиенты, создающие органичный aurora-эффект. Часто анимируются медленно (10–30s loops).

```css
.hero-bg {
  background-color: #0a0a0a;
  background-image:
    radial-gradient(ellipse 80% 60% at 20% 40%, rgba(124,58,237,0.35) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 20%, rgba(6,182,212,0.25) 0%, transparent 55%),
    radial-gradient(ellipse 50% 40% at 60% 80%, rgba(16,185,129,0.2) 0%, transparent 50%);
}
```

**Применимость**: Высокая — aurora-эффект сильно ассоциируется с AI/ML эстетикой. Читается как "AI" мгновенно.

---

#### Тренд 5: Scroll-Triggered Анимации (ScrollTimeline / GSAP)

Элементы анимируются при скролле — физически осознанные, плавные, привязанные к позиции прокрутки.

**Нативный CSS** (Chrome/Edge 2024+):
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
.reveal {
  animation: fadeUp linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}
```

**GSAP ScrollTrigger** для сложных последовательностей:
```js
gsap.from(".card", {
  scrollTrigger: { trigger: ".card", start: "top 80%" },
  y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
});
```

**Применимость**: Высокая — плавная scroll-история навыков → проекты → контакт ощущается профессионально.

---

#### Тренд 6: Кинетическая / Variable Typography

Тип, который движется, морфирует или реагирует на ввод. Fluid sizing через `clamp()`. Oversized display type как дизайн-элемент.

```css
.hero-title {
  font-size: clamp(3rem, 10vw, 9rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
}
```

**Gradient text** (обязательно для 2025):
```css
.gradient-text {
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Применимость**: Высокая — анимированное имя в hero сразу делает страницу живой и премиальной.

---

#### Тренд 7: Grain / Noise Texture Overlays

Тонкая SVG или PNG шум-текстура поверх градиентов с очень низкой непрозрачностью (3–8%). Ломает "слишком цифровую" плоскость чистого цвета.

```css
.grain-overlay::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("noise.png");
  opacity: 0.04;
  pointer-events: none;
  z-index: 999;
}
```

**Применимость**: Средне-высокая — добавляет премиальную текстуру. Лучше с тёмным фоном и mesh gradients.

---

#### Тренд 8: AI-Native Визуальные Элементы (Частицы, Нейросети, Потоки данных)

Анимированные поля частиц с соединительными линиями, текущие потоки данных, typewriter-эффекты.

```js
// tsparticles конфигурация
particles: {
  number: { value: 80 },
  links: { enable: true, opacity: 0.15, distance: 120 },
  move: { enable: true, speed: 0.8 },
  color: { value: "#7c3aed" },
  opacity: { value: 0.4 }
}
```

**Typewriter эффект**:
```js
const words = ["AI Engineer", "ML Developer", "Full-Stack Dev"];
// Typed.js или кастомный вариант
```

**Применимость**: Высокая — напрямую сигнализирует домен. Держать количество частиц низким, непрозрачность тонкой.

---

#### Тренд 9: Micro-Interactions на каждом интерактивном элементе

Каждая кнопка, ссылка, карточка, иконка имеет намеренную маленькую анимацию состояния.

**Magnetic button**:
```js
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});
```

**Underline reveal**:
```css
.nav-link {
  background: linear-gradient(currentColor, currentColor) no-repeat bottom left;
  background-size: 0% 2px;
  transition: background-size 0.3s ease;
}
.nav-link:hover { background-size: 100% 2px; }
```

**Применимость**: Высокая — эти детали разделяют "шаблонные" и кастомные портфолио.

---

#### Тренд 10: Refined Brutalism (Брутализм + Минимализм)

Растущий counter-тренд к over-polished glassmorphism: raw grid, visible borders, monospace type, высокий контраст, минимальная декорация.

```css
.brutalist-card {
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 0;
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
}
```

**Применимость**: Высокая — сигнализирует аутентичность и технический вкус.

---

### Рекомендуемые цветовые палитры

#### Палитра 1 — "Void Purple" (самая популярная на AI-портфолио)
```
Background:    #0a0a0f
Surface:       #12121a
Accent 1:      #7c3aed  (violet)
Accent 2:      #06b6d4  (cyan)
Text primary:  #f1f5f9
Text muted:    #64748b
```
*Встречается на: Linear, Resend, многих AI SaaS landing pages.*

#### Палитра 2 — "Neural Green"
```
Background:    #050a05
Surface:       #0d1a0d
Accent 1:      #10b981  (emerald)
Accent 2:      #a3e635  (lime)
Text primary:  #ecfdf5
Text muted:    #6b7280
```

#### Палитра 3 — "Midnight Blue" (более корпоративная)
```
Background:    #03050f
Surface:       #0a0e1f
Accent 1:      #3b82f6  (blue)
Accent 2:      #8b5cf6  (violet)
Text primary:  #e2e8f0
Text muted:    #475569
```

#### Палитра 4 — "Warm Minimal" (light mode, растёт в 2026)
```
Background:    #fafaf9
Surface:       #f5f5f4
Accent 1:      #1c1917  (near-black)
Accent 2:      #dc2626  (red) или #2563eb (blue)
Text primary:  #1c1917
Text muted:    #78716c
```

---

### Рекомендуемые шрифтовые пары

| Пара | Display/Hero | Body | Mono |
|------|-------------|------|------|
| **Modern Tech** (самая популярная) | Geist или Cal Sans | Inter | JetBrains Mono |
| **Editorial Tech** | Neue Montreal или Satoshi | DM Sans | Fira Code |
| **Refined Brutalist** | Space Grotesk | Space Grotesk | IBM Plex Mono |
| **High-End / Agency** | Fraunces | Instrument Sans | Roboto Mono |

**Правила типографики 2025**:
- Tight tracking на крупных заголовках: `letter-spacing: -0.03em` до `-0.05em`
- Fluid hero: `font-size: clamp(3.5rem, 10vw, 8rem)` с `line-height: 0.9`
- Monospace только для чисел, процентов и кода
- Gradient text на hero headlines (см. выше)
- Никаких декоративных script-шрифтов

---

### Матрица приоритетов внедрения

| Тренд | Усилие | Визуальный импакт | Приоритет |
|-------|--------|-------------------|-----------|
| Dark default + color vars | Низкое | Высокий | Обязательно |
| Mesh gradient hero bg | Низкое | Очень высокий | Обязательно |
| Bento grid layout | Среднее | Высокий | Обязательно |
| Gradient text headline | Очень низкое | Высокий | Обязательно |
| Tight tracking + fluid type | Очень низкое | Высокий | Обязательно |
| Scroll reveal animations | Среднее | Высокий | Обязательно |
| Glass cards | Низкое | Средний | Рекомендуется |
| Grain texture | Низкое | Средний | Рекомендуется |
| Particle/neural net bg | Среднее | Высокий | Если AI-фокус |
| Magnetic cursor | Высокое | Средний | Опционально |
| Kinetic/variable font | Высокое | Высокий | Опционально |

---

## 4. Копирайтинг и позиционирование

### Hero Section / Формулы headlines

**Формула 1 — Результат**:
`[Глагол] + [Желаемый результат] + [Подразумеваемый механизм]`
> "Turn Your Business Idea Into a Working Product — Fast."

**Формула 2 — Специфика**:
`[Конкретная ниша/клиент] + [Конкретная трансформация]`
> "I Build the Digital Infrastructure That Makes Startups Fundable."

**Формула 3 — Контраст**:
`[Старый путь] vs. [Новый путь]`
> "Stop Patching Old Tools. I'll Build You Something That Actually Scales."

**Формула 4 — Смелое заявление**:
> "Your Next Product — Designed, Built, and Launched in 8 Weeks."

**Формула 5 — Идентификация**:
> "A Full-Stack Builder for Founders Who Don't Have Time to Manage Three Agencies."

**Формула 6 — Вопрос**:
> "What If Your Business Could Run Itself While You Slept?"

---

### 3 готовых варианта headline для web+app+AI специалиста

**Вариант A — Outcome-led, широкая аудитория**:
> "I Build Websites, Apps & AI Agents That Do the Work While You Focus on Growing."
>
> Subheadline: "From your first marketing site to a fully automated AI assistant for your team — one builder, end to end. No handoffs. No agency overhead. Just results."

**Вариант B — Премиум позиционирование, founders**:
> "Your Idea Deserves More Than a Template. Let's Build Something That Actually Works."
>
> Subheadline: "I'm a full-stack developer and AI specialist who turns briefs into live, scalable products — websites, custom applications, and intelligent agents that automate your most repetitive workflows."

**Вариант C — AI-forward, дифференцированный для 2025**:
> "Most Developers Build Tools. I Build Things That Think."
>
> Subheadline: "I combine web development, app engineering, and AI agent design to deliver digital products that don't just function — they adapt, automate, and compound in value over time."

---

### Как писать описания сервисов

**Формула каждого сервиса**:
> **[Headline, сфокусированный на выгоде]**
> [1 строка: что это + для кого]
> [2–3 пункта: конкретные результаты, не функции]
> [Строка CTA или hook]

#### Сайты
**"Your Website Should Be Your Best Salesperson."**
> Custom websites designed to attract, convince, and convert — not just inform.
> - Converts visitors into leads, not just browsers
> - Built to rank — performance, SEO structure, and copy strategy included
> - Launched in weeks, not months

#### Приложения
**"Custom Apps Built Around How Your Business Actually Works."**
> Off-the-shelf software forces you to adapt. A custom app adapts to you.
> - From MVP to production-ready without six-month timelines
> - Intuitive interfaces your team will actually use
> - Built to scale as you grow, not rebuild when you do

#### AI-агенты
**"What If Your Business Could Handle That Automatically?"**
> AI agents are custom-built digital workers that handle tasks around the clock.
> - Customer support that answers instantly at 3am
> - Internal tools that search documents, summarize meetings, draft outputs
> - Workflow automation that connects apps, monitors triggers, acts — no code required
>
> *Not a chatbot bolted onto your website. A purpose-built system that understands your business.*

---

### Стратегия CTA

**CTAs, убивающие конверсию** (избегать): "Submit", "Get in Touch", "Contact Me", "Learn More"

**CTAs, работающие**:
- "Let's Talk About Your Project" — низкие обязательства, высокая специфика
- "See What I've Built" — направляет к доказательствам
- "Book a Free Discovery Call" — убирает возражение по цене
- "Start Your Project" — уверенный, action-forward

**Для AI-сервисов**:
- "See How AI Can Work for Your Business"
- "Get a Custom Automation Roadmap"
- "Book a Free AI Audit"

**Microcopy под кнопкой CTA** (высокий импакт, часто игнорируется):
- "No commitment. Just a conversation."
- "Usually responds within 24 hours."
- "Free 30-minute call. No pitch, just planning."

---

### Дифференциация AI-сервисов как премиум

**Фрейм ROI**: Позиционировать AI-агентов как инструменты снижения затрат, не технологию.
> "A custom AI agent that handles your customer intake costs less to build than one month of a junior hire — and works every hour of every day."

**Фрейм "One Vendor"**: Большинство бизнесов управляют разработчиком + automation tool + chatbot vendor + data team.
> "I design the entire system — the workflows, the interfaces, the agents, and the integrations — as one coherent product."

**Фрейм "No Hype"**: Доверие через сдержанность.
> "I'm not going to sell you AI for the sake of AI. I'll tell you where automation genuinely helps — and where a simpler solution works better."

**Фрейм Специфики** — называть точные типы агентов:
- Customer support agents
- Lead qualification agents
- Internal knowledge base assistants
- Document processing agents
- Meeting note and action-item agents
- Outreach and follow-up automation

| Избегать | Использовать вместо |
|----------|---------------------|
| "Leveraging AI" | "Built a system that does X automatically" |
| "AI-powered solutions" | "An agent that handles your [specific task]" |
| "Machine learning integration" | "Trained on your data, specific to your business" |
| "Automation workflows" | "Your team stops doing [task] by hand" |

---

## 5. Технический стек

### Рекомендованный стек

**Основная рекомендация: Astro 5 + Tailwind CSS v4 + TypeScript**

| Почему Astro | |
|-------------|---|
| Zero JS по умолчанию | Чистый HTML+CSS если не нужна интерактивность |
| Лучшие Lighthouse scores | Нет hydration overhead |
| Framework-agnostic islands | React/Svelte/Vue в отдельных секциях |
| View Transitions API | SPA-like переходы без фреймворка |
| Astro 5 (late 2024) | Server Islands, Content Layer |

**Tailwind CSS v4**: CSS-first подход (`@theme` в CSS файле), Rust-движок через Lightning CSS, не нужна конфигурация purge.

**Альтернативы**:
| Фреймворк | Когда выбрать |
|-----------|--------------|
| Next.js 15 | Нужен полноценный app с dashboard, auth, API routes |
| Nuxt 3 | Работаешь с Vue |
| Remix | Портфолио + forms с server actions |
| Plain HTML/Vite | Абсолютно простой setup |
| SvelteKit | Отличный DX, меньшая экосистема |

**Вывод**: Не использовать Next.js для портфолио — ~140 KB React runtime для статичного контента. Astro даёт ту же модель компонентов без этих затрат.

---

### Стратегия анимаций

**Уровень 1 — Нативный CSS** (нулевая стоимость библиотеки):
```css
/* Scroll-driven reveal */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(2rem); }
  to   { opacity: 1; transform: translateY(0); }
}
.card {
  animation: fadeUp linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 40%;
}

/* @starting-style — анимация при добавлении в DOM */
.modal {
  transition: opacity 0.3s, display 0.3s allow-discrete;
  opacity: 1;
  @starting-style { opacity: 0; }
}
```

**Уровень 2 — Motion** (бывший Framer Motion, npm: `motion`):
```jsx
// Декларативные spring-анимации
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  {children}
</motion.div>
```

Использовать для: hero text reveals, card hover effects, modal transitions, stagger animations.

**Уровень 3 — GSAP**: Только для кинематографических scroll-опытов (горизонтальный скролл, pinned панели). GSAP ≈ 70 KB, коммерческие плагины платные.

**Рекомендованный animation-стек**: `Astro + Motion (для interactive islands) + CSS scroll-driven animations`

---

### Современные CSS техники

**Container Queries**:
```css
@container (min-width: 400px) {
  .card { flex-direction: row; }
}
```

**CSS Grid Subgrid** (поддержка всех браузеров 2024):
```css
.project-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
.card { display: grid; grid-row: span 3; grid-template-rows: subgrid; }
```

**oklch() + color-mix()**:
```css
:root { --brand: oklch(60% 0.2 250); }
.muted { color: color-mix(in oklch, var(--brand) 40%, white); }
```

**View Transitions API**:
```css
.project-card-image { view-transition-name: project-hero; }
/* На странице детали: та же transition-name = нативный morph-переход */
```

**text-wrap: balance** — устраняет orphan words в заголовках без JS.

---

### Производительность

**Шрифты**:
- Self-host через fontsource (npm `@fontsource/inter`) — убирает Google Fonts round-trip
- `font-display: swap`, preload только критических весов
- Максимум 2 семейства, предпочтительно variable fonts

**Изображения**:
- `<Image>` компонент Astro — auto WebP/AVIF, правильный `srcset`, lazy loading
- Hero изображения: preload, никогда lazy-load above the fold

**JavaScript**:
- Цель: < 50 KB JS для всей страницы
- `client:visible` в Astro — hydration только при появлении в viewport
- Никакого jQuery, Lodash, Moment.js

**Core Web Vitals цели**:
- LCP < 2.5s (идеально < 1.2s)
- CLS = 0 (явные размеры изображений)
- INP < 200ms

**Lighthouse цель: 100/100/100/100** — достижимо с Astro.

---

### Интересные компоненты для реализации

1. **Animated Hero с кинетической типографикой** — stagger слов через CSS `@starting-style`
2. **Scroll-Linked Skills Bar** — CSS `animation-timeline: view()`, ноль JavaScript
3. **Project Card с Shared Element Transition** — `view-transition-name` для native morph
4. **Magnetic Cursor Effect** — Motion компонент, ~15 строк кода, высокий визуальный импакт
5. **Terminal/Code Block Hero** — typewriter через CSS `steps()`, без библиотек
6. **AI Chat Demo Widget** — живая демонстрация агента (real или scripted) прямо на лендинге
7. **Dark/Light Mode Toggle** — `prefers-color-scheme` + `data-theme` на `<html>` + localStorage
8. **Horizontal Scroll Portfolio Section** — `position: sticky` + `scroll-snap-type: x mandatory`
9. **Tech Stack Marquee** — SVG Simple Icons в бесконечном CSS marquee
10. **Contact Form с Optimistic UI** — Astro API endpoint + Motion анимация кнопки

---

### Three.js / WebGL: когда стоит, когда нет

**Использовать когда**:
- Твоя идентичность IS 3D/WebGL (creative developer)
- Хочешь один signature 3D элемент в hero
- Показываешь Three.js проект с встроенным demo
- Эффект невозможно достичь CSS

**Не использовать когда**:
- Хочешь "крутой фон" — CSS gradients + шум дают 95% эффекта за 0% затрат
- Не можешь гарантировать 60fps на mid-range мобильном
- Аудитория — нетехнические клиенты
- 3D не несёт смысла — просто декорация

**Правило**: Если Three.js добавляет > 200ms к TTI — убирать или lazy-load после interactive.

---

### Деплой и хостинг

**Основная рекомендация: Vercel**
- Zero-config Astro деплой
- Edge network в 35+ регионах
- Бесплатный tier (100 GB bandwidth/month) — достаточно для портфолио
- Analytics с Core Web Vitals
- Deploy previews при каждом push

**Альтернатива: Netlify** — лучше для форм (Netlify Forms) без написания API route.

**Домен**: Cloudflare Registrar (at-cost, без наценки) или Namecheap. Избегать GoDaddy.

---

### Финальный стек одной строкой

```
Astro 5 + TypeScript + Tailwind CSS v4 + Motion + CSS scroll animations → Vercel
```

---

### Что избегать

| Технология | Почему |
|-----------|--------|
| Gatsby | Effectively sunset — Astro делает всё лучше |
| Create React App | Официально deprecated |
| CSS-in-JS (Styled Components) | Runtime injection = лишний JS для статичного контента |
| GSAP ScrollTrigger для простых reveal | CSS scroll-driven animations делают это нативно |
| Particle.js | Заброшен, плохая производительность. Использовать tsParticles. |
| jQuery | Нет сценария для 2025 портфолио |
| Bootstrap / Bulma | Транслируют "использовал шаблон" |
| WordPress для dev-портфолио | Единственный самый сильный сигнал: "я построил это сам" |
| GitHub Pages | Vercel/Netlify лучше во всём при той же цене (бесплатно) |

---

*Исследование завершено. Все данные основаны на базе знаний до августа 2025.*
*Следующий шаг: разработка wireframe и выбор палитры/шрифтов.*

---

## 6. Экспертная оценка

*Три точки зрения на проект: лендинг-портфолио цифрового мастера (сайты, приложения, ИИ-агенты).*

---

### Эксперт 1: UX-дизайнер (10 лет опыта)

#### Типичные ошибки новичков в структуре

**1. Нет иерархии внимания — всё одинаково важно**
Начинающие делают все секции равновесными: одинаковый кегль, одинаковый вес, одинаковые отступы. Взгляд посетителя не знает, куда идти. Результат — хаотичное сканирование и уход. Нужна жёсткая визуальная иерархия: Hero → Services → Proof → CTA. Каждая следующая секция визуально тише предыдущей, и только CTA снова "кричит".

**2. Перегруженный hero**
Портфолио с тремя сервисами (сайты + приложения + ИИ) соблазняют показать всё сразу — три иконки, три headline, три CTA в первом экране. Это убивает. Hero должен делать одно дело: удержать посетителя и передать его дальше. Один тезис, одна кнопка.

**3. Мобильный — "после"**
80%+ трафика придёт с мобильного. Новички строят под десктоп, потом "адаптируют". Bento-гриды разваливаются. Горизонтальный скролл становится сломанным вертикальным. Анимации жрут батарею. Нужно начинать с mobile-first, а не заканчивать им.

**4. Анимация ради анимации**
Частицы, параллакс, scroll-reveal на каждом блоке — самый быстрый способ показать, что человек только что открыл библиотеку и хочет произвести впечатление. Анимация должна помогать читать, не мешать. Правило: если анимацию убрать и смысл не теряется — убери.

**5. Нет состояний hover/focus/active**
Кнопки без hover-состояний, ссылки без underline или цветового изменения, формы без focus-ring — всё это разрушает ощущение "живого" продукта. Каждый интерактивный элемент должен явно реагировать на взаимодействие.

**6. Типографика как враг**
Три шрифта, 8 разных кеглей, строчные буквы там где заглавные, разный межстрочный интервал в разных блоках — классика новичка. Система: 2 шрифта максимум, 4-5 кеглей в сетке (xs/sm/base/lg/xl/2xl), единый line-height для body (1.6–1.7).

**7. Форма с 10 полями**
Поле "Расскажите подробно о вашем проекте" на 8 строк + имя + телефон + email + бюджет + сроки + как узнали — это не форма, это анкета. Каждое лишнее поле снижает конверсию. Минимум: имя + email + тип проекта. Остальное — на звонке.

---

#### Что ОБЯЗАТЕЛЬНО должно быть

| Элемент | Почему критично |
|---------|----------------|
| **Реальное фото** | Доверие. Логотип или иллюстрация вместо лица теряют 30–40% личного контакта |
| **Видимый CTA всегда** | Sticky nav с кнопкой "Обсудить проект" — посетитель должен иметь выход на контакт в любой момент |
| **Время загрузки < 2.5s** | Каждые 100ms задержки = минус 1% конверсии. На мобильном 3G — это решает |
| **Читаемый body text** | 16px минимум, line-height 1.6+, строки 50–70 символов. Не 13px на растянутую строку |
| **Контраст 4.5:1+** | Серый текст на тёмном фоне, которым злоупотребляют тёмные портфолио, часто не проходит WCAG AA |
| **Якорная навигация** | На one-page лендинге обязательны якори + smooth scroll. Посетитель должен понимать, где он |
| **Пустое пространство** | Breathing room вокруг элементов — не пустота, а дизайн. Новички забивают каждый пиксель |
| **Адаптивные изображения** | WebP, правильные srcset, явные width/height. Без этого CLS > 0 и раздражение |

---

#### Что раздражает и заставляет уйти

**Немедленный выход (первые 3 секунды)**:
- Сайт грузится дольше 3 секунд на мобильном
- Всплывающее окно сразу при входе ("Подпишись на рассылку!")
- Автоплей видео со звуком
- Шрифт не загрузился — видно FOUT (flash of unstyled text)
- Hero с абстрактной фразой "Создаю цифровые решения нового уровня" — непонятно что, для кого, зачем

**Раздражение (следующие 30 секунд)**:
- Анимации, которые блокируют чтение — приходится ждать пока "приедет" текст
- Прокрутка с горизонтальным оверфлоу на мобильном
- Текст, который тяжело читать (низкий контраст, маленький кегль, узкий межстрочник)
- Секция "Мои навыки" с прогресс-барами (React 90%, Python 75%) — визуально занимает место, несёт ноль информации для клиента
- Carousel/слайдеры в портфолио — клиенты их не листают

**Потеря на этапе конверсии**:
- CTA "Написать мне" ведёт на страницу с ссылками на 5 мессенджеров — выбор парализует
- Форма без ответа (нет auto-reply "Получил, отвечу в течение дня")
- Не указано время ответа и что будет дальше
- Кнопка выглядит как декорация — нет hover-состояния, нет ощущения кликабельности

---

### Эксперт 2: Маркетолог-конверсионщик

#### Оффер, который зацепит

Проблема большинства портфолио-офферов: они описывают специалиста, а не ценность для клиента. "Опытный разработчик с 5-летним стажем" — это резюме. Оффер должен отвечать на вопрос клиента: **"Что конкретно изменится в моём бизнесе?"**

**Слабый оффер** (что обычно делают):
> "Создаю сайты, приложения и ИИ-решения под ключ"

**Сильный оффер** (что нужно):
> "Превращаю бизнес-задачу в работающий цифровой продукт — за 4–8 недель, без посредников и корпоративного ценника агентства"

Ключевые составляющие сильного оффера для этого проекта:
1. **Результат** — не "создаю сайты", а "сайт, который приносит заявки"
2. **Скорость** — конкретные сроки убирают главный страх ("будет долго и неизвестно когда")
3. **Экономия** — "дешевле агентства, но не шаблон фрилансера" — это sweet spot
4. **Уникальность** — три сервиса в одних руках = нет координационных потерь

**Для AI-сервисов добавить**: ROI-фрейм, не технологический.
> "ИИ-агент, который заменяет 20 часов ручной работы в неделю — окупается за первый месяц"

---

#### Триггеры доверия — в порядке важности

**Tier 1 — Критически важны (без них конверсии нет)**:

| Триггер | Реализация |
|---------|-----------|
| **Специфичные отзывы с результатом** | "До запуска приложения обработка заявки занимала 3 часа. Сейчас — 12 минут." — имя, должность, фото |
| **Реальные цифры** | "37 запущенных проектов", "4,8/5 средняя оценка клиентов", "возврат 80% клиентов за вторым проектом" |
| **Конкретные кейсы** | Проблема → Что сделано → Измеримый результат. Не скриншоты, а история |
| **Видимость личности** | Имя, фото, голос через тексты. "Мы — команда профессионалов" для соло-специалиста — смерть |

**Tier 2 — Усиливают доверие**:

| Триггер | Реализация |
|---------|-----------|
| **Логотипы клиентов** | Даже малоизвестные компании в визуальной сетке выглядят как подтверждение |
| **Индикаторы свежести** | "Последний проект: апрель 2026", "Открыт для новых проектов с июня" — показывает, что живой и актуальный |
| **Прозрачность по срокам и ценам** | Диапазон цен убирает крупнейший страх. "Сайт: от 80 000 ₽, срок — 3 недели" лучше, чем молчание |
| **Процесс** | Пошаговое описание что будет — убирает неизвестность, главный барьер для обращения |

**Tier 3 — Приятные бонусы**:
- Публикации / статьи (экспертность)
- Выступления или упоминания в медиа
- GitHub с живой активностью
- Сертификаты (осторожно: для клиента ценнее результат, чем бейдж)

---

#### Путь посетителя от "зашёл" до "оставил заявку"

```
[1. ОСОЗНАНИЕ — 0–5 сек]
Посетитель видит hero
Вопрос в голове: "Это мне подходит?"
Нужно: понятный заголовок + визуальный якорь + одна кнопка
Риск ухода: 60% уходят здесь если непонятно
        ↓
[2. ИНТЕРЕС — 5–30 сек]
Скроллит вниз → видит услуги + проблему-мост
Вопрос: "Он понимает мою задачу?"
Нужно: описание проблемы ЕГО словами + конкретные сервисы
Риск ухода: 20% уходят если сервисы написаны техническим языком
        ↓
[3. ОЦЕНКА — 30 сек – 2 мин]
Смотрит портфолио + читает отзывы
Вопрос: "У него есть доказательства?"
Нужно: 3 кейса с результатами + 2–3 конкретных отзыва
Риск ухода: 10% уходят если нет proof
        ↓
[4. ЖЕЛАНИЕ — 2–4 мин]
Читает "О себе" + процесс + FAQ
Вопрос: "Это удобно? Это безопасно? Сколько стоит?"
Нужно: человечный текст, прозрачный процесс, ориентир по цене
Риск: 5% уходят если не понимают что будет после заявки
        ↓
[5. ДЕЙСТВИЕ — 4–6 мин]
Видит CTA — заполняет форму / бронирует звонок
Нужно: минимум полей, ясное следующее действие, нет давления
Конверсия: 2–8% от всех зашедших (норма для портфолио)
```

**Ключевые точки, где теряют клиентов чаще всего**:
1. Hero → если headline непонятен, уход мгновенный
2. Услуги → если написано "Full-stack development with React/Node/Docker" а не "Приложение за 6 недель"
3. Переход к форме → если форма длинная или следующий шаг непонятен

**Что удерживает на каждом этапе**:
- Этап 1: Конкретный, выгодный headline + немедленный визуальный wow
- Этап 2: Текст "ты" вместо "я" — описание проблемы клиента его словами
- Этап 3: Цифры в кейсах (не "улучшили сайт", а "конверсия выросла с 1.2% до 3.8%")
- Этап 4: FAQ с ответом на "сколько стоит" — хотя бы диапазон
- Этап 5: CTA с микрокопией ("Отвечу в течение дня. Без обязательств.")

---

### Эксперт 3: Владелец бизнеса — потенциальный клиент

*Я владею малым бизнесом — мне нужен сайт + хочу разобраться что такое ИИ-агент и нужен ли он мне. Открываю портфолио.*

#### Первые 5 секунд — что вижу и о чём думаю

**Смотрю на три вещи почти одновременно**:

1. **Что написано крупно в центре экрана** — если там "Цифровые решения нового уровня" я уже зеваю. Если "Запущу ваш сайт за 3 недели и настрою ИИ-ассистента, который ответит клиентам вместо вас" — я читаю дальше.

2. **Есть ли фото человека** — я хочу видеть кому я потенциально плачу деньги. Логотип или абстрактная иллюстрация — сразу дистанция. Живое лицо — уже чуть теплее.

3. **Насколько быстро грузится и выглядит** — если сайт "виснет" при прокрутке или шрифты прыгают — у меня мгновенный вывод: "этот человек не умеет делать хорошо". Он строит сайты — и его собственный плохо работает?

---

#### Что заставит остаться

**"Он понимает мою проблему"**
Если я читаю что-то вроде: *"Устал от сайта, который есть, но ничего не приносит? Или от агентства, которое пропало после сдачи?"* — я думаю "да, это про меня". Это меня удерживает сильнее любой анимации.

**Конкретные примеры похожих на меня**
Не "портфолио элитных международных брендов" — мне это далеко. А "кофейня в Москве", "юридическая фирма", "онлайн-школа". Если я вижу кого-то из моей реальности — думаю "значит он понимает такой бизнес".

**Понятное объяснение ИИ-агентов**
Я слышал это слово. Не понимаю. Если на лендинге есть простое объяснение — "ИИ-агент отвечает на вопросы клиентов в WhatsApp пока вы спите, без зарплаты" — я заинтересован. Если только технические термины — закрываю.

**Цена хотя бы ориентировочно**
Я уже несколько раз запрашивал коммерческие предложения и получал либо "от 300 000 рублей" (дорого) либо "обсудим" (боюсь, что дорого). Если вижу "сайт от 60 000 ₽, срок 3 недели" — я понимаю диапазон и могу принять решение стоит ли вообще писать.

**Кнопка "Бесплатная консультация" а не "Оставить заявку"**
"Заявка" звучит как обязательство. "15-минутный звонок" — нет. Я готов поговорить, я не готов "подавать заявку".

---

#### Что заставит закрыть вкладку

**"Дорого выглядит без подтверждения что стоит этого"**
Красивый дизайн + нет цен + нет отзывов = я думаю "это слишком дорого для меня" и ухожу не спросив. Люди не уточняют цену — они просто уходят.

**Слишком много всего непонятного**
Если вижу слова: "full-stack", "React", "Node.js", "LLM", "RAG", "Docker", "CI/CD" — я чувствую себя тупым. Это не моя вина — это вина того кто пишет. Я ухожу к тому кто говорит на моём языке.

**Портфолио без объяснений**
Красивые картинки сайтов. Ну и что? Как это работает для бизнеса? Что изменилось у клиента? Без цифр и историй — это просто картинки. Я не покупаю картинки.

**Долгий сайт без навигации**
Если я хочу найти "сколько стоит" и мне нужно 5 минут скроллить — я ухожу. Дайте якорное меню. Дайте мне контроль.

**Форма с вопросом "Опишите ваш проект подробно"**
Я не знаю как описать. Я не специалист. Если вы профессионал — задайте мне правильные вопросы сами. Форма с "выберите тип проекта" (выпадающий список) намного удобнее чистого текстового поля.

**Нет ответа после отправки**
Отправил форму. Тишина. Прошёл день. Пишу ли я ещё раз? Нет, я уже нашёл другого.

---

### Сводный список рекомендаций

Финальные приоритеты по трём экспертным оценкам — что делать в первую очередь:

#### Критично (без этого лендинг не работает)

- [ ] **Один ясный outcome-оффер** в hero — что получит клиент, не что ты умеешь
- [ ] **Реальное фото** — живое лицо, не логотип и не иллюстрация
- [ ] **Время загрузки < 2.5s** — особенно на мобильном
- [ ] **Короткая форма** — максимум 3–4 поля, тип проекта через dropdown
- [ ] **Авто-ответ** после отправки формы + ожидаемое время ответа
- [ ] **Объяснение ИИ-агентов** простым языком — без аббревиатур
- [ ] **Ценовой ориентир** хотя бы диапазонами — молчание о цене = потеря клиента

#### Важно (прямо влияет на конверсию)

- [ ] **Специфичные отзывы** с именами, фото и конкретными результатами (цифры!)
- [ ] **2–3 кейса** по схеме: проблема → решение → измеримый результат
- [ ] **Sticky nav** с кнопкой CTA — видна на всём протяжении скролла
- [ ] **Текст о проблеме клиента** ДО презентации сервисов
- [ ] **Процесс** — что будет после заявки, шаг за шагом
- [ ] **CTA "Бесплатная консультация"** вместо "Оставить заявку" — снижает барьер
- [ ] **Hover/focus состояния** на всех кнопках и ссылках
- [ ] **Мобильная проверка** каждого блока вручную — не только в DevTools

#### Желательно (усиливает позиционирование)

- [ ] **Числовые статистики** в hero или после него (проектов / клиентов / лет / NPS)
- [ ] **Фильтр в портфолио** по типу сервиса — сайты / приложения / ИИ
- [ ] **FAQ с вопросом о цене** — лучше написать диапазон чем молчать
- [ ] **Индикатор доступности** — "Открыт для проектов с июня 2026"
- [ ] **Живая AI-демонстрация** прямо на лендинге — самый сильный proof для AI-сервиса
- [ ] **Логотипы клиентов** — даже небольшие компании работают как social proof
- [ ] **Microcopy под CTA** — "Отвечу в течение 24 часов. Без обязательств."

#### Чего избегать

- [ ] Прогресс-бары навыков (React 90%) — бессмысленны для клиента
- [ ] Технический жаргон без перевода в тексте услуг
- [ ] Анимации, блокирующие чтение
- [ ] Carousel в портфолио — показывать статично
- [ ] Автоплей видео/аудио
- [ ] Форма без auto-reply
- [ ] Hero с тремя конкурирующими CTA
- [ ] "Мы — команда профессионалов" если ты соло-специалист

---

*Экспертная оценка добавлена 2026-05-13.*
