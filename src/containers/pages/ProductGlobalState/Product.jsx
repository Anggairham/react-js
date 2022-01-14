import React,{Component, Fragment} from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css'
import { connect } from 'react-redux';

/* React Redux Global State */
class Product extends Component {
    render(){
        return (
            <Fragment>
                <p>React Redux Global State</p>
                <hr />
                <div className='header'>
                    <div className='logo'>
                        <img src="" alt="" />
                    </div>
                    <div className='troley'>
                        <img src="" alt="" />
                        <p className='count'>{this.props.order}</p>
                    </div>
                </div>
                <CardProduct/>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        order : state.counter.value
    }
}
export default connect(mapStateToProps)(Product);