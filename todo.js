function editName() {
    document.getElementById("taskName").innerHTML = '<input id="taskNameInput" type="text" placeholder="Change Task Name"> <button class="btn btn-warning editNameInputButton" onclick="editNameSave()">Edit</button>'
}

function editNameSave() {
    newTaskName = document.getElementById("taskNameInput").value
    if (newTaskName == "") {

        alert("Task name can't be null!")

    }
    else{
        document.getElementById("taskName").innerHTML = `<p id="taskName"> ${newTaskName} <a class="edit" onclick="editName()">✒️</a> </p>`
    }
}



/* ADDING NEW TASK */
var TaskId = 0;

function addTask() {
    var text = document.getElementById("newTaskName").value
    if (text == ""){
        text = "New Task"
        TaskId += 1;
        $("ul").prepend(`<li id="task${TaskId}" onclick="selectTask('${TaskId}')" class="list-group-item">${text} <a onclick="delElement('${TaskId}')" id="del${TaskId}" class="toDo">x</a></li>`);

        document.getElementById("newTaskName").value = "";
    }
    else{
        TaskId += 1;
        $("ul").prepend(`<li id="task${TaskId}" onclick="selectTask('${TaskId}')" class="list-group-item">${text} <a onclick="delElement('${TaskId}')" id="del${TaskId}" class="toDo">x</a></li>`);

        document.getElementById("newTaskName").value = "";
    }
}

/* DELETING ALL TASK */ /*PROBLEM!!!*/
function delAll() {
    $("#ulTasks").empty();
}


/* DELETING */
function delElement(x){
    delObj = "task" + x;
    document.getElementById(delObj).remove();
}


/* Select to Task */

function selectTask(x){
    selectedTaskName = "task" + x;
    document.getElementById(selectedTaskName).style.backgroundColor = "rgb(0, 136, 255)";
    document.getElementById(selectedTaskName).style.color = "white";

    openTask();
}




                                                            /*LOGIN PAGE*/

/*LogIn-SignUp*/

function loginPage(){ 
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("signupPage").style.display = "none";
    document.getElementById("creatTeamBody").style.background = "linear-gradient(to right, #0099ff 0%, #33ccff 80%)"
}

function signupPage(){
    document.getElementById("signupPage").style.display = "block";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("creatTeamBody").style.background = "linear-gradient(to right, #ff5100 0%, #ffb259 80%)"
}




/*AJAX*/

function openTask() {

    fetch

    document.getElementById("textArea").value = txt;
}