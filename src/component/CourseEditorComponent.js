import React from "react";
import {findCourseById} from "../services/CourseService";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {Link} from "react-router-dom";

export default class CourseEditorComponent extends React.Component{

    state ={
        course :{
            _id:"",
            title: ""
        }
    }
    componentDidMount() {

        findCourseById(this.props.match.params.courseId)
            .then(actualCourse =>this.setState({
                course: actualCourse
                                               }))
    }

    render(){
        return(
            <div>

                <div className="container-fluid">
                    <nav className="navbar navbar-light bg-light row no-gutters">
                        <div className="navbar-brand col-4" style={{"margin-right": "0"}} href="#">
                            <Link to="/" className="wbdv-course-editor wbdv-close">
                                <i className="fa fa-window-close-o fa-2x" aria-hidden="true"></i>
                            </Link>
                            <h1 className="wbdv-course-title"
                                style={{display: "inline"}}>{this.state.course.title}</h1>
                        </div>

                        <LessonTabsComponent/>
                    </nav>
                </div>

                <div class="container-fluid">


                    <div class="row">
                        <ModuleListComponent/>
                        <WidgetListComponent/>

                    </div>


            </div>



            </div>
        )
    }
}