import React, { useState } from 'react';
import { FiSend, FiMessageCircle } from 'react-icons/fi';
import '../styles/contact.css';

const Contact = () => {
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
        <h2 className="contact__title">Contact</h2>
        
        <div className="contact__intro">
          <p>Want to get in touch?</p>
          <p>Fill out the form below and I'll get back to you as soon as possible.</p>
        </div>

        {!sent ? (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form__input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="form__input"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="form__input form__input--full"
            />

            <textarea
              name="message"
              placeholder="Write your message here"
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
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        ) : (
          <div className="contact__success">
            <div className="success__icon">✓</div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        )}

        <div className="contact__divider">
          <span>Or contact via</span>
        </div>

        <a
          href="https://wa.me/+573185469197"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__whatsapp"
        >
          <FiMessageCircle size={20} />
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;