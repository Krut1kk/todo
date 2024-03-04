// react
import { ReactNode } from "react";
// redux
import { Provider } from "react-redux";
// config
import { createReduxStore } from "../config/store";
// types
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;

  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
