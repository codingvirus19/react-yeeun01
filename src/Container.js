import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Contents from "./contents/Contents";
import { users } from "./data.json";
import { hashs } from "./hashData.json";

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="sidebar-contents_container">
          <Sidebar users={users} hashs={hashs} />
          <Contents users={users} hashs={hashs}/>
        </div>
      </div>
    );
  }
}
