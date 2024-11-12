
const condition = document.getElementById("condition");
const information = document.getElementById("information");

let array = [];

function showTime(arg) {
  array.push(...arg);
  const filtered = Array.from(new Set(array));

  const sorted = filtered.sort(function(a, b) {
    return a == b ? 0 : a < b ? -1 : 1;
  });;

  condition.innerHTML = sorted.map(el => `<input value="${el.replace(/_/g, ' ')}" type="button" onClick="showInfo('${el}')">`).join("");

  
  return array = sorted;
}

const showInfo = info => information.innerHTML = `<iframe src="https://en.wikipedia.org/wiki/${info}"></iframe>`;
