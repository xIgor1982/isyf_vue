<template>
	<div id="clock">
		<p class="date">{{ date }}</p>
		<p class="time">{{ time }}</p>
		<p class="text">DIGITAL CLOCK with Vue.js</p>
	</div>
</template>

<script>
// const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// const timerID = setInterval(updateTime, 1000);
// updateTime();
// function updateTime() {
// 	const cd = new Date();
// 	clock.time =
// 		zeroPadding(cd.getHours(), 2) +
// 		":" +
// 		zeroPadding(cd.getMinutes(), 2) +
// 		":" +
// 		zeroPadding(cd.getSeconds(), 2);
// 	clock.date =
// 		zeroPadding(cd.getFullYear(), 4) +
// 		"-" +
// 		zeroPadding(cd.getMonth() + 1, 2) +
// 		"-" +
// 		zeroPadding(cd.getDate(), 2) +
// 		" " +
// 		week[cd.getDay()];
// }

// function zeroPadding(num, digit) {
// 	let zero = "";
// 	for (var i = 0; i < digit; i++) {
// 		zero += "0";
// 	}
// 	return (zero + num).slice(-digit);
// }

export default {
	name: "my-clock",
	data() {
		return {
			time: "",
			date: "",
			week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
			timerID: setInterval(updateTime, 1000),
		};
	},
	methods: {
		updateTime() {
			const cd = new Date();
			this.time =
				this.zeroPadding(cd.getHours(), 2) +
				":" +
				this.zeroPadding(cd.getMinutes(), 2) +
				":" +
				this.zeroPadding(cd.getSeconds(), 2);
			this.date =
				this.zeroPadding(cd.getFullYear(), 4) +
				"-" +
				this.zeroPadding(cd.getMonth() + 1, 2) +
				"-" +
				this.zeroPadding(cd.getDate(), 2) +
				" " +
				week[cd.getDay()];
		},
	},
	zeroPadding(num, digit) {
		let zero = "";
		for (var i = 0; i < digit; i++) {
			zero += "0";
		}
		return (zero + num).slice(-digit);
	},
	mounted() {
		updateTime()
	}
};
</script>

<style lang="scss" scoped>
#clock {
	font-family: "Share Tech Mono", monospace;
	color: #ffffff;
	text-align: center;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: #daf6ff;
	text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
	.time {
		letter-spacing: 0.05em;
		font-size: 80px;
		padding: 5px 0;
	}
	.date {
		letter-spacing: 0.1em;
		font-size: 24px;
	}
	.text {
		letter-spacing: 0.1em;
		font-size: 12px;
		padding: 20px 0 0;
	}
}
</style>
