1.  find


let a = +prompt("give me a number")
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function graterThan(num) {
    for (let i =  0; i < array.length; i++) {
        if (array[i] > num) {
            return array[i]
        }
    }
}
graterThan(a)


2.  filter


let a = +prompt("give me a number")
let array = [1, 20, 63, 4, 5, 16, 7, 8, 3, 1]
let result = []
function greaterThan(num) {
    for (let i =  0; i < array.length; i++) {
        if (array[i] > num) {
            result.push(array[i])
        }
    }
    return result
}
graterThan(a)


3.  forEach

let array = [1, 20, 63, 4, 5, 16, 7, 8, 3, 1]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}



4․ some 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function greaterThan(num) {
    for (let i =  0; i < array.length; i++) {
        if(array[i] > num) {
            return true
        }
    }
    return false 
}

5.  every

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function greaterThan(num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= num) {
            return false
        }
    }
    return true
}


6.  map



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res = []
function multiplyBy (num) {
    for (let i = 0; i < array.length; i++) {
        res.push(array[i]*num)
    }
    return res
}
       


7. reduce 


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function reduceSum (prev = 0) {
    for (let i = 0; i < array.length; i++) {
        prev += array[i]
    }
    return prev
}




