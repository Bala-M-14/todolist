var tstask;
var tsdescription;
var tslead = 0;
function tsdisplay() {
    var taskInput = document.getElementById("taskInput");
    tstask = taskInput.value;
    var descriptionInput = document.getElementById("descriptionInput");
    tsdescription = descriptionInput.value;
    tstask = tstask.toUpperCase();
    if (tstask.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.className = "taskItem";
    listItem.innerHTML = "\n    <div class=\"taskitemtxt\">\n      <strong>\u25AB\uFE0F".concat(tstask, "</strong><br>").concat(tsdescription, "\n    </div>\n    <div class=\"wrbuttons\">\n      <button class=\"delbtn\" onclick=\"deletetask(event)\">\u2716</button>\n      <button class=\"combut\" onclick=\"movetocom(event)\">\u2705</button>\n    </div>\n  ");
    taskList.appendChild(listItem);
    taskInput.value = "";
    descriptionInput.value = "";
    tslead++;
    saveTasks();
}
function deletetask(event) {
    var target = event.target;
    var taskItem = target.closest(".taskItem");
    if (taskItem)
        taskItem.remove();
    saveTasks();
}
function movetocom(event) {
    var target = event.target;
    var taskItem = target.closest(".taskItem");
    var completedList = document.getElementById("completedList");
    var completeButton = taskItem.querySelector(".combut");
    if (completeButton) {
        var completedText = document.createElement("span");
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
window.onload = function () {
    var savedTasks = localStorage.getItem("tasks");
    var savedCompleted = localStorage.getItem("completed");
    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }
    if (savedCompleted) {
        document.getElementById("completedList").innerHTML = savedCompleted;
    }
    displaytasks();
    var taskInput = document.getElementById("taskInput");
    var descriptionInput = document.getElementById("descriptionInput");
    var addTaskBtn = document.getElementById("addTaskBtn");
    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            descriptionInput.focus();
        }
    });
    descriptionInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            tsdisplay();
            setTimeout(function () { return taskInput.focus(); }, 0);
        }
    });
};
window.deletetask = deletetask;
window.movetocom = movetocom;
window.displaytasks = displaytasks;
window.displaycompleted = displaycompleted;
window.tsdisplay = tsdisplay;
