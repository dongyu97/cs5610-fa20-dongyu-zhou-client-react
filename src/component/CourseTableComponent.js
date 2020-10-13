import React from "react";
import CourseRowComponent from "./CourseRowCompinent";
// import {findAllCourses, createCourse, deleteCourse, updateCourse} from "../services/CourseService"



class CourseTableComponent extends React.Component {







    render() {
        return (
            <div>
                <h1>Course List {this.props.instructor} {this.props.term}</h1>
                <input className="form-control"/>

                <table className="table">

                    {
                        this.props.courses.map(course =>{

                                console.log("courseTableComponent30",course)
                                                   return (<CourseRowComponent
                                                       deleteCourse={this.props.deleteCourse}
                                                       course={course}/>);
                        }

                        )
                    }
                </table>
                <button
                    className="btn btn-success"
                    onClick={this.props.addCourse}>Add Course
                </button>
            </div>
        );
    }
}

export default CourseTableComponent
/*<CourseRowComponent item={item}/>*/