let tstask: string;
let tsdescription: string;
let tslead: number = 0;

function tsdisplay(): void {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  tstask = taskInput.value;
  const descriptionInput = document.getElementById("descriptionInput") as HTMLInputElement;
  tsdescription = descriptionInput.value;
  
 
  tstask = tstask.toUpperCase();
  
  if (tstask.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList") as HTMLElement; 
  const listItem = document.createElement("li");
  listItem.className = "taskItem";
  listItem.innerHTML = `
    <div class="taskitemtxt">
      <strong>▫️${tstask}</strong><br>${tsdescription}
    </div>
    <div class="wrbuttons">
      <button class="delbtn" onclick="deletetask(event)">✖</button>
      <button class="combut" onclick="movetocom(event)">✅</button>
    </div>
  `;

  taskList.appendChild(listItem);
  taskInput.value = "";
  descriptionInput.value = "";
  tslead++;
  saveTasks();
}

function deletetask(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  const taskItem = target.closest(".taskItem");
  if (taskItem) taskItem.remove();
  saveTasks();
}

function movetocom(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  const taskItem = target.closest(".taskItem")!;
  const completedList = document.getElementById("completedList")!;
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

function displaytasks(): void {
  (document.getElementById("taskList") as HTMLElement).style.display = "block";
  (document.getElementById("completedList") as HTMLElement).style.display = "none";
}

function displaycompleted(): void {
  (document.getElementById("taskList") as HTMLElement).style.display = "none";
  (document.getElementById("completedList") as HTMLElement).style.display = "block";
}

function saveTasks(): void {
  localStorage.setItem("tasks", document.getElementById("taskList")!.innerHTML);
  localStorage.setItem("completed", document.getElementById("completedList")!.innerHTML);
}




window.onload = function(): void {

  const savedTasks = localStorage.getItem("tasks");
  const savedCompleted = localStorage.getItem("completed");
  
  if (savedTasks) {
    document.getElementById("taskList")!.innerHTML = savedTasks;
  }
  if (savedCompleted) {
    document.getElementById("completedList")!.innerHTML = savedCompleted;
  }
  
  displaytasks();

  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const descriptionInput = document.getElementById("descriptionInput") as HTMLInputElement;
  const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;

    taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      descriptionInput.focus(); 
    }
  });

  descriptionInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    tsdisplay();
    setTimeout(() => taskInput.focus(), 0);  
  }
});  
}
window.deletetask = deletetask;
window.movetocom = movetocom;
window.displaytasks = displaytasks;
window.displaycompleted = displaycompleted;
window.tsdisplay = tsdisplay;