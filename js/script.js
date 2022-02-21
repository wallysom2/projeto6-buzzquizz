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

//let textoPergunta2
//let corFundo2
//let respostaCorreta2
//let urlimgg
//let respostaErrada11
//let urlimg11
//let respostaErrada22
//let urlimg22
//let respostaErrada33
//let urlimg33

//let textoPergunta3
//let corFundo3
//let respostaCorreta3
//let urlimggg
//let respostaErrada111
//let urlimg111
//let respostaErrada222
//let urlimg222
//let respostaErrada333
//let urlimg333

let tituloNivel
let acertoMinimo
let urlNivela
let descricaoNivel

//let tituloNivel2
//let acertoMinimo2
//let urlNivel2
//let descricaoNivel2

//let tituloNivel3
//let acertoMinimo3
//let urlNivel3
//let descricaoNivel3


   
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

    function obterQuizzAberto (idquizz){
      const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idquizz}`);
      promise.then(resposta => {
        console.log(resposta.data);
        const titulo = resposta.data.title
        console.log (titulo)
        mostrarQuizzAberto (resposta.data)
        });
      promise.catch( erro => {
        console.error(erro.response);
        alert("Xiii! Deu ruim na hora de receber mensagens!");
      })
    }
  

    function mostrarQuizzAberto (quizz){
    quizzescolhido = quizz;
    const titulo = document.querySelector(".pagina-quizz")
      titulo.innerHTML = `      
          <section class="titulo-quizz">
              <h2> <span>${quizz.title}</span></h2>
          </section>`
     const umquizz = document.querySelector(".titulo-quizz");
    
      umquizz.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('${quizz.image}')`;
      quizz.questions.sort(embaralha)

      for (let x = 0; x < quizz.questions.length; x++) {
        titulo.innerHTML += `
            <section class="perguntas">
                <article data-identifier="question" class="pergunta">
                    <div class="titulo-pergunta" style="background-color: ${quizzescolhido.questions[x].color}">
                        <h3>${quizz.questions[x].title}</h3>
                    </div>
                    <div class="bloco-respostas esse${x}"></div>
                </article>
            </section`
        let classpergunta = document.querySelector(`.esse${x}`);
        for (let y = 0; y < quizz.questions[x].answers.length; y++) {
          classpergunta.innerHTML += `
          <div data-identifier="answer" class="resposta pergunta${x}${y} ${quizz.questions[x].answers[y].isCorrectAnswer}" onclick="quizzSelecionado(${x},${y})">
              <img src="${quizz.questions[x].answers[y].image}" alt="">
              <h4>${quizz.questions[x].answers[y].text}</h4>
          </div> `
        }}window.scrollTo(0, 0)}

   
 function quizzSelecionado(numerodaquestao, opcao) {
  let escolha = document.querySelector(`.pergunta${numerodaquestao}${opcao}`);
  escolha.classList.add("escolhida");
  for (let z = 0; z < quizzescolhido.questions[numerodaquestao].answers.length; z++) {
      let umaopcao = document.querySelector(`.pergunta${numerodaquestao}${z}`);
      umaopcao.removeAttribute('onclick');
      if (umaopcao != escolha) {
          umaopcao.classList.add("nop");
      }
      if (umaopcao.classList.contains(false)) {
          umaopcao.classList.add("errou");
      } else {
          umaopcao.classList.add("acertou");
      }
      let w = z + 1;
      if (w < quizzescolhido.questions.length) {
          setTimeout(() => {
              let irpara = document.querySelector(`.pergunta${numerodaquestao}${z+1}`)
              irpara.scrollIntoView()
              if (questoesrespondidas === quizzescolhido.questions.length) {
                  resultadoQuizz()
              }
          }, 500);
      }
  }

  if (escolha.classList.contains(true)) {
      acertos += 1;
      quantidadeAcertos()
  }
  questoesrespondidas += 1;
  console.log(acertos)
}
 

    let questoesrespondidas = 0;
    let acertos = 0;
    let porcentagem = 0;
    let leveltotal = 0;
    let umacerto = 0;
    let porcentagemarredondada = 0;
    let numeronoarray = 0;
    let u = 0

function quantidadeAcertos() {
    for (u = 0; u < quizzescolhido.levels.length; u++) {
        leveltotal += quizzescolhido.levels[u].minValue;
        umacerto = leveltotal / quizzescolhido.questions.length
    }
    porcentagem = (acertos * umacerto * 100) / leveltotal;
    porcentagemarredondada = Math.round(porcentagem);
    for (u = 0; u < (quizzescolhido.levels.length - 1); u++) {
        if (porcentagemarredondada <= quizzescolhido.levels[u].minValue) {
            return u
        }
    }
}

function resultadoQuizz() {
    let perguntas = document.querySelector(".resusltadoQ");
    perguntas.innerHTML = `
        <article class="resultado" data-identifier="quizz-result">
            <div class="titulo-resultado">
                <h3>${porcentagemarredondada}% ${quizzescolhido.levels[u].title}</h3>
            </div>
            <div class="conteudo-reultado">
                <img src="${quizzescolhido.levels[u].image}" alt="Imagem do resultado">
                <span>${quizzescolhido.levels[u].text}</span>
            </div>
        </article>
        <div class="botoes">
            <button class="reiniciar-quizz" onclick="reiniciarQuizz()">
                <p>Reiniciar Quizz</p>
            </button>
            <button class="voltar-inicio" onclick="paginaInicial()">
                <p>Voltar pra home</p>
            </button>
        </div>`
    irpara = document.querySelector(".voltar-inicio")
    irpara.scrollIntoView()
}

function paginaInicial() {
    window.location.reload();
}

function reiniciarQuizz() {
     mostrarQuizzAberto (quizzescolhido);
    apagarresultado = document.querySelector(".resusltadoQ");
    apagarresultado.innerHTML = ""
}

function erroPegouQuizz(error) {
    alert(`
        Infelizmente não foi possível pegar seu Quizz no servidor.
        ${error.data}
    `);
}


function embaralha() {
  return Math.random() - 0.5;
}
      
    function tela2(id){
    const tela1 = document.querySelector('.tela1')
    tela1.classList.add('esconderTela')
    const tela2 = document.querySelector('.tela2')
    tela2.classList.remove('esconderTela')

    obterQuizzAberto (id)    
    }

    let gambiarra =1
    function tela3(){
      const tela1 = document.querySelector('.tela1')
      tela1.classList.add('esconderTela')
      const tela3 = document.querySelector('.tela3')
      tela3.classList.remove('esconderTela')
      if(gambiarra==1){
      const dd =document.querySelector(".caixa-texto");
        dd.innerHTML = ''
      }
      gambiarra = gambiarra + 1
      
      
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
      //for(let i=0;i<url.length;i++){
  
      let urlvalido
      if(url[0]=='h'&& url[1]=='t'&&url[2]=='t'&&url[3]=='p'&&url[4]=='s'&&url[5]==':'&&url[6]=='/' || url[0]=='d'&& url[1]=='a'&&url[2]=='t'&&url[3]=='a'&&url[4]==':'){
        urlvalido = true
      }else{
        urlvalido = false
        alert('URL invalida')
      }
      
      //https:/
      console.log(quantidadeNiveis <=2)
      console.log(quantidadeNiveis)
      if(tituloQuizz !=='' && url !=='' && quantidadePerguntas !=='' && quantidadeNiveis !=='' && 65>=tituloQuizz.length && tituloQuizz.length >=20 && quantidadePerguntas >=3 && quantidadeNiveis >=2 && urlvalido){
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
  ul3.innerHTML='pergunta3'
  ul4.innerHTML='nivel1'
  ul5.innerHTML='nivel2'
  
  
  function voltarHome(){
    const tela34 = document.querySelector('.tela34 ')
    tela34.classList.add('esconderTela')
    const tela1 = document.querySelector('.tela1')
    tela1.classList.remove('esconderTela')
    const dd =document.querySelector(".caixa-texto");
        dd.innerHTML += `<div  onclick="tela2('${seuId}')" class="container-quizz">
        <img class="imagem-quizz2" src="${url}">
        <p class="texto-quizz">dfg</p>
      </div>`
  }
  
  function tela34(){
   
    let ul6 = document.querySelector(".fim");
    ul6.innerHTML=`<div class="tela344">
    
    <div class="textoTela3"> <strong> <h1> Seu quiz está pronto</h1> </strong></div>
    <div class='amarrar'>
      <img class='imgFim' src="${url}">
      <button onclick='tela2(${seuId})' class="botaoTela33"> Acessar Quizz</button>
      <div class='divFim'  onclick='voltarHome()'><p>Voltar pra home</p></div>
    </div>
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
      questions: [
        {
          title: textoPergunta,
          color: "#123456",
          answers: [
            {
              text:respostaCorreta ,
              image: urlimg,
              isCorrectAnswer: true
            },
            {
              text:respostaErrada1,
              image: urlimg1,
              isCorrectAnswer: false
            }
          ]
        },
        {
          title: respostaErrada2,
          color: "#123456",
          answers: [
            {
              text: "Texto da resposta 1",
              image: urlimg2,
              isCorrectAnswer: true
            },
            {
              text: "Texto da resposta 2",
              image: urlimg3,
              isCorrectAnswer: false
            }
          ]
        },
        {
          title: respostaErrada3,
          color: "#123456",
          answers: [
            {
              text: "Texto da resposta 1",
              image: urlimg1,
              isCorrectAnswer: true
            },
            {
              text: "Texto da resposta 2",
              image: "https://http.cat/412.jpg",
              isCorrectAnswer: false
            }
          ]
        }
      ],
      levels: [
        {
          title: "Título do nível 1",
          image: "https://http.cat/411.jpg",
          text: "Descrição do nível 1",
          minValue: 0
        },
        {
          title: "Título do nível 2",
          image: "https://http.cat/412.jpg",
          text: "Descrição do nível 2",
          minValue: acertoMinimo
        }
      ]
    });
    promise.then(idid)
    
   
  }
  const lista =[]
  const imgcaixa =[]
  let imgcaixa2
    function idid(pegar){
      console.log(pegar)
      seuId =pegar.data.id
      imgcaixa2 =pegar.data.image
      
      lista.push(seuId)
      
     
      imgcaixa.push(imgcaixa2)
  
      const lista2 = JSON.parse(lista)
      localStorage.setItem("lista3",lista2)
     
      const img2 = JSON.parse(imgcaixa)
      localStorage.setItem("img3",img2)
    }
  
  function renderizarQuizzes(quizzes) {
    const mostrarQuizz = document.querySelector(".corpo-quizzes");
    mostrarQuizz.innerHTML = "";
    quizzes.forEach( quizz => {
        const id = quizz.id;
        const titulo = quizz.title;
        const imagem = quizz.image;
       
    
   
        mostrarQuizz.innerHTML +=  `
        <div onclick="tela2('${id}')" class="container-quizz">
          <img class="imagem-quizz" src="${imagem}">
          <p class="texto-quizz">${titulo}</p>
        </div>
          `

    }) }

    obterQuizzes();
    guardarId()
    function guardarId(){


    const listaid = localStorage.getItem("lista3")
    const lista3= JSON.parse(listaid)
    console.log(lista3)
    const imgid = localStorage.getItem("img3")
    const img3= JSON.parse(imgid)

    for(let i=0;i< lista.length;i++){
      const dd =document.querySelector(".caixa-texto");
    dd.innerHTML += `<div  onclick="tela2('${lista3[i]}')" class="container-quizz">
    <img class="imagem-quizz2" src="${img3[i]}">
    <p class="texto-quizz">dfg</p>
  </div>`


    }}
  
   