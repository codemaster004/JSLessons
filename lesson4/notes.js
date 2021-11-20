
document.body.innerHTML = 'Hello World'

document.body.innerHTML = '<h1>Hello Guys</h1>'

document.querySelector('h1')
document.querySelector('.my-class')
document.querySelector('#my-id')

function onClick() {
    let title = document.querySelector('h1')
    title.innerHTML = 'Hello Robots'
    title.style.color = 'red'
}
