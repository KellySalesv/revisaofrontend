var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando adiciona seus arquivos modificados à fila para serem submetidos a um commit posteriormente ?");
  if ((nome.toLowerCase() == "git add")) {
    alert(" O " + nome + ", Os arquivos não passaram por um commit. Parabéns você acertou!");

  } else {
    alert("Não foi dessa vez , próxima pergunta ! ");

  }
  window.location = "aula5.html";
};