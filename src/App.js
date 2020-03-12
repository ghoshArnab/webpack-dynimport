import React from "react";
import './App.css';

function App() {

  async function load() {
    let say = await import(/* webpackChunkName: "button" */'./components/button');

    say.default();
  }


  return (
    <div>
      <button onClick={load}>button</button>
      <div id="showComponents">

      </div>
    </div>

  );
}

export default App;
