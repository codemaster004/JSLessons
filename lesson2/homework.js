// 1. przeiteruj listę (odczytaj każdy element po kolei) wynik pokaz w konsoli 
// tip: mojaListaImion.length
// wcale nie kopiuj wklej


// 2. sprawdz typ podanych zmiennejch pokaz konsoli wiadomosc "Hej jestem (tu ma byc typ)."
// tip: urzyj "" + "" lub ${}
let zmienne = ["Moj string", 2021, NaN, false];
for(i = 0; i < zmienne.length; i++) {
    console.log(`Hej jestem ${typeof zmienne[i]}.`)
}


// 3. sprawdz czy podana zmienna nie jest pusta jesli jest ustaw jej wartosc jako 0
let user_id;
user_id = user_id ?? 0
console.log(user_id)

// 4. sprawdz podane zmienne czy sa poprawnie zbudowanymi pseldonimami. poprawne czyli:
//      jest typu string
//      nie jest pustym stringiem
//  jesli username jest poprawny wyprintuj "Tak" inaczej "Nie"
// tip: ( && ) ? "Tak" : "Nie"

// true || true => true
// true || false => true
// false || true => true
// false || false => false

// true && true => true
// true && false => false
// false && true => false
// false && false => false

let usernames = ["Filip123", 123, false, "", "HelloThere"]

// 5. sprawdz typ zmiennych jesli nie jest rowny string wyprintuj "Zły typ danej" jesli jest string
//      sprawdz czy masz juz taka wartosc w baze jesli masz wyprintuj "Podana wartosc juz instanieje"
//      w przeciwnym razie wyprintuj "Barawo nowy urztkownik"
// masz do urzycia max. 3 linie kodu (nie liczac definicji zmiennych) :)
// tip: dasz se rade nie potrzebujesz pomocy
let database = ['filip', 'przemke']
let chceckingUsers = [0, 'Hello', false, 'kuba', 'filip']

for (let i = 0; i < chceckingUsers.length; i++) {
    console.log(typeof chceckingUsers[i] != "string" ? "Zły typ" : database.includes(chceckingUsers[i]) ? "instanieje" : "Barawo")
}