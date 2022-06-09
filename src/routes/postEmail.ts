import type { RequestEvent } from '@sveltejs/kit';

export async function post(event: RequestEvent) {
	const { request } = event;
	const jsonData = await request.json();
	const { messageText: endpointMessageText } = jsonData;
	console.log('endpointMessageText:', endpointMessageText);
	return { body: { messageText: endpointMessageText } };
}
