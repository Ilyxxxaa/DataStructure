// Задача про скобки

function bracketsIssue() {
  const openBrackets = ['(', '{'];
  const bracketsPair = {
    ')': '(',
    '}': '{',
  };

  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let current = str[i];

      if (openBrackets.includes(current)) {
        stack.push(current);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topEl = stack[stack.length - 1];

        if (bracketsPair[current] === topEl) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  console.log('  check case - ()(()()) -', isBracketsOk('()(()())'));
  console.log('  check case - ())(() -', isBracketsOk('())(()'));
  console.log('  check case - (){}({}()) -', isBracketsOk('(){}({}())'));
  console.log('  check case - (}({}()) -', isBracketsOk('(}({}())'));
  console.log('  check case - ((()) -', isBracketsOk('((())'));
}

bracketsIssue();
