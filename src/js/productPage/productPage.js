import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';
import '../common/modal/modal';

import initProductPage from './initProductPage';
import refs from '../common/refs';
import incrementProduct from './incrementProduct';
import submitReviewForm from './submitReviewForm';
import enableReviewForm from './enableReviewForm';
import renderReviews from './renderReviews';

initProductPage();

refs.productContainer.addEventListener('click', incrementProduct);

refs.reviewForm.addEventListener('input', enableReviewForm);

refs.reviewForm.addEventListener('submit', submitReviewForm);
