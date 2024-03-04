// types
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getTodoState = (state: StateSchema) => state.todoSlice;

export const getCompletedTodos = (state: StateSchema) =>
  state.todoSlice.todos.filter((todo) => todo.completed);

export const getUnCompletedTodos = (state: StateSchema) =>
  state.todoSlice.todos.filter((todo) => !todo.completed);
