function arrayToString(str){
    let arrStr = str.split(',')
    let hasil = [];
    for(let i = 0; i < arrStr.length; i++) {
        hasil.push(arrStr[i].split(''));
    }
    return hasil
}
console.log(arrayToString("aqrst,ukaei,ffooo"));
console.log(arrayToString("qwer,tyui,asdf,ghjk"));