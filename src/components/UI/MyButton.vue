<template>
	<button class="my-btn" :class="active">
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
.my-btn {
	padding: 10px;
	background: none;
	color: teal;
	border: 1px solid teal;
	cursor: pointer;
	border-radius: 5px;
}
.my-btn:hover,
.my-btn.active {
	background-color: teal;
	color: white;
	border-color: teal;
}
</style>
