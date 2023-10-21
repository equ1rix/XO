const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const x = document.getElementById('x');
const o = document.getElementById('o');
const reset = document.getElementById('10');
let counter = 1;
const array = [
    one, two, three, four, five, six, seven, eight, nine
];

array.forEach((el) => {
    el.addEventListener('click', () => {
        checkingForClasses(el);
    })
})

reset.addEventListener('click', () => {
    resetGame();
})



// function

function pressButton(el) {
    
    if (counter === 1) {
        if (el.classList.contains('circle') || el.classList.contains('x')) {

        } else {
            el.classList.add('circle')
        }
        counter = counter += 1
    } else {
        if (el.classList.contains('circle') || el.classList.contains('x')) {

        } else {
            el.classList.add('x')
        }
        counter = counter - 1
    }
    win();
};

function resetGame () {
    array.forEach((el) => 
    el.classList.remove('x'))
    array.forEach((el) => 
    el.classList.remove('circle'))

    x.classList.add('none');
    o.classList.add('none');
}

function checkingForClasses (el){
    if (el.classList.contains('x') || el.classList.contains('circle')){
    } else {
        if (x.classList.contains('none') &&  o.classList.contains('none')){
            pressButton(el);   
         }    
    }
}

function win () {
    if (nine.classList.contains('x') && eight.classList.contains('x') && seven.classList.contains('x') ||
        six.classList.contains('x') && five.classList.contains('x') && four.classList.contains('x') ||
        three.classList.contains('x') && two.classList.contains('x') && one.classList.contains('x') ||
        one.classList.contains('x') && five.classList.contains('x') && nine.classList.contains('x') ||
        three.classList.contains('x') && five.classList.contains('x') && seven.classList.contains('x') ||
        one.classList.contains('x') && four.classList.contains('x') && seven.classList.contains('x') ||
        two.classList.contains('x') && five.classList.contains('x') && eight.classList.contains('x') ||
        three.classList.contains('x') && six.classList.contains('x') && nine.classList.contains('x') ) {

        if (o.classList.contains('none') && x.classList.contains('none')){
            return x.classList.remove('none');
        } 
    }

    if (nine.classList.contains('circle') && eight.classList.contains('circle') && seven.classList.contains('circle') ||
        six.classList.contains('circle') && five.classList.contains('circle') && four.classList.contains('circle') ||
        three.classList.contains('circle') && two.classList.contains('circle') && one.classList.contains('circle') ||
        one.classList.contains('circle') && five.classList.contains('circle') && nine.classList.contains('circle') ||
        three.classList.contains('circle') && five.classList.contains('circle') && seven.classList.contains('circle') ||
        one.classList.contains('circle') && four.classList.contains('circle') && seven.classList.contains('circle') ||
        two.classList.contains('circle') && five.classList.contains('circle') && eight.classList.contains('circle') ||
        three.classList.contains('circle') && six.classList.contains('circle') && nine.classList.contains('circle') ) {

        if (o.classList.contains('none') && x.classList.contains('none')){
            return o.classList.remove('none');
        } 
    }
}
