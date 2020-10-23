import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";
import "font-awesome/css/font-awesome.css"

const courseBeingEdit = false;
const editCourse = () => {

}



export default class CourseRowComponent extends React.Component {
    state = {
        editing: this.props.editing,
        course: this.props.course,
        color: "white",

    }


    render() {
        return (
            <tr
                style={{backgroundColor: this.state.color}}
                onClick={()=>this.setState({color: "lightblue"})}>
                <td>
                    {
                        this.state.editing &&
                        <input className="form-control"
                               onChange={(e) => {
                                   const newTitle = e.target.value
                                   this.setState(prevState => ({
                                       course: {...prevState.course, title: newTitle}
                                   }))
                               }
                               }
                               value={this.state.course.title}/>

                    }
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.props.course._id}`}>{this.props.course.title}</Link>

                    }


                </td>

                <td className= "d-sm-table-cell d-none">{this.props.course.owner}</td>
                <td className= "d-md-table-cell d-none">{this.props.course.modified}</td>

                <td>
                    {/*<button className="btn btn-danger"*/}
                    {/*        onClick={() => {*/}
                    {/*            console.log("courseRow43",this.props)*/}
                    {/*            this.props.deleteCourse(this.props.course)*/}
                    {/*        }}>*/}
                    {/*</button>*/}
                    {/*<i className="fa fa-trash fa-2x pull-right"*/}
                    {/*   onClick={() => {*/}
                    {/*       console.log("courseRow43",this.props)*/}
                    {/*       this.props.deleteCourse(this.props.course)*/}
                    {/*   }}></i>*/}
                    {
                        !this.state.editing &&
                        <div><i className="fa fa-pencil pull-right fa-2x"
                           onClick={() => this.setState({editing: true})}></i>
                        <i className="fa fa-trash fa-2x pull-right"
                        onClick={() => {
                        console.log("courseRow43",this.props)
                        this.props.deleteCourse(this.props.course)
                        }}></i></div>
                        // <button className="btn btn-primary"
                        //         onClick={() => this.setState({editing: true})}>
                        //     Edit
                        // </button>

                    }
                    {
                        this.state.editing &&
                        <i className="fa fa-check fa-2x pull-right"
                           onClick={() => {
                               updateCourse(this.state.course._id, this.state.course)
                                   .then(status => this.setState({editing: false}))

                           }}></i>
                        // <button className="btn btn-primary"
                        //         onClick={() => {
                        //             updateCourse(this.state.course._id, this.state.course)
                        //                 .then(status => this.setState({editing: false}))
                        //         }}>OK</button>
                    }


                </td>
            </tr>
        )

    }
}


