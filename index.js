let number = document.querySelector('.counter');

let change = function () {
    number.textContent += parseInt(number.textContent) + 1
    console.log('is this working?')
}

window.setInterval(change, 1000)