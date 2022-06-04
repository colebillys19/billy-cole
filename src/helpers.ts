export function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
	return key in obj;
}

const lookup = {
	sm: {
		width: 300,
		offsets: [0, 310, 620, 930, 1240, 1550, 1860, 2170, 2480, 2790, 3100, 3410, 3720, 4030, 4340]
	},
	md: { width: 610, offsets: [0, 620, 1240, 1860, 2480, 3100, 3720, 4030] },
	lg: { width: 920, offsets: [0, 930, 1860, 2790, 3720] }
};

export function getCarouselProps(innerWidth: number) {
	if (innerWidth < 768) {
		return lookup.sm;
	}

	return innerWidth < 1260 ? lookup.md : lookup.lg;
}
