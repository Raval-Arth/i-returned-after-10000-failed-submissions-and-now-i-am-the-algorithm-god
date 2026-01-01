// Calculate the count of digits in 'n'
// using logarithmic operation log10(n) + 1.
function countDigits(n) {
    let cnt = Math.floor(Math.log10(n) + 1);
    return cnt;
}

let N = 329823;
console.log("N: " + N);
let digits = countDigits(N);
console.log("Number of Digits in N: " + digits);
