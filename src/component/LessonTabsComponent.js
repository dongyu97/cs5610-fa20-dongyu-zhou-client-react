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
                        active_status = [],
                        createLessonForModule,
                        deleteLesson,
                        updateLesson,
                        editLesson,
                        ok,
                        click,
                    }) => {
    const togle = (id) => {
        const new_active_status = lessons.map((lesson) => {
            if (lesson._id === id) {
                return Object.assign(
                    {},
                    {_id: lesson._id, className: "nav-link active"}
                );
            } else {
                return Object.assign({}, {_id: lesson._id, className: "nav-link"});
            }
        });
        click(Object.assign([], active_status, new_active_status));
    };

    return (
        <div>
            <h1>Lessons </h1>

            <ul className="nav nav-tabs">
                {lessons.map((lesson) => {
                    const status = active_status.filter(
                        (status) => status._id === lesson._id
                    )[0];
                    let class_name = "";
                    if (status !== undefined) {
                        class_name = status.className;
                    }
                    return (
                        <li
                            className="nav-item"
                            onClick={() => togle(lesson._id)}
                            key={lesson._id}
                        >
                            <a className={"nav-link " + class_name} href="#">

                                {!lesson.editing && (
                                    <span>
                                        <Link
                        to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}
                    >
                      {lesson.title}
                    </Link>
                     <i onClick={() => editLesson(lesson)} className="fa fa-pencil"></i>

                                    <i onClick={() => deleteLesson(lesson._id)}
                                       className="fa fa-times"></i>

                  </span>
                                )}
                                {lesson.editing && (
                                    <span>


                    <input
                        onChange={(event) =>
                            updateLesson({
                                             ...lesson,
                                             title: event.target.value,
                                         })
                        }
                        value={lesson.title}
                    />
                    
                      <i onClick={() => ok(lesson)} className="fa fa-check"></i>

                  </span>
                                )}
                            </a>
                        </li>
                    );
                })}
                <li>
                    <a className="nav-link " href="#">
                        <i className="fa fa-plus"
                           onClick={() => createLessonForModule(moduleId)}
                        ></i>
                    </a>
                </li>
            </ul>

        </div>
    );
};

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course,
    active_status: state.lessonReducer.active_status,
});

const dispatchToProperMapper = (dispatch) => ({
    // updateLesson: (newLesson) =>
    //     LessonService.updateLesson(newLesson)
    //         .then(actuaLesson => dispatch({
    //                                           type: "UPDATE_LESSON",
    //                                           lesson: actuaLesson
    //                                       })),
    editLesson: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson,
            editing: true,
        }).then((status) =>
                    dispatch({
                                 type: "UPDATE_LESSON",
                                 lesson: {...lesson, editing: true, class_name: "nav-link active"},
                             })
        ),
    ok: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson,
            editing: false,
        }).then((status) =>
                    dispatch({
                                 type: "UPDATE_LESSON",
                                 lesson: {...lesson, editing: false, class_name: "nav-link"},
                             })
        ),

    updateLesson: (lesson) =>
        dispatch({
                     type: "UPDATE_LESSON",
                     lesson: lesson,
                 }),

    deleteLesson: (lessonId) =>
        LessonService.deleteLesson(lessonId).then((status) =>
                                                      dispatch({
                                                                   type: "DELETE_LESSON",
                                                                   lessonId,
                                                               })
        ),

    click: (active_status) => {
        dispatch({
                     type: "UPDATE_ACTIVE_STATUS",
                     active_status,
                 });
    },
    // click: (lessons) =>
    //     LessonService.updateLesson(lesson._id, {
    //         ...lesson, class_name: "nav-link active"
    //     }).then(status => dispatch({
    //         type: "UPDATE_LESSON",
    //         lessons: lessons.map(lesson => lesson)

    //                                    { ...lesson, class_name: "nav-link active" }
    //                                })),

    createLessonForModule: (moduleId) =>
        LessonService.createLessonForModule(moduleId, {
            // _id: (new Date()).getMilliseconds() + "",
            title: "new Lesson",
            // class_name: "nav-link"
        }).then((actualLesson) =>
                    dispatch({
                                 type: "CREATE_LESSON",
                                 lesson: actualLesson,
                                 // lesson: {
                                 //     // _id: (new Date()).getMilliseconds() + "",
                                 //     title: "new Lesson",
                                 //     class_name:"nav-link"
                                 // }
                             })
        ),
});

export default connect(
    stateToPropertyMapper,
    dispatchToProperMapper
)(LessonTabs);

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
