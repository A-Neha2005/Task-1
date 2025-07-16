// ✅ 1. Alert Button
function showMessage() {
  alert("Hello! You clicked the button.");
}

// ✅ 2. Form Validation
function validateForm() {
  let email = document.getElementById("email").value;
  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

// ✅ 3. To-Do List with LocalStorage
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const listItem = document.createElement("li");
  listItem.innerText = task;

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.onclick = () => {
    listItem.remove();
    saveTasks();
  };

  listItem.appendChild(delBtn);
  document.getElementById("taskList").appendChild(listItem);
  input.value = "";

  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(item => {
    tasks.push(item.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const listItem = document.createElement("li");
    listItem.innerText = task;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.onclick = () => {
      listItem.remove();
      saveTasks();
    };

    listItem.appendChild(delBtn);
    document.getElementById("taskList").appendChild(listItem);
  });
}
window.onload = loadTasks;

// ✅ 4. Fetch from API (Joke)
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = data.setup + " - " + data.punchline;
    });
}

// ✅ 5. Simple Quiz (Optional)
function checkAnswer(correctId, userId) {
  if (correctId === userId) {
    alert("Correct Answer!");
  } else {
    alert("Wrong Answer. Try Again!");
  }
}
