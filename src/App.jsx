import React from "react";
import Header from "../../react_refresher/component/header";
import "./App.css";
import Main from "../../react_refresher/component/main";
import ExamplesTab from "./component/Examples";
function App() {
  // handleset function

  // NOTE:: React component exercusion happens only once
  //  -- hence you have to tell react if component should exercute again

  return (
    <>
      <Header />
      <Main />
      {/* The use of special children props */}
      {/*The content between the component is used as a value between the component */}
      <ExamplesTab />
    </>
  );
}

export default App;
