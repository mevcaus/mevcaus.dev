import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || '';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-icon">✓</div>
        <p className="contact-form-success-text">
          Message sent! I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form reveal reveal-delay-4" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="contact-name" className="contact-form-label">
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-form-input"
            placeholder="Your name"
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-email" className="contact-form-label">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-form-input"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-message" className="contact-form-label">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-form-input contact-form-textarea"
          placeholder="What's on your mind?"
          rows={5}
        />
      </div>
      <button
        type="submit"
        className="contact-form-submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message →'}
      </button>
      {status === 'error' && (
        <p className="contact-form-error">
          Something went wrong. Try again or email me directly.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
