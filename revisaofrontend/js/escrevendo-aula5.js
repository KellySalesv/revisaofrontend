var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando Git pode ser utilizado para trocar de uma ramificação para outra. ?");
  if ((nome.toLowerCase() == "git checkout")) {
    alert(" O " + nome + ", Também é possível combinar operações, criando e fazendo o checkout de um novo branch com um único comando:$ git checkout -b <nome_do_branch_novo>. Parabéns você acertou!");

  } else {
    alert("Não foi dessa vez , próxima pergunta ! ");

  }
  window.location = "aula6.html";
};