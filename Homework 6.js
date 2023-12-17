//1. includes()


function testIncludes(a, b, n=0) {
    let result = false
    let newString = ""
    for (let i = n; i <= a.length - b.length; i++) {
        for (let j = i; j < i + b.length; j++) {
            newString += a[j]
        }
    
        if (newString == b) {
            result = true
            break
        }
    
        newString = ""
    }

    return result
} 


// 2. charAt()

let a = "Albina"

console.log(a.charAt(2))
console.log(a[2])



// 3. 
startsWith()

function testStartsWith(a, b, n = 0) {
    let result
    for (let i = n; i < b.length; i++) {
        if (b[i] !== a[i]) {
            result = false
            break
        } else {
            result = true
        }
    } 
    return result
}


testStartsWith('Albina', 'Alb', 0)

//4.  endsWith()



function testEndsWith(a, b, n = a.length) {
    let result
    let str = ""
    for (let i = n - b.length; i < n; i++) {
        str += a[i]
    }
    for (let j = 0; j < str.length; j++) {
        if (b[j] !== str[j]) {
            result = false
            break
        } else {
            result = true
        }
    }
    return result
}

5. //replaceBy()



function testReplace (str, toFind, replaceBy) {
    let newStr = ""
    let result = ""
    for (let i = 0; i <= str.length - toFind.length; i++) {
        for (let j = i; j < toFind.length + i; j++) {
            newStr += str[j]
        } 
        
        if (newStr == toFind) {
            for (let k = 0; k < i; k++) {
                result += str[k]
            }
            
            result += replaceBy
            
            for (let z = i + toFind.length; z < str.length; z++) {
                result += str[z]
            }
    
            return result
            break
        }  else {
            newStr = ""
        }
    }

    return str
}


6.// replaceAll()

