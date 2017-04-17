/**
 * Created by axel.johansson2 on 2017-03-10.
 */
function boots() {
    var elements = document.querySelectorAll('.efter')
    elements.forEach(function (element) {
        element.classList.toggle('innan');
    });
}
function allsvenskan() {
    var elements = document.querySelectorAll('.efter2')
    elements.forEach(function (element) {
        element.classList.toggle('innan2');
    });
}
function superettan() {
    var elements = document.querySelectorAll('.efter3')
    elements.forEach(function (element) {
        element.classList.toggle('innan3');
    });
}
function bundesliga() {
    var elements = document.querySelectorAll('.efter4')
    elements.forEach(function (element) {
        element.classList.toggle('innan4');
    });
}
function bundesliga2() {
    var elements = document.querySelectorAll('.efter5')
    elements.forEach(function (element) {
        element.classList.toggle('innan5');
    });
}
function seriea() {
    var elements = document.querySelectorAll('.efter6')
    elements.forEach(function (element) {
        element.classList.toggle('innan6');
    });
}
function serieb() {
    var elements = document.querySelectorAll('.efter7')
    elements.forEach(function (element) {
        element.classList.toggle('innan7');
    });
}

function tabort() {
    var elements = document.querySelectorAll('.efter')
    elements.forEach(function (element) {
        element.classList.add('innan');
    });
}
function tabort2() {
    var elements = document.querySelectorAll('.efter2')
    elements.forEach(function (element) {
        element.classList.add('innan2');
    });
}