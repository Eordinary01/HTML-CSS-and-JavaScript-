// (map)
 
let arr = [25, 36, 78]

let a = arr.map((value,index,array)=>{
    console.log(value, index,array)
    return value +7 
});
console.log(a)
 

// (filter)
 /*
 let Arr = [45, 25, 69, 28, 12, 15, 20];
let Ar = Arr.filter((a)=>{
    return a<30
});
console.log(Ar);
*/

//(reduce) 

let Arr = [1, 2, 3, 5, 8, 5, 7, 9]
let ARR = Arr.reduce((a1, a2)=>{
    return a1 + a2
});
console.log(ARR)




