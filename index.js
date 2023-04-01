function selecionar(seletor) {
  const btn = document.querySelector(".green");
  if (btn !== null) {
    btn.classList.remove("green");
  }

  const selecionado = document.querySelector(seletor);
  selecionado.classList.add("green");


  verificarBtn () 
}

function selecionarDrinks(seletor) {
    const btn2 = document.querySelector('.bebidas .green')
  if (btn2 !== null) {
    btn2.classList.remove("green");
   }

  const selecionado2 = document.querySelector(seletor);
  selecionado2.classList.add("green");


  verificarBtn () 
}

function selecionarDesserts(seletor) {
    const btn3 = document.querySelector(".sobremesas .green");
    if (btn3 !== null) {
      btn3.classList.remove("green");
    }
  
    const selecionado3 = document.querySelector(seletor);
    selecionado3.classList.add("green");


    verificarBtn () 

}

function verificarBtn () {

    let btnSelecionado =document.querySelectorAll('.green');


    if (btnSelecionado.length === 3) {
        botao.classList.add('btn-verde')
        botao.classList.remove('disabled')
    }
}


