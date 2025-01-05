import './style.css';

let todos = [];
const form = document.getElementById('form');
const todosContainer = document.querySelector('.todos');

function renderTodos(todo = {}) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('todo');
  mainDiv.setAttribute('data-nth', todos.length);
  const { name, state = 'todo' } = todo;
  const todoInfo = document.createElement('div');
  todoInfo.classList.add('todo-info');
  const h3 = document.createElement('h3');
  h3.textContent = name;
  const statePara = document.createElement('p');
  statePara.textContent = state;
  todoInfo.append(h3, statePara);

  const actionsDiv = document.createElement('div');
  actionsDiv.setAttribute(
    'style',
    'display: flex; align-items: center; gap: 5px'
  );
  const removeBtn = document.createElement('button');
  removeBtn.dataset.action = 'remove';
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('data-nth', todos.length);
  const addBtn = document.createElement('button');
  addBtn.textContent = 'Done';
  addBtn.dataset.action = 'done';
  addBtn.setAttribute('data-nth', todos.length);

  actionsDiv.append(removeBtn, addBtn);
  mainDiv.append(todoInfo, actionsDiv);
  todosContainer.appendChild(mainDiv);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const todoName = formData.get('todo');
  const todo = { name: todoName, state: 'todo' };
  todos.push(todo);
  renderTodos(todo);
  e.currentTarget.reset();
});

todosContainer.addEventListener('click', (e) => {
  if (e.target.dataset.action == 'done') {
    const { nth } = e.target.dataset;
    if (!!nth) {
      todos[nth - 1].state = 'done';
      todosContainer.innerHTML = '';
      todos.forEach(renderTodos);
    }
  }

  if (e.target.dataset.action == 'remove') {
    const { nth } = e.target.dataset;
    if (!!nth) {
      todos = todos.filter((_, i) => i != nth - 1);
      todosContainer.innerHTML = '';
      todos.forEach(renderTodos);
    }
  }
});
