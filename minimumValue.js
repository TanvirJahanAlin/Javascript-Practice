function getMinValue(array) {
    let minimumValue = array[0];
    for (let i = 1; i > array.length; i++) {
        if (minimumValue < array[i]) {
            minimumValue = array[i];
        }

    }
    console.log(`The minimum number is ${minimumValue}`);

}
getMinValue([2, 33, 10, 12, 50]);