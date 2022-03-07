<template>
	<nav class="nav-main sticky-top">
		<div class="container">
			<div class="nav-wrapper align-items-center">
				<div
					class="nav-left brand"
					@click="clickNavLink('/', mainLink.id)"
					:class="activeLinkMain(mainLink.id)"
				>
					{{ mainLink.name }}
				</div>
				<div class="nav-right">
					<div
						class="title"
						v-for="elem in linksTitle"
						@click="clickNavLink(elem.patch, elem.id)"
						:key="elem.id"
						:class="activeLinkOther(elem.id)"
					>
						{{ elem.name }}
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { navLinkHeader } from "@/data/data";

export default {
	data() {
		return {
			mainLink: navLinkHeader[0],
			linksTitle: navLinkHeader.filter((el) => el.id != navLinkHeader[0].id),
			activeLink: navLinkHeader[0].id,
		};
	},
	methods: {
		clickNavLink(link, id) {
			this.$router.push(link);
			this.activeLink = id;
			// console.log(link)
			// console.log("mainLink.name =>", this.mainLink);
			// console.log("linksTitle.name =>", this.linksTitle);
			console.log("this.activeLink =>", this.activeLink);
		},
		activeLinkMain(id) {
			return this.activeLink === id ? "active-link-main" : "";
		},
		activeLinkOther(id) {
			return this.activeLink === id ? "active-link" : "";
		},
	},
};
</script>

<style scoped>
.nav-main {
	background-color: white;
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
	margin-left: 15px;
}
.active-link,
.title:hover {
	border-bottom: 4px solid rgba(0, 128, 128, 0.7);
	color: teal;
}

.active-link-main {
	color: teal;
}
</style>
