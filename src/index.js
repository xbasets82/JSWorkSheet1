init();

function init() {
  for (let i = 1; i < 11; i++) {
    let table = document.createElement('table');
    createMultiplicationTable(i, table);
    document.body.appendChild(table);
  }
}

function createMultiplicationTable(num, table) {
  let tbody = document.createElement('tbody');
  for (let i = 1; i < 11; i++) {
    let tr = document.createElement('tr');
    // tr.appendChild(createTdMult(num, i));
    // tr.appendChild(createTdResult(num, i));
    tr.appendChild(createTd(`${num}` + ' x ' + `${i}`), 'mult');
    tr.appendChild(createTd(`${num * i}`),'result')
    tbody.appendChild(tr);
  }
  return table.appendChild(tbody);
}

// function createTdMult(num1, num2) {
//   let td = document.createElement('td');
//   td.textContent = `${num1}` + ' x ' + `${num2}`;
//   td.classList.add('mult');
//   return td;
// }

// function createTdResult(num1, num2) {
//   let td = document.createElement('td');
//   td.textContent = `${num1 * num2}`;
//   td.classList.add('result');
//   return td;
// }
function createTd(content, classToAdd){
  let td = document.createElement('td');
  td.textContent = content;
  td.classList.add(classToAdd);
  return td;
}