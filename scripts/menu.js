const menu = () => {
  const soupeBtn = document.querySelector('.menu__section--soupe')
  const pizzaBtn = document.querySelector('.menu__section--pizza')
  const pastaBtn = document.querySelector('.menu__section--pasta')
  const desertBtn = document.querySelector('.menu__section--desert')
  const wineBtn = document.querySelector('.menu__section--wine')
  const beerBtn = document.querySelector('.menu__section--beer')
  const drinksBtn = document.querySelector('.menu__section--drinks')

  const soupe = document.querySelector('.menu__wrapper--soupe')
  const pizza = document.querySelector('.menu__wrapper--pizza')
  const pasta = document.querySelector('.menu__wrapper--pasta')
  const desert = document.querySelector('.menu__wrapper--desert')
  const wine = document.querySelector('.menu__wrapper--wine')
  const beer = document.querySelector('.menu__wrapper--beer')
  const drinks = document.querySelector('.menu__wrapper--drinks')


  soupeBtn.addEventListener('click', () => {
    soupe.style.display = 'flex'
    pizza.style.display = 'none'
    pasta.style.display = 'none'
    desert.style.display = 'none'
    wine.style.display = 'none'

  })

  pizzaBtn.addEventListener('click', () => {
    pizza.style.display = 'flex'
    soupe.style.display = 'none'
    pasta.style.display = 'none'
    desert.style.display = 'none'
    wine.style.display = 'none'
  })

  pastaBtn.addEventListener('click', () => {
    pasta.style.display = 'flex'
    soupe.style.display = 'none'
    pizza.style.display = 'none'
    desert.style.display = 'none'
    wine.style.display = 'none'
  })

  desertBtn.addEventListener('click', () => {
    desert.style.display = 'flex'
    pasta.style.display = 'none'
    soupe.style.display = 'none'
    pizza.style.display = 'none'
    wine.style.display = 'none'

  })

  wineBtn.addEventListener('click', () => {
    wine.style.display = 'flex'
    desert.style.display = 'none'
    pasta.style.display = 'none'
    soupe.style.display = 'none'
    pizza.style.display = 'none'


  })
}
menu()