import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 3,
		borderColor: '#000',
	},
	option: {
		flex: 1,
	},
	optionActive: {
		backgroundColor: '#000',
	},
	optionLabel: {
		lineHeight: 40,
		textAlign: 'center',
	},
	optionLabelActive: {
		color: '#FFF',
	},
});
