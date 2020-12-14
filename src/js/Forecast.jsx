import React, { useState } from "react";
import css from "styles/Forecast";

export default function Forecast(props) {
	const { data } = props;
	const [format, setFormat] = useState(1);
	const getDegrees = () => {
		const str = `°${format ? "C" : "F"}`;
		const min = format ? data.min : toFarenheit(data.min);
		const max = format ? data.max : toFarenheit(data.max);
		return `Min: ${min} ${str}  -  Max: ${max} ${str}`;
	};

	const toFarenheit = (celcius) => {
		return (celcius * 9) / 5 + 32;
	};

	return (
		<div className={css.content}>
			<div className={css.iconContainer}>
				<img src={data.weather_icon} alt="" />
			</div>

			<div className={css.detail}>
				<div className={css.description}>
					<h3>{data.description}</h3>
					<p>{getDegrees()}</p>
				</div>
			</div>

			<div className={css.toggle}>
				<button
					onClick={() => {
						setFormat(!format);
					}}>
					Toggle Format
				</button>
			</div>
		</div>
	);
}
