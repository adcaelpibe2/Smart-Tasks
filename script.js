'use strict'

var nam = prompt("Write your name ..")

while (nam == "" || nam == null) {
    alert("Write your name please ")
    var nam = prompt("Write your name ..")
}
(typeof nam == "string") ? document.querySelector("#aqui").append(nam) : console.log('error')



var date = document.getElementById("date");
const DATE = new Date();
date.innerHTML = DATE.toLocaleDateString('UTC', { weekday: 'long', month: 'short', day: 'numeric' });




var button = document.getElementById("form-task");
button.addEventListener("submit", function (e) {
    e.preventDefault();

    var title = document.querySelector("#for_name").value;
    console.log(title);

    if (title != "") {                    /**/
        let task = { title };

        if (localStorage.getItem('task1') === null) {
            let tasks = [];
            tasks.push(task);
            localStorage.setItem('task1', JSON.stringify(tasks))
            console.log("PI")
        } else {
            let tasks = JSON.parse(localStorage.getItem('task1'));
            tasks.push(task);
            localStorage.setItem('task1', JSON.stringify(tasks))

        }

        getTask();
        button.reset();
    }/**/

})



function deleteTask(title) {

    let tasks = JSON.parse(localStorage.getItem('task1'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('task1', JSON.stringify(tasks));
    getTask();
}

function getTask() {
    let task = JSON.parse(localStorage.getItem('task1'));
    let main = document.querySelector(".task-container");

    main.innerHTML = '';
    for (let i = 0; i < task.length; i++) {
        let title = task[i].title;

        main.innerHTML += `<div class="know">
                <p><i>${title}</i>
                <a href="#" class="delete" onclick="deleteTask('${title}')">Delete</a>
                </p> 
                </div>`;
    }
}

getTask();







