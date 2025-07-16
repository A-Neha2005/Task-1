// --- QUIZ LOGIC ---

const quiz = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used to style a webpage?",
    options: ["HTML", "jQuery", "CSS"],
    answer: "CSS"
  }
];

let currentQuestion = 0;

function showQuestion() {
  const q = quiz[currentQuestion];
  document.getElementById("question").innerText = q.question;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").innerText = "";
}

function checkAnswer(selected) {
  const correct = quiz[currentQuestion].answer;
  const result = selected === correct ? "✅ Correct!" : `❌ Wrong! Answer: ${correct}`;
  document.getElementById("result").innerText = result;
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quiz.length;
  showQuestion();
}

window.onload = showQuestion;


// --- API FETCH LOGIC (Joke API) ---

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      const joke = `${data.setup} — ${data.punchline}`;
      document.getElementById("jokeOutput").innerText = joke;
    })
    .catch(err => {
      document.getElementById("jokeOutput").innerText = "Failed to load joke.";
    });
}
