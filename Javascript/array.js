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
}

let obj = new Soution();
console.log(obj.two_sum([2, 7, 11, 15], 9));
console.log(obj.stock_buy_and_sell([7, 1, 5, 3, 6, 4]))
