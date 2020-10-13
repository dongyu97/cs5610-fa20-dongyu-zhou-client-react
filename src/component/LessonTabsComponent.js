import React from "react";

export default class LessonTabsComponent extends React.Component{
    render() {
        return(

                <div className="col-8" id="navbarNav">
                    <ul className="nav nav-tabs wbdv-lesson-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Tags</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Attributes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Elements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Headings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <i className="fa fa-plus pull-right wbdv-lesson-add-btn"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            );
    }

}