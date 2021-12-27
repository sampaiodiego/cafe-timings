import { useState, useEffect } from "react";

import styles from '../styles/stopwatch.module.css';

export function Stopwatch() {
	const [time, setTime] = useState(0);
	const [timeStart, setTimeStart] = useState<number | null>();
	const [isRunning, setIsRunning] = useState(false);

	const stop = () => {
		setIsRunning(false);
		setTimeStart(null);
	};

	const start = () => {
		if (!timeStart) {
			setTimeStart(Date.now());
		}
		setIsRunning(true);
	};

	useEffect(() => {
		if (!isRunning) {
			return;
		}

		const id = setInterval(() => {
			setTime(time + Date.now() - (timeStart || 0));
		}, 70);

		return () => clearInterval(id);
	}, [isRunning, timeStart]);

	const startStop = () => {
		if (isRunning) {
			stop();
			return;
		}
		start();
	};

	const reset = () => {
		stop();
		setTime(0);
	};

	return (
		<>
			<h2>{(time / 1000).toFixed(2)}</h2>
			<div>
				<button className={styles.btn} onClick={() => startStop()}>
					{isRunning ? 'Stop' : 'Start'}
				</button>
				<button className={styles.btn} onClick={() => reset()}>Reset</button>
			</div>
		</>
	);
}
