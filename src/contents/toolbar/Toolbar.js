import React from "react";

import GroupShare from "./GroupShare"
import ShareSheet from "./ShareSheet"
import ColorSheet from "./ColorSheet"

export default class Toolbar extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            showGroupShare: false,
            showSharesheet: false,
            showColorsheet: false,
            showHashsheet: false
        }
    }

    toggleGroupShare() {
        this.setState({
            showGroupShare: !this.state.showGroupShare
        });
    }
    toggleSharesheet(showSharesheet) {
        this.setState({
            showSharesheet: showSharesheet
        })
    }
    toggleColorsheet(showColorsheet) {
        this.setState({
            showColorsheet: showColorsheet
        })
    }
    toggleHashSheet() {
        this.setState({
            showHashsheet: !this.state.showHashsheet
        });
        console.log("toggleHashSheet");
        console.log(this.state.showHashsheet);
        this.props['notifyShowHashsheetChangeHandler'](this.state.showHashsheet);
    }

    saveLocal() {
        alert("local 저장")
    }
    delete() {
        alert("삭제");
    }

    render() {
        return (
            <div className="toolbar">
                <button
                    className="tool"
                    aria-label="그룹 공유"
                    onClick={this.toggleGroupShare.bind(this)}>
                    <i className="fab fa-slideshare" />
                </button>
                <button
                    className="tool"
                    aria-label="외부 공유"
                    onMouseEnter={() => this.setState({ showSharesheet: true })}
                    onMouseLeave={() => this.setState({ showSharesheet: false })}>
                    <i className="far fa-share-square" />
                </button>
                {this.state.showSharesheet ?
                    <ShareSheet toggleSharesheetHandler={this.toggleSharesheet.bind(this)} /> : null}
                <button
                    className="tool"
                    aria-label="색상 변경"
                    onMouseEnter={() => this.setState({ showColorsheet: true })}
                    onMouseLeave={() => this.setState({ showColorsheet: false })}>
                    <i className="fas fa-palette" />
                </button>
                {this.state.showColorsheet ?
                    <ColorSheet toggleColorsheetHandler={this.toggleColorsheet.bind(this)} /> : null}
                <button
                    className="tool"
                    aria-label="해시 추가"
                    onClick={this.toggleHashSheet.bind(this)}>
                    <i className="fab fa-slack-hash" />
                </button>
                <button
                    className="tool"
                    aria-label="내 컴퓨터에 저장"
                    onClick={this.saveLocal}>
                    <i className="far fa-save" />
                </button>
                <button
                    className="tool"
                    aria-label="파일 올리기">
                    <i className="fas fa-file-upload" />
                </button>
                <button
                    className="tool"
                    aria-label="메모 삭제"
                    onClick={this.delete}>
                    <i className="far fa-trash-alt" />
                </button>
                {this.state.showGroupShare ? (
                    <GroupShare closePopup={this.toggleGroupShare.bind(this)} />
                ) : null}
            </div>
        );
    }
}
