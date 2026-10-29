
/*
 * NATESPACE — ОБЩИЙ КАТАЛОГ УРОКОВ
 * Файл: lessons.js
 *
 * Чтобы добавить урок:
 * 1. Скопируй объект существующего урока.
 * 2. Измени его данные.
 * 3. Укажи URL страницы и обложки.
 * 4. Установи published: true.
 *
 * Важно: не удаляй window.NS_LESSONS.
 * Его используют база знаний и рекомендации.
 */

(function () {
  "use strict";

  window.NS_LESSONS = [

    {
      title: "Работа с привязками Snap",
      category: "3ds Max",
      type: "Видео",
      level: "Начальный",
      duration: "08:40",
      description: "Настройка привязок, точное позиционирование и работа с геометрией в 3ds Max.",
      image: "https://optim.tildacdn.com/tila6537-3766-4534-b762-643934313333/-/format/webp/9307d548-1de2-4e8a-b.png.webp",
      url: "/lesson_snap",
      published: true
    },

    {
      {
      title: "Какой нужен компьютер?",
      category: "3ds Max",
      type: "Видео",
      level: "Начальный",
      duration: "04:22",
      description: "Выбор комплектующих, системные требования и рекомендации по сборке ПК для работы в 3ds Max и Corona Renderer.",
      image: "https://optim.tildacdn.com/tila3033-3465-4565-b533-326138616662/-/format/webp/82932eb9-1501-469c-9.png.webp",
      url: "/lesson_computer",
      published: true,

      content: {
        categoryLabel: "3DS MAX / ОСНОВЫ / ВИДЕОУРОК",

        intro: "Разбираемся, какой компьютер нужен для комфортной работы в 3ds Max и Corona Renderer: на какие комплектующие обратить внимание, где важна производительность и как выбрать конфигурацию под свои задачи и бюджет.",

        video: "https://kinescope.io/jS5DNqaufWinJ7azxqeXox",

        sections: [
          {
            heading: "Об этом уроке",
            level: 2,
            paragraphs: [
              "Правильно подобранный компьютер влияет на скорость работы со сценами, удобство моделирования и время финального рендера. В этом уроке разберём основные комплектующие для 3ds Max и Corona Renderer и обсудим, как выбрать рабочую станцию без лишних затрат."
            ]
          },
          {
            heading: "Что разберём",
            level: 3,
            bullets: [
              "Какие комплектующие особенно важны для 3ds Max и Corona Renderer.",
              "Как процессор и оперативная память влияют на работу со сценами и рендеринг.",
              "На что обращать внимание при выборе видеокарты и накопителей.",
              "Как подобрать конфигурацию компьютера под свои задачи и бюджет."
            ]
          },
          {
            heading: "На что обратить внимание",
            level: 3,
            paragraphs: [
              "Для Corona Renderer особенно важна производительность процессора, а объём оперативной памяти определяет, насколько комфортно компьютер справляется с тяжёлыми сценами. Не ориентируйтесь только на видеокарту или общую стоимость сборки: оценивайте конфигурацию целиком, учитывайте сложность проектов и возможность дальнейшего обновления."
            ]
          }
        ],

        resources: []
      }

    },

    {
      title: "Горячие клавиши 3ds Max",
      category: "3ds Max",
      type: "Видео",
      level: "Начальный",
      duration: "02:48",
      description: "Основные сочетания клавиш, быстрая навигация и ускорение работы в 3ds Max.",
      image: "https://optim.tildacdn.com/tila3132-3137-4836-a132-383136666262/-/format/webp/1ac4d23c-37b5-4ccb-b.png.webp",
      url: "/lesson_hotkey",
      published: true
    },

    {
      title: "Построение стен в 3ds Max",
      category: "3ds Max",
      type: "Видео",
      level: "Начальный",
      duration: "10:30",
      description: "Создание стен по плану и настройка геометрии.",
      image: "https://optim.tildacdn.com/tila3531-3930-4832-a537-356434633966/-/format/webp/a209d93d-b2c7-4259-8.png.webp",
      url: "/lesson_walls",
      published: true
    },

    {
      title: "Импорт 3D моделей",
      category: "3ds Max",
      type: "Видео",
      level: "Начальный",
      duration: "09:20",
      description: "Добавление готовых моделей в сцену, настройка масштаба и работа с объектами.",
      image: "https://optim.tildacdn.com/tila3561-6138-4634-b033-666331653939/-/format/webp/4dad5d47-461f-4302-9.png.webp",
      url: "/lesson_import_3d_models",
      published: true
    },

    {
      title: "Пропавшие текстуры: как исправить?",
      category: "3ds Max",
      type: "Видео",
      level: "Начальный",
      duration: "14:10",
      description: "Поиск потерянных текстур, восстановление путей и исправление ошибок материалов.",
      image: "https://optim.tildacdn.com/tila6333-6566-4333-a239-663939636566/-/format/webp/d52a8497-f0aa-4df3-b.png.webp",
      url: "/lesson_find_textures",
      published: true
    },

    {
      title: "FloorGenerator: создание пола в 3ds Max",
      category: "3ds Max",
      type: "Статья",
      level: "Начальный",
      duration: "",
      description: "Установка плагина, генерация напольных покрытий и настройка раскладки досок.",
      image: "https://optim.tildacdn.com/tila6335-6533-4566-a664-626262393335/-/format/webp/0c485809-7325-480b-a.png.webp",
      url: "/lesson_floorgenerator",
      published: true
    }

  ];

})();
