function stringToArray(input) {
    let x = input.split(",");
    let row = [];
    for (let i = 0; i < x.length; i++) {
        let col = [];
        for (let j = 0; j < x[i].length; j++) {
            col.push(x[i][j].split(""));
        }
        row.push(col);
    }
    return row;
}

console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,ghjk"))