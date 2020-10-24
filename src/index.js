module.exports = function check(str, bracketsConfig) {
    const stack = [];
    bracketsConfig = Object.fromEntries(bracketsConfig);

    for (let element of str.split("")) {
        if (stack[0] === element) {
            stack.shift();
        } else if (bracketsConfig[element]) {
            stack.unshift(bracketsConfig[element]);
        } else {
            return false;
        }
    }

    return !stack.length;
};
