import React from "react";
import TopicService from "../services/TopicService";
import WidgetService from "../services/WidgetService";
import {UPDATE_WIDGET} from "../actions/WidgetActions";
import {connect} from "react-redux";
const HeadingWidget= ({widget, updateWidget,editWidget, ok, createWidgetForTopic,deleteWidget,up, down,topicId,widgets, index})=>
    <div>
        <div>
            {
                widget.editing&&
                <div className={"non-preview-container"}>
                    <div>
                        {widget.name}

                        {
                            index===0&&
                            <button onClick={()=>down(widget,widgets,topicId)} className="btn btn-warning"><i className="fa fa-arrow-down"></i></button>||
                            index===widgets.length-1&&
                            <button onClick={()=>up(widget,widgets,topicId)} className="btn btn-warning"><i className="fa fa-arrow-up"></i></button>
                        }
                        {
                            index!==0&index!==widgets.length-1&&
                            <div>
                            <button onClick={()=>down(widget,widgets,topicId)} className="btn btn-warning"><i className="fa fa-arrow-down"></i></button>
                            <button onClick={()=>up(widget,widgets,topicId)} className="btn btn-warning"><i className="fa fa-arrow-up"></i></button>
                            </div>
                        }



                        <button onClick={()=>deleteWidget(widget)} className="pull-right btn btn-danger"><i className="fa fa-trash"></i></button>
                    </div>
                        <div className="input-group flex-nowrap">
                            <label  className="col-sm-3 col-form-label">
                                Widget Type</label>
                        <select
                            id={"headingSize"}
                            onChange={event => updateWidget({
                                                                ...widget,
                                                                type:event.target.value
                                                            })}
                            value={widget.type}
                            className="form-control"
                            style={{marginTop: '10px'}}>
                            <option value="Heading">Heading</option>
                            <option value="Paragraph">Paragraph</option>
                            <option value="Image">Image</option>
                            <option value="List">List</option>
                            <option value="Hyperlink">Hyperlink</option>
                            <option value="Video">Video</option>
                        </select>
                        </div>
                    <div className="input-group flex-nowrap">
                        <label  className="col-sm-3 col-form-label">
                            Widget Name</label>

                    <input className="form-control"
                           onChange={event => updateWidget({
                                                               ...widget,
                                                               name:event.target.value
                                                           })}
                           value={widget.name}
                           placeholder={widget.name}/>
                    </div>
                    <div className="input-group flex-nowrap">
                        <label  className="col-sm-3 col-form-label">
                            Widget Text</label>

                    <input className="form-control"
                           onChange={event => updateWidget({
                                                               ...widget,
                                                               text:event.target.value
                                                           })}
                           value={widget.text}
                           placeholder="text"></input>
                    </div>
                    <div className="input-group flex-nowrap">
                        <label  className="col-sm-3 col-form-label">
                            Widget Size</label>

                    <select
                        id={"headingSize"}
                        onChange={event => updateWidget({
                                                            ...widget,
                                                            size:parseInt(event.target.value)
                                                        })}
                        value={widget.size}
                        className="form-control"
                        style={{marginTop: '10px'}}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                    </select>
                    </div>


                    <button className="btn btn-success" onClick={()=>ok(widget)}><i className="fa fa-check"></i></button>
                </div>
            }
            {
                !widget.editing&&
                <div>

                    {
                        widget.size===1&&
                        <h1>{widget.text}</h1>
                        ||widget.size===2&&
                        <h2>{widget.text}</h2>
                        ||widget.size===3&&
                        <h3>{widget.text}</h3>
                        ||widget.size===4&&
                        <h4>{widget.text}</h4>
                        ||widget.size===5&&
                        <h5>{widget.text}</h5>

                    }
                    <button className="btn btn-warning" onClick={()=>editWidget(widget)}><i className="fa fa-pencil"></i></button>
                </div>
            }

        </div>
    </div>

export default HeadingWidget


