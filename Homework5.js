//1

function isPalindrome(text) {
    let textPalindrome = ""
    
    for (let i = text.length-1; i >= 0; i--) {
        textPalindrome += text[i]
    }
    
    if (textPalindrome !== text || text === "" ) {
        return "No"
    } else {
        return "Yes"
    }
}




//2


let str = prompt("give me a string")
let chrToFind = prompt("give me symbol")
let chrReplaceBy = prompt("give me symbol")
let result = ""
for (let i = 0; i <= str.length - 1; i++ ) {
    if (str[i] == chrToFind) {
        result += chrReplaceBy
    } else {
        result += str[i]
    }
} 

console.log(result)


//3
let stunction reverseString (str) {
    let newString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    console.log(newString)
}

reverseString('newString) 






//4

let n = +prompt ("give me a number")
let a = ""
for (let i = 1; i <= n; i++) {
    a += i
    console.log(a)
}

for(let i = 1; i <= n-1; i++) {
    a = Math.floor(a/10)
    console.log(a)
}




//5


et obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

let newObj = {}

for (let gago in obj) {
    newObj[obj[gago]] = gago
}