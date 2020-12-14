import React, { useState, useCallback, useEffect } from "react";
import css from "styles/Page";
import Forecast from "./Forecast";
import { getBostonForecast } from "./utils";
import Loading from "./Loading";
export default function App() {
	const [loading, setLoading] = useState(true);
	const [bostonData, setBostonData] = useState(null);

	const getData = useCallback(
		async () => {
			const req = await getBostonForecast();
			const response = await req.json();
			const allInfo = { ...response, date: Date.now() };
			setBostonData(response);
			if (response.is_day == "no") {
				setNightTheme();
			} else {
				setDayTheme();
			}
			localStorage.setItem("boston", JSON.stringify(allInfo));
		},
		[loading],
	);

	const isTooOld = (data) => {
		data = JSON.parse(data);
		const currentDate = new Date();

		return currentDate.getHours() - 1 > new Date(data.date).getHours();
	};

	const setNightTheme = () => {
		const body = document.querySelector("body");
		body.style.backgroundImage =
			"url(https://i.ibb.co/41BDSjp/nightlight-iphone-wallpaper-ilikewallpaper-com.jpg)";
		body.style.color = "white";
	};
	const setDayTheme = () => {
		const body = document.querySelector("body");
		body.style.backgroundImage =
			"url(https://i.ibb.co/9h6qQ8r/d3995551727d68b09cb788701d17d180.jpg)";
		body.style.color = "black";
	};

	useEffect(
		() => {
			if (loading) {
				const localData = localStorage.getItem("boston");
				if (localData && !isTooOld(localData)) {
					console.log();
					setBostonData(JSON.parse(localData));
					setLoading(false);
					if (JSON.parse(localData).is_day == "no") {
						setNightTheme();
					} else {
						setDayTheme();
					}
					return;
				}
				getData().then(() => setLoading(false));
			}
		},
		[loading, getData],
	);

	return (
		<div className={css.container}>
			{loading ? (
				<Loading />
			) : (
				<div>
					<h2>{bostonData.name}</h2>
					<div className={css.dataContainer}>
						<Forecast data={bostonData} />
					</div>

					<div className={css.time}>
						<h1>{bostonData.time}</h1>
					</div>
				</div>
			)}
		</div>
	);
}
