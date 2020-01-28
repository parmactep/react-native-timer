import React from 'react';
import { observer } from 'mobx-react';
import { TouchableOpacity } from 'react-native';
import {
	View,
	Icon,
} from 'native-base';

import styles from './styles';

import store from 'store';

function TimerPause() {
	return !!store.time && (
		<View style={styles.wrapper}>
			<TouchableOpacity style={styles.button} onPress={store.isPaused ? store.start : store.pause}>
				<Icon name={store.isPaused && 'play' || 'pause'} />
			</TouchableOpacity>
		</View>
	) || null;
}

export default observer(TimerPause);
