  function getRandomRGB(){  
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  function changeBackgroundColor(){
    let randomColor = getRandomRGB();
    document.body.style.backgroundColor = randomColor;
    document.body.textContent = randomColor;
  }
  changeBackgroundColor();
  setInterval(changeBackgroundColor,3000);