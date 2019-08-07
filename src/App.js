import React from 'react';
//import NavBar from './NavBar';
import Routes from './Routes';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: {}
    }
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);

  }
  addPost(id, newPostDetails) {
    this.setState(state => ({
      posts: {
        ...state.posts,
        [id]: {
          title: newPostDetails.title,
          description: newPostDetails.description,
          body: newPostDetails.body
        }
      }
    }));
  }
  deletePost(id) {
    this.setState(state => {
      let newState = state;
      delete newState.posts[id]
      return (
        {
          ...newState
        }
      )
    });
  }

  editPost(id, editedPost) {
    this.setState(state => ({
      posts: {
        ...state.posts,
        [id]: {
          title: editedPost.title,
          description: editedPost.description,
          body: editedPost.body
        }
      }
    }))
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes
            editPost={this.editPost}
            deletePost={this.deletePost}
            postList={this.state.posts}
            addPost={this.addPost} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
