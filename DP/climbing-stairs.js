// Using tabulation - bottom-up approach
function tabulateCount(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i=2; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// Using Memoization - top-down approach
function countPossibleWays(n, dp) {
    if(n<=1) {
        dp[n] = 1;
        return dp[n];
    }
    if(dp[n] !== -1) return dp[n];
    dp[n] = countPossibleWays(n-1, dp) + countPossibleWays(n-2, dp);
    return dp[n];
}

(function main() {
    console.log(tabulateCount(4));
    //Memoization trigger
    const dp = new Array(4+1).fill(-1);
    console.log(countPossibleWays(4, dp));
})();