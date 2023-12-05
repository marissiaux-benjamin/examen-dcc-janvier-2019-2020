// Nom : 
// Prénom : 
// Groupe :


document.querySelector('html').classList.add('js-enabled');


for (let i = 199; i > 0; i = i - 2) {
    document.querySelector('#app').insertAdjacentHTML('afterbegin', `<li class="grid__item">${i}</li>`);

    document.querySelectorAll('li').forEach((liElement) => {
        if (i % 9 === 0 && i % 3 === 0) {
            liElement.classList.add('multiple-3-9');
            liElement.insertAdjacentHTML('afterbegin', `<div class="ribbon-wrapper">
    <div class="ribbon">3 et 9</div>
  </div>`);
        }
        if (i % 3 === 0) {
            liElement.classList.replace('multiple-3-9','multiple-3');
            liElement.insertAdjacentHTML('afterbegin', `<div class="ribbon-wrapper">
    <div class="ribbon">3</div>
  </div>`);
        } else  {
            liElement.classList.replace('mutliple-3','premier');
            liElement.insertAdjacentHTML('afterbegin', `<div class="ribbon-wrapper">
    <div data-text="somme" class="ribbon">premier</div>
  </div>`);
            liElement.addEventListener('click', ()=>{
                liElement.classList.toggle('animate');
            });
        }
    });
}


/* document.querySelectorAll('li').forEach(liElement => {
     liElement.classList.add('multiple-3');
 })*/






