const dragging = () => {
  document.querySelectorAll('.one-task').forEach(item => {
    item.addEventListener('dragstart', () => {
      console.log('start');
    });
    item.addEventListener('dragend', () => {
      console.log('end');
    });
    // item.addEventListener('drag', () => {
    //   console.log('drag');
    // })
    // item.addEventListener('dragenter', () => {
    //   console.log('dragenter');
    // })
    // item.addEventListener('dragleave', () => {
    //   console.log('leave');
    // });
  });

  document.getElementById('todo-lists').addEventListener('dragover', (e) => {
    
  });
  
  // document.getElementById('todo-lists').addEventListener('dragdrop', (e) => {
  //   e.preventDefault();
  //   console.log('dragover')
  // })

};

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

export { dragging, compare };
