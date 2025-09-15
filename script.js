let task, description, lead = 1;

function display() {
  task = document.getElementById("taskInput").value;
  description = document.getElementById("descriptionInput").value;
  task = task.toUpperCase();

  if (task.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");
  listItem.className = "taskItem";
  listItem.innerHTML = `
    <div class="taskitemtxt">
      <strong>▫️${task}</strong><br>${description}
    </div>
    <div class="wrbuttons">
      <button class="delbtn" onclick="deletetask(event)">✖</button>
      <button class="combut" onclick="movetocom(event)">✅</button>
    </div>
  `;

  taskList.appendChild(listItem);
  document.getElementById("taskInput").value = "";
  document.getElementById("descriptionInput").value = "";
  lead++;
  saveTasks();
}

function deletetask(event) {
  const taskItem = event.target.closest(".taskItem");
  if (taskItem) taskItem.remove();
  saveTasks();
}

function movetocom(event) {
  const taskItem = event.target.closest(".taskItem");
  const completedList = document.getElementById("completedList");
  const completeButton = taskItem.querySelector(".combut");

  if (completeButton) {
    const completedText = document.createElement("span");
    completedText.className = "completed-label";
    completedText.textContent = "COMPLETED";
    completeButton.replaceWith(completedText);
  }

  

  completedList.appendChild(taskItem);
  taskItem.classList.add("completed");
  saveTasks();
}

function displaytasks() {
  document.getElementById("taskList").style.display = "block";
  document.getElementById("completedList").style.display = "none";
}

function displaycompleted() {
  document.getElementById("taskList").style.display = "none";
  document.getElementById("completedList").style.display = "block";
}

function saveTasks() {
  localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
  localStorage.setItem("completed", document.getElementById("completedList").innerHTML);
}

window.onload = function() {
  document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
  document.getElementById("completedList").innerHTML = localStorage.getItem("completed") || "";
  displaytasks();
}

