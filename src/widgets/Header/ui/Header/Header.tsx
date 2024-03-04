// ui
import { NavLink } from "@/shared/ui/NavLink";
// constants
import {
  getAllTodosRoute,
  getCompletedRoute,
  getInCompleteRoute,
} from "@/shared/constants/routes";
// styles
import styles from "./Header.module.scss";

export const Header = ({}) => {
  return (
    <div className={styles.Header}>
      <NavLink to={getAllTodosRoute()}>All todos</NavLink>
      <NavLink to={getCompletedRoute()}>CompletedTodos</NavLink>
      <NavLink to={getInCompleteRoute()}>InComplete</NavLink>
    </div>
  );
};
