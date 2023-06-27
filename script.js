// menu ativo ---------
const links = document.querySelectorAll(".header-menu a");

function ativarLink (link){
  const url = location.href;
  const href = link.href;
  if (url.includes(href)){
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);  // forEach = colocar uma função


//.
// abrir itens do orçamento automaticamente ----

const parametros = new URLSearchParams(location.search); //retorna uma array(lista) com esses parâmetros de busca

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  elemento.checked = true;
  console.log(elemento);
}

parametros.forEach(ativarProduto);

//.
// perguntas frquente ----

const perguntas = document.querySelectorAll(".perguntas button"); //seleciona todos os botões dentro da classe 'perguntas'

function mostrarPergunta(event){
  const pergunta = event.currentTarget; //puxar qual elemento que está clicando
  const controls = pergunta.getAttribute("aria-controls");  //puxar o atributo da pergunta
  const resposta = document.getElementById(controls);  //puxar o id da resposta

  pergunta.setAttribute('aria-expanded', true);  //colocar a aria-expanded como true quando clica
  const ativa = resposta.classList.contains("ativa"); // verifica se tem a classe ativa ou não
  resposta.classList.toggle('ativa'); //colocar a classe ativa conforme clica

  console.log(resposta);
}

function expandir (pergunta){
  pergunta.addEventListener('click', mostrarPergunta);  // evento de clique
}
perguntas.forEach(expandir); //criar função da array

//.
// GALERIA DE FOTOS
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens")  //seleciona o primeiro elemento da classe '.bicicletas-imagens'

function trocarImagem(event) {
  const img = event.currentTarget;   //indica qual evente ocorre com o elemento selecionado currentTarget = alvo selecionado
  const media = matchMedia("(min-width: 1000px)").matches; //matchMedia = inseri um media query, de acordo com o tamanho da tela fazendo uma verificação true ou false

  if (media) {  // condiciona pela constante media
    galeriaContainer.prepend(img);  //prepend = remove o item da posição original e posiciona em primeiro lugar
  }
}


function eventosGaleria (img){
  img.addEventListener('click', trocarImagem);  // função adiciona o evento de clique
}
galeria.forEach(eventosGaleria); //cria/adiciona uma função


//..
// ANIMAÇÃO

window.SimpleAnime=class{constructor(){this.items=document.querySelectorAll("[data-anime]"),this.init()}animateItems(){this.items.forEach(t=>{const e=Number(t.getAttribute("data-anime"));isNaN(e)||setTimeout(()=>{t.classList.add("anime")},e)})}handleVisibility(){void 0!==document.visibilityState?"visible"===document.visibilityState&&this.animateItems():this.animateItems()}init(){this.handleVisibility=this.handleVisibility.bind(this),this.handleVisibility(),document.addEventListener("visibilitychange",this.handleVisibility)}}


if (window.SimpleAnime) {
  new SimpleAnime();
}