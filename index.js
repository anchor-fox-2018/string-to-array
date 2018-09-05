function split(str) {
  let satuKata = str.split(',');
  let satuHuruf;
  var result = [];

  for (var i = 0; i < satuKata.length; i++) {
    satuHuruf = satuKata[i].split('');
    result.push(satuHuruf);
  }
  return result;
}

console.log(split('sfdhjksad,jisdofj,jiodsfhoi'));
