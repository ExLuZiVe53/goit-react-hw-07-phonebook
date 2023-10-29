// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { fetchContacts } from 'operation';
// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });
// export default combineReducers({
//   items,
//   isLoading,
//   error,
// });
