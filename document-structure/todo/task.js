const addTask = document.getElementById("tasks__add")
const taskInput = document.getElementById("task__input")
const taskList = document.getElementById("tasks__list")

addTask.addEventListener("click", (e) => {
    e.preventDefault();
    if (taskInput.value.trim() !== "") {
        taskList.innerHTML += `<div class="task">
       <div class="task__title">${taskInput.value}</div>
       <a href="#" class="task__remove">&times;</a>
     </div>`;
        taskInput.value = "";
    }
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('task__remove')) {
      event.target.closest('.task').remove();
    }
});