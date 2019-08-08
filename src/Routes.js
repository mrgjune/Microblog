import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import PostForm from "./PostForm";
import Post from "./Post";


class Routes extends Component {
    render() {

        return (
            <div className="pt-5">
                <Switch>

                    <Route
                        exact
                        path="/"
                        render={() => <Home />} />

                    <Route
                        exact
                        path="/new"
                        render={rtProps => <PostForm {...rtProps} />} />
                    
                    <Route
                        exact
                        path="/:postId"
                        // Should we only pass down the individual post?
                        render={rtProps => <Post
                            {...rtProps}
                            />}
                    />
                   
                <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default Routes;
