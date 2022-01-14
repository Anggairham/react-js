import React,{Component} from 'react';
import { connect } from 'react-redux';
import CounterType from '../../../../redux/types/counter';
/* Menggunakan redux state management */
class Counter extends Component {
    render(){
        // console.log('props',this.props);
        return (
                <div className='counter'>
                    <button className='minus' onClick={this.props.handleMinus}>-</button>
                    <input type="text" value={this.props.order} readOnly/>
                    <button className='plus' onClick={this.props.handlePlus}>+</button>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.counter.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus:()=>dispatch({type:CounterType.INCREMENT}),
        handleMinus:()=>dispatch({type:CounterType.DECREMENT}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);