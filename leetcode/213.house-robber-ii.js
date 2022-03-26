const rob = function (nums) {
  const total = nums.length;
  if (total === 1) return nums[0];

  function robImpl(arr) {
    const len = arr.length;
    const dp = new Array(len).fill(0);
    const [first, second] = arr;
    dp[0] = first;
    dp[1] = Math.max(first, second);

    for (let i = 2; i < len; i += 1) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    }

    return dp[len - 1];
  }

  return Math.max(robImpl(nums.slice(0, total - 1)), robImpl(nums.slice(1)));
};
