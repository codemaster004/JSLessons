
// 0.1. Pobierz lesson4/homework.html z https://github.com/codemaster004/JSLessons i podepnij swój plik JS
// 0.2. Dla ułatwienia możecie pisać kod w tym pliku  ;)

// 1. Po wciśnięciu guzika o id="submit" wywołaj funkcje login()

// 2. Pobierz w funkcji wartości inputów o id="username" i id="password"

// 3. Sprawdź czy wartość z inputa #username znajduje się w zmiennej `users` zdefiniowanej poniżej

// 4. Sprawdź czy wartośś podana w input #password jest taka sama w zmiennej `database` zdefiniowanej poniżej 

// 5. Jeśli username lub password się nie zgadza w p #username-error lub #password-error dodaj text wiadomości błędu, wiadomość wymyśl sam 

// 6. Jeśli username i password się zgadzają pokaz alert "Brawo jestes zalogowany" 

let users = ['filipdabkowski', 'xeorast', 'qba', 'rudaowca', 'smasher']
let database = {
    'filipdabkowski': 'pAsWoRd',
    'xeorast': '123qweasd',
    'qba': 'tf@j@b1k@',
    'rudaowca': 'BedeNaZajeciach',
    'smasher': 'helloWorld'
}

function login() {
    console.log('Checking User Credentials');
}
