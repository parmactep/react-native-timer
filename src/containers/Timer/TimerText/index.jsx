import React from 'react';
import { observer } from 'mobx-react';
import { Text } from 'native-base';

import styles from './styles';

import store from 'store';

const NO_TEXT = ' ';

const getText = (initialTime, time) => {
	if (initialTime && time === 0) {
		return 'Time’s up!';
	}
	if (time <= 10 && time % 2 === 0) {
		return NO_TEXT;
	}
	if (time < initialTime / 2) {
		return 'More then halfway there!';
	}
	return NO_TEXT;
};

function TimerText() {
	return (
		<Text
			style={[
				styles.text,
				store.initialTime && store.time <= 20 && styles.textRed,
			]}
		>
			{getText(store.initialTime, store.time)}
		</Text>
	);
}

export default observer(TimerText);
