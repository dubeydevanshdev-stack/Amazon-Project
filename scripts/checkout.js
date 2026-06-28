import { loadFromStorage } from '../data/cart.js';
import {renderOrderSummary} from './checkout/ordersummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';

//loadFromStorage();
renderOrderSummary();
renderPaymentSummary();