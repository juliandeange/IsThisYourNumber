import { useState, useEffect } from 'react'
import './App.css';

const minNumber = 1000000000
const maxNumber = 9999999999

function App() {

    const [phoneNumber, setPhoneNumber] = useState(0)

    useEffect(() => {

        RandomPhoneNumber()

    }, [])

    const RandomPhoneNumber = () => {

        var number = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
        setPhoneNumber(number)

    }

    return (
        <div className="App">
            <div className='App-header'>
                <div>
                    Is this your phone number? {phoneNumber}
                </div>
                <div>
                    <button>yes</button>
                    {' '}
                    <button onClick={() => RandomPhoneNumber()}>no</button>
                </div>
            </div>
        </div>

    );
}

export default App;
