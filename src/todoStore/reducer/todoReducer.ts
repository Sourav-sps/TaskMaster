import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  date: string;
  isCompleted: boolean;
}

const todoReducer: any = createSlice({
  name: 'todos',
  initialState: {
    list: [] as Todo[],
  },
  reducers: {
    addToDo: (state: any, action: PayloadAction<Todo>) => {
      state.list.push(action.payload);
    },
    setIsCompleted: (state: any, action: PayloadAction<Todo>) => {
      const index = state.list.findIndex(
        (todo: Todo) => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = {...state.list[index], isCompleted: true};
      }
    },
    updateTodo: (state: any, action: PayloadAction<Todo>) => {
      const index = state.list.findIndex(
        (todo: Todo) => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      state.list = state.list.filter(
        (todo: Todo) => todo.id !== action.payload.id,
      );
    },
  },
});

export const getMyTodo = (state: any): Todo[] => {
  return state.list as Todo[];
};

export const {addToDo, updateTodo, setIsCompleted, deleteTodo} =
  todoReducer.actions;

export default todoReducer.reducer;
