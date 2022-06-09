import type { RequestEvent } from '@sveltejs/kit';

export async function post(event: RequestEvent) {
	const { request } = event;
	const jsonData = await request.json();
	const { messageText } = jsonData;
	console.log('*', messageText);

	setTimeout(() => {
		return { body: { noIssues: 'yup' } };
	}, 1000);
}
