function makeStr() {
    let range = "0123456789"
    let myString = ""
    for (let i = 0; i < 1000; i++)
        myString += range.charAt(Math.floor(Math.random() * range.length))
    console.log("Generated string is: \n" + myString)
    console.log("Generated string length is: " + myString.length)
    return myString
}

function getHighQuad(bigString){
    let myArr = []
    for (let i = 0, y = bigString.length; i < y; i += 4){
        myArr.push(parseInt((bigString.slice(i, i + 4))))
    }
    return Math.max(...myArr)
}

let kiloChars = makeStr()
console.log("Highest quad slice is: " + getHighQuad(kiloChars))
