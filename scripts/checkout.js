import { loadFromStorage } from '../data/cart.js';
import {renderOrderSummary} from './checkout/ordersummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import '../data/cart-class.js';
import {loadProducts} from '../data/products.js';
//import '../data/cart-oop.js';
//import '../data/backend-practice.js';

new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
}); */
