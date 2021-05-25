let nextTodoId = 0;

export const addTodo = (title) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        title,
        completed: false
    };
};

export const completeTodo = id => {
    return {
        type: "COMPLETE_TODO",
        id
    };
};