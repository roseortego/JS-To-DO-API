// // inputs
let listTask = document.querySelector("#listTask");
let inputDate = document.querySelector("#inputDate");

// //btn
let addTaskBtn = document.querySelector("#addTaskBtn");
let delTaskBtn = document.querySelector("#addTaskBtn");

//display
let taskList = document.querySelector("#list");

let tasks = JSON.parse(localStorage.getItem("entries"));

console.log(tasks);

let list = "";

if (tasks == null) {
   list = `<p id="noTask">No task added.</p>`;
} else {
tasks.forEach((x) => {
    list += `<li>${x.todoListTask} ${x.todoInputDate}<button> Delete<button></li>`
    })
}

taskList.innerHTML = list;

let addTask = () => {
    
    if ( tasks == null ) {
        tasks = [];
    }

    let task = {
        todoListTask: listTask.value,
        todoInputDate: inputDate.value,
    }


    tasks.push(task);
    console.log(tasks);

    localStorage.setItem("entries", JSON.stringify(tasks));
   
    let noTask = document.querySelector("#noTask");
    //noTask.style.display = "none";

     //display newly added names
    let item = document.createElement("li");
    item.innerHTML = `${list.todoListTask} - ${list.todoInputDate}`;
    console.log(item)


    let listTask = listTask.value;
    let inputDate = inputDate.value;
    localStorage.getItem
   // list.appendChild(item);
}
//events
addTaskBtn.addEventListener("click", addTask);
