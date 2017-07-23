// entry point

import { myComponent } from './module-1.js';
import '../style/styles.css';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import '../style/style.scss';

console.log('the compo', myComponent); 

$(function () {
    console.log('jquery works');
});

