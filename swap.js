function swapNumbers() {
    
    let a = 20;
    let b = 10;

    console.log("Before swapping: a =", a, "b =", b);

    let temp = a;
    a = b;
    b = temp;

    console.log("After swapping: a =", a, "b =", b);

    
    const resultElem = document.getElementById("result");
    resultElem.textContent = `Before swap: a = 20, b = 10 → After swap: a = ${a}, b = ${b}`;
}