const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const createTd = (content, classToAdd) => {
  let td = document.createElement('td');
  td.textContent = content;
  td.classList.add(classToAdd);
  return td;
};

const createMultiplicationTable = (num) => {
  let table = document.createElement('table');

  numeros.map((n) => table.appendChild(createTr(n,num)));
  // for (let i = 1; i < 11; i++) {
  //   let tr = document.createElement('tr');
  //   tr.appendChild(createTd(`${num}` + ' x ' + `${i}`, 'mult'));
  //   tr.appendChild(createTd(`${num * i}`, 'result'));
  //   table.appendChild(tr);
  // }
  return table;
};
const createTr = (num1,num2)=>{
  let tr = document.createElement('tr');
    tr.appendChild(createTd(`${num1}` + ' x ' + `${num2}`, 'mult'));
    tr.appendChild(createTd(`${num1 * num2}`, 'result'));
    return tr;
}

const init = () => {
  numeros.map((n) =>  document.body.appendChild(createMultiplicationTable(n)));
};

init();
