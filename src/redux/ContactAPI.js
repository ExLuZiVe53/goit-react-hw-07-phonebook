import axios from 'axios';

axios.defaults.baseURL =
  'https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1';

export async function fetchContacts () {
 const { data } = await axios.get(
   'https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts'
 );
console.log('data',data);
return data    
 }   

export async function removeContact(id) {
  const { data } = await axios.delete(
    `https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts:${id}`
  );
  console.log('data', data);
  return data;
}   