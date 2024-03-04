// redux
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
// reducers
import { todoReducer } from "@/enteties/todo/model/slice/todoSlice";
// types
import { StateSchema } from "./StateSchema";

export function createReduxStore() {
  const rootReducers: ReducersMapObject<StateSchema> = {
    todoSlice: todoReducer,
  };

  const store = configureStore({
    reducer: rootReducers,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
