import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import PostForm from "./PostForm";
import Post from "./Post";
import PostList from "./TitleCard";

class Routes extends Component {
    render() {

        return (
            <div className="pt-5">
                <Switch>

                    <Route
                        exact
                        path="/"
                        render={() => <Home postList={this.props.postList} />} />

                    <Route
                        exact
                        path="/new"
                        render={rtProps => <PostForm {...rtProps} addPost={this.props.addPost} />} />
                    
                    <Route
                        exact
                        path="/:postId"
                        // Should we only pass down the individual post?
                        render={rtProps => <Post
                            {...rtProps}
                            editPost={this.props.editPost}
                            delete={this.props.deletePost}
                            post={this.props.postList} />} />
                    />
                   
                <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default Routes;
