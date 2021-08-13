interface Image {
	url: string;
	width: number;
	height: number;
}

export interface Video {
	id: {
		videoId: string;
	};
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: Image;
			medium: Image;
			high: Image;
		};
		channelTitle: string;
		liveBroadcastContent: string;
		publishTime: string;
	};
}

interface ErrorResponse {
	error: {
		code: number;
		errors: { message: string; domain: string; reason: string }[];
		message: string;
		status: string;
	};
}

interface SuccessResponse {
	nextPageToken?: string;
	prevPageToken?: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: Video[];
}

export type Response = SuccessResponse | ErrorResponse;
