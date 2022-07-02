var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando utilizado para verificar o status do git ?");
  if ((nome.toLowerCase() == "git status")) {
    alert(" O " + nome.toLowerCase() + ", exibe as condições do diretório de trabalho e da área de staging. Parabéns você acertou!");

  } else {
    alert(" Não foi dessa vez , próxima pergunta ! ");

  }
  window.location = "aula3.html";
};