// 初期値
let currentId = 0;
let todosList = [];
const todosElement = document.getElementById('todos');
const addButton = document.getElementById('add-button');
const radioAll = document.getElementById('all');
const radioProgress = document.getElementById('in-progress');
const radioComplete = document.getElementById('complete');

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
  // 削除のイベントリスナー追加
  removeButton.addEventListener('click', e => {
    currentId = 0;
    handleRemoveEvent(e);
  });
  removeButtonCol.appendChild(removeButton);

  todoElement.appendChild(removeButtonCol);
}

/**
 * 削除処理を行う関数
 * @param {object} event
 */
function handleRemoveEvent(event) {
  todosElement.innerHTML = '';
  const removedTodoNode = event.target.parentNode.parentNode;
  const removedId = +removedTodoNode.firstElementChild.textContent;
  todosList = todosList
                .filter(todo => todo.id != removedId)
                .map(todo => {
                  return {
                    id: currentId++,
                    comment: todo.comment,
                    isProgress: todo.isProgress
                  }
                });
  todosList.forEach(todo => addTodoElement(todo));            
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

