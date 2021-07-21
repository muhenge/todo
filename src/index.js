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

//console.log(todoLists.sort());


todoLists.forEach(todo => {
	const val = Object.values(todo.index);
  console.log(val);
});