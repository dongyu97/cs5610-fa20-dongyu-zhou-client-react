import React from "react";

export default class TopicPillsComponent extends React.Component{
    render() {
        return(
            <div>

                <ul className="nav nav-pills wbdv-topic-pill-list">
                    <li className="nav-item wbdv-topic-pill">
                        <a className="nav-link active" href="#">Block</a>
                    </li>
                    <li className="nav-item wbdv-topic-pill"><a className="nav-link "
                                                                href="#">Inline</a>
                    </li>
                    <li className="nav-item wbdv-topic-pill"><a className="nav-link " href="#">Topic
                        1</a>
                    </li>
                    <li className="nav-item wbdv-topic-pill"><a className="nav-link " href="#">Topic
                        2</a></li>
                    <li className="nav-item"><a className="nav-link " href="#"><i
                        className="fa fa-plus pull-right wbdv-topic-add-btn"></i></a></li>
                </ul>
            </div>
        );
    }

}