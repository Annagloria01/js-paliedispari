const number = prompt("inserisci un numero")
console.log(winner(number))

function pcRandom(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

function winner(userNumber) {
    const sum = parseInt(userNumber) + pcRandom(1, 5)
    console.log("sum " + sum)

    if (sum % 2 == 0) {
        return "L'utente ha vinto"
    } else {
        return "Il pc ha vinto"
    }
}