// entry point

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.scss';
import '../style/navbar.scss';

console.log('the compo', myComponent); 

$(document).ready(function() {

    $("#home-button").click( function() {
        $('html, body').animate({
            scrollTop: $("#home-section").offset().top
        }, 500);
    });

    $("#portfolio-button").click( function() {
        $('html, body').animate({
            scrollTop: $("#portfolio-section").offset().top
        }, 500);
    });

    $("#contact-button").click( function() {
        $('html, body').animate({
            scrollTop: $("#contact-section").offset().top
        }, 500);
    });

});
