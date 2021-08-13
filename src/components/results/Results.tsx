import React from 'react';

import { Video } from '../../data';

import './Results.scss';

interface ResultsParams {
	videos: Video[];
	nextPage?: string;
	prevPage?: string;
	changePage: (token: string) => void;
}

function Results({ videos, nextPage, prevPage, changePage }: ResultsParams) {
	if (!videos.length) {
		return <div className="Results">No videos found</div>;
	}
	return (
		<div className="Results">
			{videos.map((video) => (
				<div key={video.id.videoId}>{video.snippet.title}</div>
			))}
			{nextPage && <div onClick={() => changePage(nextPage)}>Next</div>}
			{prevPage && <div onClick={() => changePage(prevPage)}>Prev</div>}
		</div>
	);
}

export default Results;
