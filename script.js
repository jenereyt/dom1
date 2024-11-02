let open = document.querySelector('.open')
let smth = document.querySelector('.smth')
let close = document.querySelector('.close')
let num = document.querySelector('.num')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')
let rnd = document.querySelector('.rnd')
let res = document.querySelector('.res')


let any = 0
num.textContent = any
inc.onclick = () => {
  num.textContent = (++any)
}
dec.onclick = () => {
  num.textContent = (--any)
}


rnd.onclick = () => {
  any = Math.floor(Math.random() * 100000)
  num.textContent = any
}

res.onclick = () => {
  any = 0
  num.textContent = any
}



















open.onclick = () => {
  smth.style.top = '10px'
}
close.onclick = () => {
  smth.style.top = '-100%'
}
