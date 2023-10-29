import React from 'react';
// import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/operation';
//формік і валідація
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
//стилі
import {
  Field,
  Label,
  ButtonAddContacts,
  Form,
} from '../ContactForm/ContactForm.styled.js';
import { getContacts } from 'redux/selectors.js';
import toast from 'react-hot-toast';
//початкові значення форміка
const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  //виклик диспечера
  const dispatch = useDispatch();
  //отримання даних з редакс
  const { items } = useSelector(getContacts);
  //додавання контакту при сабміті
  const handleSabmit = (values, { resetForm }) => {
    //перевірка на дубляж
    const haveNameInPhonebook = items.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    //повідомлення користувача
      if (haveNameInPhonebook) {
        return toast.error(`${values.name} is already in contacts`)(
        
          {    
            duration: 1000,
            position: 'top-center',
          }
        );
      // Notify.failure(`${values.name} is already in contacts`);
      
      
      
    }
    // виклик диспечера для відправки даних в редакс
    dispatch(
      operation.addContact({
        name: values.name.trim(),
        phone: values.number.trim(),
      })
    );

    resetForm();
  };
  //схема валідації
  const schema = yup.object().shape({
    name: yup.string().required().min(4),
    number: yup.number().required().min(4),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSabmit}
    >
      <Form>
        <Label htmlFor="name">Name</Label>
        <Field name="name" type="name" />
        <ErrorMessage name="name" component="div" />

        <Label htmlFor="number">Number</Label>
        <Field name="number" type="tel" />
        <ErrorMessage name="number" component="div" />

        <ButtonAddContacts type="submit">add contacts</ButtonAddContacts>
      </Form>
      
    </Formik>
  );
};
