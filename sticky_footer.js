"use strict";

function footerBottom(el) {
    var windowHeight = window.innerHeight,
        position = el.offsetTop;
    if (windowHeight > position) {
        el.style = "position: absolute; bottom: 0;";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var footerEl = document.querySelector('#footer');
    footerBottom(footerEl);
});