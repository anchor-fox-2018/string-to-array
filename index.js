function stringToArray(str){
    let arr = str.split(',');
    let output = []
    for(let i = 0; i < arr.length; i++){
        let word = [];
        for(let j = 0; j < arr[i].length; j++){
            word.push(arr[i][j]);
        }
        output.push(word);
    }
    // console.log(arr)
    return output;
}

console.log(stringToArray('aiueo,ejiko,okeno'));
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));