function getMaxValue(array) {
    let maximumValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maximumValue < array[i]) {
            maximumValue = array[i];
        }

    }
    console.log(`The maximum number is ${maximumValue}`);

}
getMaxValue([2, 33, 10, 12, 50]);