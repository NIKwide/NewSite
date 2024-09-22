document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const overlay = document.getElementById('overlay');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    // Обновляем видимость шагов и прогресс-бара
    function updateStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        const progressPercentage = ((stepIndex + 1) / steps.length) * 100;
        progress.style.width = progressPercentage + '%';
    }

    // Открытие навигационного меню
    document.getElementById('menu-toggle').addEventListener('click', function () {
        var navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    });

    // Открытие модального окна
    document.getElementById('startButton').addEventListener('click', function () {
        overlay.classList.add('active');
        popupContainer.classList.add('active');
        steps[currentStep].classList.add('active');
        updateStep(currentStep);
    });

    // Переход на шаг 2
    document.getElementById('next1').addEventListener('click', function () {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
        updateStep(currentStep);
    });

    // Переход на шаг 3
    document.getElementById('next2').addEventListener('click', function () {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
        updateStep(currentStep);
    });

    // Переход на шаг 4
    document.getElementById('next3').addEventListener('click', function () {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
        updateStep(currentStep);
    });

    // Завершение (отправка данных)
    document.getElementById('finish').addEventListener('click', function () {
        alert('Спасибо! Ваши данные отправлены.');
        popupContainer.classList.remove('active');
        overlay.classList.remove('active');
        steps[currentStep].classList.remove('active');
        currentStep = 0; // Возвращаемся на первый шаг, если модальное окно закрывается
        updateStep(currentStep);
    });
    document.getElementById('overlay').addEventListener('click', function () {
        popupContainer.classList.remove('active');
        overlay.classList.remove('active');
        steps[currentStep].classList.remove('active');
        currentStep = 0; // Возвращаемся на первый шаг, если модальное окно закрывается
        updateStep(currentStep);
    });
});