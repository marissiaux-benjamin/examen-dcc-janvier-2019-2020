// Nom : 
// Prénom : 
// Groupe :
document.querySelector('html').classList.add('js-enabled');

for (let i = 1; i < 200; i++) {
    if (i % 2) {
        document.querySelector('#app').insertAdjacentHTML('beforeend', `<li data-text="somme" class="grid__item">${i}</li>`);
    }
}
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
isPrime();

document.querySelectorAll('li').forEach(liElement => {
    const texteToNumber = parseInt(liElement.textContent);
    if (texteToNumber % 3 === 0 && texteToNumber % 9 === 0) {
        liElement.classList.add('multiple-3-9');
        liElement.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper">
<div class="ribbon">3 et 9</div>`);
    } else if (texteToNumber % 3 === 0) {
        liElement.classList.add('multiple-3');
        liElement.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper">
    <div class="ribbon">3</div>
  </div>`);
    }
    if (isPrime(texteToNumber) && texteToNumber > 1) {
        liElement.classList.add('premier');
        liElement.insertAdjacentHTML('beforeend', `<div class="ribbon-wrapper">
    <div data-text="somme" class="ribbon">premier</div>`);
    }
});

document.querySelectorAll('.premier').forEach(premier => {
    premier.addEventListener('click', event => {
        event.currentTarget.classList.add('animate');
        document.querySelectorAll('li').forEach(li => {
            li.classList.add('grid__item--lighter');
        });

    });
    premier.addEventListener('transitionend', event => {
        event.currentTarget.classList.remove('animate');
        document.querySelector('ol').classList.remove('grid__item--lighter');
        document.querySelectorAll('li').forEach(li => {
            li.classList.remove('grid__item--lighter');
        });
    });
});




























