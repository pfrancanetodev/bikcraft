// Ativar Link menu
const navBar = document.querySelectorAll('.navbar li a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

navBar.forEach(ativarLink);

// Ativar Produtos
const paramentos = new URLSearchParams(location.search);

function ativarProduto(paramento) {
  const elemento = document.getElementById(paramento);
  if (elemento) {
    elemento.checked = true;
  }
}

paramentos.forEach(ativarProduto);
