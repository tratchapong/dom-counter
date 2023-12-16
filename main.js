
function makeElement(tag,attr_n, attr_v, content) {
  let output = document.createElement(tag)
  output.setAttribute(attr_n, attr_v)
  output.textContent = content
  return output
}
{/* <div class="counter">
<button class="btn btn-inc">+</button>
<h3 class="number">0</h3>
<button class="btn btn-dec">-</button>
<button class="btn btn-clr">C</button>
</div> */}

let countNum = 0

function updateCounter(n) {
  if(n<0) {
    countNum = 0
    return
  }
  number.textContent = n
}

const counter = makeElement('div','class','counter','')
const number = makeElement('h3','class','number','0')
const btnInc = makeElement('button','class','btn-inc','+')
const btnDec = makeElement('button','class','btn-dec','-')
const btnClr = makeElement('button','class','btn-clr','C')

btnClr.addEventListener('click', ()=>updateCounter(0))
btnInc.addEventListener('click', ()=>updateCounter(countNum+=1))
btnDec.addEventListener('click', ()=>updateCounter(countNum-=1))

counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)

const root = document.querySelector('#root')
root.append(counter)




