function longestCommonPrefix(strs: string[]): string {
  const prefixLetterList: string[] = [];
  const firstStr = strs[0];
  for (let i = 0; i < firstStr.length; i++) {
    const letter = firstStr[i];
    for (let str of strs) {
      if (str[i] !== letter) {
        return prefixLetterList.join("");
      }
    }
    prefixLetterList.push(letter);
  }
  return prefixLetterList.join("");
}
