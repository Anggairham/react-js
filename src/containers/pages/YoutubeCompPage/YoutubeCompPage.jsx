import React,{Component,Fragment} from 'react';
import YoutubeComp from '../../../components/YoutubeComp/YoutubeComp';
// Dynamic Component
class YoutubeCompPage extends Component {
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
            </Fragment>
        )
    }
}

export default YoutubeCompPage;