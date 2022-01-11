import React from 'react';
import YoutubeComp from '../../components/YoutubeComp/YoutubeComp';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends React.Component {
    state = {
        showComponent :true
    }
    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent:false
        //     })
        // },5000)
    }
    render(){
        return (
            <div>
                <p>Interaksi dengan Back-End, Pemanggilan API (GET)</p>
                <hr />
                <BlogPost/>
                <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent === true ? 
                    <LifeCycleComp/>:null
                }
                <p>Update Parent State Melalui Child Component</p>
                <hr />
                <Product/>
                <p>Dynamic Component </p>
                <hr />
                <YoutubeComp 
                    time="7.02"
                    title="Belajar React JS 1"
                    desc="25,110 views, two days ago"
                />
                <YoutubeComp 
                    time="8.05"
                    title="Belajar React JS 1"
                    desc="25,110 views, two days ago"
                />
                <YoutubeComp 
                    time="12.10"
                    title="Belajar React JS 1"
                    desc="25,110 views, two days ago"
                />
                <YoutubeComp 
                    time="2.30"
                    title="Belajar React JS 1"
                    desc="25,110 views, two days ago"
                />
                <YoutubeComp/>
            </div>
        )
    }
}

export default Home;