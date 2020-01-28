import { types } from 'mobx-state-tree';

export default types
	.model('Timer', {
		initialTime: types.optional(types.integer, 0),
		time: types.optional(types.integer, 0),
		speed: types.optional(types.number, 1),
	})
	.volatile(self => ({
		isPaused: true,
	}))
	.views(self => ({
		get minutes() {
			return Math.floor(self.time / 60);
		},
		get seconds() {
			const seconds = self.time % 60;
			return seconds < 10 ? `0${seconds}` : seconds;
		},
		get tickTimeout() {
			return 1 / self.speed;
		},
	}))
	.actions(self => ({
		setTime(time) {
			self.initialTime = time;
			self.time = self.initialTime;
		},
		setSpeed(speed) {
			self.speed = speed;
		},
		tick() {
			self.time--;
			self.loop();
		},
		loop() {
			if (self.isPaused || self.time <= 0) {
				return;
			}
			self.timeout = setTimeout(self.tick, self.tickTimeout * 1000);
		},
		start() {
			clearTimeout(self.timeout);
			self.isPaused = false;
			self.loop();
		},
		pause() {
			self.isPaused = true;
			clearTimeout(self.timeout);
		},
	}))
	.create();
