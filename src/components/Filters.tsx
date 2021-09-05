import React, {FunctionComponent} from 'react';

export const FILTER_TYPES = {
	ALL: Symbol('ALL'),
	ACTIVE: Symbol('ACTIVE'),
	COMPLETE: Symbol('COMPLETE')
};

export const Filters: FunctionComponent<FiltersProps> = ({ onFilterSelected, currentFilter }) => {
	const filters: FilterType[] = [
		{ label: 'All', type: FILTER_TYPES.ALL },
		{ label: 'Active', type: FILTER_TYPES.ACTIVE },
		{ label: 'Completed', type: FILTER_TYPES.COMPLETE },
	];

	return (
		<>
			{filters.map((filter: FilterType, index: number) => {
				return (<button key={index} type='submit' disabled={filter.type === currentFilter} onClick={() => { onFilterSelected(filter.type) }} >{filter.label}</button>
				)
			})}
		</>);

}

type FiltersProps = {
	onFilterSelected: (type: symbol)=>void,
	currentFilter: symbol
}

type FilterType = {
	label: string,
	type: symbol
}
