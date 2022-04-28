import { writable } from 'svelte/store';

const store = {
	aboutOffset: writable(0),
	blogOffset: writable(0),
	contactOffset: writable(0),
	isDarkMode: writable(false),
	isNavOpen: writable(false),
	workOffset: writable(0)
};

export default store;
