import { writable } from 'svelte/store';

const store = {
	aboutOffset: writable(0),
	blogOffset: writable(0),
	contactOffset: writable(0),
	isDarkMode: writable(false),
	isLandingAnimationDisabled: writable(false),
	isMobile: writable(-1),
	isNavOpen: writable(false),
	landingMouseInitialX: writable(-1),
	landingMouseInitialY: writable(0),
	landingMouseX: writable(0),
	landingMouseY: writable(0),
	workOffset: writable(0)
};

export default store;
