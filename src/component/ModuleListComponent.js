import React from "react";
import {connect} from "react-redux";
import ModuleService from "../services/ModuleService";
import {Link} from "react-router-dom";

const ModuleListComponent = ({
                                 course = {},
                                 modules = [],
                                 deleteModule,
                                 createModule,
                                 updateModule,
                                 editModule,
                                 ok
                             }) =>
    <div>
        <h1>for {course.title}</h1>
        <ul className="list-group">
            {
                modules.map(module =>
                                <li key={module._id}
                                    className={module.class_name}>

                                    {!module.editing &&

                                     <span>

                                         <Link
                                             to={`/edit/${course._id}/modules/${module._id}`}>{module.title}
                                         </Link>
                                         <i className="fa fa-pencil pull-right"
                                            onClick={() => editModule(module)}></i>
                                         <i className="fa fa-times pull-right"
                                            onClick={() => deleteModule(module)}></i>
                                     </span>

                                    }
                                    {
                                        module.editing &&
                                        <span>
                                            <input onChange={(event) => updateModule({
                                                                                         ...module,
                                                                                         title: event.target.value
                                                                                     })}
                                                   value={module.title}/>
                                        <i className="fa fa-check"
                                           onClick={() => ok(module)}></i>
                                        </span>
                                    }


                                </li>
                )
            }
            <li className="list-group-item">

                <i onClick={() => createModule(course)} className="fa fa-plus pull-right"></i>

            </li>
        </ul>

    </div>
// export default class ModuleListComponent extends React.Component{
//     render() {
//         return(
//             <div className="col-4">
//
//                 <ul className="list-group wbdv-module-list">
//                     <li className="list-group-item wbdv-module-item"><span
//                         className="wbdv-module-item-title">Html</span>
//                         <i className="fa fa-times pull-right
// wbdv-module-item-delete-btn"></i></li> <li className="list-group-item active wbdv-module-item">
// <span className="wbdv-module-item-title">CSS</span> <i className="fa fa-times pull-right
// wbdv-module-item-delete-btn"></i></li> <li className="list-group-item wbdv-module-item"> <span
// className="wbdv-module-item-title">JavaScript</span> <i className="fa fa-times pull-right
// wbdv-module-item-delete-btn"></i></li> <li className="list-group-item wbdv-module-item"> <span
// className="wbdv-module-item-title">React</span> <i className="fa fa-times pull-right
// wbdv-module-item-delete-btn"></i></li> <li className="list-group-item"><i className="fa fa-plus
// pull-right wbdv-module-item-add-btn"></i></li> </ul> </div> ); } }

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course
})

const PropertyToDispatchMapper = (dispatch) => ({
    ok: (module) =>
        ModuleService.updateModule(module._id, {
            ...module, editing: false, class_name: "list-group-item"
        }).then(status => dispatch({
                                       type: "UPDATE_MODULE",
                                       module: {
                                           ...module,
                                           editing: false,
                                           class_name: "list-group-item"
                                       }
                                   }))
    ,
    updateModule: (module) =>
        dispatch({
                     type: "UPDATE_MODULE",
                     module: module
                 })
    // ModuleService.updateModule(module._id, module)
    //     .then(status => dispatch({
    //         type: "UPDATE_MODULE",
    //         module: module
    //                              }))
    ,
    editModule: (module) =>
        ModuleService.updateModule(module._id, {
            ...module, editing: true, class_name: "list-group-item active"
        }).then(status => dispatch({
                                       type: "UPDATE_MODULE",
                                       module: {
                                           ...module,
                                           editing: true,
                                           class_name: "list-group-item active"
                                       },

                                   }))
    ,
    deleteModule: (module) =>
        ModuleService.deleteModulesForCourse(module._id)
            .then(staus =>
                      dispatch({
                                   type: "DELETE_MODULE",
                                   module: module
                               })
            ),
    createModule: (course) =>
        ModuleService.createModulesForCourse(course._id, {
            title: "New Module"
        }).then(actualModule => dispatch({
                                             type: "CREATE_MODULE",
                                             module: {
                                                 _id: (new Date()).getMilliseconds() + "",
                                                 title: "new module",
                                                 class_name: "list-group-item "
                                             }
                                         })
        )

})

export default connect(stateToPropertyMapper, PropertyToDispatchMapper)(ModuleListComponent)