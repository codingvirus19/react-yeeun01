import React from "react";

import Memo from "./Memo";
import HashList from "./HashList";
import Toolbar from "./toolbar/Toolbar";

export default class ContentsMemo extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      내용: null,
      showHashsheet: false,
      hashKeyword: "",
    }
  }

  onNotifyShowHashsheetChange(showHashsheet) {
    this.setState({
      showHashsheet
    })
  }

  onInputChange(e) {
    this.setState({
      hashKeyword: e.target.value
    })
  };


  render() {
    let hashSheet;
    console.log("render");
    console.log(this.state.showHashsheet);

    if (this.state.showHashsheet) {
      // if (true) {
      hashSheet = (
        <div className="hashSheet">
          <input
            type='text'
            value={this.hashKeyword}
            placeholder="해시 태그 검색"
            onChange={this.onInputChange.bind(this)} />

          {this.props.hash &&
            this.props.hash
              .filter(element => element.hash_name.indexOf(this.state.hashKeyword) != -1)
              .map(({ no, hash_name }) => (
                <div key={no}>{hash_name}</div>
              ))}

        </div>
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
            {hashSheet}
          </div>
        ))}
      </div>
    );
  }
}
