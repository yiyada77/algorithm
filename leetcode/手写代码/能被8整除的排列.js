'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'checkDivisibility' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function checkDivisibility(arr) {
    // Write your code here
    return arr.map(str=>checkHelper(str))
}

function checkHelper(str){
    if(str.length===1){
        if(str==='0'||str==='8'){
            return 'YES'
        }else{
            return 'NO'
        }
    }else if(str.length===2){
        const intA=Number(str[0])
        const intB=Number(str[1])
        if((intA*10+intB)%8===0||(intB*10+intA)%8===0){
            return 'YES'
        }else{
            return 'NO'
        }
    }else{ // str.length>=3
        const len=str.length
        let found=false
        for(let a=0;a<len&&!found;a++){
            for(let b=0;b<len&&!found;b++){
                for(let c=0;c<len&&!found;c++){
                    if(a!==b&&a!==c&&b!==c){
                        const intA=Number(str[a])
                        const intB=Number(str[b])
                        const intC=Number(str[c])
                        if((intA*100+intB*10+intC)%8===0){
                            found=true
                            break
                        }
                    }
                }
            }
        }
        return found?'YES':'NO'
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    const result = checkDivisibility(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
