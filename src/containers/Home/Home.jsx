import React from 'react';
import Product from '../pages/Product/Product';
import ProductGlobalState from '../pages/ProductGlobalState/Product';
import Hooks from '../pages/Hooks/Hooks';

// Pages
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

class Home extends React.Component {
    state = {
        showComponent :true,
        alertMessage:'LifeCycleComp dibawah akan hilang dalam 10 detik'
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                showComponent:false,
                alertMessage: 'LifeCycleComp telah hilang/componentWillUnmount'
            })
        },10000)
    }
    render(){
        return (
            <BrowserRouter>
            <div>
                <p>{this.state.alertMessage}</p>
                <hr />
                {
                    this.state.showComponent === true ? 
                    <LifeCycleComp/>:null
                }
            </div>
            <div>
                <p>Home adalah Component Global</p>
                <hr />
                <h1>react-router-dom</h1>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="lifecycle">lifecycle</Link> |{" "}
                    <Link to="lifecycle/product">Product State Local</Link> |{" "}
                    <Link to="youtubecomp">youtubecomp</Link> |{" "}
                    <Link to="product-global-state">Product Redux</Link> |{" "}
                    <Link to="hooks">Hooks</Link> |{" "}
                </nav>
            </div>
                <Routes>
                    <Route path="/" element={<BlogPost/>}/>
                    <Route path="/detail-post/:id" element={<DetailPost/>}/>
                    <Route path="/youtubecomp" element={<YoutubeCompPage/>}/>
                    <Route path="/product-global-state" element={<ProductGlobalState/>}/>
                    <Route path="/hooks" element={<Hooks/>}/>
                    {/* Nester Route, Gunakan outlet gara lifecycle tetap muncul pada route lifecycle/product */}
                    <Route path="lifecycle" element={<LifeCycleComp/>}>
                        <Route path="product" element={<Product/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Home;