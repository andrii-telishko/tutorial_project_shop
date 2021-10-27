import '../../styles/main.scss';
import 'normalize.css';

import initCartPage from './initCartPage';
import { getStorageItem } from '../common/utils';

initCartPage(getStorageItem('cart'));
