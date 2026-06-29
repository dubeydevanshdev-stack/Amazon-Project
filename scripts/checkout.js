import { loadFromStorage } from '../data/cart.js';
import {renderOrderSummary} from './checkout/ordersummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import '../data/cart-class.js';
import {loadProducts} from '../data/products.js';
//import '../data/cart-oop.js';
//import '../data/backend-practice.js';

loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
