// react
import { Route, Routes } from "react-router-dom";
// layouts
import { HeaderLayout } from "./layouts/HeaderLayout";
// pages
import { AllTodosPage } from "@/pages/AllTodosPage";
import { CompletedTodosPage } from "@/pages/CompletedTodosPage";
import { InCompleteTodosPage } from "@/pages/InCompleteTodosPage";
// constants
import {
  getAllTodosRoute,
  getCompletedRoute,
  getInCompleteRoute,
} from "@/shared/constants/routes";
// styles
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path={getAllTodosRoute()} element={<AllTodosPage />} />
          <Route path={getCompletedRoute()} element={<CompletedTodosPage />} />
          <Route
            path={getInCompleteRoute()}
            element={<InCompleteTodosPage />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
