function getFirstSelector(selector){
  return document.getElementById('app').querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('#nested').querySelector('.target');
}