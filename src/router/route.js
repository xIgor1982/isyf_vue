import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import Site from "@/pages/Site.vue";
import Content from "@/pages/Content.vue";
import Search from "@/pages/Search.vue";

const routes = [
	{
		path: "/",
		component: Main,
	},
	{
		path: "/site",
		component: Site,
	},
	{
		path: "/content",
		component: Content,
	},
	{
		path: "/search",
		component: Search,
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router;