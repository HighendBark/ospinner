import React, { useState } from "react";
import "./App.css";
import { MainView } from "./views/main/MainView";

function App() {
  return (
    <div className="inline-flex flex-col w-full antialiased min-h-screen max-h-screen justify-start items-start content-start">
      <MainView />
    </div>
  );
}

export default App;
