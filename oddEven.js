function oddEven(data) {

    for (let i = 0; i < data.length; i++) {
        if (data[i] == 0) {
            console.log(`${data[i]} is Even number`);
        }
        else if (data[i] % 2 == 0) {
            console.log(`${data[i]} is Even number`);
        }
        else {
            console.log(`${data[i]} is Odd number`);
        }
    }
}
oddEven([20, 1, 8, 0, 33, 7]);