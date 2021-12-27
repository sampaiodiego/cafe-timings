import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image'

import { Stopwatch } from '../components/Stopwatch';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Cafe Brewer</title>
				<meta name="description" content="Cafe Brewer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Stopwatch />
			</main>
		</div>
	)
}

export default Home
