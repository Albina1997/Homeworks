//1 
let num = prompt("give me a number")
let answer

for(let i = 0; i < num .length; i++) {
    if(num[i] == 0 && num[i+1] == 0 && num[i+2] == 0) {
        answer = 'yes'
        break
    } else {
        answer = 'no'
    }
}

console.log(answer)


//2
let num = prompt("give me a number")
let counter = 0
for(let i = 0; i < num.length; i++) {
    if(num[i] == 0) {
        counter += 1 
    } 
}

if (counter <= 1) {
    console.log("Nothing to remove")
} else {
    let newNum = ""
    for (let i = 0; i < num.length; i++) {
        if (num[i] != 0 || i == num.length - 1) {
            newNum += num[i]
        }
    } 
    console.log(newNum)
}

// 3

let a = +prompt("give me a number")
let answer

if (a == 1) {
    answer = false
} else {
    answer = true
}

for (let b = 2; b <= a/2; b++) {
    if (a % b == 0) {
        answer = false
        break
    }
}
console.log(answer)



//4

let n = +prompt("give me a number")
let flag
let counter = 1
for (let num = 3; ; num += 2) {
    flag = true
    for (let i = 3; i*i <= num; i += 2) {
        if (num % i == 0) {
            flag = false
            break
        }
    }
    if (flag) {
        counter += 1
        if (counter == n) {
            console.log(num)
            break
        }
    }
}



//5

let n = +prompt("give me a number between 1 and 10")
let m = +prompt("give me a power between 1 and 10")

console.log(n**m)