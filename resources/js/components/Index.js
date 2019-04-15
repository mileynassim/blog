import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logincontainer from './page/Logincontainer'
import Defaultcontainer from './page/Defaultcontainer'
import Profile from './user/Profile'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import swal from 'sweetalert';



export default class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/user/:id" component={Logincontainer} />
                    <Route path="/" component={Defaultcontainer} />
                </Switch>
            </Router>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
