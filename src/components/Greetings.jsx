import React from 'react';

const Greetings = props => {


    return(
        <div>
            {/* <h1 className='text'>This is the Greetings Component</h1> */}
            <h2 className='text-center text-warning-emphasis'>My name is {props.name} and my phrase is {props.phrase}</h2>
        </div>
    )
}

export default Greetings;