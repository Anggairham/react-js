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
        console.log(process.env)
        return (
            <BrowserRouter basename={(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) ? '' : ''}>
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
                    <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link> |{' '}
                    <Link to={`${process.env.PUBLIC_URL}/lifecycle`}>lifecycle</Link> |{' '}
                    <Link to={`${process.env.PUBLIC_URL}/lifecycle/product`}>Product State Local</Link> |{' '}
                    <Link to={`${process.env.PUBLIC_URL}/youtubecomp`}>youtubecomp</Link> |{' '}
                    <Link to={`${process.env.PUBLIC_URL}/product-global-state`}>Product Redux</Link> |{' '}
                    <Link to={`${process.env.PUBLIC_URL}/hooks`}>Hooks</Link> |{' '}
                </nav>
            </div>
                <Routes>
                    <Route path={`${process.env.PUBLIC_URL}/`} element={<BlogPost/>}/>
                    <Route path={`${process.env.PUBLIC_URL}/detail-post/:id`} element={<DetailPost/>}/>
                    <Route path={`${process.env.PUBLIC_URL}/youtubecomp`} element={<YoutubeCompPage/>}/>
                    <Route path={`${process.env.PUBLIC_URL}/product-global-state`} element={<ProductGlobalState/>}/>
                    <Route path={`${process.env.PUBLIC_URL}/hooks`} element={<Hooks/>}/>
                    {/* Nester Route, Gunakan outlet gara lifecycle tetap muncul pada route lifecycle/product */}
                    <Route path={`${process.env.PUBLIC_URL}/lifecycle`} element={<LifeCycleComp/>}>
                        <Route path='product' element={<Product/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Home;