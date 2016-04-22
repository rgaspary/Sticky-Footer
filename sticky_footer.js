function stickyFooter() {
    // Footer element declaration
    var footerElement = document.querySelector('.footer'),
        headerElement = document.querySelector('.header'),
        contentElement = document.querySelector('.content'),
        windowHeight = window.innerHeight;

    var elementSize = function (el) {
        console.log(el);
        return el.scrollHeight;
    };

    var footerHeight = elementSize(footerElement),
        headerHeight = elementSize(headerElement),
        contentHeight = elementSize(contentElement);

    if (windowHeight > footerHeight + headerHeight + contentHeight) {
        footerElement.style.position = "absolute";
        footerElement.style.bottom = 0;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    //noinspection BadExpressionStatementJS
    stickyFooter();
});

/*TODO:
*   - Add a window resize function.
*   - Add a element content watcher to check if the content size changes.
*   - Change selectors to call the element from outside the JS file.
*   - Only expect the footer element.
*/
