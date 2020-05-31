let questionContainer = document.getElementById("question-container");
let startButton = document.createElement("button");
let question = document.getElementById("question");
let answers = document.getElementById("answers");
questionContainer.appendChild(startButton);
startButton.innerText = "Start";
startButton.setAttribute("class", "bg-danger pl-5 pr-5 pt-3 pb-3 rounded h2");

let counter = document.querySelector("#score");
let score = parseInt(localStorage.getItem("score") || "0");
counter.textContent = score;

startButton.addEventListener("click", function () {
  let body = document.getElementById("body");
  let containerFluid = document.getElementById("container-fluid");
  let divLeft = document.getElementById("divLeft");
  let divMid = document.getElementById("divMid");
  let divRight = document.getElementById("divRight");
  let h1 = document.getElementById("h1");
  let questionContainer = document.getElementById("question-container");

  body.setAttribute("class", "bg-danger");
  containerFluid.setAttribute("class", "container-fluid");
  divLeft.setAttribute("class", "col-md-3");
  divMid.setAttribute("class", "col-md-6 text-center pt-5 bg-secondary");
  divMid.setAttribute("style", "position:fixed; bottom:0px; height: 100%;");
  h1.setAttribute("class", "text-center");
  questionContainer.setAttribute("class", "text-center");
  divRight.setAttribute("class", "col-md-3");

  h1.innerText = "Go!";
  questionContainer.innerHTML = "";
  questionContainer.appendChild(question);
  questionContainer.appendChild(answers);

  // Variables to be used:
  // The array of questions for our quiz game.
  let questions = [
    {
      question: "JavaScript is not an easy language to learn for beginners.",
      answers: ["True", "False"],
      correctAnswer: "True",
    },
    {
      question: "Expressions, declarations, and constructors are all different types of JavaScript functions.",
      answers: ["True", "False"],
      correctAnswer: "True",
    },
    {
      question: "If else and switch case are JavaScript conditionals.",
      answers: ["True", "False"],
      correctAnswer: "True",
    },
    {
      question: "Improperly coded loops can run forever and crash your computer.",
      answers: ["True", "False"],
      correctAnswer: "True",
    },
    {
      question: "Brendan Eich invented JavaScript.",
      answers: ["True", "False"],
      correctAnswer: "True",
    },
  ];

  //TODO: add effect for correct or wrong button click
  //TODO: add score count
  //TODO: restart quiz and add name for high score
  //TODO: add save info function

  //variables created for timer
  let questionIndex = 0;
  let timerDiv = document.querySelector("#timer");
  let time = 100;
  //decrements time from time variable created above

  timerDiv.textContent = time;

  let timer = setInterval(function () {
    time--;
    timerDiv.textContent = time;

    //added stop timer conditional
    //added clearInterval
    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
  
  let num = 0;
  function renderQuestion() {
    num++;

    let question = questions[questionIndex];
    let $question = document.querySelector("#question");
    let $answers = document.querySelector("#answers");
    $question.textContent = question.question;
    $answers.innerHTML = "";

    for (let i = 0; i < question.answers.length; i++) {
      let $btn = document.createElement("button");
      $btn.textContent = question.answers[i];
      $btn.setAttribute("class", "btn btn-primary ml-3 mt-3 pl-5 pr-5");
      $answers.append($btn);
    }
  }

  document.querySelector("#answers").addEventListener("click", function (e) {
    if (!e.target.matches("button")) return;
    questionIndex++;
    renderQuestion();
    console.log(e);
    if (e.target.textContent === questions[num].correctAnswer) {
      console.log(questions[num].correctAnswer);
      score += 20;
      console.log("score:",score);
      counter.textContent = score;
      localStorage.setItem("score", score);
    }
  });
  renderQuestion();
});
