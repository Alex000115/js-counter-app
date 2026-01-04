let count = 0;
const el = document.getElementById('count');

function inc(){
  count++;
  el.innerText = count;
}
function dec(){
  count--;
  el.innerText = count;
}
