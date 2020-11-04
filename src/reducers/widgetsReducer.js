import {CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET} from "../actions/WidgetActions";


const initialState ={
    widgets :[]
}

const widgetsReducer =(state =initialState, action) =>{
    switch (action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets.sort(function (a,b) {
                    if (a.widgetOrder>b.widgetOrder){
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }),
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
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id===action.widget.id ?
                              action.widget: widget)
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget=> widget.id!==action.widgetId)
            }

        default:
            return state
    }
    return state;
}

export default widgetsReducer