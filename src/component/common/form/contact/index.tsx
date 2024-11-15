import { useForm } from 'react-hook-form';
import './contact.css';
import ContactInfo from '@/component/contact/info';
import useNotification from '@/hook/useNotification';

type FormData = {
  username: string;
  message: string;
};

const FormContact = 'form-contact';

const ContactForm = () => {
  const { success, error, warning } = useNotification();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('data >>', data);
  };

  return (
    <div className="form-content">
      <div className="item-info">
        <ContactInfo />
      </div>

      <form className="item-content" onSubmit={handleSubmit(onSubmit)} id={FormContact}>
        <div className="form-group">
          <input
            type="email"
            id="username"
            {...register('username')}
            placeholder=" "
            className="input-item peer"
          />

          <label
            htmlFor="username"
            className="
            peer-placeholder-shown:scale-100
            peer-focus:-translate-y-[11px] peer-focus:px-1 
            peer-placeholder-shown:translate-y-[13px]"
          >
            Email
          </label>
        </div>

        <div className="form-group">
          <textarea
            id="message"
            placeholder=" "
            {...register('message')}
            className="input-item peer scroll-y"
          />

          <label
            htmlFor="message"
            className="
            peer-placeholder-shown:scale-100
            peer-focus:-translate-y-[11px] peer-focus:px-1 
            peer-placeholder-shown:translate-y-[13px]"
          >
            Message
          </label>
        </div>

        <div className="wrapper-button">
          <button type="submit" form={FormContact} className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
