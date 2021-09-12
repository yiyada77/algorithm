var strStr = function (haystack, needle) {
    let pos = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let n = i + 1;
            let m = 1;
            pos = i;
            while (n < haystack.length && m < needle.length) {
                if (haystack[n] !== needle[m]) {
                    pos = 0;
                    break;
                }
                n++;
                m++;
            }
            if (m === needle.length) return pos;
        } else {
            pos = 0;
        }
    }
    return 0;
};

const haystack = "hewwwwwllo";
const needle = "ll";
console.log(strStr(haystack, needle));