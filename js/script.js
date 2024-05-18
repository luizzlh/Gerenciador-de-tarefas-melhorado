//função que adiciona tarefa
function addTask() {

    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        newTask.querySelector(".task-title").textContent = taskTitle;
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        const list = document.querySelector("#task-list");

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            finalizaTask(this);
        });

        list.appendChild(newTask);
        document.querySelector("#task-title").value = "";
        document.querySelector("#task-title").focus();
    }

}

function removeTask(task){
    task.parentNode.remove(true);
}

function finalizaTask(task){
    task.parentNode.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    addTask();
});