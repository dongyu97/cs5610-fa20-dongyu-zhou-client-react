import React from "react";
import {connect} from "react-redux";
import ModuleService from "../services/ModuleService";
import {Link} from "react-router-dom";

const ModuleListComponent = ({
                                 course = {},
                                 active_status = [],
                                 modules = [],
                                 deleteModule,
                                 createModule,
                                 updateModule,
                                 editModule,
                                 ok,
                                    click
                             }) =>{

    const togle = (id) => {
        const new_active_status = modules.map((module) => {
            if (module._id === id) {
                return Object.assign(
                    {},
                    { _id: module._id, className: " active" }
                );
            } else {
                return Object.assign({}, { _id: module._id, className: "" });
            }
        });
        click(Object.assign([], active_status, new_active_status));
    };

    return (
        <div>

        <ul className="list-group">
            {
                modules.map((module) =>{
                    const status = active_status.filter(
                        (status) => status._id === module._id
                    )[0];
                    let class_name = "";
                    if (status !== undefined) {
                        class_name = status.className;
                    }
                    return(<li key={module._id}
                                    className={"list-group-item" + class_name}
                               onClick={()=>togle(module._id)}>

                                    {!module.editing &&

                                     <span >

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


                                </li>);})}


            <li className="list-group-item">

                <i onClick={() => createModule(course)} className="fa fa-plus pull-right"></i>

            </li>
        </ul>

    </div>);}
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
    course: state.courseReducer.course,
    active_status: state.moduleReducer.active_status,
})

const PropertyToDispatchMapper = (dispatch) => ({
    ok: (module) =>
        ModuleService.updateModule(module._id, {
            ...module, editing: false
        }).then(status => dispatch({
                                       type: "UPDATE_MODULE",
                                       module: {
                                           ...module,
                                           editing: false
                                       }
                                   }))
    ,
    updateModule: (module) =>
        dispatch({
                     type: "UPDATE_MODULE",
                     module: module
                 }),
    click: (active_status) => {
            dispatch({
                         type: "UPDATE_ACTIVE_STATUS",
                         active_status,
                     });
    }
    // ModuleService.updateModule(module._id, module)
    //     .then(status => dispatch({
    //         type: "UPDATE_MODULE",
    //         module: module
    //                              }))
    ,
    editModule: (module) =>
        ModuleService.updateModule(module._id, {
            ...module, editing: true
        }).then(status => dispatch({
                                       type: "UPDATE_MODULE",
                                       module: {
                                           ...module,
                                           editing: true
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
    createModule: (module) =>
        ModuleService.createModulesForCourse(module._id, {
            title: "New Module",
            class_name:"list-group-item"
        }).then(actualModule => dispatch({
                                             type: "CREATE_MODULE",
                                             module: actualModule
                                         })
        )

})

export default connect(stateToPropertyMapper, PropertyToDispatchMapper)(ModuleListComponent)
