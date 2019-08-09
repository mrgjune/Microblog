import React, { Component } from 'react';
import Card from "./Card";
import { connect } from 'react-redux';
import { getPosts } from './actionCreators';
class Home extends Component {
    constructor(props) {
        super(props);

        this.postData = this.postData.bind(this);
    }
    async componentDidMount() {
        if (this.props.posts.titles.length === 0) {
            await this.props.getPosts();
        }
    }
    // postList looks like {post: {title, descript, body, comments: []}, post: {...}, ...}
    // map through the posts and create a card for each.
    postData() {
        if (this.props.posts.titles !== undefined) {
            let postList = this.props.posts.titles;
            const posts = postList.map(post => {
                return (
                    <Card key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description} />
                )
            })
            return posts;
        }
    }

    render() {

        return (
            <div>{this.postData()}</div>
            // This ternary is always true. Fix this please :)
            //  <ul>{this.props.postList ? this.postData() : "TODO: CREATE LINK TO ADD A POST"}</ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        // postList: { ...state.postList },
        posts: state
    }
}
export default connect(mapStateToProps, { getPosts })(Home);


