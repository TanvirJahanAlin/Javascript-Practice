// function switchCase(fruit){
//  switch (fruit) {
//         case "apple":
//             console.log("You chose an apple.");
//             break;
//         case "banana":
//             console.log("You chose a banana.");
//             break;
//         case "orange":
//             console.log("You chose an orange.");
//             break;
//         default:
//             console.log("Unknown fruit.");
//     }
    
// }
// switchCase("apple");

   



function switchCase(day){
    switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`The day is ${dayName}`);

}
switchCase(3);

