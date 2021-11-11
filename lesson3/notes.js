////////////////////
//    powtroka    //
////////////////////


/////////////////////
//    Functions    //
/////////////////////

let user = "Filip";
let isLoggedIn = false

function isAuth() {
    if (user) {
        console.log("Logged In")
        isLoggedIn = true
    } else {
        console.log("Not logged in")
        isLoggedIn = false
    }
}

isAuth()

function isAuth1() {
    if (user) {
        console.log("Logged In")
        return true
    } else {
        console.log("Not logged in")
        return false
    }
}

let isLoggedIn1 = isAuth1()


function isAuth2(checkingUser) {
    if (checkingUser) {
        console.log("Logged In")
        return true
    } else {
        console.log("Not logged in")
        return false
    }
}

let isLoggedIn2 = isAuth2(user)
let isLoggedIn3 = isAuth2("Kuba")
let isLoggedIn4 = isAuth2(null)

const isAuth3 = (checkingUser) => {
    return Boolean(checkingUser)
}

let isLoggedIn5 = isAuth3("Mati")
console.log(isLoggedIn5)

alert("Hello");

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`);

let isBoss = confirm("Are you the boss?");
alert( isBoss );

try {
    nonExistentFunction();
} catch (error) {
    console.error(error);
}
