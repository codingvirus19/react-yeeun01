import React from "react";

import Memo from "./Memo";
import HashList from "./HashList";
import Toolbar from "./toolbar/Toolbar";

export default class ContentsMemo extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      내용: null
    }
  }

  render() {
   
    return (
      <div className="contents-memo">
        {this.props.memo.map(({ no, 내용 }) => (
          <div className="memo_container" key={no}>
            <form className="container_memo-form">
              <Memo 내용={내용} />
              <HashList hash={this.props.hash} />
              <Toolbar hash={this.props.hash} />
            </form>

          </div>
        ))}
      </div>
    );
  }
}
