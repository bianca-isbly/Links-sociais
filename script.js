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


