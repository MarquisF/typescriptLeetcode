/**
 * Levenstein distance(Chinese：莱文斯坦距离):
 * https://en.wikipedia.org/wiki/Levenshtein_distance
 *
 * Dynamic programming table playground of this algorithm:
 *  https://alchemist-al.com/algorithms/edit-distance
 *
 * This distance was considered by a Soviet mathematician named
 *  Vladimir Levenstein(Russian: Влади́мир Ио́сифович Левенште́йн).
 *
 * Time complexity: O(mn)
 * Space complexity: O(mn)
 *
 * @param word1
 * @param word2
 * @returns
 */
function minDistance(word1: string, word2: string): number {
  const word1Length = word1.length;
  const word2Length = word2.length;
  /**
   * Create the dynamic programming matrix to store the Levenstein distances.
   *  if word1 == "horse" && word2 == "ros", then levDp will be
   *   [
   *     [ 0, 0, 0, 0 ],
   *     [ 0, 0, 0, 0 ],
   *     [ 0, 0, 0, 0 ],
   *     [ 0, 0, 0, 0 ],
   *     [ 0, 0, 0, 0 ],
   *     [ 0, 0, 0, 0 ]
   *   ]
   *  after the creation.
   *
   * (The fill(0) operation of the last step is not actually necessary.)
   */
  const levDp: number[][] = new Array(word1Length + 1)
    .fill(0)
    .map(() => new Array(word2Length + 1).fill(0));

  // Initialization
  //
  // If word1 == "horse" && word2 == "ros",
  //  after the following two loop operations the matrix will be
  //   [
  //     [ 0, 1, 2, 3 ],
  //     [ 1, 0, 0, 0 ],
  //     [ 2, 0, 0, 0 ],
  //     [ 3, 0, 0, 0 ],
  //     [ 4, 0, 0, 0 ],
  //     [ 5, 0, 0, 0 ]
  //   ]
  //
  //
  for (let i = 0; i <= word1Length; i++) {
    levDp[i][0] = i;
  }
  for (let j = 0; j <= word2Length; j++) {
    levDp[0][j] = j;
  }

  // After the following operation,
  //  if word1 == "horse" && word2 == "ros",
  //  then the final result of the dynamic programming matrix will be
  //
  //  [
  //    [ 0, 1, 2, 3 ],
  //    [ 1, 1, 2, 3 ],
  //    [ 2, 2, 1, 2 ],
  //    [ 3, 2, 2, 2 ],
  //    [ 4, 3, 3, 2 ],
  //    [ 5, 4, 4, 3 ]
  //  ]
  //
  for (let i = 1; i <= word1Length; i++) {
    for (let j = 1; j <= word2Length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        levDp[i][j] = levDp[i - 1][j - 1];
      } else {
        /**
         * In the following situation
         *  [
         *    [a, b]
         *    [c, x]
         *  ]
         * ,
         *  the value of x is
         *  x = min(a, b, c) + 1
         *
         */
        levDp[i][j] = Math.min(
          levDp[i - 1][j - 1],
          levDp[i][j - 1],
          levDp[i - 1][j],
        ) + 1;
      }
    }
  }

  return levDp[word1Length][word2Length];
};
