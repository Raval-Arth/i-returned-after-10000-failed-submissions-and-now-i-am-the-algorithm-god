#  A Palindrome is the Perfect Cycle.
#  The Ouroboros.
#  The Beginning is the End, and the End is the Beginning.
#  If a number looks into the Mirror of Reversal and sees itself unchanged,
#  it has attained the Dao of Symmetry.

#  The Technique:
#  Invoke the Reverse Flow technique.
#  If the reflection matches the body, the Dao is preserved.


class Solution:

    def palindromNumber(self, n):
        copy = n
        revNum = 0
        while n > 0:
            lastDigit = n % 10
            revNum = revNum * 10 + lastDigit
            n = n // 10

        return copy == revNum


obj = Solution()
num = 12321
print(obj.palindromNumber(num))
