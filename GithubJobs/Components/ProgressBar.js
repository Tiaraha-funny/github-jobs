import React from 'react'

function ProgressBar() {

    function handleClick() {
        console.log("I am clicked. Do you want to have progress");
    }

    return (
        <div>
            <ul className="pagination">
                <li>
                    <button onClick={handleClick} className="progress">1</button>
                </li>
                <li>
                <button onClick={handleClick} className="progress">2</button>
                </li>
                <li>
                <button onClick={handleClick} className="progress">3</button>
                </li>
                <li>
                <button onClick={handleClick} className="progress">...</button>
                </li>
                <li>
                <button onClick={handleClick} className="progress">9</button>
                </li>
                <li>
                <button onClick={handleClick} className="progress"> 10 </button></li> 
            </ul>
        </div>
    )
}

export default ProgressBar
