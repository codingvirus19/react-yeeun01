import React from "react";

export default class GroupShare extends React.Component {

    render() {
        return (
            <div className="popup-groupShare" onClick={this.props.closePopup}>
                <div
                    className="popup-groupShare_inner"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="inner_groupShare-header">
                        <h1 className="groupShare_h1">그룹에 메모 공유</h1>
                    </div>
                    <div className="inner_form-container">
                            그룹이름
                        <select
                                multiple
                                className="inner_form-control">
                                <option value="그룹1">그룹1</option>
                                <option value="그룹2">그룹2</option>
                                <option value="그룹3">그룹3</option>
                                <option value="그룹4">그룹4</option>
                                <option value="그룹5">그룹5</option>
                            </select>

                        <div className="groupShare_input-button">
                            <input
                                className="groupShare_input"
                                type="text"
                                placeholder="새로운 그룹 생성"
                            ></input>
                            <button className="groupShare_input-btn">+</button>
                        </div>
                        <div className="groupShare_btns">
                            <button
                                type="submit"
                                className="groupShare_confirm-btn">확인</button>
                            <button
                                className="groupShare_cancel-btn"
                                onClick={this.props.closePopup}
                            >
                                취소
              </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}