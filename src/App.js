import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <Header />
      <div className="app__body">
        {/* Side bar */}
        <SideBar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
      {/*Footer*/}
    </div>
  );
}

export default App;
