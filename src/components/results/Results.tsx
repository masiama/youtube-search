import React from 'react';

import VideoPreview from '../video-preview/VideoPreview';
import { Video } from '../../data';

import './Results.scss';
import cn from '../../utils/Bem';

interface ResultsParams {
	videos: Video[];
	nextPage?: string;
	prevPage?: string;
	changePage: (token: string) => void;
	playVideo: (video: Video) => void;
}

function Results({
	videos,
	nextPage,
	prevPage,
	changePage,
	playVideo,
}: ResultsParams) {
	const results = cn('Results');

	if (!videos.length) {
		return <div className={results({ empty: true })}>No videos found</div>;
	}
	return (
		<div className={results()}>
			<div className={results('list')}>
				{videos.map((video) => (
					<VideoPreview key={video.id.videoId} video={video} play={playVideo} />
				))}
			</div>
			<div className={results('buttons')}>
				<button
					className={results('button')}
					disabled={!prevPage}
					onClick={() => prevPage && changePage(prevPage)}
				>
					Prev
				</button>
				<button
					className={results('button')}
					disabled={!nextPage}
					onClick={() => nextPage && changePage(nextPage)}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Results;
