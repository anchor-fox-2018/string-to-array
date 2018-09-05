function stringToArray (string) {
    let strSplitted = string.split(','), result = [];
    for (let i = 0; i < strSplitted.length; i++) {
        let perChar = strSplitted[i].split('');
        result.push(perChar);
    }
    return result;
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))