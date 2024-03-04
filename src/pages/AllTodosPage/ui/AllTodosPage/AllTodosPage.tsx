// widgets
import { Todo } from "@/widgets/Todo";
// styles
import styles from "./AllTodosPage.module.scss";

export const AllTodosPage = ({}) => {
  return (
    <div className={styles.AllTodosPage}>
      <Todo />
    </div>
  );
};
