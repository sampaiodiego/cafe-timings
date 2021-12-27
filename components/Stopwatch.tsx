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
		if (isRunning) {
			setTimeStart(Date.now());
		} else {
			setTimeStart(null);
		}
		setTime(0);
	};

	return (
		<>
			<h2>{time}</h2>
			<div>
				<button className={styles.btn} onClick={() => startStop()}>
					{isRunning ? 'Stop' : 'Start'}
				</button>
				<button className={styles.btn} onClick={() => reset()}>Reset</button>
			</div>
		</>
	);
}
