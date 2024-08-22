document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;
    const counterElement = document.getElementById('counter');
    const increaseButton = document.getElementById('increase-button');

    increaseButton.addEventListener('click', function() {
        counter++;
        counterElement.textContent = counter;
    });
});

