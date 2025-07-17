// ✅ 1. Alert Test (optional)
function showMessage() {
  alert("Welcome to my final project!");
}

// ✅ 2. Contact Form Validation
function validateForm() {
  const email = document.getElementById("email").value;
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

// ✅ 4. Product Listing with Filter
const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "T-Shirt", category: "clothing" }
];

function filterProducts(category) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  const filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const item = document.createElement("li");
    item.innerText = product.name;
    list.appendChild(item);
  });
}

window.onload = function () {
  loadTasks?.();
  filterProducts?.("all");
};
