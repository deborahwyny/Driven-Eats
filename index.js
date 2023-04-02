function selecionar(seletor) {
  const btn = document.querySelector(".principais .green");
  const icon = document.querySelector('.green .icon')

  
  const selecionado = document.querySelector(seletor);
  selecionado.classList.add("green");
  
  

  
  if (btn !== null) {
    btn.classList.remove("green");
    icon.classList.add('escondido')
  }


  const iconSelecionado = document.querySelector('.green .icon')
  iconSelecionado.classList.remove('escondido')

  
  
}

function selecionarDrinks(seletor) {
  const btn2 = document.querySelector('.bebidas .green')
   const icon = document.querySelector('.green .icon')
  if (btn2 !== null) {
    btn2.classList.remove("green");
    icon.classList.add('escondido')

  }
  
  const selecionado2 = document.querySelector(seletor);
  selecionado2.classList.add("green");

  const iconSelecionado = document.querySelector('.green .icon')
  iconSelecionado.classList.remove('escondido')
  
  
}

function selecionarDesserts(seletor) {
  const btn3 = document.querySelector(".sobremesas .green");
  const icon = document.querySelector('.green .icon')

  if (btn3 !== null) {
    btn3.classList.remove("green");
    icon.classList.add('escondido')

  }
  
  const selecionado3 = document.querySelector(seletor);
  selecionado3.classList.add("green");

  const iconSelecionado = document.querySelector('.green .icon')
  iconSelecionado.classList.remove('escondido')
  
  
  
  
}


// function aplicadorIcon (seletor) {
  
  
//   const icon = documento.querySelector('.green')
//   if (btn.classList.contains('green')) {
//     icon.classList.add('icon')
//   }
  
// }






// function aplicadorIcon(seletor) {
//   const icon = document.querySelector('.principais .icon')
//   if (icon !== null) {
//     icon.classList.remove('escondido')
//     icon.classList.add('icon')
//   }
//   else {
//     icon.classList.add('escondido')
//     icon.classList.remove('icon')
//   }

//   const selecionado4 = document.querySelector(seletor);
//   selecionado4.classList.add('icon')

// }


