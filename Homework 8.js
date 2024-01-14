1. Bubble for
arr = [2, 8, 1, 0, 9, 6, 3, 7] 
for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            let num = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = num
        }
    }
}


2. while
arr = [2, 8, 1, 0, 9, 6, 3, 7] 
let step = 0
while (step < arr.length) {
    for (let i = 0; i < arr.length - 1 - step; i++) {
        if (arr[i] > arr[i + 1]) {
            let num = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = num
        }
    }
    step += 1
}
console.log(arr)