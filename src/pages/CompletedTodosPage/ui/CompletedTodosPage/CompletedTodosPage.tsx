// selectors
import { useSelector } from "react-redux";
// enteties
import { TodoTaskList, getCompletedTodos } from "@/enteties/todo";
// styles
import styles from "./CompletedTodosPage.module.scss";

export const CompletedTodosPage = ({}) => {
  const todos = useSelector(getCompletedTodos);

  const taskCount = todos.length;

  return (
    <div className={styles.CompletedTodosPage}>
      <div className={styles.content}>
        <div> You have {taskCount} completed tasks</div>

        <TodoTaskList todos={todos} />
      </div>
    </div>
  );
};
