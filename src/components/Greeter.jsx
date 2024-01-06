import React from 'react';

const Greeter = props => {



    return(
        <div>
            <h1 className='text-center text-info-emphasis'>
                My name is {props.name} and {props.phrase}
            </h1>
        </div>
    )
}

export default Greeter;