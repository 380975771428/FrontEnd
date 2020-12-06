import TodoItem from './TodoItem';
import React from 'react';
function TodoList(props) {


    return (
        <div>
            <div className='container'>
                <div className='header'>
                <div className='elements'>
                    <span>Task</span>
                    <span>Due date</span>
                    <span>Days left</span>
                </div>
                <div className='mrg25'></div>
                </div>
            </div>

            {props.taskList.map(task =>
                <TodoItem 
                    key={task.id}
                    text={task.text}
                    dueDate={task.dueDate}
                    handleRemove={() => props.handleRemove(task)}
                />
            )}
        
        </div>
    );
}

export default TodoList;