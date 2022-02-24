/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const length = nums1.length > nums2.length ? nums1.length : nums2.length;
  const isEven = totalLength % 2 === 0;
  const returnmedian = (first, second) => {
    if (isEven) {
      const i = totalLength / 2,
        j = totalLength / 2 - 1;
      if (j > first.length) {
        return (
          (second[j - (first.length - 1)] + second[i - (first.length - 1)]) / 2
        );
      } else if (i < first.length) {
        return (first[j] + first[i]) / 2;
      } else {
        return (first[j] + second[0]) / 2;
      }
    } else {
      console.log("ass");
      const center = totalLength / 2 - 0.5;
      if (center >= first.length) {
        return second[center - (first.length - 1)];
      } else {
        return first[center];
      }
    }
  };
  if (nums1[nums1.length - 1] <= nums2[0]) {
    return returnmedian(nums1, nums2);
  } else if (nums2[nums2.length - 1] <= nums1[0]) {
    return returnmedian(nums2, nums1);
  } else {
    const totalLength = nums1.length + nums2.length;
    const isEven = totalLength % 2 === 0;
    const x = nums1.concat(nums2).sort((a, b) => a - b);
    if (!isEven) return x[x.length / 2 - 0.5];
    else return (x[x.length / 2 - 1] + x[x.length / 2]) / 2;
  }
};
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 3], [4, 5]));
console.log(findMedianSortedArrays([2, 2, 2], [2, 2, 2, 2]));
console.log(findMedianSortedArrays([3], [-2, -1]));
