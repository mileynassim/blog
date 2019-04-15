import React, { Component } from 'react'
import avatar from '../../../img/avatar.png'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from "./Profile"
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []

        };
    }

    componentWillMount() {
        const id = this.props.match.params.id
        axios.get(`/user/${id}`)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
    }

    render() {

        return (
            <Router>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="#">Blog Web Site</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link to={`/user/${this.state.user.id}`} class="nav-item nav-link active">Home</Link>
                                <Link to={`/user/${this.state.user.id}/profile`} class="nav-item nav-link active">Profile</Link>

                            </div>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>

                        <div class="  navbar-brand " id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-item nav-link active" href="#">{this.state.user.name} <span class="sr-only">(current)</span></a>
                                <a class="nav-item nav-link" href="#">{this.state.user.email}</a>
                                <img src={avatar} alt="Logo" class="d-inline-block align-top" style={{ width: 40, height: 40 }} />
                            </div>

                        </div>

                    </nav>
                    <Route path="/user/:id/profile" component={Profile} />

                </div>
            </Router>
        )
    }
}
