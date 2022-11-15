import React from "react";
import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Routes";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>

  );
}

export default App;
