import React from 'react';

import { Video } from '../../data';

import './VideoPopup.scss';

interface VideoPopupParams {
	video: Video;
	close: () => void;
}

function VideoPopup({ video, close }: VideoPopupParams) {
	return (
		<div className="VideoPopup">
			<div onClick={close}>Close</div>
			{video.snippet.title}
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
}

export default VideoPopup;
