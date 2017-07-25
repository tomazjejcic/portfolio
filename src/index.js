// entry point

import { myComponent } from './module-1.js';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.scss';
import '../style/navbar.scss';

console.log('the compo', myComponent); 

$(function () {
    console.log('jquery works');
});
