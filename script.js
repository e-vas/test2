let toDoList = document.getElementById('toDo'); 

let todos = [
    {id: 1, title: 'Title_1'},
    {id: 2, title: 'Title_2'},
    {id: 3, title: 'Title_3'},
    {id: 4, title: 'Title_4'},


];

const addEvent = document.querySelector('button'); 
addEvent.addEventListener('click', addTask);

function addTask(event) {
    event.preventDefault();
    let taskName = document.querySelector('input').value;
    let lastId = todos.at(-1).id + 1;
    todos.push({id: lastId, title: taskName});
    updateTodos (todos.length - 1);    
    console.log(todos);
};


for (i in todos) {
        updateTodos (i);
};


function updateTodos (i){
        let li = document.createElement('li');
        li.innerHTML = " ";
                let inputForm = document.createElement('input');
                inputForm.type = "checkbox";
                li.append(inputForm);

                let textTitle = document.createTextNode(todos[i].title);
                textTitle.innerHTML = todos[i].title;
                li.append(textTitle);
                
                let buttonD = document.createElement('button');
                buttonD.type="button";
                buttonD.class="buttondel";

                        let imgD = document.createElement('img');
                        imgD.src = "https://cdn-icons-png.flaticon.com/512/3687/3687412.png";
                        imgD.height="17";
                        buttonD.append(imgD);

                li.append(buttonD);

        toDoList.append(li);        
}

