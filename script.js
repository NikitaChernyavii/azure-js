// Инициализация переменной счетчика
let count = 0;

// Получаем элементы со страницы
const button = document.getElementById("clickBtn");
const counter = document.getElementById("count");
const body = document.body;

// Обработчик клика
button.addEventListener("click", () => {
    // Увеличиваем счетчик
    count++;
    counter.textContent = count;

    // Псевдо-анимация: меняем фон страницы
    body.style.backgroundColor = count % 2 === 0 ? "#f0f8ff" : "#ffe4e1";
});
