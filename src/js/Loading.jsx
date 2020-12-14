import React from "react";
import loader from "styles/Loading";
export default function Loading() {
	return (
		<div className={loader.content}>
			<span className={loader.dot} />
			<div className={loader.dots}>
				<span />
				<span />
				<span />
			</div>
		</div>
	);
}
