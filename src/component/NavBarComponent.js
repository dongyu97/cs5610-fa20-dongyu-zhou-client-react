import React from "react";
import "font-awesome/css/font-awesome.css"

export default class CourseEditorComponent extends React.Component{
    state = {
        courseTitle: ""
    };

    updateTextField = (event) => {
        this.setState({
                          courseTitle: event.target.value
                      });
    };
    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div className="d-flex flex-row my-0 justify-content-start">
                        <button className="btn btn-lg btn-dark" type="button">
                            <i className="fa fa-bars"></i>
                        </button>
                        <label style={{color:"white"}}>
                            Course Manager
                        </label>
                    </div>
                    <div className="form-inline my-2 my-lg-0 justify-content-end w-75">
                        <div className="form-inline my-2 my-lg-0 justify-content-end w-100">
                            <input type="text" id="vp-cs5610-course-name-to-add"
                                   className="form-control mr-sm-2 w-75 mt-1"
                                   placeholder="New Course Title"
                                   maxLength="30"
                                   onChange={this.updateTextField}
                                   value={this.state.courseTitle}
                            />
                            <button className="mt-1 ml-2 btn btn-md btn-success"
                                    title="Add New Course"
                                    onClick={() => {
                                        this.props.addCourse(
                                            this.state.courseTitle
                                        );
                                        this.setState({
                                                          courseTitle: ""
                                                      });
                                    }}>
                                <i className="fa fa-1x fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}