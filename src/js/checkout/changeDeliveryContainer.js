import refs from '../common/refs';

const changeDeliveryContainer = e => {
  switch (e.target.value) {
    case 'magazine':
      refs.postContainer.setAttribute('style', 'display: none');
      refs.magazineContainer.setAttribute('style', 'display: block');
      refs.dhlContainer.setAttribute('style', 'display: none');
      break;
    case 'post':
      refs.postContainer.setAttribute('style', 'display: block');
      refs.magazineContainer.setAttribute('style', 'display: none');
      refs.dhlContainer.setAttribute('style', 'display: none');
      break;
    case 'dhl':
      refs.postContainer.setAttribute('style', 'display: none');
      refs.magazineContainer.setAttribute('style', 'display: none');
      refs.dhlContainer.setAttribute('style', 'display: block');
      break;
    default:
      return;
  }
};

export default changeDeliveryContainer;
