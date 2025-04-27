function whileLoop() {
    const text = ["Hello World", 8, "I am Alin"];
    let i = 0;
    while (i < text.length) // while (i<=text.length-1)
    {
        console.log(`current value of Index ${i} is : ${text[i]}`);
        i++;
    }
}
whileLoop();