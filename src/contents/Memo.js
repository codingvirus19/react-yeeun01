import React from "react";

export default class Memo extends React.Component {
  render() {
    return (
        <input
        className="container_memo-form memo"
        type="textarea"
        value={this.props.내용} />
    );
  }
}
