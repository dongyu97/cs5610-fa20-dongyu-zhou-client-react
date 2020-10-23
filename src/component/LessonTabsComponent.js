import React from "react";
import lessonReducer from "../reducers/lessonReducer";
import {connect} from "react-redux";
import LessonService from "../services/LessonService";
import ModuleService from "../services/ModuleService";
import {Link} from "react-router-dom";

const LessonTabs = ({
                        course = {},

                        moduleId,
                        lessons = [],
                        createLessonForModule,
                        deleteLesson,
                        updateLesson,
                        editLesson,
                        ok,
                        click
                    }) =>
    <div>
        <h1>Lessons </h1>

        <ul className="nav nav-tabs">
            {lessons.map(lesson =>
                             <li className="nav-item"
                                 key={lesson._id}>
                                 <a className={lesson.class_name} href="#">
                                 <button onClick={() => deleteLesson(lesson._id)}>
                                     <i className="fa fa-times"></i></button>
                                 {
                                     !lesson.editing &&
                                     <span>
                                        <button onClick={() => editLesson(lesson)}>
                                                <i className="fa fa-pencil"></i>
                                        </button>
                                <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}
                                 >
                                    {lesson.title}
                                </Link>
                                     </span>
                                 }
                                 {
                                     lesson.editing &&
                                     <span>
              <button onClick={() => ok(lesson)}>
                <i className="fa fa-check"></i>
              </button>

                    <input onChange={(event) => updateLesson({
                                                                 ...lesson,
                                                                 title: event.target.value
                                                             })}
                           value={lesson.title}/>
                  </span>
                                 }
                                 </a>
                             </li>
            )
            }
        </ul>
        <button onClick={() => createLessonForModule(moduleId)}>create</button>
    </div>

const stateToPropertyMapper = (state) => ({

    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course

})

const dispatchToProperMapper = (dispatch) => ({
    // updateLesson: (newLesson) =>
    //     LessonService.updateLesson(newLesson)
    //         .then(actuaLesson => dispatch({
    //                                           type: "UPDATE_LESSON",
    //                                           lesson: actuaLesson
    //                                       })),
    editLesson: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson, editing: true, class_name:"nav-link active"
        }).then(status => dispatch({
                                       type: "UPDATE_LESSON",
                                       lesson: {...lesson, editing: true, class_name:"nav-link active"}

                                   })),
    ok: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson, editing: false,class_name:"nav-link"
        }).then(status => dispatch({
                                       type: "UPDATE_LESSON",
                                       lesson: {...lesson, editing: false,class_name:"nav-link"}
                                   })),

    updateLesson: (lesson) =>
        dispatch({
                     type: "UPDATE_LESSON",
                     lesson: lesson
                 }),

    deleteLesson: (lessonId) => LessonService.deleteLesson(lessonId)
        .then(status => dispatch({
                                     type: "DELETE_LESSON",
                                     lessonId
                                 })),
    click: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson, class_name:"nav-link active"
        }).then(status => dispatch({
                                       type: "UPDATE_LESSON",
                                       lesson: {...lesson, class_name:"nav-link active"}
                                   })),

    createLessonForModule: (moduleId) => LessonService.createLessonForModule(moduleId, {

        // _id: (new Date()).getMilliseconds() + "",
        title: "new Lesson",
        class_name:"nav-link"

    })
        .then(actualLesson => dispatch({
                                           type: "CREATE_LESSON_FOR_MODULE",
                                            lesson:actualLesson
                                           // lesson: {
                                           //     // _id: (new Date()).getMilliseconds() + "",
                                           //     title: "new Lesson",
                                           //     class_name:"nav-link"
                                           // }
                                       }))
})

export default connect(stateToPropertyMapper, dispatchToProperMapper)(LessonTabs)

// export default class LessonTabsComponent extends React.Component{
//     render() {
//         return(
//
//                 <div className="col-8" id="navbarNav">
//                     <ul className="nav nav-tabs wbdv-lesson-tabs">
//                         <li className="nav-item">
//                             <a className="nav-link active" href="#">Tags</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Attributes</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Elements</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Headings</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link " href="#">
//                                 <i className="fa fa-plus pull-right wbdv-lesson-add-btn"></i>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             );
//     }
//
// }