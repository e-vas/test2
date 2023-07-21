 async function getTodos(todos, callback) {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (response.ok) {
          let data = await response.json();
          //console.log(data);
          for (let i = 0; i < 20; i++) {
                  //console.log(data[i])
                  todos.push({id: data[i].id, title: data[i].title, done: data[i].completed});
                  //console.log(todos[i])
                    
          }

        } else {
          console.log('error', response.status);
        }

  //console.log(todos)
  //console.log(todos.length)
  callback();
}

export { getTodos };



