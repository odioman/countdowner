const countDownInput = document.querySelector('.countdown-input');
const countDownClock = document.querySelector('.countdown-clock');
const submit = document.querySelector('.submit');

let countDownDate = new Date(countDownInput.value).getTime();

let setInt = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 *  24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
    countDownClock.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
        clearInterval(setInt)
        countDownClock.textContent = "EXPIRED";
    }
    console.log(countDownDate);
}, 1000)



submit.addEventListener('click', setInt)
