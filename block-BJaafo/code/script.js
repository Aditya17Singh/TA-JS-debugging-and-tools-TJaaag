function name1 (firstName , lastName){
    return firstName + " " + lastName;
}
let result = name1("adi","singh");
let expected = "adi sing";

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}
// let result = name1("aditya","singhh")
// let expected = "aditya singhh"
// if(result !== expected){
//     throw new Error(`${result} is not equal to ${expected}`)
// }

function amount (amount,taxRate){
    return amount + (amount * taxRate)
}
let result1 = name1(2,4);
let expected1 = 10;

if(result1 !== expected1){
    throw new Error(`${result1} is not equal to ${expected1}`)
}