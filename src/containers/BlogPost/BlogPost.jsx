import React, {Component, Fragment} from 'react';
import Post from '../../components/Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost:{
            id:'',
            title:'',
            body:'',
        }
    }
    getPostApi = () => {
        axios.get('http://localhost:3004/posts').then((response)=>{
            this.setState({
                post: response.data
            })
        })
    }
    componentDidMount(){
        /* Menggunakan FETCH */
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        this.getPostApi();
    }
    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostApi();
            alert('Data berhasil dihapus');
        })
    }
    render(){
        return (
            <Fragment>
                <p className='section-title'>Blog Post</p>
                <div className='form-add-post'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' placeholder='add title' onChange={}/>
                    <label htmlFor="body-content">Blog Content</label>
                    <textarea name="body-content" id="body-content" cols="30" rows="10"></textarea>
                    <button className='btn-submit'>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>;
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;