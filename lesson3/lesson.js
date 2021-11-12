
///////////////////
//    Funkcje    //
///////////////////

// funkcja to blok kodu (czy cos co ma nawiasy kolkowe () i nawiasy trojkatne {} w ktorych cos piszemy)
// slozy glownie do organizacji kodu i eliminacji powtazajacych sie czesci
// i rowniez do porzadkowania
// mozna o tym myslec jak o polaczeniu zmiennej i if'a lub petli

// function (p1, p2) { return r }
// function - slowo klucz ktore mowi do JS hej to bedzie funckja
// () - w nawiasach piszemy parametry
// p1, p2 - to sa parametry czyli zmienne ktore mozemy podac naszej funkcji
// {} - w sordku tych nawiasow piszemy kod ktory nasza funckja ma wykonywac
// return - sluzy zakonczenia dzialania funkcji 
// r - czyli cos co chemy zwrucic 

// napiszmy jakas podstawowa funkcje
// tworzymy funkcje o nazwie `dodaj1` 
// ktorej podajemy 1 parametr `liczba`
// i zwracamy `liczba` powiekszone o 1
function dodaj1(liczba) {
    return liczba + 1
}

// wynik naszej funkcji zapisujemy do zmiennej `wynik`
// dodaj1() to wlaczenie naszej funkcjki. () te nawiasy na koncu oznaczaja tak jakby START
// 1 w srodku nawiasow jest nasz parametr `liczba`
let wynik = dodaj1(1)
console.log(wynik) // potem tylko log robimy


// kolejna funkcja. Dostajemy urzytkownika i mamy sprawdzic czy nie jest pusty
function isAuth(checkingUser) {
    // bardzo glupi przyklad i mozna latwoj zrobic. // hmm juz wiem co wam zadam
    if (checkingUser) {
        console.log("Logged in")
        // mozna urzywac return w paru miejscach funkcji
        return true
    } else {
        console.log("Not logged in")
        return false
        // warzn ezeby pamietac ze cokolwiem pod returnem nie zostanie wykoanne
    }
}

// inicjowanie zmiennych
let user = "Filip";

isLoggedIn = isAuth(user)
console.log(isLoggedIn) // true

isLoggedIn = isAuth("Mati")
console.log(isLoggedIn) // true

isLoggedIn = isAuth(null)
console.log(isLoggedIn) // false


// kolejna funckja
// jesli chcemy dac wiecej jak 1 parametr (to cos pomiedzy nawiasami kolkowymi) piszemy koleny po przecinku
function dodajLiczby(n1, n2) {
    // w tym wypadku dodajemy je tylko do siebie
    return n1 + n2
}

// w tedy podajemy mu tez 2 wartosci podzielone ,
let wynik3 = dodajLiczby(1, 3)
console.log(wynik3) // 4


// teraz zadanie. znacie funkcje include ktora sprawdza czy wartosc instanieje w liscie sprobojcie ja odtworzyc
// tip: Jak dziala .include()
//      Dziala przez sprawdzenie po kole kazdej wartosci z listy i sprawdza czy jest taka sama jak podana

// a wic dwa paramerty nasza liste i element do sprawdzenia
function myInclude(someList, element) {
    
    // sprawdzamy wszyskie elementy po kolei czyli urzywamy petli for
    for(let i = 0; i < someList.length; i++) {
        // sprawdzamy element aktualny w petli i podany sa takie same
        if(someList[i] == element) {
            // jesli sa takie same to juz dalej nie sprawdzamy tylko zracamy true co konczy finkcje
            return true
        }
    }
    // jesli nasz funkcja sie jeszcze nie spokonczyla (czyli nie znalezlismy takiego elemtu w tabeli) zracamy false
    return false
}

myList = ["Filip", "MAti", "Kuba"]
let result = myInclude(myList, "Przemke")
console.log(result)


///////////////////////////////
//    wyskakujace okienka    //
///////////////////////////////

// alert po prostu pokazuje okinko na gorze z strony z jakims tekstem
alert("Hello Filip")

// prompt pozwala nam wprowadzic dane (tekst) od urzytkownika i zapisac do zmienej
let text = prompt("hello World")
alert(text)

// confirm dostajemy odpowiedz urzytkownika jak true lub false tez zapisujemy do zmiennej
let didAgree = confirm("Czy jestes robotem")
alert(didAgree)
