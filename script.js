// добавление новой задачи в массив
function addTask(event) {
        event.preventDefault();
        let taskValue = taskName.value    
        lastId ++;
        todos.push({id: lastId, title: taskValue, done: false}); //Добавление нового эл-та в массив
        updateTodos ({id: lastId, title: taskValue, done: false}); //Функция добавления на стр    
        document.querySelector('input').value = ""; //Сброс значения в строке
        //findDellEvent (); //Перезапуск поиска всех кнопок удаления включая новую

        
};

//  Добавление элементов из массива на страницу
function updateTodos ({ id, title, done }){
        let li = document.createElement('li');
        li.innerHTML = "";
        li.id = id;
                let inputForm = document.createElement('input');
                inputForm.type = "checkbox";
                inputForm.checked = done;
                inputForm.addEventListener('click', () => doneTask(li, inputForm, id)); //добавление слушателя к кнопке
                li.append(inputForm);
                doneTaskClass(li, done);

                let textTitle = document.createTextNode(title);
                textTitle.innerHTML = title;
                li.append(textTitle);


                let buttonD = document.createElement('button');
                buttonD.type="button";
                buttonD.class="buttondel";
                buttonD.addEventListener('click', () => dellTask(id)); //добавление слушателя к кнопке

                        let imgD = document.createElement('img');
                        imgD.src = "https://cdn-icons-png.flaticon.com/512/3687/3687412.png";
                        imgD.height="17";
                        buttonD.append(imgD);

                li.append(buttonD);

        toDoList.append(li);        
}

// удаление элемента со стр и массива
function dellTask (liID){

        //удаление эл-та со стр
        const dellItem = document.getElementById(liID);
        dellItem.remove();


        //удаление слушателя события
        const itemChild = dellItem.children[1];
        itemChild.removeEventListener('click', dellTask);


        //удаление из массива
        liIndex = todos.findIndex(i => i.id == liID);
        todos.splice(liIndex, 1);

        //тест
        //console.log("Deleted li ID: " + liID + ", li INDEX: " + liIndex);
        //for (i in todos){
        //        console.log(todos[i]);
        //}
};


function doneTask(li, inputForm, id) {
        const liIndex = todos.findIndex(i => i.id == id);
        const isDone = inputForm.checked;
        todos[liIndex].done = isDone;
        doneTaskClass(li, isDone);

        console.log("________________________________________");
        for (i in todos){
                console.log(todos[i]);
        }

}

function doneTaskClass(li, done){
        if (done === true){
                li.className = 'done-task';
        } else {
                li.className = ' ';
        }
}




// массив задач
let toDoList = document.getElementById('toDo'); 
let todos = [
    {id: 1, title: 'Title_1', done: true},
    {id: 2, title: 'Title_2', done: false},
    {id: 3, title: 'Title_3', done: true},
    {id: 4, title: 'Title_4', done: false},
];

// Найти кнопку ADD и добавить к ней событие
const addEvent = document.querySelector('button'); 
addEvent.addEventListener('click', addTask);

//Счетчик id в массиве todos
let lastId;
if (todos.length === 0) {
    lastId = 0;
} else {
    lastId = todos.at(-1).id + 1;
}

//Поиск кн Add
let taskName = document.querySelector('input'); 


// Отображение всех элементов массива todos
for (i in todos) {
        updateTodos (todos[i]);
       
};




