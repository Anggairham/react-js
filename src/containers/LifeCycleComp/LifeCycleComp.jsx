import React,{Component} from 'react';

class LifeCycleComp extends Component {
    /* LIFECYCLE Function */
    constructor(props){
        super(props);
        this.state = {
            count : 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
        /* Diupdate setelah 3 detik */
        // setTimeout(()=>{
        //     this.setState({
        //         count:2
        //     })
        // }, 3000)
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.group('shouldComponentUpdate')
        console.log('nextProps',nextProps)
        console.log('nextState',nextState)
        console.groupEnd('shouldComponentUpdate')
        if(nextState.count >= 4){
            // Component Will Not Update
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    /* END LIFECYCLE Function */
    /* My Arrow Function */
    changeCount = () => { 
        this.setState({
            count: this.state.count + 1
        })
    }
    /* END My Function */
    render(){
        console.log('render')
        return (
            <button className='button' onClick={this.changeCount}>Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;