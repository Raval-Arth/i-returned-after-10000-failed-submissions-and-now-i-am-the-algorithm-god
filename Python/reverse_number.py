# Scripture: “Turn the river of fate upstream; what remains is truth.”

# A Palindrome is the Perfect Cycle.
# The Ouroboros.
# The Beginning is the End, and the End is the Beginning.
# If a number looks into the Mirror of Reversal and sees itself unchanged,
# it has attained the Dao of Symmetry.


class Solution:
    def reverseNumber(self, n):
        revNum = 0
        while n > 0:
            lastDigit = n % 10
            revNum = revNum * 10 + lastDigit
            n = n // 10
        return revNum


# Driver code
obj = Solution()
num = 12345
print(obj.reverseNumber(num))  # Output: 54321
