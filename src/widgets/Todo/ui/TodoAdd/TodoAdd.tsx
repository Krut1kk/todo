// react
import { ChangeEvent, memo, useState } from "react";
// redux
import { useDispatch } from "react-redux";
// actions
import { todoActions } from "@/enteties/todo/model/slice/todoSlice";
// libs
import { v4 as createId } from "uuid";
// ui
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./TodoAdd.module.scss";

export const TodoAdd = memo(({}) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAddTodo = () => {
    const todo = {
      id: createId(),
      text: text,
      completed: false,
    };

    setText("");

    dispatch(todoActions.addTodo(todo));
  };

  const isValidValue = !(text.trim().length > 4);

  return (
    <div className={styles.TodoAdd}>
      <Input value={text} onChange={onTextChange} placeholder="write todo" />
      <Button onClick={onClickAddTodo} disabled={isValidValue}>
        Add Todo
      </Button>
    </div>
  );
});
