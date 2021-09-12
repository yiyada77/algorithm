const s = 'hello world';
const s_arr = s.split('');
let freq = {};
let maxFreq = 1;
let maxLetter = '';

for (let i = 0; i < s_arr.length; i++) {
    if (s_arr[i] in freq) {
        freq[s_arr[i]] = freq[s_arr[i]] + 1;
        if (freq[s_arr[i]] > maxFreq) {
            maxFreq = freq[s_arr[i]];
            maxLetter = s_arr[i];
        }
    } else {
        freq[s_arr[i]] = 1;
    }
}
console.log(maxLetter);