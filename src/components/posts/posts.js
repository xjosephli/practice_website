import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';




class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render(){
        const postItems = this.props.posts.map( posts => (
             <div>
                 <div>hello</div>
                 <div>{posts.Articles}</div>
             </div>
        ));
        console.log();
        console.log('hello');
        // const postItems = this.props.posts.map( posts => (
        //      <div key={posts.id}>
        //          <h3>{posts.title}</h3>
        //          <p>{posts.body}</p>
        //      </div>
        // ));
        // console.log(this.props.posts);
        // console.log('test');

        return(
        <div>
            <h1>POSTS</h1>
            {postItems}
        </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);