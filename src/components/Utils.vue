<template>
	<div class="container">
		<my-button
			v-for="el in mainBlockBtn"
			:key="el.id"
			style="margin-right: 5px"
			@click="changeActiveLink(el.id)"
			:active="activeLinkBtn(el.id)"
		>
			{{ el.name }}
		</my-button>
	</div>
</template>

<script>
const array = [
	{ id: 1, name: "Кнопка 1" },
	{ id: 2, name: "Кнопка 2" },
	{ id: 3, name: "Кнопка 3" },
	{ id: 4, name: "Кнопка 4" },
];

export default {
	data() {
		return {
			mainBlockBtn: array,
			activeLink: array[0].id,
		};
	},
	methods: {
		changeActiveLink(id){
			this.activeLink = id;
		},
		activeLinkBtn(id) {
			return this.activeLink === id ? "active" : "";
		},
	},
};
</script>

<style scoped></style>
