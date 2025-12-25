import React, { useState } from 'react';
import { FiSend, FiMessageCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import '../styles/contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/cesar.amaya.gomes@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSent(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setSent(false), 3000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__title">{t('contact.title')}</h2>

        <div className="contact__intro">
          <p>{t('contact.intro')}</p>
          <p>{t('contact.subtitle')}</p>
        </div>

        {!sent ? (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__row">
              <input
                type="text"
                name="firstName"
                placeholder={t('contact.form.firstName')}
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form__input"
              />
              <input
                type="text"
                name="lastName"
                placeholder={t('contact.form.lastName')}
                value={formData.lastName}
                onChange={handleChange}
                className="form__input"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder={t('contact.form.email')}
              value={formData.email}
              onChange={handleChange}
              required
              className="form__input form__input--full"
            />

            <textarea
              name="message"
              placeholder={t('contact.form.message')}
              value={formData.message}
              onChange={handleChange}
              required
              className="form__textarea"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="form__button"
              disabled={loading}
            >
              <FiSend size={20} />
              {loading ? t('contact.form.sending') : t('contact.form.send')}
            </button>
          </form>
        ) : (
          <div className="contact__success">
            <div className="success__icon">✓</div>
            <h3>{t('contact.success.title')}</h3>
            <p>{t('contact.success.message')}</p>
          </div>
        )}

        <div className="contact__divider">
          <span>{t('contact.divider')}</span>
        </div>

        <a
          href="https://wa.me/+573185469197"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__whatsapp"
        >
          <FiMessageCircle size={20} />
          {t('contact.whatsapp')}
        </a>
      </div>
    </section>
  );
};

export default Contact;