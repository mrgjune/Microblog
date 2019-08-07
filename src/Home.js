import React, { Component } from 'react';
import TitleCard from "./TitleCard";

class Home extends Component {

    render() {
        /**REFACTOR IN OWN COMPONENT */
        let postListKeys = Object.keys(this.props.postList);
        let postList = this.props.postList;
        const posts = postListKeys.map(key => {
            let post = postList[key];
            return (
                <TitleCard key={key}
                    id={key}
                    title={post.title}
                    description={post.description} />)
        })

        return (
            <ul>{posts}</ul>
        )
    }
}


export default Home;