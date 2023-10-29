import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filtersSlise.js';
import { Input, Label } from '../ContactForm/ContactForm.styled.js';

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
      <Label htmlFor="">
        Find contacts by name
        <Input
          name="filter"
          type="text"
          value={filterok}
          onChange={handleFind}
        />
      </Label>
    </div>
  );
};

