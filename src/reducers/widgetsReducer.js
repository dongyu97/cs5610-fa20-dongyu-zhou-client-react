import {CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET} from "../actions/WidgetActions";


const initialState ={
    widgets :[]
}

const widgetsReducer =(state =initialState, action) =>{
    switch (action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":

            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [...state.widgets,
                          action.widget]
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(
                    widget => widget.id===action.widget.id ?
                              action.widget: widget)
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget=> widget._id!==action.widgetId)
            }
        default:
            return state
    }
    return state;
}

export default widgetsReducer