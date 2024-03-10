import React from "react";

export default function Lap(props) {
    return (
        <div className="lap">
            <span className="lap-number">{props.number}</span>
            <div className="lap-time">
                <span>{props.hour >= 10 ? props.hour : "0"+props.hour}</span>
                <span>&nbsp;:&nbsp;</span>
                <span>{props.minute >= 10 ? props.minute : "0"+props.minute}</span>
                <span>&nbsp;:&nbsp;</span>
                <span>{props.second >= 10 ? props.second : "0"+props.second}</span>
                <span>&nbsp;:&nbsp;</span>
                <span>{props.millisecond >= 10 ? props.millisecond : "0"+props.second}</span>
            </div>
        </div>
    )
}