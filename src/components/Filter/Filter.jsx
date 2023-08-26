import { useDispatch, useSelector } from 'react-redux';
import { FilterZone, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch({
      type: 'contacts/toFilter',
      payload: event.currentTarget.value,
    });
    console.log(filter);
  };

  return (
    <FilterZone>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </FilterZone>
  );
};
