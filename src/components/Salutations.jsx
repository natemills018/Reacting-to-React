import React from 'react';

const Salutations = props => {
    return(
        <div>
            {/* <h1 className='text-center'>This is the Salutations component</h1> */}
            <h2 className='text-center tex'>This is my {props.name} and this is my {props.phrase}</h2>
        </div>
    )
}

export default Salutations;