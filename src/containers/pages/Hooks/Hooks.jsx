import React, {Component,useEffect,useState} from 'react';

// class Hooks extends Component {
//     state = {
//         count:0
//     }
//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
    
//     componentDidMount(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentDidUpdate(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = `React App`
//     }
//     render() {
//         return (
//             <div>
//                 <p>Nilai saya saat ini adalah {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    // useState(initialValue)
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        document.title = `Title Change: ${count}`
        // Return is Like componentWillUnmount
        return () => {
            document.title = `React App`
        }
    })
    return (
        <div>
            <p>Nilai saya saat ini adalah {count}</p>
            <button onClick={() => setCount(count+1)}>Update nilai</button>
        </div>
    )
}
export default Hooks;