const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

const firstClone = img[0].cloneNode();
imgs.appendChild(firstClone);

const allImgs = document.querySelectorAll("#img img");

function carrossel() {
  idx++;
  imgs.style.transition = "transform 0.5s ease-in-out";
  imgs.style.transform = `translateX(${-idx * 100}%)`;

  if (idx === allImgs.length - 1) {
    setTimeout(() => {
      imgs.style.transition = "none"; 
      imgs.style.transform = `translateX(0)`; 
      idx = 0;
    }, 500); 
  }
}

setInterval(carrossel, 3000);

// ------------------------------------------------------------------------------------------------------------------

function atualizarContador() {
    const nascimento = new Date(2004, 0, 29); // 29 de janeiro de 2004 (Janeiro é 0)
    const agora = new Date();
  
    let anos = agora.getFullYear() - nascimento.getFullYear();
    let meses = agora.getMonth() - nascimento.getMonth();
    let dias = agora.getDate() - nascimento.getDate();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
  
    if (dias < 0) {
      meses -= 1;
      const ultimoDiaDoMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += ultimoDiaDoMesAnterior;
    }
  
    if (meses < 0) {
      anos -= 1;
      meses += 12;
    }
  
    document.getElementById("contador").innerText =
      `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos`;
}
  
  atualizarContador();
  setInterval(atualizarContador, 60000); 
