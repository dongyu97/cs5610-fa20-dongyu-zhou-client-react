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
                      deleteTopic,
                      active_status=[],
                  click}
                  ) =>{

    const togle = (id) => {
        const new_active_status = topics.map((topic) => {
            if (topic._id === id) {
                return Object.assign(
                    {},
                    {_id: topic._id, className: " active"}
                );
            } else {
                return Object.assign({}, {_id: topic._id, className: ""});
            }
        });
        click(Object.assign([], active_status, new_active_status));
    };
    return(<div>


        <ul className="nav nav-pills">
            {topics.map(topic =>{
                const status = active_status.filter(
                    (status) => status._id === topic._id
                )[0];
                let class_name = "";
                if (status !== undefined) {
                    class_name = status.className;
                }
                            return(<li className="nav-item"
                                       onClick={()=>togle(topic._id)}
                            >
                                <a className={"nav-link " + class_name} href="#">
                                {
                                    topic.editing&&
                                    <span>
                                    <input onChange={(event => updateTopic({
                                                                                ...topic,
                                                                                title: event.target.value
                                                                            }))}
                                        value={topic.title}/>

                                            <i onClick={() =>ok(topic)}
                                                className="fa fa-check"></i>

                                    </span>
                                }
                                {
                                    !topic.editing&&
                                    <span>
                                        {topic.title}

                                            <i onClick={()=>editTopic(topic)}
                                               className="fa fa-pencil"></i>


                                            <i onClick={() =>deleteTopic(topic._id)}
                                                className="fa fa-times"></i>

                                    </span>
                                }
                                </a>
                            </li>);}

            )}
            <li>
                <a className="nav-link" href="#">
                <i onClick={()=>createTopicForLesson(lessonId)} className="fa fa-plus"></i>
                </a>
            </li>
        </ul>

    </div>);
}

const stateToPropertyMapper =(state)=>({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId,
    active_status: state.lessonReducer.active_status,
    // moduleId: state.topicReducer.moduleId,

})
const dispatchToProperMapper = (dispatch) => ({
    createTopicForLesson: (lessonId) => TopicService.createTopicForLesson(lessonId,{
        title:"new topic"
    }).then(actualTopic => dispatch({
        type:"CREATE_TOPIC",
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
    click: (active_status) => {
        dispatch({
                     type: "UPDATE_ACTIVE_STATUS",
                     active_status,
                 });
    },
    deleteTopic: (topicId) =>
        TopicService.deleteTopic(topicId)
            .then(status =>dispatch({
                type: "DELETE_TOPIC",
                topicId
                                    }))



})

export default connect(stateToPropertyMapper, dispatchToProperMapper)(TopicPill)