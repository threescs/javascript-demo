/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 找到一个数组中第n大的数
 * 先倒序排序取第n-1下标
 */
const findKthLargest = (nums, k) => {
    const _k = Math.max(Math.min(nums.length, k), 1)
    return nums.sort((n1, n2)=> n2-n1)[_k - 1]
};

findKthLargest([3, 2, 1, 5, 6, 4], 2)
// 6 5 4 3 2 1 
// 5
