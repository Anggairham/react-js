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
        },
        isUpdate: false
    }
    getPostApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((response)=>{
            this.setState({
                post: response.data
            })
        })
    }

    postDataToApi = () => {
        axios.post('http://localhost:3004/posts',this.state.formBlogPost).then((response)=>{
            console.log(response)
            alert('data berhasil disimpan')
            this.getPostApi()
            this.setState({
                formBlogPost:{
                    id:'',
                    title:'',
                    body:'',
                }
            })
        }, (err)=>{
            console.log(err)
            alert(err)
        })
    }

    putDataToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res)=>{
            this.getPostApi()
            this.setState({
                isUpdate: false,
                formBlogPost:{
                    id:'',
                    title:'',
                    body:'',
                }
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

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        if(this.state.isUpdate === false){
            let timestamp = new Date().getTime();
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        let title = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        },() => {
            // console.log(this.state.formBlogPost)
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate === true){
            this.putDataToApi();
        }else{
            this.postDataToApi();
        }
    }
    render(){
        return (
            <Fragment>
                <p className='section-title'>Blog Post</p>
                <div className='form-add-post'>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name='title' placeholder='add title' onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea value={this.state.formBlogPost.body} name="body" id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit' onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>;
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;