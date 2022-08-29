const texts = document.querySelectorAll('.text')
const btns = document.querySelectorAll('.btn')

const changeTabHandler = (idx) => {


  console.log(idx)
  texts.forEach((elem, index) => {
    if (idx === index) {
      elem.style.display = 'block'


    } else {

      elem.style.display = 'none'
    }
  })
}

const initTabs = () => {
  texts.forEach((elem) => {
    elem.style.display = 'none'
  })
  btns.forEach((el, ind) => {
    console.log(ind);
    el.addEventListener('click', () => changeTabHandler(ind))
  })
}
const start = () => {
  initTabs()
}
start()
