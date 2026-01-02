class Solution {

    // Scripture: “To know the enemy, first count its masks.”
    count_digits(n) {
        return Math.floor(Math.log10(n) + 1)
    }

    // A Palindrome is the Perfect Cycle. 
    // The Beginning is the End, and the End is the Beginning. 
    // If a number looks into the Mirror of Reversal and sees itself unchanged, 
    // it has attained the Dao of Symmetry.

    // The Technique:
    // Invoke the Reverse Flow technique.
    // If the reflection matches the body, the Dao is preserved.
    is_paligdrom_number(n) {
        let rev_num = 0;
        while (n > 0) {
            let last_digit = n % 10
            rev_num = rev_num * 10 + last_digit
            n = Math.floor(n / 10)
        }
        return rev_num
    }

    // Scripture: “Turn the river of fate upstream; what remains is truth.”

    /**
     * A Palindrome is the Perfect Cycle. 
     * The Ouroboros. 
     * The Beginning is the End, and the End is the Beginning. 
     * If a number looks into the Mirror of Reversal and sees itself unchanged, 
     * it has attained the Dao of Symmetry.
     */
    reverse_number(n) {
        let revNum = 0;
        while (n > 0) {
            let lastDigit = n % 10;
            revNum = revNum * 10 + lastDigit;
            n = Math.floor(n / 10)
        }
        return revNum;
    }

}

let obj = new Solution();
console.log(obj.count_digits(1010101010));
console.log(obj.is_paligdrom_number(12321));
console.log(obj.reverse_number(12321));