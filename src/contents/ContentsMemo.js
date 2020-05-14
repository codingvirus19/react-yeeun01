import React from "react";

import Memo from "./Memo";
import HashList from "./HashList";
import Toolbar from "./Toolbar";

export default class ContentsMemo extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      내용: null,
      showHashsheet: false,
      hashSheet: null
    }
  }

  onNotifyShowHashsheetChange(showHashsheet) {
    this.setState({
      showHashsheet: showHashsheet
    })
  }

  render() {

    if (this.state.showHashsheet) {
      this.state.hashSheet = (
        <div className="hashSheet">a</div>
      )
    }
    return (
      <div className="contents-memo">
        {this.props.memo.map(({ no, 내용 }) => (
          <div className="memo_container" key={no}>
            <form className="container_memo-form">
              <Memo 내용={내용} />
              <HashList hash={this.props.hash} />
              <Toolbar
                showHashsheet={this.state.showHashsheet}
                notifyShowHashsheetChangeHandler={this.onNotifyShowHashsheetChange.bind(this)} />
            </form>
            {this.state.hashSheet}
          </div>
        ))}
      </div>
    );
  }
}
