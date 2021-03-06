import WidgetService from "../services/WidgetService";
import TopicService from "../services/TopicService";
export const DELETE_WIDGET= "DELETE_WIDGET"
export const CREATE_WIDGET="CREATE_WIDGET"
export const UPDATE_WIDGET="UPDATE_WIDGET"
export const EDIT_WIDGET="UPDATE_WIDGET"
export const deleteWidget  =(dispatch,widgetId) => WidgetService.deleteWidget(widgetId)
    .then(status =>dispatch({
        type: DELETE_WIDGET,
        widgetId
                            }))


export const createWidget = (dispatch) =>
    dispatch({type: CREATE_WIDGET})

export const okWidget = (dispatch, widget) =>
    dispatch({type: EDIT_WIDGET,widget: {...widget, editing: false}})
export const updateWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET,widget})

export const editWidget =(dispatch, widget) =>
    dispatch({type: EDIT_WIDGET,widget: {...widget, editing: true}})