const app = {
  cacheDom() {
    this.app = document.getElementById("app");
  },
  generateItems() {
    let sClassName;
    let sText;
    let eRuben;
    for (let i = 1; i <= 200; i += 2) {
      sText = "";
      eRuben = "";
      sClassName = "";
      if (myLittleCalculator.isPremier(i)) {
        sClassName = "premier";
        sText = "premier";
      } else if (myLittleCalculator.isMultipleOf(i, 3)) {
        if (myLittleCalculator.isMultipleOf(i, 9)) {
          sText = "3 et 9";
          sClassName = "multiple-3-9";
        } else {
          sClassName = "multiple-3";
          sText = "3";
        }
      }
      if (sText !== "") {
        eRuben = `<div class="ribbon-wrapper"><div class="ribbon">${sText}</div></div>`;
      }
      this.app.insertAdjacentHTML('beforeend', `<li class="${sClassName} grid__item">${i}${eRuben}</li>`);
    }
  },
  addEventListeners() {
    this.app.querySelectorAll('.grid__item').forEach((element) => {
      element.addEventListener("click", (event) => {
        event.currentTarget.classList.add("animate");
      });
      element.addEventListener("transitionend", (event) => {
        event.currentTarget.classList.remove("animate");
      })
    })
  },
  init() {
    document.documentElement.classList.add("js-enabled");
    this.cacheDom();
    this.generateItems();
    this.addEventListeners();
  }
};

const myLittleCalculator = {
  isPremier(nbr) {
    if (nbr < 2) {
      return false;
    }
    for (let i = 2; i < nbr; i++) {
      if (this.isMultipleOf(nbr, i)) {
        return false;
      }
    }
    return true;
  },
  isMultipleOf(base, multiple) {
    return base % multiple === 0;
  }
};
app.init();