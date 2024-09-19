const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const select = document.getElementById("todo-select");
const type = document.getElementById("todo-type");

const todoPend = document.getElementById        ("todo-pend"          );
const todoPlanning = document.getElementById    ("todo-planning"      );
const todoDesign = document.getElementById      ("todo-design"      );

const todoDevelopment = document.getElementById ("todo-development"     );
const todoTesting = document.getElementById     ("todo-testing"      );
const todoResolved = document.getElementById    ("todo-resolved"         );

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });
  newTask.addEventListener("dblclick", () => {
    newTask.remove("class");
  });

  if(select.value === "todo-pend"){
    todoPend.appendChild(newTask);
  }
  if(select.value === "todo-planning"){
    todoPlanning.appendChild(newTask);
  }
  if(select.value === "todo-design"){
    todoDesign.appendChild(newTask);
  }
  if(select.value === "todo-development"){
    todoDevelopment.appendChild(newTask);
  }
  if(select.value === "todo-testing"){
    todoTesting.appendChild(newTask);
  }
  if(select.value === "todo-resolved"){
    todoResolved.appendChild(newTask);
  }

  input.value = "";
});
