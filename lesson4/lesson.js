
// document.body.innerHTML += '<h1> World!</h1>'

let more = document.querySelector('#more')
more.innerHTML = 'Cos z ID'

let sth = document.querySelectorAll('.sth')
// sth.innerHTML = 'Bye';

for(let div of sth) {
    div.innerHTML = 'Bye'
}

function changeColor(cardID) {
    let div = document.querySelector(`#${cardID}`)

    let bgc = div.style.backgroundColor

    div.style.backgroundColor = bgc == 'red' ? 'green' : 'red';

    // if(div.style.backgroundColor == 'red') {
    //     div.style.backgroundColor = 'green';
    // } else {
    //     div.style.backgroundColor = 'red';
    // }
}

function saveInput() {
    let myInput = document.querySelector('#myInput')
    if (myInput.value) {
        alert("zdiekuje za twoj input")
    }
    myInput.value = ""
}

// changeColor('card1')
