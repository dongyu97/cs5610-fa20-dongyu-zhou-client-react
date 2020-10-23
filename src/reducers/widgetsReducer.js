import {CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET} from "../actions/WidgetActions";


const initialState ={
    widgets :[
        {
            _id: "123",
            name: "Widget1",
            editing: false
        },
        {
            _id: "234",
            name: "Widget2",
            editing: false
        },
        {
            _id: "345",
            name: "Widget3",
            editing: false
        }
    ]
}

const widgetsReducer =(state =initialState, action) =>{
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets:[...state.widgets,{
                    _id: Date.now()+"",
                    name: "createnew"
                }]
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(
                    widget => widget._id===action.widget._id ?
                              action.widget: widget)
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget=> widget!==action.widget)
            }
        default:
            return state
    }
    return state;
}

export default widgetsReducer