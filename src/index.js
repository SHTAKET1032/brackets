module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        for (let j = 0; j < bracketsConfig.length; j++) {
            let openBracket = bracketsConfig[j][0];
            let closeBracket = bracketsConfig[j][1];

            if (char === openBracket) {
                stack.push(char);
            } else if (char === closeBracket) {
                if (stack.length === 0 || stack[stack.length - 1] !== openBracket) {
                    return false;
                }
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}
