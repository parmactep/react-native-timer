import React from 'react';
import { observer } from 'mobx-react';
import { Text } from 'native-base';

import styles from './styles';

import store from 'store';

function TimerTime() {
	return (
		<Text style={styles.time}>
			{store.minutes}:{store.seconds}
		</Text>
	);
}

export default observer(TimerTime);
