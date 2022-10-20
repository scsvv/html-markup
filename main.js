import './styles/index.scss'

const days_list_popup = document.querySelector('.popup_menu')
const days_popup_button = document.querySelector('.open_dayslist')

console.log(days_popup_button, days_list_popup)
document.addEventListener('click', (event) => {
    if (event.target == days_popup_button) {
        days_list_popup.classList.toggle('popup_menu_on')
    };
})
; 

const rightButtons = [...document.querySelectorAll('.right')];
console.log(rightButtons);

rightButtons.forEach(function ($button) {
  //   console.log($button);
  $button.addEventListener('click', function () {
    let $closest = this.closest('.movie__scroll').closest(
      '.movie__description',
    );

    let $targetList = $closest.querySelector('.movie__seanse_list');

    console.log($targetList);
  });
});