function addtask(){
    const taskinput = document.getElementById("taskinput")
    const tasktext = taskinput.value.trim();
    if (tasktext !== ""){
        const tasklist = document.getElementById("tasklist")
        const li = document.createElement("li")
        li.textContent = tasktext;
        const delbtn = document.createElement("button")
        delbtn.textContent = "delete";
        delbtn.onclick = function(){
            tasklist.removeChild(li);
            savetasks();
        }
        li.appendChild(delbtn);
        tasklist.appendChild(li);
        taskinput.value ="";
        savetasks();
    }
    else{
        alert("please enter your task")
    }
   
}
function savetasks(){
    const tasklist = document.getElementById("tasklist");
    const tasks = [];
    for(let i = 0 ; i <tasklist.children.length; i++ ){
        tasks.push(tasklist.children[i].textContent.replace("delete","").trim());
    }
      localStorage.setItem("tasks",JSON.stringify(tasks));
    }

function loadTasks(){
    const textlist  = document.getElementById("taskList");
    const tasks = JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(tasktext =>{
        const li = document.createElement("li");
        li.textContent = tasktext ;
        const deletebutton = document.createElement("button")
        deletebutton.textContent = "delete";
        deletebutton.onclick = function(){
            tasklist.removeChild(li);
            savetasks();
        };
     li.appendChild(deletebutton);
     tasklist.appendChild(li);
    }

    )
        
    } 
        
    
     window.onload = loadTasks();