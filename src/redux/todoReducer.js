const initialTodos = [];

const todoReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, title, completed } = action.payload;

            return [
                ...state,
                { id, title, completed }
            ];
        case "COMPLETE_TODO":
            const nextState = state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: true
                    };
                } else {
                    return todo;
                }
            });

            return nextState;
        default:
            return state;
    }
};

export default todoReducer;