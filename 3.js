// Получаем необходимые элементы
const slideWrapper = document.querySelector('.slide-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const currentInfo = document.querySelector('.current-info');
const slides = document.querySelectorAll('.slide');

// Инициализируем переменные
let currentIndex = 0;
const totalSlides = slides.length;

// Функция для обновления отображения
function updateSlider() {
    // Вычисляем позицию для сдвига
    const position = -currentIndex * 100 + '%';
    slideWrapper.style.transform = `translateX(${position})`;
    
    // Обновляем информацию о текущем слайде
    currentInfo.textContent = `Изображение ${currentIndex + 1} из ${totalSlides}`;
}

// Обработчик для кнопки "назад"
function goToPrev() {
    if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex--;
    }
    updateSlider();
}

// Обработчик для кнопки "вперед"
function goToNext() {
    if (currentIndex === totalSlides - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlider();
}

// Добавляем обработчики событий
prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);

// Инициализация при загрузке
updateSlider();
