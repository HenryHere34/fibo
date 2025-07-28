const display = document.getElementById("spanText");
document.getElementById("calcButton");
let fibo = [0, 1, 1]
function runCalc() {
    setInterval(() => {
        const tempRes = Math.floor(fibo[1] + fibo[2]) // calculation
        fibo.push(tempRes) // add result
        fibo.shift() // remove first element
        display.textContent = fibo;
        console.log(fibo)
    }, 1000) // loop on mseconds
}
display.textContent = fibo;