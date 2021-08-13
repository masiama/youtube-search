import React from 'react';

import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import cn from '../../utils/Bem';

import './Search.scss';

interface SearchParams {
	value: string;
	onChange: (value: string) => void;
}

function Search({ value, onChange }: SearchParams) {
	const search = cn('Search');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<div className={search()}>
			<input
				type="text"
				className={search('input')}
				placeholder="Search"
				value={value}
				onChange={handleChange}
			/>
			<SearchIcon className={search('icon')} />
		</div>
	);
}

export default Search;
