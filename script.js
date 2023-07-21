import { getTodos } from './gettodos.js';

function addTask(event) {
        event.preventDefault();
        let taskValue = taskName.value    
        const lastId = Date.now();
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
        let liIndex = todos.findIndex(i => i.id == liID);
        todos.splice(liIndex, 1);

        //тест
        //console.log("Deleted li ID: " + liID + ", li INDEX: " + liIndex);
        //for (i in todos){
        //        console.log(todos[i]);
        //}
};

// изменение чекбокса done в массиве и на странице 
function doneTask(li, inputForm, id) {
        let i = 0;
        const liIndex = todos.findIndex(i => i.id == id);
        const isDone = inputForm.checked;
        todos[liIndex].done = isDone;
        doneTaskClass(li, isDone);

        //console.log("________________________________________");
        //for (i in todos){
        //        console.log(todos[i]);
        //}

}

//зачеркивание текста при значении чекбокса done===true
function doneTaskClass(li, done){
        if (done === true){
                li.className = 'done-task';
        } else {
                li.className = ' ';
        }
}


// Отображение всех элементов массива todos
function startingTodos () {
        let i = 0;
        for (i in todos) {
                //console.log(todos[i])
                updateTodos (todos[i]);     
        };
};


let todos = [];
let taskName = document.querySelector('input'); //Поиск поля ввода
const addEvent = document.querySelector('button'); // Найти кнопку ADD 
let toDoList = document.getElementById('toDo'); //поиск списка задач
addEvent.addEventListener('click', addTask); //добавить событие к кнопке add


getTodos(todos, startingTodos); //получение todos и старт отрисовки