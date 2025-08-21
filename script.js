function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("Light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    // >
    //
    // Tem que trocar a imagem do light ainda BIA!
    //
    //
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
/* **Esta parte eu usei IA pra fazer, pois queria um efeito legal de pop-up no "sobre mim" pq não fazia ideia do que colocar naquele botão, já tinha diminuido itens da lista */
const btnSobre = document.getElementById("btn-sobre")
const btnFechar = document.getElementById("btn-fechar")
const sobre = document.getElementById("sobre-mim")
const overlay = document.getElementById("overlay") // se usar overlay
const textoSobre = document.getElementById("texto-sobre")
const som = new Audio("./assets/efeito.mp3")

const mensagem =
  "Oi! Que bom que você chegou até aqui. Sou Bianca, apaixonada por tecnologia e em busca do meu primeiro desafio profissional. Aqui você encontra meus projetos, contatos e redes sociais, tudo o que você precisa para me conhecer melhor."

let digitarInterval // variável global para o setInterval

btnSobre.addEventListener("click", (e) => {
  e.preventDefault() // previne o link de navegar
  // reset
  clearInterval(digitarInterval)
  textoSobre.textContent = ""
  sobre.style.display = "block"
  overlay.style.display = "block" // se usar overlay
  som.play()

  let i = 0
  digitarInterval = setInterval(() => {
    if (i < mensagem.length) {
      textoSobre.textContent += mensagem[i]
      i++
    } else {
      clearInterval(digitarInterval)
    }
  }, 30)
})

btnFechar.addEventListener("click", () => {
  clearInterval(digitarInterval)
  sobre.style.display = "none"
  overlay.style.display = "none" // se usar overlay
  som.pause()
  som.currentTime = 0
})
/*Ass. Bianca Isabely*/