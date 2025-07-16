// --- To-Do App with localStorage ---

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    document.getElementById("taskList").innerHTML = saved;
  }
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      li.remove();
      saveTasks();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";

    saveTasks();
  }
}

function saveTasks() {
  const list = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", list);
}

window.onload = loadTasks;
