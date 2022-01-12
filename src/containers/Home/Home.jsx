import React from 'react';
import YoutubeComp from '../../components/YoutubeComp/YoutubeComp';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

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
            <BrowserRouter>
            {/* <div>
                <p>Interaksi dengan Back-End, Pemanggilan API (GET),(DELETE,(POST),(PUT) Menggunakan json-server --watch db.json --port 3004</p>
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
            </div> */}
            <div>
                <p>Ini adalah Component</p>
                <hr />
                <h1>Home</h1>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="product">product</Link> |{" "}
                    <Link to="youtubecomp">youtubecomp</Link> |{" "}
                    <Link to="lifecycle">lifecycle</Link>
                </nav>
            </div>
                <Routes>
                    <Route path="/" element={<BlogPost/>}/>
                    <Route path="product" element={<Product/>}/>
                    <Route path="lifecycle" element={<LifeCycleComp/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Home;