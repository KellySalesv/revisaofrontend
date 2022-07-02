var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando utilizado para fazer um clone ?");
  if ((nome.toLowerCase() == "git clone")) {
    alert(" O " + nome + ", cria uma cópia exata de um repositório já existente. Parabéns você acertou!");

  } else {
    alert("Não foi dessa vez , próxima pergunta ! ");

  }
  window.location = "aula4.html";
};