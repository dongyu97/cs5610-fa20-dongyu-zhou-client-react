import React from "react";
import {connect} from "react-redux";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";

const TopicPill =({topics=[],
                  createTopicForLesson,
                  lessonId,
                      editTopic,
                  ok,
                  updateTopic,
                      deleteTopic}
                  ) =>
    <div>
        <h1>Topics</h1>

        <ul>
            {topics.map(topic =>
                            <li>
                                {
                                    topic.editing&&
                                    <span>
                                    <input onChange={(event => updateTopic({
                                                                                ...topic,
                                                                                title: event.target.value
                                                                            }))}
                                        value={topic.title}/>
                                        <button onClick={() =>ok(topic)}>
                                            <i className="fa fa-check"></i>
                                        </button>
                                    </span>
                                }
                                {
                                    !topic.editing&&
                                    <span>
                                        {topic.title}
                                        <button onClick={()=>editTopic(topic)}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button onClick={() =>deleteTopic(topic._id)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </span>
                                }
                            </li>
            )}
        </ul>
        <button onClick={()=>createTopicForLesson(lessonId)}>create</button>
    </div>

const stateToPropertyMapper =(state)=>({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId,
    // moduleId: state.topicReducer.moduleId,

})
const dispatchToProperMapper = (dispatch) => ({
    createTopicForLesson: (lessonId) => TopicService.createTopicForLesson(lessonId,{
        title:"new topic"
    }).then(actualTopic => dispatch({
        type:"CREATE_TOPIC_FOR_LESSON",
        topic: actualTopic
        // topic: {
        //     _id:(new Date()).getMilliseconds()+"",
        //     title: "new topic"
        // }
                                                                                        })),
    editTopic: (topic) =>
        TopicService.updateTopic(topic._id,{
            ...topic, editing: true
        }).then(status=> dispatch({
            type:"UPDATE_TOPIC",
            topic: {...topic, editing: true}
                                                      })),
    ok: (topic) =>
        TopicService.updateTopic(topic._id,{
            ...topic, editing: false
        }).then(status=> dispatch({
                                      type:"UPDATE_TOPIC",
                                      topic: {...topic, editing: false}
                                  })),
    updateTopic: (topic) =>
        dispatch({
                     type: "UPDATE_TOPIC",
                     topic: topic
                 }),
    deleteTopic: (topicId) =>
        TopicService.deleteTopic(topicId)
            .then(status =>dispatch({
                type: "DELETE_TOPIC",
                topicId
                                    }))


})

export default connect(stateToPropertyMapper, dispatchToProperMapper)(TopicPill)