import * as z from "zod";


interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {

    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number };

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
});

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number().min(0),
    completed: z.number().min(0),
    pending: z.number().min(0)
});

export const getTasksInitialState = (): TaskState => {

    const localStorageState = localStorage.getItem('tasks-state');

    if (!localStorageState) {
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        };
    }

    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

    if (result.error) {
        console.log(result.error);
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        };
    }

    return result.data;
};

export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {

        case 'ADD_TODO': {

            const newToDo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };



            return { ...state, length: state.todos.length + 1, todos: [...state.todos, newToDo] };
        }




        case 'DELETE_TODO':
            return {
                ...state, length: state.todos.length - 1,
                completed: state.todos.map((todo) =>
                    todo.completed === true).length,
                pending: state.todos.filter((todo) => todo.completed === false).length,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
            return state;

        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );

            return {
                ...state,
                length: state.length,
                completed: state.todos.map((todo) =>
                    todo.completed === true).length,
                pending: state.todos.filter((todo) => todo.completed === false).length,
                todos: updatedTodos
            };

        }


        default:
            return state;
    }


}