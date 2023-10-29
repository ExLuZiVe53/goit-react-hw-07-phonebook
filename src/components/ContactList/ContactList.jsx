//redux
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/operation';
import { getContacts } from 'redux/selectors.js';
//styled
import css from './ContactList.module.css';

export const ContactList = () => {
  //значення стору редакс
  const filters = useSelector(state => state.filters) || '';
  const { items } = useSelector(getContacts);
  //диспечер)
  const dispatch = useDispatch();
  //функція фільтрації контактів
  const getVisibleContacts = (contacts, filters) => {
    switch (filters) {
      case filters:
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filters)
        );
      default:
        return contacts;
    }
  };

  const visibleFilter = getVisibleContacts(items, filters);

  //видалення контакту по айди
  const handleDelete = id => {
    dispatch(operation.removeContact({ id }));
  };

  return (
    <ul className={css.ContactUl}>
      {visibleFilter.map(contact => (
        <li className={css.ContactItem} key={contact.id}>
          <span className={css.ContactName}>{contact.name}</span> --
          <span className={css.ContactNumber}>{contact.phone}</span>
          <button
            className={css.delete}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
