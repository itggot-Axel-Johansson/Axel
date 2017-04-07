/**
 * Created by axel.johansson2 on 2017-03-10.
 */
function boots() {
    var elements = document.querySelectorAll('.efter')
    elements.forEach(function (element) {
        element.classList.toggle('innan');
    });
}
function toggleresultat() {
    var elements = document.querySelectorAll('.efter2')
    elements.forEach(function (element) {
        element.classList.toggle('innan2');
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