function disemvowel(str) {
  var regx = /[aeuio]/gi;
  var arr = str.split('');
  var newArr = arr.filter(function (item) {
    return regx.test(item) === false;
  });
  return newArr.join('');
}

disemvowel("This website is for losers LOL!")