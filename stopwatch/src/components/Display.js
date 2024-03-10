import React from "react";

export default function Display(props) {
	return (
		<div className="display">
			<span>{props.time.hour >= 10 ? props.time.hour : "0"+props.time.hour}</span><span>&nbsp;:&nbsp;</span>
			<span>{props.time.minute >= 10 ? props.time.minute : "0"+props.time.minute}</span><span>&nbsp;:&nbsp;</span>
			<span>{props.time.second >= 10 ? props.time.second : "0"+props.time.second}</span><span>&nbsp;:&nbsp;</span>
			<span>{props.time.millisecond >= 10 ? props.time.millisecond : "0"+props.time.millisecond}</span>
		</div>
	)
}