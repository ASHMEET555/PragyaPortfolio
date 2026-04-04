import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Link2 } from 'lucide-react';

const contactItems = [
  { icon: Phone, label: 'Phone', value: '+91 8924026557', href: 'tel:+918924026557' },
  { icon: Mail, label: 'Email', value: 'pragyasingh2408@gmail.com', href: 'mailto:pragyasingh2408@gmail.com' },
  { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/pragya-singh-508628286', href: 'https://www.linkedin.com/in/pragya-singh-508628286/' },
  { icon: MapPin, label: 'Location', value: 'EC Phase-1, Bangalore, KA', href: '' }
];

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Please set EmailJS env variables to enable this form.');
      return;
    }

    try {
      setLoading(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      formRef.current.reset();
      setStatus('Message sent successfully. Thank you for connecting.');
    } catch (error) {
      setStatus('Could not send message right now. Please email directly at pragyasingh2408@gmail.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section reveal">
      <h3 className="section-title">Get In Touch</h3>
      <p className="section-line" />
      <p className="section-subtext">I am open to HR internship opportunities and would love to hear from you.</p>

      <div className="contact-grid">
        <div className="contact-column">
          <a className="btn btn-primary full" href="/resume.pdf" download>
            Download Resume
          </a>

          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <article className="glass-card contact-card" key={label}>
              <span className="icon-wrap"><Icon size={20} /></span>
              <div>
                <p className="meta">{label}</p>
                {href ? (
                  <a href={href} target={label === 'LinkedIn' ? '_blank' : '_self'} rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  <p>{value}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <form className="glass-card form-card" ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" required placeholder="Enter your name" />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required placeholder="your.email@example.com" />

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" required placeholder="What is this about?" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Your message here..." />

          <button className="btn btn-primary full" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status ? <p className="status-text">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
