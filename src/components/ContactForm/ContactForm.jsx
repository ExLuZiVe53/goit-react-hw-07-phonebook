import React from 'react';
// import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/operation';
//формік і валідація
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';

import { getContacts } from 'redux/selectors.js';
import { toast } from 'react-toastify';

import css from './ContactForm.module.css';

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
      return toast.error(`${values.name} is already in contacts`);
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
  // схема валідації
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
      <Form className={css.FormWrapper}>
        <label className={css.FormLabel} htmlFor="name">
          Name
        </label>
        <Field
          className={css.FormInput}
          placeholder="Enter your name"
          name="name"
          type="name"
        />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Field
          className={css.FormInput}
          placeholder="Enter your number"
          name="number"
          type="tel"
        />
        <ErrorMessage name="number" component="div" />

        <button className={css.ButtonForm} type="submit">
          add contacts
        </button>
      </Form>
    </Formik>

    // <form className={css.FormWrapper} onSubmit={handleSabmit}>
    //   <div>
    //     <label className={css.FormLabel} htmlFor="name">
    //       Name
    //     </label>
    //     <input
    //       type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //       onChange={handleChange}
    //       value={name}
    //       className={css.FormInput}
    //       placeholder="Enter your name"
    //     />
    //   </div>

    //   <div>
    //     <label className={css.FormLabel} htmlFor="number">
    //       Number
    //     </label>
    //     <input
    //       type="tel"
    //       name="number"
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //       onChange={handleChange}
    //       value={number}
    //       className={css.FormInput}
    //       placeholder="Enter your number"
    //     />
    //   </div>
    //   <button className={css.ButtonForm} type="submit">
    //     add contacts
    //   </button>
    // </form>
  );
};
