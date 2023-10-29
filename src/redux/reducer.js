import { combineReducers } from 'redux';
const initialState =
// JSON.parse(localStorage.getItem('user-contact'))  || 
{
    items: [],
    isLoading: false,
    error: null
  }
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
   
      const updatePhonebook = [...state.items, action.payload];
      localStorage.setItem('user-contact', JSON.stringify(updatePhonebook));
      return updatePhonebook;

  
    
    case 'contacts/deleteContact':
      const withoutRemovedContact = state.filter(
        contact => contact.id !== action.payload
      );

      localStorage.setItem(
        'user-contact',
        JSON.stringify(withoutRemovedContact)
      );
      return withoutRemovedContact;
    default:
      return state;
  }
};
const filtersInitialState = {
  input: "",
};
export const filterReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'contacts/filter':
      return {
      
        input: action.payload,
      };
    default:
      return state;
  }
};

// Код редюсерів tasksReducer та filtersReducer
export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});
