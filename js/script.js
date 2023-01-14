/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "АСкотт Пилигрим против..."
    ]
};

const div = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    promoGenre = poster.querySelector(".promo__genre"),
    filmsList = document.querySelector(".promo__interactive-list");

div.forEach(item => {
    item.remove();
});

movieDB.movies.sort();
filmsList.innerHTML = "";

movieDB.movies.forEach((item, i) => {
    filmsList.innerHTML += `<li class="promo__interactive-item">${i+1} - ${item}
                                <div class="delete"></div>
                            </li>`;
});

promoGenre.textContent = "драма";
poster.style.backgroundImage = "url('/img/bg.jpg')";

// div.forEach(function (item) {
//     item.remove();
// });


