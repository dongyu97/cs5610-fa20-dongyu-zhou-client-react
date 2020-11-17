import React from "react";
import {editWidget, UPDATE_WIDGET} from "../actions/WidgetActions";
import WidgetService from "../services/WidgetService";
import {connect} from "react-redux";

const ParagraphWidget =({widget, updateWidget,editWidget, ok, createWidgetForTopic,deleteWidget,up, down,topicId,widgets,index}) =>
    <div className={"non-preview-container"}>

            {
                widget.editing&&
                <div>
                    <div>
                    {widget.name}
                        {
                            index===0 &&
                            <button onClick={()=>down(widget,widgets,topicId)} className="btn btn-warning"><i className="fa fa-arrow-down"></i></button>||
                            index===widgets.length-1&&
                            <button onClick={()=>up(widget,widgets,topicId)} className="btn btn-warning"><i className="fa fa-arrow-up"></i></button>
                        }
                        {
                            index!==0&&index!==widgets.length-1&&
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
                        Paragraph Text</label>
                    <textarea
                        onChange={event => updateWidget({
                                                            ...widget,
                                                            text:event.target.value
                                                        })}
                        value={widget.text}
                        className="form-control"
                        placeholder="Paragraph text"
                        aria-label="List text"
                        style={{marginTop: '10px'}}/>
                    </div>



                    <button className="btn btn-success" onClick={()=>ok(widget)}><i className="fa fa-check"></i></button>
                </div>
            }
            {
                !widget.editing&&
                <div>
                    {widget.text}
                    <button className="btn btn-warning" onClick={()=>editWidget(widget)}><i className="fa fa-pencil"></i></button>
                </div>
            }


    </div>


export default ParagraphWidget
