//1

let n = +prompt()

for (let i = 10; i < 1000; i++) {
    if (i.toString().length == 2) {
        if (i.toString()[0] * i.toString() [1] == n) {
            console.log(i.toString()[0] + i.toString() [1])
            break
        }
    }

    if (i.toString().length == 3) {
        if (i.toString()[0] * i.toString()[1] * i.toString()[2] == n) {
            console.log(i.toString()[0] + i.toString() [1] + i.toString() [2])
            break
        }
    }
}



//2 
let num1 = +prompt ("give me a number")
let num2 = +prompt ("give me a number")
while (num1 != 0 & num2 != 0) {
    if (num1 > num2) {
     num1 = num1 % num2 
  } else {
        num2 = num2 % num1
     }
} 
console.log(num1 + num2)



// 3

let n = +prompt() let res = []
let isPrime

if (n % 2 == 0) {
    res.push(2)
}

for (let i = 3; i <= n / 2; i += 2) {
    isPrime = true
    
    if (n % i == 0) {
        for (let j = 3; j <= i / 2; j += 2) {
            if (i % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            res.push(i)
        }
    }
}

console.log(res.join(', '))


//4 


let n = +prompt()
let res = 1

for (i = 2; i <= n; i++) {
    res *= i
}

console.log(res)



//5 

let n = +prompt() 

if (n == 0) { 
    console.log(0)
} else { 
    let a = 1 
    let b = 1 
    
    for (let i = 3; i <= n; i++) { 
        let c = a + b 
        a = b
        b = c
    } 
    console.log(b)
}



//6

let n = +prompt()
let res = [0, 1]

for (let i = 0; res[i] + res[i+1] < n; i++) {
    res.push(res[i] + res[i+1])
}
console.log(res.join(', '))
}
