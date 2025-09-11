
let task,description;
    let lead=1;

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
    listItem.innerHTML = `<div class="taskitemtxt"><strong>▫️${task}</strong><br>${description} </div><div class="wrbuttons"><button class="delbtn" onclick="deletetask()" >✖</button><button class="combut" onclick="movetocom()">✅</button></div>`;
    taskList.appendChild(listItem);
    document.getElementById("taskInput").value = "";
    document.getElementById("descriptionInput").value = "";
    lead++;
}
function deletetask() {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(event.target.parentNode.parentNode);
    lead;
    
    const tasks = document.querySelectorAll('.taskItem');
}   

function movetocom(){
    // Remove the task from the current list
}

