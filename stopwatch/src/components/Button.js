import React from "react";

export default function Btn(props) {
    return (
        <div className="button-container">
            {(props.status === 0) ? 
                <button onClick={props.start}>Start</button>
                : ""
            }
            {(props.status === 1)?
                <div>
                    <button onClick={props.stop}>Stop</button>
                    <button onClick={props.reset}>Reset</button>
                    <button onClick={props.flag}>Lap</button>
                </div> 
                : ""
            }
            {(props.status === 2)?
                <div>
                    <button onClick={props.resume}>Resume</button>
                    <button onClick={props.reset}>Reset</button>
                    <button onClick={props.flag}>Lap</button>
                </div> 
                : ""
            }
        </div>
    )
}