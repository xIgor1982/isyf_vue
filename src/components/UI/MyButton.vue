<template>
	<button class="btn" :class="isActiveClass()">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "my-button",
	props: {
		active: {
			type: String,
			required: false,
		},

	},
	methods: {
		isActiveClass() {
			return this.active == 'active' ? "active" : "";
		},
	},
};
</script>

<style scoped>
.btn {
	padding: 10px;
	background: none;
	color: teal;
	border: 1px solid teal;
	cursor: pointer;
	border-radius: 5px;
}
.btn:hover,
.btn.active {
	background-color: teal;
	color: white;
	border-color: teal;
}
</style>
