let currentId = 0;
const todosElement = document.getElementById('todos');
let todosList = [];

document.getElementById('add-button').addEventListener('click', (e) => {
  const addTask = document.getElementById('add-task');
  const inputValue = addTask.value;

  if (inputValue) {
    addTodo(inputValue);
    addTodoElement(todosList[currentId]);
    currentId++;
    addTask.value = '';
  }
});

/**
 * 入力されたデータをリストに追加する関数
 * @param {string} inputValue 入力値
 */
function addTodo(inputValue) {
  const todoObect = {
    id: currentId,
    comment: inputValue,
    isProgress: true
  }
  todosList.push(todoObect);
}

/**
 * 画面に追加したデータを表示させる関数
 * @param {object} todoObect todo項目
 */
function addTodoElement(todoObect) {
  const todoElement = document.createElement('TR');

  const idCol = document.createElement('TD');
  idCol.textContent = todoObect.id;

  const commentCol = document.createElement('TD');
  commentCol.textContent = todoObect.comment;

  const statusButtonCol = document.createElement('TD');
  const statusButton = document.createElement('BUTTON');
  statusButton.textContent = todoObect.isProgress ? '作業中' : '完了';
  statusButtonCol.appendChild(statusButton);

  const removeButtonCol = document.createElement('TD');
  const removeButton = document.createElement('BUTTON');
  removeButton.textContent = '削除';
  removeButtonCol.appendChild(removeButton);

  todoElement.appendChild(idCol);
  todoElement.appendChild(commentCol);
  todoElement.appendChild(statusButtonCol);
  todoElement.appendChild(removeButtonCol);

  todosElement.appendChild(todoElement);
}
