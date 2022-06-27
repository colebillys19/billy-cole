import type { RequestEvent } from '@sveltejs/kit';

// const delay = () => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, 1000);
// 	});
// };

export async function post(event: RequestEvent) {
	const { request } = event;
	console.log('*');
	console.log(request);
	// const jsonData = await request.json();
	// const { messageText } = jsonData;
	// console.log('*', messageText);

	// await delay();

	// return { body: { noIssues: 'yup' } };
}
