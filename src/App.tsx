import React from "react";
import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppThemeStyles, AppGlobalStyles } from "./styles";

const Navigation = lazy(() => import("./components/navigation/navigation.component"));
const List = lazy(() => import("./pages/list/list.component"));

const App: FC = () => {
  return (
    <AppThemeStyles>
      <AppGlobalStyles/>
      <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Navigation/>}>
              <Route index element={<List/>} />
            </Route>
          </Routes>
      </Suspense>
    </AppThemeStyles>
  );
};

export default App;
