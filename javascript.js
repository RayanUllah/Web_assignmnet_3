const questions = [
  { q: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language"], answer: 0 },
  { q: "CSS is used for styling webpages.", options: ["True", "False"], answer: 0 },
  { q: "JavaScript is a...", options: ["Programming Language", "Database", "Browser"], answer: 0 },
  { q: "Flexbox is used for layout in CSS.", options: ["True", "False"], answer: 0 },
  { q: "DOM stands for?", options: ["Document Object Model", "Data Object Mode", "Digital Ordinance Model"], answer: 0 }
];

let index = 0;
let score = 0;

function startQuiz() {
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = questions[index];
  document.getElementById("question").innerText = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i, btn);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, btn) {
  const correctAns = questions[index].answer;

  if (selected === correctAns) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
  }

  disableOptions();
  document.getElementById("nextBtn").style.display = "block";
}

function disableOptions() {
  document.querySelectorAll(".option").forEach(o => {
    o.style.pointerEvents = "none";
  });
}

function nextQuestion() {
  index++;
  document.getElementById("nextBtn").style.display = "none";

  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("score").innerText = `${score} / ${questions.length}`;

  document.getElementById("message").innerText =
    score >= 4 ? "🎉 Excellent! Great Job!" : "😅 Try Again!";
}
