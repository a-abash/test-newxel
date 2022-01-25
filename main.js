var onResizing = function () {
  var width = document.documentElement.clientWidth;

  let elements = document.querySelectorAll('.menu__link')

  function triggerFunc(e, trigger) {
    let elemToggle = trigger.nextElementSibling;
    let arrow = Array.from(trigger.children).find(child => child.classList.contains('arrow'));

    if (trigger.classList.contains('has-child')) {
      if (width < 1200) {
        e.preventDefault();
        if (trigger.classList.contains('is-active')) {
          trigger.classList.remove('is-active');
          elemToggle.classList.remove('is-active');
          arrow.classList.remove('spin');
        } else {
          trigger.classList.add('is-active');
          elemToggle.classList.add('is-active');
          arrow.classList.add('spin');
        }
      } else {
        if (trigger.classList.contains('is-active')) {
          trigger.classList.remove('is-active');
          elemToggle.classList.remove('is-active');
          arrow.classList.remove('spin');
        } else {
          trigger.classList.add('is-active');
          elemToggle.classList.add('is-active');
          arrow.classList.add('spin');
        }
      }
    }
  }

  elements.forEach(element => {
    element.addEventListener('click', (e) => triggerFunc(e, element))
    return element.removeEventListener('click', triggerFunc)
  })

  modalMenu.addEventListener('click', toggleModalMenu)
  languageModal.addEventListener('click', toggleLanguageModal)
};

window.onresize = onResizing;
window.onload = onResizing;

let modalMenu = document.querySelector('.menu__burger');
let elemToggle = document.querySelector('.menu__list');
let languageModal = document.querySelector('.menu__link-bttn');
let itemToggle = document.querySelector('.menu__language-list');
let arrow = document.querySelector('.arrow');

function toggleModalMenu() {
  if (modalMenu.classList.contains('is-active')) {
    modalMenu.classList.remove('is-active');
    elemToggle.classList.remove('is-active');
  } else {
    modalMenu.classList.add('is-active');
    elemToggle.classList.add('is-active');
  }
}

function toggleLanguageModal() {
  if (languageModal.classList.contains('is-active')) {
    languageModal.classList.remove('is-active');
    itemToggle.classList.remove('is-active');
    arrow.classList.remove('spin');
  } else {
    languageModal.classList.add('is-active');
    itemToggle.classList.add('is-active');
    arrow.classList.add('spin');
  }
}
