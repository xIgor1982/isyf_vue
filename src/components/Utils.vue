<template>
	<div>
		<my-button
			v-for="item in navLinks"
			:style="marginLeft(item.id)"
			:key="item.id"
			@click="clickClass(item.id)"
			:class="activeLink(item.id)"
		>
			{{ item.name }}
		</my-button>
	</div>
</template>

<script>
import MyButton from "./components/UI/MyButton.vue";
import { headerBtn } from "@/data/data";

export default {
	components: { MyButton },
	data() {
		return {
			navLinks: headerBtn,
			activeNavBtn: headerBtn[0].id,
		};
	},
	methods: {
		marginLeft(id) {
			return id != headerBtn[0].id ? "margin-left: 5px" : "";
		},
		clickClass(id) {
			this.activeNavBtn = id;
		},
		activeLink(id) {
			return id == this.activeNavBtn ? "active" : "";
		},
	},
};
</script>

<style scoped>
.ml-5 {
	margin-left: 5px;
}
</style>
