const QUIZZ_API = "https://mock-api.driven.com.br/api/v4/buzzquizz";

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
  function tela1(){
    const tela1 = document.querySelector('.tela1')
    tela1.classList.add('esconderTela')
    const tela2 = document.querySelector('.tela2')
    tela2.classList.remove('esconderTela')
  }
  function tela2(){
    const tela1 = document.querySelector('.tela1')
    tela1.classList.add('esconderTela')
    const tela3 = document.querySelector('.tela3')
    tela3.classList.remove('esconderTela')
  }
  function tela32(){
    
    const tela3 = document.querySelector('git.tela31')
    tela3.classList.add('esconderTela')
    const tela32 = document.querySelector('.tela32')
    tela32.classList.remove('esconderTela')

  }

  function renderizarQuizzes(quizzes) {
    const mostrarQuizz = document.querySelector(".corpo-quizzes");
    mostrarQuizz.innerHTML = "";
    quizzes.forEach( quizz => {
        const id = quizz.id;
        const titulo = quizz.title;
        const imagem = quizz.image;
    

       
   
        mostrarQuizz.innerHTML +=  `
          <div onclick="tela1()" class="cada-quizz">
            <div><img class= "quizz-imagem" src="${imagem}" alt="Imagem do quizz: ${titulo}"></div>
            <div class= "quizz-titulo"> ${titulo}</div>
          </div>git 
          `
    }) }

    obterQuizzes();