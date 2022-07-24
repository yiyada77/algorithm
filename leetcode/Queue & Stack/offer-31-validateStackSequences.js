/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    if (pushed.length === 0) return true

    let helpStack = []
    let popIdex = 0
    for (let i = 0; i < pushed.length; i++) {
        helpStack.push(pushed[i])
        while (helpStack.length && helpStack[helpStack.length - 1] == popped[popIdex]) {
            helpStack.pop()
            popIdex++
        }
    }
    return helpStack.length === 0
};