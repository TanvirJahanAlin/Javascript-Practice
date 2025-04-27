function condition(mark) {

    if (mark >= 80 && mark <= 100) {
        console.log("You got A+");
    }
    else if (mark >= 75 && mark <= 79) {
        console.log("You got A");
    }
    else if (mark >= 70 && mark <= 74) {
        console.log("You got A-");
    }
    else if (mark >= 60 && mark <= 69) {
        console.log("You got B");
    }
    else if (mark >= 50 && mark <= 59) {
        console.log("You got C");
    }
    else if (mark >= 40 && mark <= 49) {
        console.log("You got D");
    }
    else if (mark >= 0 && mark <= 39) {
        console.log("You got F");
    }
    else {
        console.log("Invalid mark");
    }
}
condition(88);