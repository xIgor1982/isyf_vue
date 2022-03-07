import { v4 as uuidv4 } from "uuid";

export const headerBtn = [
	{ id: uuidv4(), name: "Кнопка 1" },
	{ id: uuidv4(), name: "Кнопка 2" },
	{ id: uuidv4(), name: "Кнопка 3" },
];

export const navLinkHeader = [
	{ id: uuidv4(), name: "ИСУ", patch: "/" },
	{ id: uuidv4(), name: "Сайт", patch: "/site" },
	{ id: uuidv4(), name: "Данные", patch: "/content" },
	{ id: uuidv4(), name: "Поиск", patch: "/search" },
];

//--->создание новостей
const lastNews = [];

function randomDate(start = new Date(2017, 0, 1), end = new Date()) {
	const random = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);
	const fullYear = random.getFullYear();
	const month = `0${random.getMonth()+1}`.slice(-2);
	const date = `0${random.getDate()+1}`.slice(-2);

	const textDate = `${fullYear}-${month}-${date}`;
	return textDate;
}

function createNewsItem(i) {
	return {
		id: uuidv4(),
		name: `news ${i}`,
		date: randomDate(),
		text: `text ${i}`,
	};
}

function createNews(num) {
	for (let i = 0; i < num; i++) {
		lastNews.push(createNewsItem(i + 1));
	}
}

createNews(14);

export { lastNews };
//<---создание новостей
