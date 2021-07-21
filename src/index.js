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

const compare = (x, y) => {
  const indexX = x.index;
  const indexY = y.index;

  let comp = 0;
  if (indexX > indexY) {
    comp = 1;
  } else if (indexX < indexY) {
    comp = -1;
  }
  return comp;
};

const sorted = todoLists.sort(compare);

window.onload = () => {
  sorted.forEach(todo => {
    const li = document.createElement('li');
    const ul = document.getElementById('todo-lists');
    li.innerText = todo.description;
    ul.appendChild(li);
  });
};
