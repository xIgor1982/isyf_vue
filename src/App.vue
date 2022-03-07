<template>
	<navbar></navbar>
	<div class="content-main">
		<router-view></router-view>
	</div>
</template>

<script>
import Clock from "./components/Clock.vue";
import { headerBtn } from "@/data/data";
import Navbar from "@/components/Navbar.vue";

export default {
	components: { Clock, Navbar },
	data() {
		return {
			navLinks: headerBtn,
			activeNavBtn: headerBtn[0].id,
		};
	},
	methods: {
		clickClass(id) {
			this.activeNavBtn = id;
		},
		activeLink(id) {
			return id == this.activeNavBtn ? "active" : "";
		},
	},
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

* {
	margin: 0;
	padding: 0;
}

html {
	overflow-y: scroll;
}

body {
	padding: 0;
	margin: 0;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	background-color: #f5fffa;
}

.nav-main {
	box-shadow: 0px 3px 10px 0px rgba(60, 83, 94, 0.53);
}

.nav-wrapper {
	display: flex;
	justify-content: space-between;
}

.test-border {
	border: 1px solid black;
}

.nav-right {
	display: flex;
}

.brand {
	font-size: 1.5rem;
	cursor: pointer;
	font-weight: bold;
	transition: color 0.5s;
}
.brand:hover {
	color: teal;
}

.title {
	border-top: 4px solid transparent;
	border-bottom: 4px solid transparent;
	font-weight: bold;
	font-size: 1.5rem;
	cursor: pointer;
	transition: all 0.5s;
}
.title:hover {
	border-bottom: 4px solid rgba(0, 128, 128, 0.7);
	color: teal;
}

.content-main {
	margin-top: 10px;
}
</style>
