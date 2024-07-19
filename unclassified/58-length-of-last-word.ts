function lengthOfLastWord(s: string): number {
    const trimmedList = s.split(" ").filter(i => i !== "").map(i => i.trim());
    return trimmedList[trimmedList.length - 1].length;
};
