import { writable } from 'svelte/store';

const store = { isDarkMode: writable(false) };

export default store;
