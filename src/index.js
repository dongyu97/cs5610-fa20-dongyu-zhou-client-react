import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import CourseTableComponent from "./component/CourseTableComponent";
import * as serviceWorker from './serviceWorker';
import Login from "./component/Login";
import Register from "./component/Register";
import Profile from "./component/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseEditorComponent from "./component/CourseEditorComponent";
import {CourseManagerComponent} from "./component/CourseManagerComponent";

ReactDOM.render(
    <CourseManagerComponent/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
