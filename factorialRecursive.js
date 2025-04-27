// 5!= 5*4*3*2*1= 120
// 6!= 6*5*4*3*2*1= 720
// 6!= 6*5!=720
// 0!= 1


function factorialRecursive(n) {
    let result = 1;
    if (n == 0 || n==1 ) {
        return 1;
    }
    else if (n < 0) {
        return "Invalid Input";
    }
    else {
        let result = n*factorial(n-1);
        return result;
    }
    
}
console.log(`The result is ${factorialRecursive(5)}`);
