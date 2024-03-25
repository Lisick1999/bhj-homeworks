const imageCookie = document.getElementById("cookie");
let counter = 0;
const clickerStatus = document.getElementById("clicker__counter");
let clickerCounter = 0;
const timeClick = document.getElementById("click_rate");
let lastClick = new Date();


imageCookie.onclick = function() {
    clickerStatus.textContent++;

    counter++;
    if (counter % 2 == 0) {
        imageCookie.width = 200;                  
    } else {
        imageCookie.width = 350;
    }

    let currentClick = new Date();
    let differentSeconds = currentClick - lastClick;
    if (differentSeconds > 0) {
        timeClick.textContent = (1000 / differentSeconds).toFixed(2);
    } else {
        timeClick.textContent = 0;
    }  
    lastClick = currentClick;
}
