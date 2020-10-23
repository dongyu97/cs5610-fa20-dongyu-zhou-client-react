import React from "react";
import TopicPillsComponent from "./TopicPillsComponent";

const WidgetListComponent =({widgets=[], createWidget,
                                deleteWidget,
                                updateWidget,
                                editWidget,
                                okWidget}) =>
    <div>
        <h1>WidgetsList</h1>
        <ul>
            {
                widgets.map(widget =>
                                <li>
                                    <button onClick={() =>deleteWidget(widget)}>delete</button>


                                    <button onClick={() =>editWidget(widget)}>Edit</button>
                                    {
                                        widget.editing&&
                                        <div>
                                        <input
                                            onChange={(event) =>updateWidget({
                                                                                 ...widget,
                                                                                 name: event.target.value
                                                                             })}
                                            value={widget.name}></input>
                                        <button onClick={() =>okWidget(widget)}>OK</button>
                                        </div>
                                    }
                                    {
                                        !widget.editing&&
                                        <span>{widget.name}</span>
                                    }

                                </li>
                )
            }
        </ul>
        <button onClick={createWidget}>Create</button>

    </div>

export default WidgetListComponent