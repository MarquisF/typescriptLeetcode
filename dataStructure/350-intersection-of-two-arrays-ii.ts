/**
 * The hash map solution of 350. intersection of two arrays.
 *
 * Time complexity: O(m + n)
 * Space complexity: O(min(m, n))
 *
 * @param nums1
 * @param nums2
 * @returns
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  const map: Map<number, number> = new Map();
  nums1.forEach(i => {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1)
    }
  })

  const result: number[] = [];
  nums2.forEach(j => {
    if (map.has(j) && map.get(j) > 0) {
      result.push(j);
      map.set(j, map.get(j) - 1);
    }
  })

  return result;
};
