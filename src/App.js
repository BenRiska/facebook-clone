import React from "react";
import Login from "./Login";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { useStateValue } from "./StateProvider";

import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />

            <Feed />

            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
