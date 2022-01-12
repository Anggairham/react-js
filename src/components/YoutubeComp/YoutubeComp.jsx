import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className='img-thumb-youtube'>
                <img src="https://i.picsum.photos/id/327/1280/720.jpg?hmac=QCLjTvlOrEsEigntYLxqg9oFFRyPw5z3SqYrvCgp7fc" alt="" />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Not Set',
    desc: 'Desc Not Set',
}
export default YoutubeComp;