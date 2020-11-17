import React from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";


const WidgetListComponent =({widgets=[], createWidget,
                                createWidgetForTopic,
                                topicId,
                                deleteWidget,
                                down,
                                updateWidget,
                                editWidget,ok,
                            up}) =>
    <div>
        <div className="card" id="headingWidget" name="dynamicWidget">
            <div className="card-body">
                <h1>WidgetsList </h1>
                {console.log(widgets)}
                <ul>

                {

                widgets.map((widget,index) =>

                                <li>
                                    {
                                    widget.type== "Heading"&&
                                      <HeadingWidget widget={widget}
                                                     topicId={topicId}
                                                     updateWidget={updateWidget}
                                                     deleteWidget={deleteWidget}
                                                     editWidget={editWidget}
                                                     ok={ok}
                                                     up={up}
                                                     widgets={widgets}
                                                     down={down}
                                                     index={index}


                                      />||
                                      widget.type== "Paragraph"&&
                                      <ParagraphWidget widget={widget}

                                                       topicId={topicId}
                                                       updateWidget={updateWidget}
                                                       deleteWidget={deleteWidget}
                                                       editWidget={editWidget}
                                                       ok={ok}
                                                       up={up}
                                                       widgets={widgets}
                                                       down={down}
                                                       index={index}
                                                        />||
                                    widget.type=="List"&&
                                    <ListWidget widget={widget}

                                                     topicId={topicId}
                                                     updateWidget={updateWidget}
                                                     deleteWidget={deleteWidget}
                                                     editWidget={editWidget}
                                                     ok={ok}
                                                     up={up}
                                                     widgets={widgets}
                                                     down={down}
                                                     index={index}
                                    />||
                                    widget.type=="Image"&&
                                    <ImageWidget widget={widget}

                                                topicId={topicId}
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}
                                                editWidget={editWidget}
                                                ok={ok}
                                                up={up}
                                                widgets={widgets}
                                                down={down}
                                                index={index}
                                    />


                                    }

                                    {/*{widget.name}*/}
                                    {/*id: {widget.id}*/}
                                    {/*order :{widget.widgetOrder}*/}

                                    {/*<button onClick={() =>deleteWidget(widget.id)}>delete</button>*/}
                                    {/*<button onClick={()=>up(widget, widgets, topicId)}>up</button>*/}
                                    {/*<button onClick={()=>down(widget.id, widgets, topicId)}>down</button>*/}


                                    {/*<button onClick={() =>editWidget(widget)}>Edit</button>*/}
                                    {/*{*/}
                                    {/*    widget.editing&&*/}
                                    {/*    <div>*/}
                                    {/*    <input*/}
                                    {/*        onChange={(event) =>updateWidget({*/}
                                    {/*                                             ...widget,*/}
                                    {/*                                             name: event.target.value*/}
                                    {/*                                         })}*/}
                                    {/*        value={widget.name}></input>*/}
                                    {/*    <button onClick={() =>okWidget(widget)}>OK</button>*/}
                                    {/*    </div>*/}
                                    {/*}*/}
                                    {/*{*/}
                                    {/*    !widget.editing&&*/}
                                    {/*    <span>{widget.name}</span>*/}
                                    {/*}*/}

                                </li>
                )
            }
        </ul>
                <button onClick={()=>createWidgetForTopic(topicId,widgets.length)}><i className="fa fa-plus"></i></button>
            </div>
        </div>
    </div>

export default WidgetListComponent