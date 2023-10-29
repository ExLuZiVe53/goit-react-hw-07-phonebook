import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filtersSlise.js';

import css from './Filter.module.css';

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
    <div className={css.FilterWrap}>
      <label htmlFor="">Find contacts by name</label>
      <input
        className={css.FilterInput}
        name="filter"
        type="text"
        value={filterok}
        onChange={handleFind}
        placeholder="Find with me"
      />
    </div>
  );
};
