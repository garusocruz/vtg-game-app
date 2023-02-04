import React, { useState, useEffect } from 'react';

const VintageGameApp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [historic, setHistoric] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [message, setMessage] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetch('https://gamming.herokuapp.com/hangman-game')
            .then(response => response.json())
            .then(data => {
                setSessionId(data.session_id);
                setMessage(data.message);
            })
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        setHistoric(historic + inputValue + ", ")
        fetch('https://gamming.herokuapp.com/hangman-game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                session: sessionId,
                letter: inputValue
            })
        })
            .then(response => response.json())
            .then(data => {
                setSessionId(data.session_id);
                setMessage(data.message);
                setInputValue('');
            })
            .catch(error => console.error(error));
    };

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    };


    return (
        <div>
            <h1>Hanging Game</h1>

            {message === "Congratulations! You have disarmed the bomb." || message === "Sorry, the bomb has exploded." ? (
                <div>
                    <h3>Message: {message}</h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <button onClick={handleClick} disabled={isLoading}>New game</button>
                </div>
            ) :
                (
                    <div>
                        <p>A bomb maybe can  explode.</p>
                        <h6>letters already useds :[ {historic} ]</h6>
                        <h4>Message: {message}</h4>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={event => setInputValue(event.target.value)}
                            /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}

        </div>
    );
};

export default VintageGameApp;
