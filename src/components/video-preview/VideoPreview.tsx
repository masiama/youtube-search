import React from 'react';

import { Video } from '../../data';

import './VideoPreview.scss';

interface VideoPreviewParams {
	video: Video;
	play: (video: Video) => void;
}

function VideoPreview({ video, play }: VideoPreviewParams) {
	return (
		<div className="VideoPreview" onClick={() => play(video)}>
			<img
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div>{video.snippet.title}</div>
		</div>
	);
}

export default VideoPreview;
