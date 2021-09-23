import './js/slider'
import helloFn from './helloFn';
import './styles/main.scss';
import 'normalize.css';
import './index.html'

    const menuBtnRef = document.querySelector("[data-menu-button]")
    const mobileMenuRef = document.querySelector("[data-menu]")

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });


console.log('Hello world');

helloFn();