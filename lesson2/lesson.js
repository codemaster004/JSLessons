
///////////////////
//    .length    //
///////////////////

let myList = [1, 2, 3, 4, 5]

// Każda lista ma właściwość length.
// Length, czyli długość listy.
// [1, 2, 3, 4, 5] ta lista ma długość 5
console.log(myList.length)

// Możemy tego używać przy pętlach, ale musimy używać znaku <
// Inaczej dostaniemy o jedną iteracje za dużo.
for (let i = 0; i < myList.length; i++) {
    console.log(myList[i])
}


//////////////////////////////
//    typeof & new types    //
//////////////////////////////

// Możemy sprawdzać typ naszej zmiennej za pomocą funkcji typeof.
let liczba = 1.4
console.log(typeof liczba)

// Porównujemy czy wynik jest typem który nas interesuje 
console.log(typeof liczba == "number")

// Mamy pare innych dziwnych typów w JS 
console.log(1 / 0) // Infinity
console.log("cos" / 4) // NaN - Not a Number
console.log(myList[5]) // undefined - nie wie o co chodzi
console.log(null) // Nic


/////////////////////////
//    Other Strings    //
/////////////////////////

let name1 = "Filip"

// Mamy kilka rodzajów cudzysłowów w JS 
let str1 = "cos"
let str2 = 'cos'
// Te dwa sa prawie takie same
// Zazwyczaj używa się jednego a drugiego tylko w przypadkach jak chcemy umieścić tekst z cudzysłowem w string
// np: let text = "Cześć chlopaki dzisiajsze zadanie z JS jest 'Bardzo łatwe' spoko."
// np: let text = 'Cześć chlopaki dzisiajsze zadanie z JS jest "Bardzo łatwe" spoko.'

// Możemy łączyć string i zmienne za pomocą + 
let str3 = 'hej, ' + name1 + 'siema'
console.log(str3)
// Lub za pomocą string utworzonego z ``  w środku ${} i nasz kod w nawiasach
let str4 = `Hej. ${name1}. Jak tam? ${str2}`
console.log(str4)


/////////////////////////
//    Zamiany typów    //
/////////////////////////

liczba = 34

String(liczba) // "34"

Number("467") // 467
Number(true) // 1
Number(false) // 0

Boolean(0) // false
Boolean("hello") // true
Boolean("") // false
Boolean(myList[6]) // undefined -> false


///////////////////////////
//    JS i matematyka    //
///////////////////////////

let num1 = 4
let num2 = 6

let result1 = num2 ** num1 // potęgowa-nie: 6^4 wynik: 1296
let result2 = num2 % num1 // reszta z dzielenia 6/4=1 r=2 wynik: 2
console.log(result1)

let strInt = "7"
console.log(4 + strInt) // 47. JS zamienił liczbę na string i je ze soba policzył
console.log(4 + +strInt) // 11. Zmuszamy JS by zamienił "7" na liczbę używając +"" przed stringiem 

num1 += 2 // do num1 dodajemy 2 i zapisujemy wynik do tej samej zmiennej
num1 -= 3 // od num1 odejmujemy 3 i zapisujemy wynik do tej samej zmiennej
num1 *= 4 // num1 mnozymy przez 4 i zapisujemy wynik do tej samej zmiennej

// różnica miedzy num3++ a ++num3 jest że
// ++num3 dzieje się jako pierwsze nie a dopiero potem podaje wynik zmiennej
// a num3++ najpierw podaje aktualna wartość num3 a po podaniu wyniku powiększa zmienna o 1 
// tz. num3++ troche zamula ale w większości przypadków go używamy
let num3 = 3
console.log(num3++)
num3 = 3
console.log(++num3)


///////////////////////
//    .includes()    //
///////////////////////

let newList = ['filip', 'kuba', 'przemke']

// używamy metody .includes żeby sprawdzić czy lista zawiera jakas wartości 
console.log(newList.includes('mati'))
if (!newList.includes('mati')) {
    console.log("brawo nowe imie")
}


//////////////////
//    ? i ??    //
//////////////////

// ? pozawla nam pisac if i else w jednej lini
let age = 17
let hasAccess = age >= 18 ? "Tak" : "Nie"
// if (age >= 18) {
//     hasAccess = "Tak"
// } else {
//     hasAccess = "Nie"
// }

let user;

// ?? pozwalają nam sprawdzić czy zmienna ma ma jakaś wartość jeśli nie to podajemy wartość defaultowa
console.log(user ?? "Anonymous")
