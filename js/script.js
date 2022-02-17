const QUIZZ_API = "https://mock-api.driven.com.br/api/v4/buzzquizz";
let tituloQuizz
let url
let quantidadePerguntas
let quantidadeNiveis
const gradiente = "background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%)"
function obterQuizzes() {
    const promise = axios.get(`${QUIZZ_API}/quizzes`);
    promise.then(resposta => {
      console.log(resposta.data);
      renderizarQuizzes(resposta.data);
    });
    promise.catch( erro => {
      console.error(erro.response);
      alert("Xiii! Deu ruim na hora de receber mensagens!");
    })
  }
  function tela2(){
    const tela1 = document.querySelector('.tela1')
    tela1.classList.add('esconderTela')
    const tela2 = document.querySelector('.tela2')
    tela2.classList.remove('esconderTela')
  }
  function tela3(){
    const tela1 = document.querySelector('.tela1')
    tela1.classList.add('esconderTela')
    const tela3 = document.querySelector('.tela3')
    tela3.classList.remove('esconderTela')
    
  }
  function tela32(){
    tituloQuizz =document.querySelector(".ip1").value;
    url =document.querySelector(".ip2").value;
    quantidadePerguntas =document.querySelector(".ip3").value;
    quantidadeNiveis =document.querySelector(".ip4").value;
    
    if(tituloQuizz.length > 65){
      alert('Titulo no máximo 65 caracteres')
    }if(tituloQuizz.length < 20){
      alert('Titulo deve ter no mínimo 20 caracteres')
    }
    if(quantidadePerguntas >3){
      alert('quantidade de perguntas: no mínimo 3 perguntas')
    }
    if(quantidadeNiveis >2){
      alert('Quantidade de níveis: no mínimo 2 níveis')
    }
    console.log(quantidadeNiveis <=2)
    console.log(quantidadeNiveis)
    if(tituloQuizz !=='' && url !=='' && quantidadePerguntas !=='' && quantidadeNiveis !=='' && 65>=tituloQuizz.length && tituloQuizz.length >=20 && quantidadePerguntas <=3 && quantidadeNiveis <=2){
      const tela3 = document.querySelector('.tela3')
      tela3.classList.add('esconderTela')
      const tela32 = document.querySelector('.tela32 ')
      tela32.classList.remove('esconderTela')
    }else(alert('erro'))
   

 }
 function tela33(){  
   alert(tituloQuizz)
  const tela32 = document.querySelector('.tela32 ')
  tela32.classList.add('esconderTela')
  const tela33 = document.querySelector('.tela33 ')
  tela33.classList.remove('esconderTela')
}
  
  function renderizarQuizzes(quizzes) {
    const mostrarQuizz = document.querySelector(".corpo-quizzes");
    mostrarQuizz.innerHTML = "";
    quizzes.forEach( quizz => {
        const id = quizz.id;
        const titulo = quizz.title;
        const imagem = quizz.image;
    
   
        mostrarQuizz.innerHTML +=  `
        <div onclick="tela2()" class="container-quizz">
          <img class="imagem-quizz" src="${imagem}">
          <p class="texto-quizz">${titulo}</p>
        </div>
          `

    }) }

    obterQuizzes();
