const card = document.querySelector('.flip-card')
card.onclick = () => card.classList.toggle('open')

const countImages = 2

const button = document.querySelector('button')

const openNewCard = () => {
  const back = document.querySelector('.back-img')
  back.src = `./images/back-${Math.floor(Math.random() * countImages + 1)}.jpeg`
  card.classList.add('open')
}

button.onclick = () => {
  if (card.classList.contains('open')) {
    card.classList.remove('open')
    setTimeout(() => openNewCard(), 800);
  } else {
    openNewCard()
  }
}
