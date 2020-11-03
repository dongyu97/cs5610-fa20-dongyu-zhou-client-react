import React from "react";
import WidgetListComponent from "../component/WidgetListComponent";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget, UPDATE_WIDGET
} from "../actions/WidgetActions";
import {updateCourse} from "../services/CourseService";
import TopicService from "../services/TopicService";
import WidgetService from "../services/WidgetService";

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets,
    topicId: state.widgetsReducer.topicId
})

const propertyToDispatchMapper = (dispatch) => ({
    createWidgetForTopic: (topicId, order) => WidgetService.createWidget(topicId,{
        name:"new 33",
        type:"Heading",
        size: 1,
        widgetOrder: order
    }).then(actualWidget => dispatch({
                                        type:"CREATE_WIDGET",
                                        widget: actualWidget

                                    })),
    editWidget: (widget) =>
        WidgetService.updateWidget(widget._id,{
            ...widget, editing: true
        }).then(status=> dispatch({
                                      type:UPDATE_WIDGET,
                                      topic: {...widget, editing: true}
                                  })),
    ok: (widget) =>
        WidgetService.updateWidget(widget._id,{
            ...widget, editing: false
        }).then(status=> dispatch({
                                      type: UPDATE_WIDGET,
                                      topic: {...widget, editing: false}
                                  })),
    up: (widget, widgets,topicId) =>{
        let allWidgets = widgets;

        let i = allWidgets.findIndex(w => w.id == widget.id);
        let j=allWidgets[i-1]

        console.log("j",j)


        WidgetService.updateWidget(widget.id,{...widget,widgetOrder:widget.widgetOrder+1}).then(
            actualWidget => dispatch({
                type: UPDATE_WIDGET,
                widget : actualWidget
                               })
        )
        console.log("here",widget)
        WidgetService.updateWidget(j.id,{...j,widgetOrder:j.widgetOrder-1}).then(
            actualWidget => dispatch({
                                         type: UPDATE_WIDGET,
                                         widget : actualWidget
                                     })
        )

        WidgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                                          type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                                          widgets,
                                          topicId
                                      }))



    },

    down:(widgetId, widgets,topicId) =>{
        let allWidgets = widgets;

        let i = allWidgets.findIndex(w => w.id == widgetId);
        let j=allWidgets.findIndex(w =>w.widgetOrder==allWidgets[i].widgetOrder+1);


        let newOrder= allWidgets[j].widgetOrder;
        let oldOrder= allWidgets[i].widgetOrder;



        WidgetService.updateWidget(widgetId,{...allWidgets[i], widgetOrder: newOrder}).then(
            actualWidget => dispatch({
                                         type: UPDATE_WIDGET,
                                         widget : actualWidget
                                     })
        )
        WidgetService.updateWidget(allWidgets[j].id,{...allWidgets[j], widgetOrder: oldOrder}).then(
            actualWidget => dispatch({
                                         type: UPDATE_WIDGET,
                                         widget : actualWidget
                                     })
        )
        WidgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                                          type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                                          widgets,
                                          topicId
                                      }))
    },
        // TopicService.updateTopic(topic._id,{
        //     ...topic, editing: false
        // }).then(status=> dispatch({
        //                               type:"UPDATE_TOPIC",
        //                               topic: {...topic, editing: false}
        //                           })),
    deleteWidget: (widgetId)=>deleteWidget(dispatch,widgetId),
    createWidget: () => createWidget(dispatch),
    updateWidget: (widget) => updateWidget(dispatch, widget),

    okWidget: (widget) => okWidget(dispatch, widget)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(WidgetListComponent)