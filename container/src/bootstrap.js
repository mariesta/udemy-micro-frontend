import { mount as productMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

const el = document.querySelector('#my-products');
const cartEl = document.querySelector('#my-cart');
productMount(el);
cartMount(cartEl);

console.log('container!!!!');