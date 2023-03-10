const countDown = (event) => {
    const dateInput = document.querySelector('.date').value;
    const countDate = new Date(dateInput).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minutes').innerHTML = textMinute;
    document.querySelector('.seconds').innerHTML = textSecond;

    changeText();
}

function changeText() {
    document.querySelector('h2').classList.add('hide');
    document.querySelector('.countdown').style.fontSize = "4rem";
    document.querySelector('.date').classList.add('hide');
    document.querySelector('button').classList.add('hide');
    const h4 = document.querySelectorAll('h4');
    h4.forEach(element => {
        element.style.opacity = '0.7';
        element.style.fontSize = '2rem';
    })
}

const dateButton = document.querySelector('button');
dateButton.addEventListener('click', () => {
    countDown()
    setInterval(countDown, 1000);
})

