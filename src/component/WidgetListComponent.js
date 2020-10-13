import React from "react";
import TopicPillsComponent from "./TopicPillsComponent";

export default class WidgetListComponent extends React.Component{
    render() {
        return(
            <div className="col-8">

                <br/>
                <TopicPillsComponent/>
                <br/>
                <div>
                    <h2>Widgets
                        <div className="pull-right">
                            <a className="btn btn-success">Save</a>
                            Preview
                            <i className="fa fa-toggle-off" aria-hidden="true"></i>
                        </div>
                    </h2>
                </div>

                <div className="card card-body container">
                    <div className="row">

                        <div className="col-12">
                            <h3>Heading Widgets
                                <span className="pull-right row ">
                        <a href="#" className="btn btn-warning col-2">
                            <i className="fa fa-arrow-up"></i>
                        </a>
                        <a href="#" className="btn btn-warning col-2">
                            <i className="fa fa-arrow-down"></i>
                        </a>
                        <select className="custom-select col-6">
                            <option value="heading widget" selected>heading</option>
                            <option value="paragraph widget">paragraph</option>
                            <option value="list widget">list</option>
                            <option value="image widget">image</option>
                        </select>
                        <a href="#" className="btn btn-danger col-2">
                            <i className="fa fa-trash"></i>
                        </a>
                    </span>
                            </h3>
                        </div>
                    </div>
                    <div className="card-body row">
                        <input className="col-12" placeholder="Heading text"/>
                    </div>
                    <div className="card-body row">
                        <select className="col-12 custom-select ">
                            <option value="Heading 1" selected>Heading 1</option>
                            <option value="Heading 2">Heading 2</option>
                            <option value="Heading 3">Heading 3</option>
                        </select>
                    </div>
                    <div className="card-body row">
                        <textarea className="col-12 "
                                  placeholder="Paragraph: A course is made up of many content or learning modules. This section describes how the application supports adding modules to a course. Selecting a course navigates to a course's CourseEditor webpage. The CourseEditor displays as a horizontal split showing a list of modules to the left, and lessons and topics to the right. Selecting a course shows the list of modules that make up that course."></textarea>
                    </div>
                    <h4 className="card-body row">Preview</h4>
                    <h2 className="card-body row">Heading text</h2>

                </div>
                <i className="fa fa-plus-circle btn btn-danger pull-right" aria-hidden="true"></i>
            </div>
        );
    }

}