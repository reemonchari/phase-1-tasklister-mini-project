document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const taskInput = document.getElementById('new-task-description')
  const taskList = document.getElementById('tasks')
  form.addEventListener('submit', event => {
    event.preventDefault()
    const inputTask = taskInput.value 
    if (inputTask === '') {
      return 0
    }
    const list = document.createElement('li')
    list.textContent = inputTask
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'
    deleteButton.style.marginLeft = '10px'
    deleteButton.addEventListener('click', () => taskList.removeChild(list))
    
    list.appendChild(deleteButton)
    taskList.appendChild(list)
    taskInput.value = ''
  })

});
