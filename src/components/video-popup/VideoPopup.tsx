import React from 'react';

import { Video } from '../../data';
import cn from '../../utils/Bem';
import { ReactComponent as CloseIcon } from '../../icons/cross.svg';

import './VideoPopup.scss';

interface VideoPopupParams {
	video: Video;
	close: () => void;
}

function VideoPopup({ video, close }: VideoPopupParams) {
	const videoPopup = cn('VideoPopup');

	const maybeClose = (event: React.MouseEvent) => {
		const target = event.target as HTMLElement;
		if (!target.closest('.' + videoPopup('content'))) {
			close();
		}
	};

	return (
		<div className={videoPopup()} onClick={(e) => maybeClose(e)}>
			<div className={videoPopup('content')}>
				<div className={videoPopup('close')} onClick={close}>
					<CloseIcon className={videoPopup('closeIcon')} />
				</div>
				<div className={videoPopup('video')}>
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
				<div className={videoPopup('title')}>{video.snippet.title}</div>
			</div>
		</div>
	);
}

export default VideoPopup;
