let listContainer = document.getElementById('list-container')

let inputBox = document.getElementById('input-box')

// add new task to the list 

function addTask()
{
    if(inputBox.value === ""){
        alert("You should add a Task !")
    }
    else
    {
        let task = document.createElement("li")
        task.textContent = inputBox.value
        listContainer.appendChild(task)
        
        let span = document.createElement("span")
        span.textContent = "\u00d7"
        task.appendChild(span)

        // add edit icon to the task 
        
        let editIcon = document.createElement("img")
        editIcon.src = "images/edit.png"
        editIcon.className = "edit-icon"
        editIcon.onclick = function() {
            inputBox.value = task.firstChild.textContent
            task.remove()
            saveData()
        }
        task.appendChild(editIcon)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName == "LI"){
        el.target.classList.toggle("checked")
        saveData()
    }
    else if(el.target.tagName == "SPAN"){
        el.target.parentElement.remove()
        saveData()
    }
})

// save the tasks added to the list in the browser local storage

function saveData()
{
    localStorage.setItem("tasks", listContainer.innerHTML)
}

// the tasks will be displayed when loading the page

function showData()
{
    listContainer.innerHTML = localStorage.getItem("tasks")
}

showData()
