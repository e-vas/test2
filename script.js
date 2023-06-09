let toDoList = document.getElementById('toDo'); 

let todos = [
    {id: 1, title: 'Title_1'},
    {id: 2, title: 'Title_2'},
    {id: 3, title: 'Title_3'},
    {id: 4, title: 'Title_4'},


];

// Найти кнопку ADD и добавить к ней событие
const addEvent = document.querySelector('button'); 
addEvent.addEventListener('click', addTask);

// Действия по кнопке ADD
function addTask(event) {
    event.preventDefault();
    let taskName = document.querySelector('input').value; 
    let lastId;
    if (todos.length === 0) {
        lastId = 0;
    } else {
        lastId = todos.at(-1).id + 1;
    }
    
    todos.push({id: lastId, title: taskName}); //Добавление нового эл-та в массив
    updateTodos ({id: lastId, title: taskName}); //Функция добавления на стр    
    document.querySelector('input').value = ""; //Сброс значения в строке
    findDellEvent (); //Перезапуск поиска всех кнопок удаления включая новую
};

// Отображение всех элементов массива todos
for (i in todos) {
        updateTodos (todos[i]);
};

//  Добавление элементов из массива на страницу
function updateTodos ({ id, title }){
        let li = document.createElement('li');
        li.innerHTML = "";
        li.id = id;
                let inputForm = document.createElement('input');
                inputForm.type = "checkbox";
                li.append(inputForm);

                let textTitle = document.createTextNode(title);
                textTitle.innerHTML = title;
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

// Поиск всех кнопок удаления + добавление события для каждой li 
let dellEvent = [];
function findDellEvent () {  
        dellEvent = document.querySelectorAll('li > button'); 
        dellEvent.forEach((item) => item.addEventListener('click', dellTask));
        
        
}
findDellEvent ();

// удаление элемента со стр и массива
function dellTask (liID){
        //удаление эл-та со стр
        liID = this.parentNode.id;
        const dellItem = document.getElementById(liID);
        dellItem.remove();

        //удаление из массива
        liIndex = todos.findIndex(i => i.id === liID);
        todos.splice(liIndex, 1);

        //тест
        console.log("Deleted li ID: " + liID + ", li INDEX: " + liIndex);
        for (i in todos){
                console.log(todos[i]);
        }
};
