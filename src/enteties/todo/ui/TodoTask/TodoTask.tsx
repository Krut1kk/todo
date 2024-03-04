// react
import { ChangeEvent, FC, useState } from "react";
// redux
import { useDispatch } from "react-redux";
// actions
import { todoActions } from "../../model/slice/todoSlice";
// libs
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
// ui
import { Checkbox } from "@/shared/ui/Checkbox";
import { Input } from "@/shared/ui/Input";
// types
import { TodoItem } from "../../model/types/todo";
// styles
import styles from "./TodoTask.module.scss";

interface TodoTaskProps extends TodoItem {}

export const TodoTask: FC<TodoTaskProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const onClickEditTodo = () => {
    setIsEditing(true);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const onClickDeleteTodo = () => {
    dispatch(todoActions.deleteTodo(id));
  };

  const onClickSaveTodo = () => {
    dispatch(
      todoActions.updateTodo({
        id: id,
        text: editedText,
        completed: completed,
      })
    );
    setIsEditing(false);
  };

  const onClickToggleIsCheckTodo = () => {
    dispatch(
      todoActions.updateTodo({
        id: id,
        text: text,
        completed: !completed,
      })
    );
  };

  return (
    <div className={styles.TodoTask}>
      {isEditing ? (
        <>
          <Input value={editedText} onChange={onChangeText} />
          <FaCheck
            onClick={onClickSaveTodo}
            size={"30px"}
            className={styles.icon}
          />
        </>
      ) : (
        <>
          <div className={styles.buttons}>
            <Checkbox checked={completed} onChange={onClickToggleIsCheckTodo} />
            <div>{text}</div>
          </div>
          <div className={styles.buttons}>
            <CiEdit
              onClick={onClickEditTodo}
              size={"30px"}
              className={styles.icon}
            />
            <AiFillDelete
              onClick={onClickDeleteTodo}
              size={"30px"}
              className={styles.deleteIcon}
            />
          </div>
        </>
      )}
    </div>
  );
};
