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
    index: 1,
  },
  {
    description: 'Work on java',
    completed: false,
    index: 1,
  },
];

// eslint-disable-next-line no-restricted-syntax
for (const todo of todoLists) {
  console.log(todo);
}