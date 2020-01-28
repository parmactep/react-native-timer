import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
	View,
	Text,
} from 'native-base';

import styles from './styles';

export default function Radio({ options = [], onChange = () => {}, value }) {
	return (
		<View style={styles.container}>
			{options.map((option, key) => (
				<TouchableOpacity
					style={[
						styles.option,
						value === option.value && styles.optionActive,
					]}
					key={key}
					onPress={() => onChange(option.value)}
				>
					<Text
						style={[
							styles.optionLabel,
							value === option.value && styles.optionLabelActive,
						]}
					>
						{option.label}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}
