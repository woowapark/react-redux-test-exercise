import React from 'react';

const TodoItem = ({ todo, completeTodo }) => {
    return (
        <li className="todo-item">
            <h3>{todo.title}</h3>

            {todo.completed === false &&
                <button data-testid="complete-button" onClick={completeTodo}>다했다!</button>
            }
        </li>
    );
};

export default TodoItem;