import refs from '../refs';

const openMobileMenu = () => {
  const expanded =
    refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

  refs.menuBtn.classList.toggle('is-open');
  refs.menuBtn.setAttribute('aria-expanded', !expanded);

  refs.mobileMenu.classList.toggle('is-open');
};

export default openMobileMenu;
