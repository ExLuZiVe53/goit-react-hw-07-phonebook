import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filtersSlise.js';

export const Filter = () => {
  const dispatch = useDispatch();
  //стейт для фільтра
  const [filterok, setFilter] = useState('');
  // контрольований інпут
  const handleFind = e => {
    setFilter(e.target.value);

    dispatch(filter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="">
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={filterok}
          onChange={handleFind}
        />
      </label>
    </div>
  );
};
