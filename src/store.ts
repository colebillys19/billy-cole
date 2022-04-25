import { writable } from 'svelte/store';

const store = { isDarkMode: writable(false), isNavOpen: writable(false) };

export default store;
