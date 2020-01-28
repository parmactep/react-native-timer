import React from 'react';
import {
	Container,
	Content,
} from 'native-base';

import TimerForm from './TimerForm';
import TimerText from './TimerText';
import TimerTime from './TimerTime';
import TimerRate from './TimerRate';
import TimerPause from './TimerPause';

import styles from './styles';

export default function Timer() {
	return (
		<Container>
			<Content style={styles.wrapper}>
				<TimerForm />
				<TimerText />
				<TimerTime />
				<TimerRate />
				<TimerPause />
			</Content>
		</Container>
	);
};
