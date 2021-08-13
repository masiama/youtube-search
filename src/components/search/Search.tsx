import React, { useState } from 'react';

import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import cn from '../../utils/Bem';

import './Search.scss';

interface SearchParams {
	onChange: (value: string) => void;
}

function Search({ onChange }: SearchParams) {
	const [value, setValue] = useState('');
	const search = cn('Search');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
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
			<div className={search('button')}>
				<SearchIcon
					className={search('icon')}
					onClick={() => onChange(value)}
				/>
			</div>
		</div>
	);
}

export default Search;
