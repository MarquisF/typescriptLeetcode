
/**
 * The dymanic programming implementation of Min cost climbing stairs.
 *  Time complexity: O(n);
 *  Space complexity: O(1);
 */
function minCostClimbingStairs(cost: number[]): number {
    let minFromStep0 = 0;
    let minFromStep1 = 0;
    let minLastStepCost = 0;
    for (let i = 0; i < cost.length - 1; i ++) {
        minFromStep0 = minFromStep1;
        minFromStep1 = minLastStepCost;
        minLastStepCost = Math.min(minFromStep0 + cost[i], minFromStep1 + cost[i + 1])
    }
    return minLastStepCost;
};
