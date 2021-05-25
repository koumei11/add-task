// 初期値
let currentId = 0;
let todosList = [];
const todosElement = document.getElementById('todos');
const addButton = document.getElementById('add-button');

/**
 * 入力されたデータをリストに追加する関数
 * @param {string} inputValue
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
 * @param {object} todoObect
 */
function addTodoElement(todoObect) {
  const todoElement = document.createElement('TR');

  appendTodoWithId(todoElement, todoObect);
  appendStatusButton(todoElement, todoObect);
  appendRemoveButton(todoElement, todoObect);
  todosElement.appendChild(todoElement);
}

/**
 * idとタスクを追加する関数
 * @param { object } todoElement 
 * @param { object } todoObect 
 */
function appendTodoWithId(todoElement, todoObect) {
  const idCol = document.createElement('TD');
  idCol.textContent = todoObect.id;

  const commentCol = document.createElement('TD');
  commentCol.textContent = todoObect.comment;

  todoElement.appendChild(idCol);
  todoElement.appendChild(commentCol);
}

/**
 * ステータスボタンを追加する関数
 * @param { object } todoElement 
 * @param { object } todoObect 
 */
function appendStatusButton(todoElement, todoObect) {
  const statusButtonCol = document.createElement('TD');
  const statusButton = document.createElement('BUTTON');
  statusButton.textContent = todoObect.isProgress ? '作業中' : '完了';
  statusButtonCol.appendChild(statusButton);

  todoElement.appendChild(statusButtonCol);
}

/**
 * 削除ボタンを追加する関数
 * @param { object } todoElement 
 * @param { object } todoObect 
 */
function appendRemoveButton(todoElement, todoObect) {
  const removeButtonCol = document.createElement('TD');
  const removeButton = document.createElement('BUTTON');
  removeButton.textContent = '削除';
  removeButtonCol.appendChild(removeButton);

  todoElement.appendChild(removeButtonCol);
}

// *******************************************
// イベントリスナー
// *******************************************
addButton.addEventListener('click', (e) => {
  const addTask = document.getElementById('add-task');
  const inputValue = addTask.value;

  if (inputValue) {
    addTodo(inputValue);
    addTodoElement(todosList[currentId]);
    currentId++;
    addTask.value = '';
  }
});
