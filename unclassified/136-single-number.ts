function singleNumber(nums: number[]): number {
    const freqDictionary = {};

    for (let num of nums) {
        if (freqDictionary[num]) {
            freqDictionary[num] ++;
        } else {
             freqDictionary[num] = 1;
        }
    }

    for (let num in freqDictionary) {
        if (freqDictionary[num] === 1) {
            return parseInt(num);
        }
    }
};
