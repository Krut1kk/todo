// redux
import { useSelector } from "react-redux";
// enteties
import { TodoTaskList, getUnCompletedTodos } from "@/enteties/todo";
// styles
import styles from "./InCompleteTodosPage.module.scss";

export const InCompleteTodosPage = ({}) => {
  const todos = useSelector(getUnCompletedTodos);

  const taskCount = todos.length;

  return (
    <div className={styles.InCompleteTodosPage}>
      <div className={styles.content}>
        <div> You have {taskCount} uncompleted tasks</div>

        <TodoTaskList todos={todos} />
      </div>
    </div>
  );
};
