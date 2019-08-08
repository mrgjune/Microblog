import React, { Component } from 'react';
import Card from "./Card";
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);

        this.postData = this.postData.bind(this); 
    }

    postData() {
        let postListKeys = Object.keys(this.props.postList);
        let postList = this.props.postList;
        const posts = postListKeys.map(key => {
            let post = postList[key];
            return (
                <Card key={key}
                    id={key}
                    title={post.title}
                    description={post.description}/>
            )})
            return posts;
        }
       
    render() {
        return (
            <ul>{this.props.postList ? this.postData() : "TODO: CREATE LINK TO ADD A POST"}</ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        postList: { ...state.postList }
    }
}
export default connect(mapStateToProps)(Home);


