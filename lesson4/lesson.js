
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

    let colors = ['0', '1', '2']

    let rNumber = Math.floor(Math.random() * colors.length)
    
    console.log(colors[rNumber]);

    div.style.backgroundColor = colors[rNumber];

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
