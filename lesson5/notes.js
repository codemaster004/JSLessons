
function randomColor() {
    let colorParts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let randomColor = ''
    for (let i = 0; i<=6; i++) {
        let randomSybol = Math.floor(Math.random() * colorParts.length)
        randomColor += colorParts[randomSybol]
    }
    return randomColor
}

console.log(randomColor());
