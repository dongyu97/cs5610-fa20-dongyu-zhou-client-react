import React from "react";
import {findCourseById} from "../services/CourseService";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillComponent from "./TopicPillComponent"

import {Link} from "react-router-dom";
import WidgetListContainer from "../container/WidgetListContainer";
import {connect} from "react-redux";
import ModuleService from "../services/ModuleService";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";



class CourseEditorComponent extends React.Component{

    // state ={
    //     course :{
    //         _id:"",
    //         title: ""
    //     }
    // }
    componentDidMount() {
        const courseId =this.props.match.params.courseId
        const moduleId= this.props.match.params.moduleId
        const lessonId=this.props.match.params.lessonId



        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if (moduleId){
            this.props.findLessonsForModule(moduleId)
        }
        if (lessonId){
            this.props.findTopicsForLesson(lessonId)
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId= this.props.match.params.moduleId
        if (prevProps.match.params.modules!== moduleId){
            this.props.findLessonsForModule(moduleId)
        }
        const lessonId=this.props.match.params.lessonId
        if (prevProps.match.params.lessons!== lessonId){
            this.props.findTopicsForLesson(lessonId)
        }
    }

    render(){
        return(
            <div>
                <h1><Link to="/" className="wbdv-course-editor wbdv-close">
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                </Link>
                    {this.props.course.title}
                </h1>



                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent/>
                    </div>

                    <div className="col-8">
                        <LessonTabsComponent/>
                        <TopicPillComponent/>
                        <WidgetListContainer/>
                    </div>
                </div>

            {/*    <div className="container-fluid">*/}
            {/*        <nav className="navbar navbar-light bg-light row no-gutters">*/}
            {/*            <div className="navbar-brand col-4" style={{"margin-right": "0"}} href="#">*/}
            {/*                <Link to="/" className="wbdv-course-editor wbdv-close">*/}
            {/*                    <i className="fa fa-window-close-o fa-2x" aria-hidden="true"></i>*/}
            {/*                </Link>*/}
            {/*                <h1 className="wbdv-course-title"*/}
            {/*                    style={{display: "inline"}}>{this.state.course.title}</h1>*/}
            {/*            </div>*/}

            {/*            <LessonTabsComponent/>*/}
            {/*        </nav>*/}
            {/*    </div>*/}

            {/*    <div class="container-fluid">*/}


            {/*        <div class="row">*/}
            {/*            <ModuleListComponent/>*/}
            {/*            <WidgetListComponent/>*/}

            {/*        </div>*/}


            {/*</div>*/}



            </div>
        )
    }
}

const stateToPropertyMapper =(state) =>({
    course: state.courseReducer.course
})

const propertyToDispatchMapper =(dispatch) =>({
    findCourseById: (courseId)=> findCourseById(courseId)
        .then(actualCourse =>dispatch({
            type: "SET_COURSE",
            course: actualCourse
                                      })),
    findModulesForCourse :(courseId) => ModuleService.findModulesForCourse(courseId)
        .then(actualModules=> dispatch({
            type:"FIND_MODULE_FOR_COURSE",
            modules: actualModules
                                       })),
    findLessonsForModule :(moduleId) =>LessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: "FIND_LESSON_FOR_MODULE",
            lessons,
            moduleId
                                 })),
    findTopicsForLesson :(lessonId) =>TopicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type:"FIND_TOPIC_FOR_LESSON",
            topics,
            lessonId
                                 }))

})
export default connect(stateToPropertyMapper,propertyToDispatchMapper)(CourseEditorComponent)