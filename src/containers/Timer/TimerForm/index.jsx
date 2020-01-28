import React, { useState } from 'react';
import { observer } from 'mobx-react';
import {
	View,
	Button,
	Text,
	Input,
} from 'native-base';

import styles from './styles';

import store from 'store';

function TimerForm() {
	const [value, setValue] = useState();
	return (
		<View style={styles.wrapper}>
			<Input
				placeholder="(min)"
				value={value}
				onChangeText={setValue}
				style={styles.input}
				keyboardType="numeric"
			/>
			<Button
				style={styles.button}
				onPress={() => {
					if (!value) {
						return;
					}
					store.setTime(+value * 60);
					store.start();
				}}
			>
				<Text>START</Text>
			</Button>
		</View>
	);
}

export default observer(TimerForm);
