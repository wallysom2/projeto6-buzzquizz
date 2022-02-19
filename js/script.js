const QUIZZ_API = "https://mock-api.driven.com.br/api/v4/buzzquizz";
let tituloQuizz
let url
let quantidadePerguntas
let quantidadeNiveis

let textoPergunta
let corFundo
let respostaCorreta
let urlimg
let respostaErrada1
let urlimg1
let respostaErrada2
let urlimg2
let respostaErrada3
let urlimg3

let textoPergunta2
let corFundo2
let respostaCorreta2
let urlimgg
let respostaErrada11
let urlimg11
let respostaErrada22
let urlimg22
let respostaErrada33
let urlimg33

let textoPergunta3
let corFundo3
let respostaCorreta3
let urlimggg
let respostaErrada111
let urlimg111
let respostaErrada222
let urlimg222
let respostaErrada333
let urlimg333

let tituloNivel
let acertoMinimo
let urlNivel
let descricaoNivel

let tituloNivel2
let acertoMinimo2
let urlNivel2
let descricaoNivel2

let tituloNivel3
let acertoMinimo3
let urlNivel3
let descricaoNivel3


   
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
  
    
    function obterQuizzes1() {
    const promise = axios.get(`${QUIZZ_API}`);
    promise.then(resposta => {
      console.log(resposta.data);
      renderizarQuizzes1(resposta.data);
    });
    promise.catch( erro => {
      console.error(erro.response);
      alert("Xiii! Deu ruim na hora de receber mensagens!");
    })
  }


  
  function renderizarQuizzes(quizzes) {
    const mostrarQuizz = document.querySelector(".corpo-quizzes");
    mostrarQuizz.innerHTML = "";
    quizzes.forEach( quizz => {
        const id = quizz.id;
        const titulo = quizz.title;
        const imagem = quizz.image;
    
   
        mostrarQuizz.innerHTML +=  `
        <div onclick="tela1()" class="container-quizz">
          <img class="imagem-quizz" src="${imagem}">
          <p class="texto-quizz">${titulo}</p>
        </div>
          `

    }) }

    function renderizarQuizzes1 (quizzes) {
      const mostrarQuizz = document.querySelector(".quizz-aberto");
      mostrarQuizz.innerHTML = "";
      quizzes.forEach( quizz => {
          const id = quizz.id;
          const titulo = quizz.title;
          const imagem = quizz.image;
      
     
          mostrarQuizz.innerHTML +=  `
          <div onclick="tela1()" class="container-quizz">
            <img class="imagem-quizz" src="${imagem}">
            <p class="texto-quizz">${titulo}</p>
          </div>
            `
  
      }) } 
      
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
    if(quantidadePerguntas <3){
      alert('quantidade de perguntas: no mínimo 3 perguntas')
    }
    if(quantidadeNiveis <2){
      alert('Quantidade de níveis: no mínimo 2 níveis')
    }
    console.log(quantidadeNiveis <=2)
    console.log(quantidadeNiveis)
    if(tituloQuizz !=='' && url !=='' && quantidadePerguntas !=='' && quantidadeNiveis !=='' && 65>=tituloQuizz.length && tituloQuizz.length >=20 && quantidadePerguntas >=3 && quantidadeNiveis >=2){
      const tela3 = document.querySelector('.tela3')
      tela3.classList.add('esconderTela')
      const tela32 = document.querySelector('.tela32 ')
      tela32.classList.remove('esconderTela')
    }
   

 }
 function tela33(){  
  textoPergunta =document.querySelector('.perg1').value
  corFundo=document.querySelector('.perg2').value
  respostaCorreta=document.querySelector('.perg3').value
  urlimg=document.querySelector('.perg4').value
  respostaErrada1=document.querySelector('.perg5').value
  urlimg1=document.querySelector('.perg6').value
  respostaErrada2=document.querySelector('.perg7').value
  urlimg2=document.querySelector('.perg8').value
  respostaErrada3=document.querySelector('.perg9').value
  urlimg3=document.querySelector('.perg10').value
  
  
  const tela32 = document.querySelector('.tela32 ')
  tela32.classList.add('esconderTela')
  const tela33 = document.querySelector('.tela33 ')
  tela33.classList.remove('esconderTela')
}
let ul = document.querySelector(".pergunta2");
let ul3 = document.querySelector(".pergunta3");
let ul4 = document.querySelector(".nivel");
let ul5 = document.querySelector(".nivel2");
ul.innerHTML='pergunta 2'
ul3.innerHTML='pergunta 3'
ul4.innerHTML='nivel1'
ul5.innerHTML='nivel2'

function abrirPerg2(){
  textoPergunta2=document.querySelector('.pergg1').value
  corFundo2=document.querySelector('.pergg2').value
  respostaCorreta2=document.querySelector('.pergg3').value
  urlimgg=document.querySelector('.pergg4').value
  respostaErrada11=document.querySelector('.pergg5').value
  urlimg11=document.querySelector('.pergg6').value
  respostaErrada22=document.querySelector('.pergg7').value
  urlimg22=document.querySelector('.pergg8').value
  respostaErrada33=document.querySelector('.pergg9').value
  urlimg33=document.querySelector('.pergg10').value
  
  ul.innerHTML =`<div class="textoTitulo"> <p> pergunta 2</p></div>
  <input class="inputTela pergg1" type="text" placeholder="Texto da pergunta">
  <input class="inputTela pergg2" type="text" placeholder="Cor de fundo da pergunta">
  <div class="textoTitulo"> <p> Resposta correta</p></div>
  <input  class="inputTela pergg3" type="text" placeholder="Resposta correta">
  <input class="inputTela pergg4" type="text" placeholder="URL da imagems">
  <div class="textoTitulo"> <p> Resposta correta</p></div>
  <input  class="inputTela pergg5" type="text" placeholder="Resposta incorreta 1">
  <input class="inputTela2 pergg6" type="text" placeholder="URL da imagems 1">

  <input  class="inputTela pergg7" type="text" placeholder="Resposta incorreta 2">
  <input class="inputTela2 pergg8" type="text" placeholder="URL da imagems 2">

  <input  class="inputTela pergg9" type="text" placeholder="Resposta incorreta 3">
  <input class="inputTela pergg10" type="text" placeholder="URL da imagems 3">`
}
function abrirPerg3(){
  textoPergunta3=document.querySelector('.perggg1').value
  corFundo3=document.querySelector('.perggg2').value
  respostaCorreta3=document.querySelector('.perggg3').value
  urlimggg=document.querySelector('.perggg4').value
  respostaErrada111=document.querySelector('.perggg5').value
  urlimg111=document.querySelector('.perggg6').value
  respostaErrada222=document.querySelector('.perggg7').value
  urlimg222=document.querySelector('.perggg8').value
  respostaErrada333=document.querySelector('.perggg9').value
  urlimg333=document.querySelector('.perggg10').value
  
  ul3.innerHTML =`<div class="textoTitulo"> <p> pergunta 3</p></div>
  <input class="inputTela perggg1" type="text" placeholder="Texto da pergunta">
  <input class="inputTela perggg2" type="text" placeholder="Cor de fundo da pergunta">
  <div class="textoTitulo"> <p> Resposta correta</p></div>
  <input  class="inputTela perggg3" type="text" placeholder="Resposta correta">
  <input class="inputTela perggg4" type="text" placeholder="URL da imagems">
  <div class="textoTitulo"> <p> Resposta correta</p></div>
  <input  class="inputTela perggg5" type="text" placeholder="Resposta incorreta 1">
  <input class="inputTela2 perggg6" type="text" placeholder="URL da imagems 1">

  <input  class="inputTela perggg7" type="text" placeholder="Resposta incorreta 2">
  <input class="inputTela2 perggg8" type="text" placeholder="URL da imagems 2">

  <input  class="inputTela perggg9" type="text" placeholder="Resposta incorreta 3">
  <input class="inputTela perggg10" type="text" placeholder="URL da imagems 3">`
}
function abrirNivel2(){
  tituloNivel2=document.querySelector('.nivv1').value
  acertoMinimo2=document.querySelector('.nivv2').value
  urlNivel2=document.querySelector('.nivv3').value
  descricaoNive2=document.querySelector('.nivv4').value
  ul4.innerHTML=`<div> <p> Nivel 2</p></div>
  <input class="inputTela nivv1" type="text" placeholder="Titulo do nivel">
  <input class="inputTela nivv2" type="text" placeholder="% de certo minima">
  <input  class="inputTela nivv3" type="text" placeholder="URL da imagem do nivel">
  <textarea class="inputTela3 nivv4" type="text" placeholder="Descrição do nível"></textarea>`

}
function abrirNivel3(){
  tituloNivel3=document.querySelector('.nivvv1').value
  acertoMinimo3=document.querySelector('.nivvv2').value
  urlNivel3=document.querySelector('.nivvv3').value
  descricaoNive3=document.querySelector('.nivvv4').value
  ul5.innerHTML=`<div> <p> Nivel 3</p></div>
  <input class="inputTela nivvv1" type="text" placeholder="Titulo do nivel">
  <input class="inputTela nivvv2" type="text" placeholder="% de certo minima">
  <input  class="inputTela nivvv3" type="text" placeholder="URL da imagem do nivel">
  <textarea class="inputTela3 nivvv4" type="text" placeholder="Descrição do nível"></textarea>`

}
function tela34(){
 
  let ul6 = document.querySelector(".fim");
  ul6.innerHTML=`<div class="tela344">
  <div class="textoTela3"> <strong> <h1> Seu quiz está pronto</h1> </strong></div>
  <img src="${url}">
  <button class="botaoTela31"> Acessar Quizz</button>
  <div><p>Voltar pra home</p></div>
</div>`
  tituloNivel=document.querySelector('.niv1').value
  acertoMinimo=document.querySelector('.niv2').value
  urlNivel=document.querySelector('.niv3').value
  descricaoNive=document.querySelector('.niv4').value

 
  const tela32 = document.querySelector('.tela33 ')
  tela32.classList.add('esconderTela')
  const tela33 = document.querySelector('.tela34 ')
  tela33.classList.remove('esconderTela')
  const promise = axios.post(`${QUIZZ_API}/quizzes`,{
    title: tituloQuizz,
    image: url,
    questions:[
      {
        title: textoPergunta,
        color: corFundo,
        answers: [
          {
            text: respostaCorreta,
            image: urlimg,
            isCorrectAnswer: true
          },
          {
            text: respostaErrada1,
            image: urlimg1,
            isCorrectAnswer: false
          }
        ]
      },
      {
        title: textoPergunta2,
        color: corFundo2,
        answers: [
          {
            text: respostaCorreta2,
            image: urlimgg,
            isCorrectAnswer: true
          },
          {
            text: respostaErrada2,
            image:   urlimg2,
            isCorrectAnswer: false
          }
        ]
      },
      {
        title: textoPergunta3,
        color: corFundo3,
        answers: [
          {
            text: respostaCorreta3,
            image: urlimggg,
            isCorrectAnswer: true
          },
          {
            text:  respostaErrada3,
            image: urlimg3,
            isCorrectAnswer: false
          }
        ]
      }
    ],
    levels: [
      {
        title: tituloNivel,
        image: urlNivel,
        text: descricaoNive,
        minValue: 0
      },
      {
        title: tituloNivel2,
        image:urlNivel,
        text: descricaoNive,
        minValue: 50
      }
    ]
  });
  promise.then
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
