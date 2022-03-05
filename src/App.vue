<template>
	<nav class="nav-main">
		<div class="container">
			<div class="nav-wrapper align-items-center">
				<div class="nav-left brand"><div>ИСУ</div></div>
				<div class="nav-right">
					<div class="title">Сайт</div>
					<div class="title" style="margin-left: 15px">Данные</div>
					<div class="title" style="margin-left: 15px">Поиск</div>
				</div>
			</div>
		</div>
	</nav>
	<div class="content-main">
		<div class="container">Основная часть</div>
	</div>
</template>

<script>
import Clock from "./components/Clock.vue";
import { headerBtn } from "@/data/data";

export default {
	components: { Clock },
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
