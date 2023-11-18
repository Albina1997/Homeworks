// 1 FOR

let a = prompt("give me number") // Принимаем число на вход (получаем string)
a = Math.abs(a)                  // Находим модуль от числа (получаем number)
a = a.toString()                 // Конвертируем number обратно в string

let counter = 0

for (let symb of a) {
    counter += 1
}
console.log(counter)

// 1 WHILE

let a = prompt('give me a number')

let counter = 0

if (a === 0) {
    counter = 1
} else {
    while (a !== 0) {
    a = Math.trunc(a / 10)
    counter += 1
    }
}

console.log(counter)

// 2 FOR

let a = prompt("give me number")
let counter = 0
for (let digit of a) {
    if (digit == 9) {
        counter += 1
    }

}

console.log(counter)

// 2 WHILE

let a = Math.abs(prompt('give me a number'))
let counter = 0

while(a !== 0) {
    if (a % 10 === 9) {
    counter += 1
    }
    a = Math.trunc(a / 10)
}

console.log(counter)

// 3

let a = +prompt('give me the first number')
let b = +prompt('give me the second number')

let num1
let num2

if (a < b) {
    num1 = a
    num2 = b
} else {
    num1 = b
    num2 = a
}

for (let i = num1 + 1; i < num2; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}


// 4

let a = prompt('give me a number')
let b = ''

for(let i = 0; i < a.length; i++) {
    if(a[i] % 2 === 0 && a[i+1] % 2 === 0) {
        b += a[i] + '-'
    } else {
        b += a[i]
    }
}

console.log(b)


// 5

let a = prompt('give me a number')
let b = ''

for(i = a.length - 1; i >= 0; i--) {
    b += a[i]
}

console.log(Number(b))