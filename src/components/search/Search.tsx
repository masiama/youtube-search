import React from 'react';

import './Search.scss';

interface SearchParams {
	value: string;
	onChange: (value: string) => void;
}

function Search({ value, onChange }: SearchParams) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<div className="Search">
			<input value={value} onChange={handleChange} />
		</div>
	);
}

export default Search;
