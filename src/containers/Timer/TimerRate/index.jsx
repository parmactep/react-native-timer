import React from 'react';
import { observer } from 'mobx-react';

import Radio from 'components/Radio';

import store from 'store';

function TimerRate() {
	return (
		<Radio
			value={store.speed}
			onChange={store.setSpeed}
			options={[
				{
					label: '1X',
					value: 1,
				},
				{
					label: '1.5X',
					value: 1.5,
				},
				{
					label: '2X',
					value: 2,
				},
			]}
		/>
	);
}

export default observer(TimerRate);
