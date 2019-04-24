import React, { Component } from 'react'
import { browserHistory } from 'react-router';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        e.preventDefault();

        if ((email.value.length) || (password.value.length)) {
            axios.post('/login', this.state)
                .then(res => {
                    console.log(res.data);

                    if (res.data.success) {
                        this.props.history.push('/user/' + res.data.user_id);



                    }
                    else {
                        swal("email and password don't match!", "Try again!", "error");

                    }
                })
        }
        else {
            swal("Enter Email or Password!", "Try again!", "error");

        }

    }
    render() {
        return (
            <div className="container" style={{ padding: 40 }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.changeEmail} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.changePassword} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default Login