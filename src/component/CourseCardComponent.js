import React from "react";
import { Card, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

export default class CourseCardComponent extends React.Component{

    state = {
        editing: false,
        course: this.props.course,
        color: "white"

    }
    render() {
        return(
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
            <Card style={{ width: '10.8rem' }}>
                <Card.Img variant="top" src="https://img.icons8.com/ios/50/000000/courses.png" />
                <Card.Body>
                    <Card.Title>{
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

                        }</Card.Title>
                    <Card.Text>
                        Modified {this.props.course.modified}
                    </Card.Text>
                    {
                        !this.state.editing &&
                        <div><i className="fa fa-pencil pull-right fa-2x"
                                onClick={() => this.setState({editing: true})}></i>
                            <i className="fa fa-trash fa-2x pull-right"
                               onClick={() => {
                                   console.log("courseRow43",this.props)
                                   this.props.deleteCourse(this.props.course)
                               }}></i></div>

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
                </Card.Body>
            </Card>
            </div>
        );
    }
}