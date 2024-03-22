 const botoes = document.querySelectorAll(";botao");
 const textos = document.querySelectorALL(".aba-conteudo")

 for(let i=0;i <botoes.length;i++){
        botoes[i].onclick = function(){
            
            for(let j=0;j<botoes.length;j++){
                botoes[j].classList.remove("ativo");
                textos[j].classList.remove("ativo");
            }
            botoes[i].classList.add("ativo");
            texto[i].classLit.add("ativo");
        }
 }

  const contadores = document.querySelectorALL(".contador");
  const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
  let tempoAtual = new date ()

  contadores[0].textContent =tempoObjetivo1 - tempoAtual