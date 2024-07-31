// 1.programs in annoymous function and IIFE

//a)to print odd numbers in an array
//Annoymous function
let odd=[];
const printodd=function(arr){
    arr.forEach(num=>{
      if(num%2!==0){
        odd.push(num);
      }
    }
);};
printodd([1,5,6,8,2,34,5]);
console.log(odd);

// IIFE
let odd1=[];
(function(arr){
    arr.forEach(num=>{
    if(num%2!==0){
        odd1.push(num);
    }});
})([1,4,7,32,91,23,24,34]);
console.log(odd1);

//b)to Convert all the strings to title caps in a string array.in Javascript
//Annoymous function
let titlecaps=function(arr){
    return arr.map(str=>str.charAt(0).toUpperCase()+str.slice(1).toLowerCase());
}
console.log(titlecaps(["hello","world"]));

//IIFE
(function(arr){
    console.log(arr.map(str=>str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()));
})(["hello","world"]);

//c)sum of all numbers in an array
//Annoymous function
let sum=function(arr){
    let total=0;
    arr.forEach(num=>{
        total+=num;
    })
    return total;
}
console.log(sum([1,2,3,4,5,6,7]));

//IIFE
(function(arr){
    let sum=0;
    arr.forEach(num=>{
        sum+=num;
    })
    console.log(sum);
})([1,2,3,4,5,6,7]);

// d)to return all prime numbers in an array
//Annoymous function
let prime_number=function(arr){
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}
console.log(prime_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 13]))

//IIFE
let prime=(function(arr){
    let number=arr.filter(num=>{
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    })
    return number;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 13]);
console.log(prime);

// e)to return all palindrome in an Array
//Annoymous function
let palindrome=function(arr){
    return arr.filter(char=>char===char.split("").reverse().join(""));
}
console.log(palindrome(["level", "hello", "world", "racecar"]));

//IIFE
(function(arr){
    console.log(arr.filter(char=>char===char.split("").reverse().join("")));
})(["level", "hello", "world", "racecar"]);

//f)Return median of two sorted arrays of the same size:
//Annoymous function
let median=function(arr,arr2){
     const merged=arr.concat(arr2).sort((a,b)=>a-b);
     const mid=Math.floor(merged.length/2);
     if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}
console.log(median([1, 3, 5], [2, 4, 6]));

//IIFE
(function(arr,arr2){
    const merged=arr.concat(arr2).sort((a,b)=>a-b);
     const mid=Math.floor(merged.length/2);
     if (merged.length % 2 === 0) {
        console.log((merged[mid - 1] + merged[mid]) / 2);
    } else {
        console.log( merged[mid]);
    }
})([1, 3, 5], [2, 4, 6]);

//g)to remove duplicates from an array
//Annoymous function
let unique=function(arr){
    let set=new Set(arr);
    return set;
}
console.log(unique(["hello","world","hello","world"]));

//IIFE
(function(arr){
    let set=new Set(arr);
    console.log(set);
})(["hello","world","hello","world"]);

//h)rotate an array by k times
//Annoymous function
const rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 3));

//IIFE
const rotatedArray = (function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
})([1, 2, 3, 4, 5], 3);
console.log(rotatedArray);


//2.programs in arrow function
//to print odd numbers
let odd_numbers=arr=>{
    return arr.filter(num=>num%2!==0);
}
console.log(odd_numbers([1, 2, 3, 4, 5]));

//to convert all strings to titlecaps
let titlecaps1=arr=>{
    return arr.map(char=>char.charAt(0).toUpperCase()+char.slice(1).toLowerCase());
}
console.log(titlecaps(["hello","world"]));

//sum of an array
let sum1=arr=>{
    return arr.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum1([1,2,3,4,5,6,7]));

//to return all prime numbers
const findPrimes = arr => {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//to return palindrome values
let palindrome1=arr=>{
    return arr.filter(str=>str===str.split('').reverse().join(''));
}
console.log(palindrome1(["level", "hello", "world", "racecar"]));