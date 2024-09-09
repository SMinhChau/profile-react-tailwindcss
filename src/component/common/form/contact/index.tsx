import React from 'react';
import { useForm } from 'react-hook-form';
import './contact.css';
import ContactInfo from '@/component/contact/info';

type FormData = {
  username: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {};

  return (
    <div className="form-content">
      <div className="item-info">
        <ContactInfo />
      </div>

      <div className="item-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username"> Username </label>
          <input type="text" id="username" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
