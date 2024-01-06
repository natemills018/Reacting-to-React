// import React from 'react';

import Greeter from './components/Greeter';
import Greetings from './components/Greetings';
import Salutations from './components/Salutations';
import React, { useState, useEffect } from 'react';

const App = () => {

    const [counter, setCount] = useState(0);
    const [userName, setUsername] = useState('');
    const [loaded, setloaded] = useState(false);

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const toggleActive = () => {
        setloaded(!loaded);
    }

    const handleButtonClick = () => {
        setCount(counter + 1);
        console.log(setCount);

    }

    useEffect(() => {
        console.log('The effecting is running outside of the timeout function');

        setTimeout(() => {
            setloaded(!loaded);
            console.log('Loading Complete');
        }, 3000)
    }, [])

    if (loaded != true) {
        return <div>
            <h1> Website Loading...</h1>
            <button onClick={toggleActive} className='badge bg-primary text-wrap style'>Press this to toggleButton</button>
        </div>
    }

    return (
        <div>
            {/* <h1>WebsiteLoading...</h1> */}
        
            <Greeter name='Nate' phrase='This might have worked' />
            <Greetings name='Roux' phrase='I am a dog.. bow wow' />
            <Salutations name='Courtney' phrase='This probably works' />

            <input value={userName} onChange={handleUsernameChange} />
            <p>You're loggin in as {userName}</p>


            <h1>The current count is {counter}</h1>

            <button onClick={handleButtonClick}>Press Me!</button>
        </div>



    )
}


export default App;     