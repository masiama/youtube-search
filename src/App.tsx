import React, { useEffect, useState } from 'react';

import Results from './components/results/Results';
import Search from './components/search/Search';
import { Response } from './data';

import './App.scss';

function App() {
	const [value, setValue] = useState('');
	const [response, setResponse] = useState<Response>();
	const [timeout, resetTimeout] = useState<NodeJS.Timeout>();

	const request = async (token?: string) => {
		if (!process.env.REACT_APP_YOUTUBE_API_KEY) {
			throw new Error('REACT_APP_YOUTUBE_API_KEY variable is missing');
		}

		const url = new URL('https://www.googleapis.com/youtube/v3/search');
		url.searchParams.set('part', 'snippet');
		url.searchParams.set('eventType', 'live');
		url.searchParams.set('type', 'video');
		url.searchParams.set('order', 'viewCount');
		url.searchParams.set('maxResults', '24');
		url.searchParams.set('q', value);
		url.searchParams.set('key', process.env.REACT_APP_YOUTUBE_API_KEY);
		if (token) url.searchParams.set('pageToken', token);
		const response = await fetch(url.toString(), {
			headers: { Accept: 'application/json' },
		});
		const data: Response = await response.json();
		if ('error' in data) {
			throw new Error(data.error.message);
		}
		return data;
	};

	useEffect(() => {
		if (timeout) clearTimeout(timeout);

		resetTimeout(
			setTimeout(() => {
				setResponse(undefined);
				if (!value) return;

				request().then(setResponse).catch(alert);
			}, 500),
		);
	}, [value]);

	const changePage = (token: string) => {
		return request(token).then(setResponse).catch(alert);
	};

	return (
		<div className="App">
			<Search value={value} onChange={setValue} />
			{response && 'items' in response && (
				<Results
					videos={response.items}
					nextPage={response.nextPageToken}
					prevPage={response.prevPageToken}
					changePage={changePage}
				/>
			)}
		</div>
	);
}

export default App;
