function getFirstSelector(selector){
  return document.getElementById('app').querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('.ranked-list');
  for (var i = 0; i < lis.length; i++){
    lis[i] = parseInt(i) + 1;
  }
  return lis;
}