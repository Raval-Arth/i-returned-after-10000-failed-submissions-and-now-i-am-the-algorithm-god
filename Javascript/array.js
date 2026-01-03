class Soution {
    two_sum(nums, target) {
        let arr = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i]

            if (arr.has(complement)) {
                return [arr.get(complement), i]
            }

            arr.set(nums[i], i)
        }
    }

    stock_buy_and_sell(stocks) {
        let maxProfit = 0
        let min_stock = Infinity
        for (let stock of stocks) {
            min_stock = stock < min_stock ? stock : min_stock
            let profit = stock - min_stock
            maxProfit = Math.max(profit, maxProfit)

        }
        return maxProfit
    }

    contain_duplicate(nums) {
        let num_set = new Set(nums)

        console.log('nums.length: ', nums.length);
        console.log('num_set.length: ', num_set.length);
        if (nums.length == num_set.length) return false
        return true
    }

    product_array_except_self(nums) {

        let result = new Array(nums.length).fill(1);

        let prefix = 1
        for (let i = 0; i < nums.length; i++) {

            result[i] = prefix
            prefix = prefix * nums[i]
        }

        let sufix = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= sufix
            sufix *= nums[i]
        }

        return result
    }
}

let obj = new Soution();
console.log(obj.two_sum([2, 7, 11, 15], 9));
console.log(obj.stock_buy_and_sell([7, 1, 5, 3, 6, 4]))
console.log(obj.contain_duplicate([1, 2, 3, 4]))
console.log(obj.product_array_except_self([1, 2, 3, 4]))
