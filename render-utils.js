export function renderTodo(todo) {
    // create a div and a p tag
    const listDivEl = document.createElement('div');
    const itemEl = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class 
    // ('complete' or 'incomplete')
    listDivEl.classList.add(todo.complete === true ? 'complete' : 'incomplete');
    itemEl.classList.add('todo');
    // add the 'todo' css class no matter what
    // put the todo's text into the p tag
    itemEl.textContent = todo.todo;
    // append stuff
    listDivEl.append(itemEl);
    // return the div
    return listDivEl;
}
