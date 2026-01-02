// A Palindrome is the Perfect Cycle. 
// The Ouroboros. 
// The Beginning is the End, and the End is the Beginning. 
// If a number looks into the Mirror of Reversal and sees itself unchanged, 
// it has attained the Dao of Symmetry.

// The Technique:
// Invoke the Reverse Flow technique.
// If the reflection matches the body, the Dao is preserved.

const isPalindrome = (n) => {
    let copy = n
    if (n < 0) return false;
    let reverse = 0;
    while (n > 0) {
        let lastdigit = n % 10
        reverse = reverse * 10 + lastdigit
        n = Math.floor(n / 10)
    }

    return copy == reverse
}

const num = 12321
console.log(isPalindrome(num))