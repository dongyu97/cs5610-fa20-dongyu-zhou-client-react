import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseTableComponent from "./CourseTableComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import {createCourse, deleteCourse, findAllCourses} from "../services/CourseService";
import NavBarComponent from "./NavBarComponent";
import CourseRowComponent from "./CourseRowCompinent";
import CourseGridComponent from "./CourseGridComponent";

export class CourseManagerComponent extends React.Component{
    state ={
        courses :[],
        newCourseTitle: "",
    }


    componentDidMount() {
        findAllCourses()
            .then(courses => {

                this.setState(prevState => {
                    return {
                        courses: courses
                    }
                })
            })


    }

    // toggleView = () => {
    //     this.setState((previousState) => {
    //         if (this.state.listView) {
    //             return {
    //                 listView: false
    //             }
    //         } else {
    //             return {
    //                 listView: true
    //             }
    //         }
    //     });
    // };



    deleteCourse = (course) => {
        console.log("courseManagerComponent29",course)
        deleteCourse(course._id)
            .then(status => this.setState(prevState => {
                return (
                    {
                        courses: prevState.courses.filter(c => c._id !== course._id)
                    }
                )
            }))
            .catch(error => {

            })

        // this.setState(prevState =>{
        //     return(
        //         {
        //             courses: prevState.courses.filter(c => c._id !== course._id)
        //         }
        //     )
        // })
    }
    editCourse = (course) => {
        this.setState({
                          courseBeingEdited: course
                      })
    }
    addCourse = (courseTitle) => {
        const newCourse = {

            title: courseTitle,
            owner: "me",
            modified: new Date().toDateString()
        }
        createCourse(newCourse)
            .then(actualCourse => this.setState(preState => {
                return ({
                    courses: [
                        ...preState.courses, actualCourse
                    ]
                })
            }))


        // this.setState(preState =>{
        //     return({
        //         courses:[
        //             ...preState.courses, newCourse
        //         ]
        //     })
        // })
    }
    render() {
        return(
            <BrowserRouter>
                <div className="container">
                    {/*<Link to="/login">Login</Link> |*/}
                    {/*<Link to="/register">Register</Link> |*/}
                    {/*<Link to="/profile">Profile</Link> |*/}
                    {/*<Link to="/">Courses</Link>*/}
                    {/*<Link to="/edit">Editor</Link>*/}
                    {/*<Route path="/login" exact component={Login}/>*/}
                    {/*<Route path="/register" exact component={Register}/>*/}
                    {/*<Route path="/profile" exact component={Profile}/>*/}
                    <Route path="/" exact>
                        <CourseTableComponent courses={this.state.courses}
                                              addCourse={this.addCourse.bind(this)}

                                              deleteCourse={this.deleteCourse.bind(this)}
                                              instructor={"jose"}
                                              term={"fall20"}/>
                    </Route>
                    <Route path="/courseGrid" exact>
                        <CourseGridComponent courses={this.state.courses}
                                              addCourse={this.addCourse.bind(this)}

                                              deleteCourse={this.deleteCourse.bind(this)}
                                              />
                    </Route>
                    <Route path="/edit" exact component={CourseEditorComponent}/>
                    <Route path ="/edit/:courseId" exact component={CourseEditorComponent}/>
                    {/*<Login/>*/}
                    {/*<Register/>*/}
                    {/*<Profile/>*/}
                    {/*<CourseListComponent*/}
                    {/*    instructor={"jose"}*/}
                    {/*    term={"fall20"}/>*/}

                </div>
            </BrowserRouter>
        );
    }
}