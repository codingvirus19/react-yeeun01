import React from "react";
import ContentsHeader from "./ContentsHeader";
import ContentsMemo from "./ContentsMemo";
import Footer from "./Footer";

export default class Contents extends React.Component {
  render() {
    const user = this.props.users.find(user => user.g_no === 1);
    return (
      <div className="contents">
        <ContentsHeader groupName={user.g_name}/>
        <ContentsMemo memo={user.memo} hash={this.props.hashs.filter(hash => hash.g_no === user.g_no)}/>
        <Footer />
      </div>
    );
  }
}
