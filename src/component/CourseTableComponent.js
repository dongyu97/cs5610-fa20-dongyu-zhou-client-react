import React from "react";
import CourseRowComponent from "./CourseRowCompinent";
import NavBarComponent from "./NavBarComponent";
import {Link} from "react-router-dom";
// import {findAllCourses, createCourse, deleteCourse, updateCourse} from "../services/CourseService"



class CourseTableComponent extends React.Component {







    render() {
        return (
            <div>
                <NavBarComponent addCourse={this.props.addCourse}/>
                {/*<h1>Course List {this.props.instructor} {this.props.term}</h1>*/}


                <table className="table">
                    <thead>
                    <tr>
                        <th>Title
                        </th>
                        <th className= "d-sm-table-cell d-none">Owned
                            By <i className="fa fa-sort"></i></th>
                        <th className= "d-md-table-cell d-none">
                            Last Modified date
                        </th>


                        <th>
                            <Link to={"/courseGrid"}><i className="fa fa-th pull-right"></i></Link>

                        </th>
                        <th><i className="fa fa-sort-alpha-asc"></i></th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>{


                                                   return (<CourseRowComponent
                                                       deleteCourse={this.props.deleteCourse}
                                                       course={course}/>);
                                               }

                        )
                    }
                    </tbody>


                </table>
                {/*<button*/}
                {/*    className="btn btn-success"*/}
                {/*    onClick={this.props.addCourse}>Add Course*/}
                {/*</button>*/}
            </div>
        );
    }
}

export default CourseTableComponent
/*<CourseRowComponent item={item}/>*/