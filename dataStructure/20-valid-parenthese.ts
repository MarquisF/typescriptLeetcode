const parentheseMap = {
  '(': ')',
  '[': ']',
  '{': '}',
}

function isValid(s: string): boolean {
  /**
   * It's a char array
   */
  const stack: string[] = [];
  for (const char of s.split('')) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else {
      // @ts-ignore
      if (parentheseMap[stack[stack.length - 1]] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
