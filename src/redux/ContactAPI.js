import axios from 'axios';

axios.defaults.baseURL = 'https://653d32f6f52310ee6a99fb6f.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(
    'https://653d32f6f52310ee6a99fb6f.mockapi.io/contacts'
  );
  console.log('data', data);
  return data;
}

export async function removeContact(id) {
  const { data } = await axios.delete(
    `https://653d32f6f52310ee6a99fb6f.mockapi.io/contacts:${id}`
  );
  console.log('data', data);
  return data;
}

// !===============================================================================
// const contactsInstance = axios.create({
//   baseURL: 'https://653d32f6f52310ee6a99fb6f.mockapi.io/',
// });

// export const requestContacts = async () => {
//   const { data } = await contactsInstance.get('/contacts');
//   return data;
// };

// export const requestAddContact = async newContact => {
//   const { data } = await contactsInstance.post('/contacts', newContact);
//   return data;
// };

// export const requestDeleteContact = async contactId => {
//   const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
//   return data;
// };
