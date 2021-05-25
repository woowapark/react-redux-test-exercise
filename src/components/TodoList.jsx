import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo } from '../redux/action';

import TodoItem from './TodoItem';

const TodoList = ({ remainedTodos }) => {
    const dispatch = useDispatch();

    return (
        <ul className="todo-list">
            <h2>남은 할 일</h2>
            {remainedTodos.map(todo =>
                <TodoItem key={todo.id}
                    todo={todo}
                    completeTodo={() => dispatch(completeTodo(todo.id))}
                />)}
        </ul>
    );
};

export default TodoList;