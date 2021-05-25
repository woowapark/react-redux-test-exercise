import React from 'react';

import TodoItem from './TodoItem';

const DoneList = ({ completedTodos }) => {
    return (
        <ul className="done-list">
            <h2>완료한 일</h2>
            {completedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    );
};

export default DoneList;