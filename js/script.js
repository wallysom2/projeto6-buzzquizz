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
    

        let quizzHTML = null;
   
          quizzHTML = `
          <div class="cada-quizz">
            <div><img class= "quizz-imagem" src="${imagem}" alt="Imagem do quizz: ${titulo}"></div>
            <div class= "quizz-titulo"> ${titulo}</div>
          </div>
          `

          if(quizzHTML !== null) {
            mostrarQuizz.innerHTML += quizzHTML;
          }

    }) }

    obterQuizzes();