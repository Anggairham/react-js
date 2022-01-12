import React,{Component, Fragment} from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css'
/* Update Parent State Melalui Child Component */
class Product extends Component {
    state = {
        order: 4
    }
    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    render(){
        return (
            <Fragment>
                <p>Update Parent State Melalui Child Component</p>
                <hr />
                <div className='header'>
                    <div className='logo'>
                        <img src="" alt="" />
                    </div>
                    <div className='troley'>
                        <img src="" alt="" />
                        <p className='count'>{this.state.order}</p>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product;