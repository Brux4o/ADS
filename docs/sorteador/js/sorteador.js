function sortear() {
    var numeroInicial = parseInt(document.getElementById("numeroInicial").value);
    var numeroFinal = parseInt(document.getElementById("numeroFinal").value);
    var numeroSorteado = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
    alert("O número sorteado foi: " + numeroSorteado);
  }
  
  
