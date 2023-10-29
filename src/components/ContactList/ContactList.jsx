//redux
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/operation';
import { getContacts } from 'redux/selectors.js';
//styled

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
  const handleDelete = (id, name) => {
    dispatch(operation.removeContact({ id, name }));
  };

  return (
    <ul>
      {visibleFilter.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => handleDelete(contact.id, contact.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
