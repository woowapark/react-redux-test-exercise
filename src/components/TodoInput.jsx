import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addTodo } from "../redux/action";

const TodoInput = () => {
    const history = useHistory();
    // global state w/redux
    const dispatch = useDispatch();
    // local state
    const [newTodo, setNewTodo] = useState("");
    // handlers
    const handleAddTodo = () => {
        dispatch(addTodo(newTodo));
        redirectToTodoList();
    };
    const redirectToTodoList = () => {
        history.push("/");
    };

    return (
        <div className="todo-input">
            <input data-testid="todo-input" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button data-testid="add-button" onClick={handleAddTodo}>추가하기</button>
        </div>
    );
};

export default TodoInput;