const addToDoBtn = document.getElementById("addToDoBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeBtn");
const taskInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const taskBox = document.getElementById("taskBox");


addToDoBtn.addEventListener("click", function () {
    modalOverlay.style.display = "flex";
})

closeBtn.addEventListener("click", function () {
    modalOverlay.style.display = "none";
})

closeBtn.addEventListener("click", function () {
    modalOverlay.style.display = "none";
})

modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});

// Function to add a new task
submitBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim(); // Get text & remove extra spaces

    if (taskText === "") {
        alert("Please enter a task!"); // Prevent adding empty tasks
        return;
    }


    const taskItem = document.createElement("div");
    taskItem.classList.add("task");


    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add("task-checkbox");

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);


    taskBox.appendChild(taskItem);


    taskInput.value = "";


    modalOverlay.style.display = "none";


    deleteBtn.addEventListener("click", function () {
        taskItem.remove(); // Removes the task when clicked
    });

    taskCheckbox.addEventListener("change", function () {
        if (taskCheckbox.checked) {
            taskTextSpan.classList.add("completed"); // Mark as completed
        } else {
            taskTextSpan.classList.remove("completed"); // Unmark as completed
        }
    });


});