const lessonURL= "https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/lessons"
const topicURL= "https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/topics"

export const findTopicsForLesson =(lessonId) =>
    fetch(`${lessonURL}/${lessonId}/topics`)
        .then(response => response.json())

export const createTopic =(lessonId, topic) =>
    fetch(`${lessonURL}/${lessonId}/topics`,{
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            "content-type":"application/json"
        }
    }).then(response =>response.json())

export const updateTopic = (topicId,newTopic) =>
    fetch(`${topicURL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTopic =(topicId) =>
    fetch(`${topicURL}/${topicId}`,{
        method:"DELETE"
    }).then(response =>response.json())

export default {findTopicsForLesson, createTopicForLesson: createTopic,updateTopic,deleteTopic}