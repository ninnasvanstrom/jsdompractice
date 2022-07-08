//set inital count
let count = 0;

//select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');


 
 btns.forEach(function (button) {
     button.addEventListener('click', function (event) {
        const styles = event.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--; 
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.innerHTML = count;
     });
 });



 //Simple way: 
 //Based on these HTML and CSS sheets, the buttons 
 //won't be styled in CSS this way though but code works and it could be styled 
 //with the right class names in HTML and CSS

 /*
const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
const btnIncrease = document.querySelector('.btn-increase');



btnDecrease.onclick = function () {
    count--;
    value.innerHTML = count;
};

btnReset.onclick = function () {
    count = 0;
    value.innerHTML = count;
};

btnIncrease.onclick = function () {
    count++;
    value.innerHTML = count;
};

*/

