// condition? expression1 : expression2 - Ternary operator

function oddEven(data) {

    for (let i = 0; i < data.length; i++) {
        (data[i] == 0) ? console.log(`${data[i]} is Even number`) :
            (data[i] % 2 == 0) ? console.log(`${data[i]} is Even number`) :
                console.log(`${data[i]} is Odd number`);

    }
}
oddEven([20, 1, 8, 0, 33, 7]);