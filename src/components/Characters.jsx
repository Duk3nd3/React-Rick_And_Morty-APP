// Deps
import { useContext } from 'react';

// Context
import { CharactersContext } from '../context/charactersContext';

// Components

import { Pagination } from './Pagination';

export const Characters = () => {
	const { characters } = useContext(CharactersContext);

	return (
		<div className='row mb-5'>
			<Pagination />

			{characters.map((character) => {
				return (
					<div key={character.id} className='col-3'>
						<div className='card mt-4'>
							<img
								src={character.image}
								className='card-img-top'
								alt={character.name}
							/>
							<div className='card-body'>
								<h5 className='card-title'>{character.name}</h5>
								<p className='card-text'>
									<b>Status: </b>
									{character.status}
									<br />
									<b>Species: </b>
									{character.species}
									<br />
									<b>Location: </b>
									{character.location.name}
									<br />
									<b>Gender: </b>
									{character.gender}
									<br />
								</p>
								<a href='#' className='btn btn-primary'>
									More...
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
