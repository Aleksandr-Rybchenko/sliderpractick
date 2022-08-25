const text2 = document.querySelector('.text2')
const text1 = document.querySelector('.text1')
const text3 = document.querySelector('.text3')
const btn2 = document.querySelector('.btn2')
const btn1 = document.querySelector('.btn1')
const btn3 = document.querySelector('.btn3')


btn1.addEventListener('click', () => {
  if ((text2.style.display = 'block') || (text3.style.display = 'block')) {
    text2.style.display = 'none'
    text3.style.display = 'none'
    text1.style.display = 'block'
  }
})
btn2.addEventListener('click', () => {
  if ((text1.style.display = 'block') || (text3.style.display = 'block')) {
    text1.style.display = 'none'
    text3.style.display = 'none'
    text2.style.display = 'block'
  }
})
btn3.addEventListener('click', () => {
  if ((text1.style.display = 'block') || (text2.style.display = 'block')) {
    text1.style.display = 'none'
    text2.style.display = 'none'
    text3.style.display = 'block'
  }
})
