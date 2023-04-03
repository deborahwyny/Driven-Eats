function selecionar(seletor) {
  const btn = document.querySelector(".principais .green");
  const icon = document.querySelector('.principais .green .icon')
  
  const selecionado = document.querySelector(seletor);
  selecionado.classList.add("green");
  
  if (btn !== null) {
    btn.classList.remove("green");
    icon.classList.add('escondido')
  }

  const iconSelecionado = document.querySelector('.green .icon')
  iconSelecionado.classList.remove('escondido')

  verificarBtn()
}

function selecionarDrinks(seletor) {
  const btn2 = document.querySelector('.bebidas .green')
  const icon = document.querySelector('.bebidas .green .icon')

  if (btn2 !== null) {
    btn2.classList.remove("green");
    icon.classList.add('escondido')

  }
  
  const selecionado2 = document.querySelector(seletor);
  selecionado2.classList.add("green");

  const iconSelecionado = document.querySelector('.bebidas .green .icon')
  iconSelecionado.classList.remove('escondido')
  
  verificarBtn()
  
}

function selecionarDesserts(seletor) {
  const btn3 = document.querySelector(".sobremesas .green");
  const icon = document.querySelector('.sobremesas .green .icon')

  if (btn3 !== null) {
    btn3.classList.remove("green");
    icon.classList.add('escondido')

  }
  
  const selecionado3 = document.querySelector(seletor);
  selecionado3.classList.add("green");

  const iconSelecionado = document.querySelector('.sobremesas .green .icon')
  iconSelecionado.classList.remove('escondido')
  
  
  
  verificarBtn()
}


function verificarBtn () {
const selecionados = document.querySelectorAll('.green');
if (selecionados.length === 3) {
  const btn = document.querySelector('.btn');
  btn.classList.add('disabled');
  const btnVerde = document.querySelector('.btn-verde');
  btnVerde.classList.remove('disabled');
}


}

function fecharPedido () {
let prato = document.querySelector('.principais .green .nome').innerHTML;
let bebida = document.querySelector('.bebidas .green .nome').innerHTML;
let sobremesas = document.querySelector('.sobremesas .green .nome').innerHTML;

let price = document.querySelector('.principais .green .priceValue');
let price2 = document.querySelector('.bebidas .green .priceValue');
let price3 = document.querySelector('.sobremesas .green .priceValue');

let valorFinal = parseFloat(price.innerHTML) + parseFloat(price2.innerHTML) + parseFloat(price3.innerHTML);

let textoTop = `Olá, gostaria de fazer o pedido:\n - Prato: ${prato}\n - Bebida: ${bebida}\n - Sobremesa: ${sobremesas}\nTotal: R$ ${valorFinal.toFixed(2)}`

let textoEncodade = encodeURIComponent(textoTop)
  window.location.assign('https://wa.me/5524999037329?text='+ textoEncodade) 
}


