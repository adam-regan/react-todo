import { FILTER_TYPES } from '../types/filter.types';
export function Filters({ onFilterSelected, currentFilter }) {
	const filters = [
		{ label: 'All', type: FILTER_TYPES.ALL },
		{ label: 'Active', type: FILTER_TYPES.ACTIVE },
		{ label: 'Completed', type: FILTER_TYPES.COMPLETE },
	];

	return (
		<>
			{filters.map((filter, index) => {
				return (<button key={index} type='submit' disabled={filter.type === currentFilter} onClick={() => { onFilterSelected(filter.type) }} >{filter.label}</button>
				)
			})}
		</>);
}
