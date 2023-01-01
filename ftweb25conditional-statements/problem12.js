// Given 3 numbers (all different values), print which is greatest

let a=3;
let b=4;
let c=90;

// 1st way using if..else if..else 


// if((a>b)&&(a>c)){
//   console.log("a is greatet");
// }
// else if((b>c)&&(b>a)){
//   console.log("b is greatest");
// }
// else{
//   console.log("c is greatest");
// }


// 2nd way using ternary operator
((a>b)&&(a>c)) ? console.log("a is greatet") : ((b>c)&&(b>a)) ? console.log("b is greatest") : console.log("c is greatest")