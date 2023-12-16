function makeElement(tag, attr_n, attr_v, content) {
  let output = document.createElement(tag);
  output.setAttribute(attr_n, attr_v);
  output.textContent = content;
  return output;
}

function Counter(setCounter) {
  let countNum = 0;

  const updateCounter = (n) => {
    if (countNum + n < 0 ) {
      countNum = 0;
      return;
    }
    countNum += n
    setCounter(n)
    number.textContent = countNum;
  }

  const counter = makeElement("div", "class", "counter", "");
  const number = makeElement("h3", "class", "number", "0");
  const btnInc = makeElement("button", "class", "btn-inc", "+");
  const btnDec = makeElement("button", "class", "btn-dec", "-");
  const btnClr = makeElement("button", "class", "btn-clr", "C");
  const btnDel = makeElement("button", "class", "btn-del", "X");

  const delCounter = (e) => {
    updateCounter(-countNum)
    e.target.closest('.counter').remove()
  }

  btnClr.addEventListener("click", () => updateCounter(-countNum));
  btnInc.addEventListener("click", () => updateCounter(1));
  btnDec.addEventListener("click", () => updateCounter(-1));
  btnDel.addEventListener("click", (e) => delCounter(e));

  counter.append(btnInc);
  counter.append(number);
  counter.append(btnDec);
  counter.append(btnClr);
  counter.append(btnDel);

  return counter;
}

const root = document.querySelector("#root");
const btnAdd = document.querySelector(".btn-add")
const sumInfo = document.querySelector(".sum")

let sumCounter=0

const setCounter = n => {
  sumCounter += n
  sumInfo.textContent = `Sum = ${sumCounter}`
}

const addCounter = () => {
  root.append(Counter(setCounter))
}

btnAdd.addEventListener('click', addCounter)


