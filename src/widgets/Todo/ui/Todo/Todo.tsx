// selecors
import { getTodoState } from "@/enteties/todo/model/selectors/getTodoState/getTodoState";
// enteties
import { TodoTaskList } from "@/enteties/todo";
// ui
import { TodoAdd } from "../TodoAdd/TodoAdd";
// styles
import styles from "./Todo.module.scss";
import { useSelector } from "react-redux";

export const Todo = ({}) => {
  const { todos } = useSelector(getTodoState);

  return (
    <div className={styles.Todo}>
      <TodoAdd />
      <TodoTaskList todos={todos} />
    </div>
  );
};
