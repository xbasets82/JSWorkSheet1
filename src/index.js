const init = ()=> {
  for (let i = 1; i < 11; i++) {
    let table = document.createElement('table');
    createMultiplicationTable(i, table);
    document.body.appendChild(table);
  }
}


const createMultiplicationTable= (num, table) =>{
  let tbody = document.createElement('tbody');
  for (let i = 1; i < 11; i++) {
    let tr = document.createElement('tr');
    tr.appendChild(createTd(`${num}` + ' x ' + `${i}`, 'mult'));
    tr.appendChild(createTd(`${num * i}`, 'result'));
    tbody.appendChild(tr);
  }
  return table.appendChild(tbody);
}


const createTd = (content, classToAdd) => {
  let td = document.createElement('td');
  td.textContent = content;
  td.classList.add('result');
  return td;
};

init();
