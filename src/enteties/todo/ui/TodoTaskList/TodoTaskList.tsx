// react
import { FC } from "react";
// ui
import { TodoTask } from "../TodoTask/TodoTask";
// styles
import styles from "./TodoTaskList.module.scss";
import { TodoItem } from "../../model/types/todo";

interface TodoTaskListProps {
  todos: TodoItem[];
}

export const TodoTaskList: FC<TodoTaskListProps> = ({ todos }) => {
  return (
    <div className={styles.TodoTaskList}>
      {todos.map((todo) => (
        <TodoTask
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          text={todo.text}
        />
      ))}
    </div>
  );
};
