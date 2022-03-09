script
<template>
	<div class="container">
		<div class="d-flex flex-row justify-content-between align-items-center">
			<div>
				<div class="search-block">
					<my-input v-model="searchQueryId" placeholder="поиск по полю id" />
					<my-input v-model="searchQuery" placeholder="поиск по полю name" />
					<my-input
						v-model="searchQueryText"
						placeholder="поиск по полю text"
					/>
					<my-input
						v-model="searchQueryDate"
						placeholder="поиск по полю date"
					/>
				</div>
			</div>
			<div>
				<my-select v-model="selectedSort" :options="sortOptions" />
			</div>
		</div>

		<h1 class="text-center">Новостная лента</h1>

		<div class="wrapper-card">
			<transition-group name="news-list">
				<div
					class="card border-success mb-1"
					style="width: 100%"
					v-for="item in news"
					:key="item.id"
				>
					<div class="card-header bg-transparent border-success">
						Поле ID: <strong>{{ item.id }}</strong>
					</div>
					<div class="card-body text-success">
						<h5 class="card-title">
							Поле name: <strong>{{ item.name }}</strong>
						</h5>
						<p class="card-text">
							Поле text: <strong>{{ item.text }}</strong>
						</p>
					</div>
					<div class="card-footer bg-transparent border-success">
						<div>
							Поле date: <strong>{{ item.date }}</strong>
						</div>
					</div>
				</div>
			</transition-group>
		</div>

		<div class="fixed-bottom container wrapper-fixed">
			<div class="wrapper">
				<div
					v-for="pageNum in totalPages"
					:key="pageNum"
					class="page"
					:class="{ 'current-page': page === pageNum ? true : false }"
					@click="changePage(pageNum)"
				>
					{{ pageNum }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { lastNews } from "@/data/data";

export default {
	data() {
		return {
			page: 1,
			limit: 4,
			totalPages: 0,
			isPostLoading: false,
			news: [],
			allNews: lastNews,
			searchQuery: "",
			searchQueryId: "",
			searchQueryDate: "",
			searchQueryText: "",
			selectedSort: "",
			sortOptions: [
				{ value: "id", name: "По полю id" },
				{ value: "name", name: "По полю name" },
				{ value: "date", name: "По полю date" },
				{ value: "text", name: "По полю text" },
			],
		};
	},
	methods: {
		getDate() {
			const date = new Date();
			return date;
		},
		changePage(pageNum) {
			this.page = pageNum;
			this.fetchPosts();
		},
		async fetchPosts() {
			const formula = (i) => {
				return i * this.limit + 1 - this.limit;
			};
			const tmpArr = (num, newsArr) => {
				// console.log('newsArr => ', newsArr)

				let arr = [];
				for (let i = num; i < num + this.limit; i++) {
					if (newsArr[i - 1]) arr.push(newsArr[i - 1]);
					else continue;
				}
				return arr;
			};
			const firstNum = formula(this.page);
			const resArray = tmpArr(firstNum, this.allNews);

			// console.log(`firstNum =>`, firstNum, ` | resArray =>`, resArray);
			try {
				this.isPostLoading = true;
				const response = await this.allNews;

				this.totalPages = Math.ceil(response.length / this.limit);

				this.news = await resArray;
			} catch (e) {
				console.log("Ошибка соединения");
			} finally {
				this.isPostLoading = false;
			}
		},
	},
	mounted() {
		this.fetchPosts();
	},
	computed: {
		searchQueryResult() {
			return this.news.filter((item) =>
				item.name.includes(this.searchQuery.toLowerCase())
			);
		},
	},
	watch: {
		selectedSort(newValue) {
			console.log("newValue =>", newValue);
			try {
				this.allNews.sort((news1, news2) => {
					return news1[newValue]?.localeCompare(news2[newValue]);
				});
				this.fetchPosts();
			} catch (err) {
				console.log(err);
			}
		},
		searchQuery(newValue) {
			if (this.page > 1) this.page = 1;
			this.allNews = lastNews;
			console.log("searchQuery(newValue) =>", newValue);
			try {
				const arr = this.allNews.filter((item) =>
					item.name.toLowerCase().includes(newValue.toLowerCase())
				);
				console.log("arr =>", arr);
				this.allNews = arr;
				this.fetchPosts();
			} catch (err) {
				console.log(`Ошибка в searchQuery(newValue) ${err}`);
			}
		},
		searchQueryId(newValue) {
			if (this.page > 1) this.page = 1;
			this.allNews = lastNews;
			console.log("searchQueryId(newValue) =>", newValue);
			try {
				const arr = this.allNews.filter((item) => item.id.includes(newValue));
				console.log("arr =>", arr);
				this.allNews = arr;
				this.fetchPosts();
			} catch (err) {
				console.log(`Ошибка в searchQuery(newValue) ${err}`);
			}
		},
		searchQueryDate(newValue) {
			if (this.page > 1) this.page = 1;
			this.allNews = lastNews;
			console.log("searchQuery(newValue) =>", newValue);
			try {
				const arr = this.allNews.filter((item) =>
					item.date.toLowerCase().includes(newValue.toLowerCase())
				);
				console.log("arr =>", arr);
				this.allNews = arr;
				this.fetchPosts();
			} catch (err) {
				console.log(`Ошибка в searchQuery(newValue) ${err}`);
			}
		},
		searchQueryText(newValue) {
			if (this.page > 1) this.page = 1;
			this.allNews = lastNews;
			console.log("searchQuery(newValue) =>", newValue);
			try {
				const arr = this.allNews.filter((item) =>
					item.text.toLowerCase().includes(newValue.toLowerCase())
				);
				console.log("arr =>", arr);
				this.allNews = arr;
				this.fetchPosts();
			} catch (err) {
				console.log(`Ошибка в searchQuery(newValue) ${err}`);
			}
		},
	},
};
</script>

<style scoped>
.wrapper {
	display: flex;
	overflow-x: scroll;
}

.wrapper-card {
	margin-bottom: 65px;
}

.wrapper-fixed {
	padding: 5px 0;
	background-color: white;
}

.page {
	border: 1px solid black;
	padding: 5px 7px;
	cursor: pointer;
	user-select: none;
	margin-right: 1px;
	scale: initial;
	transition: all 0.5s;
	font-weight: bold;
}
.current-page {
	border: 1px solid teal;
	background-color: teal;
	color: white;
}

.news-list-item {
	display: inline-block;
	margin-right: 10px;
}
.news-list-enter-active,
.news-list-leave-active {
	transition: all 0.7s ease;
}
.news-list-enter-from,
.news-list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
.news-list-move {
	transition: transform 0.7s ease;
}
</style>
