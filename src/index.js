// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import compare from './sorted';

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

const sorted = todoLists.sort(compare);
const ul = document.getElementById('todo-lists');

window.onload = () => {
  sorted.forEach(todo => {
    const li = document.createElement('li');
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    li.setAttribute('class', 'one-task');
    li.setAttribute('draggable', 'true');
    li.innerText = todo.description;
    li.appendChild(check);
    ul.appendChild(li);
  });
};
