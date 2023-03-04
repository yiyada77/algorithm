//init
let poker = []
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= 10; j++) {
        poker[i * 11 + j] = j;
    }
}
poker.push('a');
poker.push('a');

//shuffle
let T = 1000;
for (let i = 0; i < T; i++) {
    const index = Math.round(Math.random() * 46);
    poker.push(poker[index]);
    poker.splice(index, 1)
}


function isStraight(arr) {
    let king = 0;
    while (arr.indexOf('a') > 0) {// has King
        arr.splice(arr.indexOf('a'), 1);
        king++;
    }
    arr.sort((a, b) => (a - b));
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            if (king !== 0) {
                king--;
            } else {
                console.log(false);
                return;
            }
        }
    }
    console.log(true);
}
let arr=poker.slice(0,5);
console.log(poker.slice(0,5));
isStraight(arr);