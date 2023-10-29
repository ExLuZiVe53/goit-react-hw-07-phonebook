import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/operation';
import { getContacts } from 'redux/selectors.js';
// import { Loading } from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Radio } from 'react-loader-spinner';
export const App = () => {
  const { items, isLoading, error } = useSelector(getContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.fetchContacts());
  }, [dispatch]);

  return (
    <div
    // style={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      {error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          {isLoading && !error && (
            <Radio
              visible={true}
              height="200"
              width="200"
              ariaLabel="radio-loading"
              wrapperStyle={{}}
              wrapperClass="radio-wrapper"
            />
          )}
          {items[0] ? (
            <>
              <h2>Contacts</h2>
              <Filter />

              <ContactList />
            </>
          ) : (
            <h3>Your phonebook is empty</h3>
          )}
        </div>
      )}
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};
