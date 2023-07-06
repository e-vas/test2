let toDoList = document.getElementById('toDo'); 


let todos = [
    {id: 1, title: 'Title_1'},
    {id: 2, title: 'Title_2'},
    {id: 3, title: 'Title_3'},

    {id: 4, title: 'Title_4'},
    {id: 5, title: 'Title_5'},

];
  


for (i in todos) {
    let li = document.createElement('li');
    li.innerHTML = "";

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
            

    //console.log(todos[i]);
    toDoList.append(li);
    
};
