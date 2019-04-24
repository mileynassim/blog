import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []

        };
        axios.get('/list')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }
    componentWillMount() {

        console.log(this.state.posts, "=>posts");

    }



    changeTitre = (e) => {
        this.setState({
            titre: e.target.value
        })
    }

    changePost = (e) => {
        this.setState({
            post: e.target.value
        })
    }
    handleSubmit = (e) => {

        e.preventDefault();
        axios.post('/post', this.state)
            .then(res => {
                console.log(res.data)
            })
        axios.get('/list')
            .then(res => {
                this.setState({
                    posts: res.data
                })
                console.log(this.state.posts, "=>posts")

            })
    }

    render() {
        const listPosts = this.state.posts.map(list => {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        </div>
                        <div className="col-6">

                            <div className="card" key={list.id}>
                                <div className="card-header">
                                    {list.titre}
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>{list.status}</p>

                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-6">

                                <div className="form-group">
                                    <label htmlFor="title">Add post</label>
                                    <input type="text" className="form-control" id="title" placeholder="Title" onChange={this.changeTitre} />
                                </div>
                                <textarea className="form-control" id="textarea" rows="3" onChange={this.changePost}></textarea>
                                <button type="submit" className="btn btn-primary mb-2">Publish</button>
                            </div>
                        </div>
                    </div>
                </form>
                {listPosts}
            </div>
        )
    }
}

