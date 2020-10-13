import React from "react";
import NavBarComponent from "./NavBarComponent";
import {Link} from "react-router-dom";
import CourseRowComponent from "./CourseRowCompinent";
import CourseCardComponent from "./CourseCardComponent";

export default class CourseGridComponent extends React.Component {
    render() {
        return (
            <div>
                <NavBarComponent addCourse={this.props.addCourse}/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Recent Document
                        </th>
                        <th>Owned By Me<i className="fa fa-sort"></i></th>
                        <th>
                            <Link to={"/"}><i className="fa fa-list pull-right"></i></Link>
                        </th>
                        <th><i className="fa fa-sort-alpha-asc pull-right"></i></th>
                        <th><i className="fa fa-folder-o pull-right"></i></th>

                    </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </table>
                <div className="row">
                {

                    this.props.courses.map(course => {

                                               return (<CourseCardComponent
                                                   deleteCourse={this.props.deleteCourse}
                                                   course={course}/>);
                                           }
                    )

                }

                </div>
            </div>
        );
    }
}