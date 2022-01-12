import React,{Component } from 'react';
import { useLocation,useNavigate,useParams } from "react-router-dom";
import axios from 'axios';
import './DetailPost.css';
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}
  
class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: '',
        },
    }

    componentDidMount(){
        let id = this.props.router.params.id
        axios.get(`http://localhost:3004/posts/${id}`).then((response)=>{
            let post = response.data;
            this.setState({
                post :{
                    title:post.title,
                    body:post.body,
                }
            })
        })
    }
    render(){
        return (
            <div className='p-detail-post'>
                <p className='detail-title'>{this.state.post.title}</p>
                <p className='detail-body'>{this.state.post.body}</p>
            </div>
        )
    }
}

export default withRouter(DetailPost);