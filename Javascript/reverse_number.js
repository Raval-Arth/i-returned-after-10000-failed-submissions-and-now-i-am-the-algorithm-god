// Scripture: “Turn the river of fate upstream; what remains is truth.”

/**
 * A Palindrome is the Perfect Cycle. 
 * The Ouroboros. 
 * The Beginning is the End, and the End is the Beginning. 
 * If a number looks into the Mirror of Reversal and sees itself unchanged, 
 * it has attained the Dao of Symmetry.
 */

class Solution {
    reverseNumber(n) {
        let revNum = 0;
        while (n > 0) {
            let lastDigit = n % 10;
            revNum = revNum * 10 + lastDigit;
            n = Math.floor(n / 10)
        }
        return revNum;
    }
}

const obj = new Solution();
const num = 12345;
console.log(obj.reverseNumber(num));  // Output: 54321
