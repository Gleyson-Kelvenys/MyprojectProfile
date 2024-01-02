function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("ligth")
   
  
     //pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('ligth')) {
    // se tiver ligth  mode, adcionar a imagem ligth
        img.setAttribute('src', './assets/avatar-ligth.png')

    // manter a imagem    
    } else {
        img.setAttribute('src','./assets/AvatarGK.png')
    }

}