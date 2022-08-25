// Given a string S, find the least occurring character in the input string S.
// e.g., if the input string is “tests” then the output should be ‘e’.

// Note: If there are more than 1 characters with least count than display the smallest character.

// Input:
//     hello
//     where:
// First line represents the input string S.
// Output:
//     e
// Explanation:
// Characters 'h','e' and 'o' occurs only once and 'e' has the smallest ASCII value among them.
//how many dublicate charector 
minchar=(str)=>{
    let str1=str.split('') ,count=123,am=[],hash=new Map
    for(let i=0;i<str1.length; i++){
        if(hash.get(str1[i])==undefined) hash.set(str1[i],1)
        else hash.set(str1[i],hash.get(str1[i])+1)
    }
    for(let pairs of hash){
        if(pairs[1]>1){
            am.push(pairs[0])
        }
    }
    return am
}
// ispalidrom
isPali=(num)=>{
    let num2=num.toString()
    if(num2.length<=1) return true
    return (num2[0]==num2.slice(-1)&& isPali(num2.slice(1,-1)))
}
// console.log(isPali(121))
// const result = minchar('hello')
// console.log(result)


//dublicate number how many exicts
dublicate=(num)=>{
    let rArrLen = 0;
        let obj = {};
        for(let element of num){
            obj[element] = obj[element]+1 || 1;
        }
        for(let k in obj){
            if(obj[k] > 1){
                num[rArrLen] = k * 1;
                rArrLen++;
            }
        }
        if(rArrLen)
        return num.slice(0,rArrLen);
        return [-1];
}

// console.log(dublicate([3,4,4,5,3]))

// remove dublicate a charector
dpChar=(str)=>{
    let str2=str.trim().split('')
    let str3=[... new Set(str2)]
    return str3.join('')
}
// console.log(dpChar('aabbccd'))

dpNum=(num1)=>{
    let num2 = num1.toString().split('')
    let m =[... new Set(num2)]
    return m.join('')
}

// console.log(dpNum(1111234556666))
// Smallest window that contains all characters of string itself
// Given a string S, find the smallest window(substring) length with all distinct characters of the given string.
// Input:
//     aabbcc
//     where:
// First line represents input string S.
// Output:
//     4
// Explanation:
// abbc of length 4 is the smallest window with the highest number of distinct characters.
// Assumptions:
//  Character comparisons will be case-sensitive.
//power of the number

isPaw=(n,p)=>{
    if(p==0){
        return 1
    }
    return n*isPaw(n,p-1)
}

// console.log(isPaw(2,4))

isfibon=(n)=>{
    if(n<=2){
        return 1
    }
    return isfibon(n-1)+isfibon(n-2)
}
// console.log(isfibon(12))

//aray product
isArrPaw=(arr) => {
 if(arr.length == 0 ){
    return 1
 }
 return arr[0]*isArrPaw(arr.slice(1)) 
}
// console.log(isArrPaw([1,2,5]))

array of product 
isProduct=(pwd)=>{
    if(pwd.length==0){
        return 1
    }
    let i=0
    let j=pwd.length-1

//     return pwd[i]*isProduct(pwd[j-1])
// }


// console.log(isProduct([2,4,6,3]))

function checkString(str) {
    let isBinary = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "0" || str[i] == "1") {
        isBinary = true;
      } else {
        isBinary = false;
      }
    }
    return isBinary;
  }
//   console.log(checkString(100))
//   let arr=[4,5,6,3,7,8]
//   //let array is 
//   let max=0;
//   let obj={}
//   for(let i=0;i<arr.length;i++){
//     obj[arr[i]]+=1
//     if(max<obj[arr[i]]){
//         max=obj[arr[i]];
//         console.log(max)
//     }
//     else{
//         obj[arr[i]]=1;
//     }
//   }

// total=(current,totalCont, array)=>{
//     //find the elements in the array that do not contain 0                      
//     for(let i=0; i<array.length; i++){
//      if(array[i]!= 0){
//         //base case                                                                              
//         if(current == totalCont){
//           return array[i];
//         }
//         //recursive case                                                                         
//         else{
//           (array[current][i]) * (total(current+1, totalCont, array));
//         }
//       }
//     }
//   }
//   console.log(total(0,4,[2,4,5]))