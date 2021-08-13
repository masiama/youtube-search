import React from 'react';

import { Video } from '../../data';
import cn from '../../utils/Bem';

import './VideoPreview.scss';

interface VideoPreviewParams {
	video: Video;
	play: (video: Video) => void;
}

function VideoPreview({ video, play }: VideoPreviewParams) {
	const videoPreview = cn('VideoPreview');

	return (
		<div className={videoPreview()} onClick={() => play(video)}>
			<div className={videoPreview('imageWrapper')}>
				<img
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.title}
					className={videoPreview('image')}
				/>
			</div>
			<div className={videoPreview('title')}>{video.snippet.title}</div>
		</div>
	);
}

export default VideoPreview;
