//Selectors
const input = document.querySelector('.input')
const submitButton = document.querySelector('.submit-button')
const todoList = document.querySelector('.todo-list')
const filter = document.querySelector('.filter-todo')
//Event Listeners

submitButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filter.addEventListener('click', filterTodo);

//Functions
function addTodo(e) {
    e.preventDefault();
    // creating a div and class for other todos
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // creating List when enter a new todo
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    // adding icon on a new button that we just created
    //! using innerHTML
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add('completedButton');
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement('button');
    // adding icon on a new button that we just created
    //! using innerHTML
   trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add('trashButton');
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //clear todo input when submit the input.
    input.value = '';

    //deleting selected item
}

function deleteCheck(e) {
    const item = e.target;
    const parentTodo = item.parentElement.parentElement;
    const todo = item.parentElement;

    // delete todo
    if(item.matches('.fa-trash')) {
        //getting <li> which is the grandparent element of trash icon
        parentTodo.classList.add('fallAnimation');
        setTimeout(function() {
            parentTodo.remove()}, 300)
        }

    // check mark
    if (item.matches('.fa-check')) {
        parentTodo.classList.toggle('completed')
    }}

    function filterTodo(e){
        const todos = todoList.childNodes;
        todos.forEach(function(todo){
            switch(e.target.value){
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if(todo.classList.contains('completed')){
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                    case 'uncompleted':
                        if(!todo.classList.contains('completed')){
                            todo.style.display = 'flex';
                        } else {
                            todo.style.display = 'none';
                        }
                        break;
            }
        });
    }