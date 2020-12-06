import {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function App() {

  const [taskList, setTaskList] = useState([]);

  const handleRemove = (task) => {
    setTaskList(taskList => taskList.filter(item => item !== task))
  }


  const handleSubmit = (text, dueDate) => {
    let id = 1;

    if (taskList.length > 0) {
        id = taskList[taskList.length - 1].id + 1;
    }

    const task = {
      id: id,
      dueDate: new Date(dueDate),
      text: text
    };

    setTaskList([...taskList, task]);
  }


  return (
    <div className='app'>
      <TodoList taskList={taskList} handleRemove={handleRemove} />
      <TodoForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
