import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { NotFoundView } from "../404/NotFoundView";
import { useMainViewModel } from "./MainViewModel";
import { MainViewTypes } from "./MainViewTypes";

export const MainView = (props: MainViewTypes.Props) => {
  const viewModel = useMainViewModel(props);

  return (
    <main className="inline-flex flex-col w-full">
      <HashRouter>
        <Switch>
          <Route path="(/|/home)">Test</Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </HashRouter>
    </main>
  );
};
