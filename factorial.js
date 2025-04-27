// 5!= 5*4*3*2*1= 120
// 6!= 6*5*4*3*2*1= 720
// 6!= 6*5!=720
// 0!= 1

function factorial(n) {
    let result = 1;
    if (n != 0) {
        for (let i = 2; i <= n; i++) {
            result = result * i;
        }
    }
    console.log(`The result is ${result}`);
    return result;
}
factorial(0);




// function factorial(n) {
//     let result = 1;
//     if (n == 0) {
//         return 1;
//     }
//     else if (n < 0) {
//         return "Invalid Input";
//     }
//     else {
//         for (let i = 2; i <= n; i++) {
//             result = result * i;
//         }
//         return result;
//     }
    
// }
// console.log(`The result is ${factorial(5)}`);

