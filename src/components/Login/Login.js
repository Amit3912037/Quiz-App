import React, { useRef, useState } from 'react';
import Help from '../UI/Help';
import './Login.css';

export default function Login(props) {

    const usernameRef = useRef('');
    const [instructionsVisible, setInstructionsVisible] = useState(false);

    const toggleInstructionsHandler = () => {
        setInstructionsVisible((prevState) => !prevState);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onStart(usernameRef.current.value);
    }
    return (
        <React.Fragment>
            {instructionsVisible && <Help onClose={toggleInstructionsHandler} />}
            <div className='login_container'>
                <h1>Login Window</h1>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input ref={usernameRef} className='user_input' id='username' type="text" required />
                    <label htmlFor="password">Password</label>
                    <input className='user_input' id="password" type="password" required />
                    <button type='submit' className='login_button'>Start Test</button>
                </form>
                <p>For instructions <button className='clickhere' onClick={toggleInstructionsHandler}> Click here</button></p>
            </div>
        </React.Fragment>

    )
}
