// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const todoLists = [
  {
    description: 'Working on javascript todo app',
    completed: false,
    index: 1,
  },
  {
    description: 'Work on ruby on rails',
    completed: true,
    index: 2,
  },
  {
    description: 'Work on php laravel',
    completed: true,
    index: 8,
  },
  {
    description: 'Work on java',
    completed: false,
    index: 6,
  },
];

todoLists.forEach(todo => {
  const li = document.createElement('li');
  const ul = document.getElementById('todo-lists');
  li.innerText = todo.description;
  ul.appendChild(li);
});
