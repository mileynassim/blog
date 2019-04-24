import React, { Component } from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }

    componentWillMount() {

    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(this.state)
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state)

    }
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(this.state)

    }
    handleSubmit = (e) => {
        const name = document.getElementById('name');
        const password = document.getElementById('password');



        e.preventDefault();
        console.log(name.value.length)
        if ((name.value.length < 3) || (password.value.length < 6)) {
            swal("Please Do not leave blank!", "!", "warning");

        }
        else {
            axios.post('/', this.state)
                .then(res => {
                    console.log(res)
                })
            swal({
                title: "Good job!",
                text: "You created new account!",
                icon: "success",
                button: this.props.history.push('/login'),
            });
        }


    }
    render() {
        return (
            <div className="container" style={{ padding: 40 }}>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="your name ..." onChange={this.changeName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={this.changeEmail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Your password</label>
                        <input type="password" className="form-control" id="password" placeholder="**************" onChange={this.changePassword} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default Register