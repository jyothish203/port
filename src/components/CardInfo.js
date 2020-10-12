import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p style={{ color: 'white' }}className="g-card-title">{props.title}</p>
            <p style={{ color: 'white' }}className="g-card-sub-title">{props.subTitle}</p>
            
        </animated.div>
    );

}

export default CardInfo;