const topicURL= "http://localhost:8080/api/topics"
const widgetURL= "http://localhost:8080/api/widgets"

export const findWidgetsForTopic =(topicId) =>
    fetch(`${topicURL}/${topicId}/widgets`)
        .then(response => response.json())

export const createWidget =(topicId, widget) =>
    fetch(`${topicURL}/${topicId}/widgets`,{
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type":"application/json"
        }
    }).then(response =>response.json())
export const deleteWidget =(widgetId) =>
    fetch(`${widgetURL}/${widgetId}`,{
        method:"DELETE"
    }).then(response =>response.json())

export const updateWidget = (WidgetId,newWidget) =>
    fetch(`${widgetURL}/${WidgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())



    export default {findWidgetsForTopic, createWidget,deleteWidget,updateWidget}