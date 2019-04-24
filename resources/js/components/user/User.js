import React, { Component } from 'react'
import avatar from '../../../img/avatar.png'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from "./Profile"
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            search: ""

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
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Blog Web Site</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to={`/user/${this.state.user.id}`} className="nav-item nav-link active">Home</Link>
                                <Link to={`/user/${this.state.user.id}/profile`} className="nav-item nav-link active">Profile</Link>

                            </div>
                            <form className="form-inline" onSubmit={this.submitSearch}>
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>

                        <div className="  navbar-brand " id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">{this.state.user.name} <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="#">{this.state.user.email}</a>
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
