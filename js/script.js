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
  function renderizarQuizzes(quizzes) {
    const mostrarQuizz = document.querySelector(".corpo-quizzes");
    mostrarQuizz.innerHTML = "";
    quizzes.forEach( quizz => {
        const id = quizz.id;
        const titulo = quizz.title;
        const imagem = quizz.image;
    
   
        mostrarQuizz.innerHTML +=  `
        <div class="container-quizz">
          <img class="imagem-quizz" src="${imagem}">
          <p class="texto-quizz">${titulo}</p>
        </div>
          `

    }) }

    obterQuizzes();