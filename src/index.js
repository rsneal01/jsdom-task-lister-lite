document.addEventListener("DOMContentLoaded", () => {
  const newForm  = document.getElementById('create-task-form');
  const newDescription = document.getElementById('new-task-description');

  newForm.addEventListener('submit', createNewTask);
    // handle the form data
  });

  const createNewTask = event => {
    event.preventDefault();
    //stop form from trying to submit
    const newDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newDescription.value;

    appendNewTask(newTask);
    // event.target.reset();
};


function appendNewTask(task) {
  document.getElementById("tasks").appendChild(task);
}
