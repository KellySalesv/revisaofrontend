var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando utilizado para criar um novo projeto no git ?");
  if ((nome.toLowerCase() == "git init")) {
    alert(" O " + nome + ", serve para iniciar o git. Parabéns você acertou!");

  } else {
    alert("Não foi dessa vez , próxima pergunta ! ");

  }
  window.location = "aula2.html";
};