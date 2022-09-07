import { useState, useEffect } from 'react'
import './IsThisYourNumber.css';

const minNumber = 1000000000
const maxNumber = 9999999999

function IsThisYourNumber() {

    const [phoneNumber, setPhoneNumber] = useState(0)
    const [showNice, setShowNice] = useState(false)

    useEffect(() => {

        RandomPhoneNumber()

    }, [])

    const YesClicked = () => {

        setShowNice(true)

    }

    const RandomPhoneNumber = () => {

        var number = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
        setPhoneNumber(number)

    }

    return (
        <div className="App">
            <div className='App-header'>

                {!showNice ?
                    <div>
                        <div>
                            Is this your number? {phoneNumber}
                        </div>
                        <div>
                            <button style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }} onClick={() => YesClicked()}>yes</button>
                            {' '}
                            <button style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }} onClick={() => RandomPhoneNumber()}>no</button>
                        </div>
                    </div>
                    :
                    <div>nice!</div>
                }
            </div>
        </div>

    );
}

export default IsThisYourNumber;
