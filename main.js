const container = document.querySelector('.container')
console.log(container)

const changeColor = (e) => {
  const colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange", "aliceblue", "skyblue"]
  let randIndex = colors[Math.floor(Math.random() * 8) + 1]

  let randColor = colors[randIndex]

  console.log(randColor)
}

for (let i = 0; i < 9; i++) {
  let div = document.createElement('div')
  div.className = `square-${i + 1}`
  div.addEventListener('click', changeColor)
  container.append(div)
}



console.log(container)