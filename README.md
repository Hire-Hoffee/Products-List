# SPA со списком карточек (тестовое)

### React + TypeScript + Vite

**Задача:**

Создать SPA со списком карточек, на каждой из которых выводится картинка и любая информация на ваш вкус, которая пришла с эндпоинта или созданная пользователем.

Дизайн не важен, главное, чтобы было просто и аккуратно. По стэку ориентируемся на список ниже. Остальные решения на вас.  
Стэк: Typescript \\ React \\ Redux || Zustand

Для задачи можно выбрать любое публичное api, например, отсюда https://github.com/public-apis/public-apis Все полученные и созданные данные хранить во внутреннем store

Можно использовать ui библиотеки, библиотеки для работы с формой.   
Будет оцениваться подход к заданию, качество и структура кода.

**Задача 1\. Вывести список продуктов**

На странице /products

- вывести весь список продуктов
- на карточке должна быть иконка лайка. При нажатии на которую, ставится или убирается like. Иконка должна подкрашиваться, когда проставлен like.
- на карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется.
- добавить фильтр для просмотра всех карточек и карточек, добавленных в избранное
- контент карточки(текст) должен быть урезан, чтобы у карточек была одинаковая высота
- при клике на любом месте карточки (кроме иконки лайка и кнопки удаления) мы должно попадать на отдельную страницу карточки.

**Задача 2\. Страница продукта**

На странице /products/:id

- вывести более подробную информацию о продукте.
- сделать кнопку для перехода на основную страницу

**Задача 3\. Создание продукта**

На отдельной странице /create- product реализовать создание продукта

- создать форму с полями. Поля обязательные и с минимальной валидацией.
- при отправке формы, сохранить данные в общий store.

**Бонусы**

- Реализовать пагинацию списка
- Реализовать возможность редактирования карточки продукта
- Реализовать дополнительную фильтрацию
- Реализовать поиск (без кнопки отправки)

В каком формате сдавать?  
Ссылка на GitHub \+ проект, выложенный на GitHub Pages  
Сроки \- до 7 дней.
