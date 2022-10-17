import './style.css'
import './styles/index.scss'

const list = document.querySelectorAll('.movie__seanse_list');


const days_list_popup = document.querySelector('.popup_menu')
const days_popup_button = document.querySelector('.open_dayslist')

console.log(days_popup_button, days_list_popup)
document.addEventListener('click', (event) => {
    if (event.target == days_popup_button) {
        console.log("asd")
        days_list_popup.classList.toggle('popup_menu_on')
    }
})