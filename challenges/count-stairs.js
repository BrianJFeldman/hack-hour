/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
    let obj = {"0":0, "1":1}
    function fib(n){
        // if(n<=2) return 1
        // return fib(n-1) + fib(n-2)
        if (obj[n] !== undefined) return obj[n]
        return obj[n]= fib(n - 1) + fib(n - 2)
    }
    return fib(n)
}
console.log(countStairs(1477))
module.exports = countStairs;
