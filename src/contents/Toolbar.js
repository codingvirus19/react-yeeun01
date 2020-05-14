import React from "react";
import Table from 'react-bootstrap/Table'

import GroupShare from './GroupShare'

export default class Toolbar extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            showColorsheet: false,
            showSharesheet: false,
            showHashsheet: this.props.showHashsheet,
            showPopup: false
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    saveLocal() {
        alert("local 저장")
    }

    delete() {
        alert("삭제");
    }

    render() {
        let colorSheet; let shareSheet;

        if (this.state.showSharesheet) {
            shareSheet = (
                <div className="shareSheet"
                    onMouseEnter={() => this.setState({ showSharesheet: true })}
                    onMouseLeave={() => this.setState({ showSharesheet: false })}>
                    <Table>
                        <tbody>
                            <tr>
                                <td><i className="fab fa-twitter" /></td>
                                <td><i className="fab fa-facebook-f" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )
        }

        if (this.state.showColorsheet) {
            colorSheet = (
                <div className="colorSheet"
                    onMouseEnter={() => this.setState({ showColorsheet: true })}
                    onMouseLeave={() => this.setState({ showColorsheet: false })}>
                    <Table>
                        <tbody>
                            <tr>
                                <td style={{ background: '#f6e58d' }}></td>
                                <td style={{ background: '#ffbe76' }}></td>
                                <td style={{ background: '#ff7979' }}></td>
                                <td style={{ background: '#badc58' }}></td>
                                <td style={{ background: '#dff9fb' }}></td>
                            </tr>
                            <tr>
                                <td style={{ background: '#f9ca24' }}></td>
                                <td style={{ background: '#f0932b' }}></td>
                                <td style={{ background: '#eb4d4b' }}></td>
                                <td style={{ background: '#6ab04c' }}></td>
                                <td style={{ background: '#c7ecee' }}></td>
                            </tr>
                            <tr>
                                <td style={{ background: '#7ed6df' }}></td>
                                <td style={{ background: '#e056fd' }}></td>
                                <td style={{ background: '#686de0' }}></td>
                                <td style={{ background: '#30336b' }}></td>
                                <td style={{ background: '#95afc0' }}></td>
                            </tr>
                            <tr>
                                <td style={{ background: '#22a6b3' }}></td>
                                <td style={{ background: '#be2edd' }}></td>
                                <td style={{ background: '#4834d4' }}></td>
                                <td style={{ background: '#130f40' }}></td>
                                <td style={{ background: '#535c68' }}></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )
        }

        return (
            <div className="toolbar">
                <button
                    className="tool"
                    aria-label="그룹 공유"
                    onClick={this.togglePopup.bind(this)}>
                    <i className="fab fa-slideshare" />
                </button>
                <button
                    className="tool"
                    aria-label="외부 공유"
                    onMouseEnter={() => this.setState({ showSharesheet: true })}
                    onMouseLeave={() => this.setState({ showSharesheet: false })}>
                    <i className="far fa-share-square" />
                </button>
                {shareSheet}
                <button
                    className="tool"
                    aria-label="색상 변경"
                    onMouseEnter={() => this.setState({ showColorsheet: true })}
                    onMouseLeave={() => this.setState({ showColorsheet: false })}>
                    <i className="fas fa-palette" />
                </button>
                {colorSheet}
                <button
                    className="tool"
                    aria-label="해시 추가"
                    onMouseEnter={() => this.setState({ showHashsheet: true })}
                    onMouseLeave={() => this.setState({ showHashsheet: false })}>
                    <i className="fab fa-slack-hash" />
                    {/* <i class="fas fa-hashtag"></i> */}
                </button>
                <button
                    className="tool"
                    aria-label="내 컴퓨터에 저장"
                    onClick={this.saveLocal}>
                    <i className="far fa-save" />
                </button>
                <button
                    className="tool"
                    aria-label="파일 올리기"
                    onClick="">
                    <i className="fas fa-file-upload" />
                </button>
                <button
                    className="tool"
                    aria-label="메모 삭제"
                    onClick={this.delete}>
                    <i className="far fa-trash-alt" />
                </button>
                {this.state.showPopup ? (
                    <GroupShare closePopup={this.togglePopup.bind(this)} />
                ) : null}
            </div>
        );
    }
}
