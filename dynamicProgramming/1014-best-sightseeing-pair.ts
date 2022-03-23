/**
 * The dynamic programming implementation of 1014.
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 * @param values 
 * @returns 
 */
function maxScoreSightseeingPair(values: number[]): number {
  let maxFirstSpot = values[0] + 0;
  let maxSpot = 0;
  for (let i = 1; i < values.length; i++) {
    // The maxFirstSpot is the maximum spot from the beginning
    //  to the previous index of the provided array.
    //
    maxSpot = Math.max(maxFirstSpot + values[i] - i, maxSpot);
    // Update the maxFirstSpot according to the current index and value.
    maxFirstSpot = Math.max(maxFirstSpot, values[i] + i);
  }
  return maxSpot;
};
