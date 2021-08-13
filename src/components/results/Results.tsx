import React from 'react';

import VideoPreview from '../video-preview/VideoPreview';
import { Video } from '../../data';

import './Results.scss';

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
	if (!videos.length) {
		return <div className="Results">No videos found</div>;
	}
	return (
		<div className="Results">
			{videos.map((video) => (
				<VideoPreview key={video.id.videoId} video={video} play={playVideo} />
			))}
			{nextPage && <div onClick={() => changePage(nextPage)}>Next</div>}
			{prevPage && <div onClick={() => changePage(prevPage)}>Prev</div>}
		</div>
	);
}

export default Results;
