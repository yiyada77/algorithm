var isValid = function (s) {
    if (s.length === 0) {
        return true;
    }
    
    const dict = { "(": ")", "{": "}", "[": "]" };
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] in dict) {
            arr.push(s[i]);
            console.log(1)
        } else {
            if (arr.length === 0) {
                return false;
            }
            if (dict[arr[arr.length-1]]===s[i]) {
                arr.pop();
            } else {
                arr.push(s[i]);
            }
        }
    }
    console.log(arr);
    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }
};
s = "()";
console.log(isValid(s));