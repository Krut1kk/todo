// react
import { ChangeEvent, FC } from "react";
// styles
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className={styles.Checkbox}
      checked={checked}
      onChange={onChange}
    />
  );
};
