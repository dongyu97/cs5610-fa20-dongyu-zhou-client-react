import React from "react";

export default class ModuleListComponent extends React.Component{
    render() {
        return(
            <div className="col-4">

                <ul className="list-group wbdv-module-list">
                    <li className="list-group-item wbdv-module-item"><span
                        className="wbdv-module-item-title">Html</span>
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i></li>
                    <li className="list-group-item active wbdv-module-item">
                        <span className="wbdv-module-item-title">CSS</span>
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i></li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">JavaScript</span>
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i></li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">React</span>
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i></li>
                    <li className="list-group-item"><i
                        className="fa fa-plus pull-right wbdv-module-item-add-btn"></i></li>
                </ul>
            </div>
        );
    }
}