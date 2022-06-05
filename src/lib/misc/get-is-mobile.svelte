<script lang="ts">
	import UAParser from 'ua-parser-js';

	import store from '../../store';

	const { isMobile } = store;

	if ($isMobile === -1) {
		const parser = new UAParser();
		const { type } = parser.getDevice();
		if (type) {
			const isMobileDetected = ['mobile', 'tablet'].includes(type);
			isMobile.set(isMobileDetected ? 1 : 0);
		} else {
			isMobile.set(0);
		}
	}
</script>
