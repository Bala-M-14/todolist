
let task,description;
let lead=1;
let completedTasks = [];


function display() {
    
    task = document.getElementById("taskInput").value;
    description = document.getElementById("descriptionInput").value;
    task=task.toUpperCase();
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
}
function displaytasks() {
    document.getElementById("taskList").style.display = "block";
    document.getElementById("completedList").style.display = "none";
}

function deletetask(event) {
    const taskList = document.getElementById("taskList");
    const taskItem = event.target.closest(".taskItem");      
    taskList.removeChild(taskItem);

}   

function movetocom(event) {
    const taskItem = event.target.closest(".taskItem");
    const completedList = document.getElementById("completedList");
    const completeButton = taskItem.querySelector(".combut");
   if (completeButton) 
    {
          const completedText = document.createElement("span");
            completedText.className = "completed-label";
            completedText.textContent = "COMPLETED";
            completeButton.replaceWith(completedText);
        }
    const deletebutton = taskItem.querySelector(".delbtn");
    if (deletebutton) deletebutton.remove();
    completedList.appendChild(taskItem);
    taskItem.classList.add("completed");
    const taskText = taskItem.querySelector(".taskitemtxt").innerText;
   completedTasks.push(taskText);
   
    
}
function displaycompleted() {
    document.getElementById("taskList").style.display = "none";
    document.getElementById("completedList").style.display = "block";
}
    





