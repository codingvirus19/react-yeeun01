import React from "react";

export default class Toolbar extends React.Component {
  render() {
    return (
        <div className="container_memo hashlist">
        {this.props.hash.map(({ no, hash_name }) => (
          <div
            className="container_memo hashlist hash"
            key={no}>{hash_name}</div>
        ))}
      </div>
    );
  }
}
