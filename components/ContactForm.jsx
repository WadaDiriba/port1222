'use client';

import { useState } from 'react';
import { site } from '../data/content';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setResult('Sending...');

    const formData = new FormData(form);
    formData.append('access_key', site.accessKey);
    formData.append('subject', `New message from the ${site.brand} portfolio`);
    formData.append('from_name', `${site.brand} Portfolio`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus('ok');
        setResult('Message sent. I will reply by email soon.');
        form.reset();
      } else {
        setStatus('error');
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setResult('Network error. Check your connection and try again.');
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" type="text" name="name" autoComplete="name" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="cf-message">Project details</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="What are you building, and when do you need it?"
          required
        />
      </div>
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="form-foot">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending' : 'Send message'}
        </button>
        <span
          className={`result ${status === 'ok' ? 'ok' : ''} ${status === 'error' ? 'err' : ''}`.trim()}
          role="status"
          aria-live="polite"
        >
          {result}
        </span>
      </div>
    </form>
  );
}
