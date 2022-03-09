<template>
	<nav class="fixed-top nav-site" ref="navHeight">
		<div class="container">
			<my-button
				v-for="elem in linksTopBtn"
				:key="elem.id"
				:active="activeLinkTopBtn(elem.link)"
				@click="clickLeftNavLink(elem.link, elem.id)"
				style="margin-right: 3px"
			>
				{{ elem.title }}
			</my-button>
		</div>
	</nav>
	<div class="site-content-m">
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-3 menu-left">
						<div
							v-for="elem in titleArrayData"
							:key="elem.id"
							@click="clickLeftNavMenu(elem.id)"
							style="cursor: pointer"
						>
							<div class="left-link" :class="activeLeftLinkFn(elem.id)">
								{{ elem.num }}. {{ elem.title }}
							</div>
							<!-- <div class="container">								 -->
							<!-- <div class="row">
									<div class="col-1">{{ elem.num }}.</div>
									<div class="col-10">{{ elem.title }}</div>
								</div> -->
							<!-- </div> -->
						</div>
					</div>

					<div
						class="col-9 content-right "
						style="height: background-color: teal;"
					>
						<div v-html="textCurrentData" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer class="fixed-bottom wrapper-fixed">
		<div class="container">
			<div style="text-align: center">Footer</div>
		</div>
	</footer>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import { aboutData, navTobBtnArr, sampleData } from "@/data/data";

export default {
	components: { MyButton },
	data() {
		return {
			linksTopBtn: navTobBtnArr,
			activeLinkTop: "about",
			activeLeftLink: aboutData[0].id,
			arrayData: [],
			titleArrayData: [],
			textsArrayData: [],
			textCurrentData: [],
		};
	},
	methods: {
		activeLinkTopBtn(value) {
			return this.activeLinkTop === value ? "active" : "";
		},
		clickActiveLink(value) {
			this.activeLinkTop = value;
		},
		clickLeftNavMenu(id) {
			let res = this.textsArrayData.filter((el) => el.id === id);
			res = res[0].text;
			// console.log("res =>", res);
			this.textCurrentData = res;
			this.activeLeftLink = id;
		},
		initialArray() {
			this.arrayData = [];
			if (this.activeLinkTop == "about") this.arrayData = aboutData;
			if (this.activeLinkTop == "sample") this.arrayData = sampleData;
			try {
				this.arrayData.forEach((el, index) => {
					const res = { id: el.id, num: index + 1, title: el.title };
					return this.titleArrayData.push(res);
				});
				this.arrayData.forEach((el, index) => {
					const res = { id: el.id, num: index + 1, text: el.text };
					return this.textsArrayData.push(res);
				});
				this.textCurrentData = this.textsArrayData[0].text;
			} catch (err) {
				console.log(err);
			}
		},
		clickLeftNavLink(link, id) {
			if (this.activeLinkTop == "about") this.arrayData = aboutData;
			if (this.activeLinkTop == "sample") this.arrayData = sampleData;
			this.activeLinkTop = link;
			console.log(`clickLeftNavLink(link, id) = (${link}, ${id})`);
		},
		activeLeftLinkFn(id) {
			return this.activeLeftLink == id ? "active" : "";
		},
	},
	mounted() {
		this.initialArray();
	},
	created() {},
	watch: {
		heightNav(newValue) {
			this.heightNav = newValue;
		},
	},
};
</script>

<style scoped>
.nav-site {
	margin-top: 35px;
	padding-top: 22px;
	background-color: white;
	z-index: 10;
}

.site-content-m {
	margin-top: 70px;
	margin-bottom: 40px;
}

.wrapper-fixed {
	padding: 5px 0;
	background-color: white;
	box-shadow: -1px -5px 9px -2px rgba(65, 84, 99, 0.2);
}
.left-link {
	user-select: none;
	border: 1px solid teal;
	margin-bottom: 1px;
	padding: 0 3px;
	border-radius: 5px;
}
.active,
.left-link:hover {
	background-color: beige;
}
.content-right {
	border: 1px solid teal;
	border-radius: 5px;
}
</style>
