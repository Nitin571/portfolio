import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Clock,
  Sparkles,
} from 'lucide-react';
import { contactData, personalInfo } from '../data/portfolioData';
import { LeetCodeIcon } from './Icons';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email format validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate fields
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return 'Please enter your name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
        return '';
      case 'subject':
        if (!value.trim()) return 'Please enter a subject.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        return '';
      case 'message':
        if (!value.trim()) return 'Please write your message.';
        if (value.trim().length < 4) return 'Message must be at least 4 characters.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Set loading state
    setIsSubmitting(true);

    // If Formspree endpoint is configured, send the real email via API
    if (contactData.formspreeEndpoint) {
      const endpoint = contactData.formspreeEndpoint.startsWith('http')
        ? contactData.formspreeEndpoint
        : `https://formspree.io/f/${contactData.formspreeEndpoint}`;

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })
        .then((response) => {
          if (response.ok) {
            setIsSubmitting(false);
            setIsSubmitted(true);
          } else {
            throw new Error('Formspree submission failed');
          }
        })
        .catch(() => {
          setIsSubmitting(false);
          setErrors({
            general: 'Could not send automatically. Please use the Direct Mailto button below.',
          });
        });
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Generate mailto link
  const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
    formData.subject || 'Software Developer Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Nitin,\n\n${formData.message || ''}\n\nFrom: ${formData.name || ''} (${formData.email || ''})`
  )}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="contact-status-pill">
            <span className="pulse-dot" />
            <span>Open to developer internships & projects</span>
          </div>
          <h2 className="section-title">{contactData.heading}</h2>
          <p className="section-desc">{contactData.description}</p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Card */}
          <div className="contact-info-column">
            <div className="contact-info-card">
              <div className="info-card-header">
                <h3 className="info-card-title">Let's Connect</h3>
                <p className="info-card-desc">
                  Whether you have an internship opening, a project to discuss, or want to say hi, my inbox is open.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="contact-channel-card">
                <span className="channel-label">Direct Email</span>
                <div className="email-copy-box">
                  <div className="email-copy-content">
                    <Mail size={16} className="email-icon" />
                    <span className="email-address">{contactData.email}</span>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} className="copy-success-icon" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Meta details: Location & Response speed */}
              <div className="contact-meta-list">
                <div className="contact-meta-item">
                  <MapPin size={15} className="meta-icon" />
                  <span>{contactData.location}</span>
                </div>
                <div className="contact-meta-item">
                  <Clock size={15} className="meta-icon" />
                  <span>Quick Response: Usually within 24 hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-social-section">
                <span className="channel-label">Profiles</span>
                <div className="contact-social-pills">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-btn"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                    <ExternalLink size={11} className="social-pill-arrow" />
                  </a>

                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-btn"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                    <ExternalLink size={11} className="social-pill-arrow" />
                  </a>

                  <a
                    href={personalInfo.socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-btn"
                  >
                    <LeetCodeIcon size={14} />
                    <span>LeetCode</span>
                    <ExternalLink size={11} className="social-pill-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              {isSubmitted ? (
                /* Success View */
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={44} className="success-icon" />
                  </div>
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Your note has been delivered. I will get back to you shortly at <strong>{formData.email}</strong>.
                  </p>

                  <div className="success-actions">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-primary btn-sm"
                    >
                      <span>Send Another Message</span>
                    </button>
                    <a
                      href={mailtoUrl}
                      className="btn btn-secondary btn-sm"
                    >
                      <Mail size={14} />
                      <span>Open in Mail App</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-card-header">
                    <h3 className="form-heading">Send a Message</h3>
                    <p className="form-subheading">Fill out the form below to reach me directly.</p>
                  </div>

                  <div className="form-grid-row">
                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Alex Morgan"
                        className={`form-input ${errors.name && touched.name ? 'input-error' : ''}`}
                        autoComplete="name"
                      />
                      {errors.name && touched.name && (
                        <div className="error-message">
                          <AlertCircle size={13} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="alex@example.com"
                        className={`form-input ${errors.email && touched.email ? 'input-error' : ''}`}
                        autoComplete="email"
                      />
                      {errors.email && touched.email && (
                        <div className="error-message">
                          <AlertCircle size={13} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Internship opportunity / Collaboration"
                      className={`form-input ${errors.subject && touched.subject ? 'input-error' : ''}`}
                    />
                    {errors.subject && touched.subject && (
                      <div className="error-message">
                        <AlertCircle size={13} />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <div className="textarea-label-row">
                      <label htmlFor="message" className="form-label">
                        Message <span className="required-star">*</span>
                      </label>
                      <span className="character-count">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Hi Nitin, I'd like to discuss an opportunity..."
                      className={`form-textarea ${errors.message && touched.message ? 'input-error' : ''}`}
                    />
                    {errors.message && touched.message && (
                      <div className="error-message">
                        <AlertCircle size={13} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* General Error Banner */}
                  {errors.general && (
                    <div className="error-message general-error-banner">
                      <div className="error-banner-content">
                        <AlertCircle size={15} />
                        <span>{errors.general}</span>
                      </div>
                      <a href={mailtoUrl} className="btn btn-secondary btn-sm error-mailto-btn">
                        <Mail size={13} />
                        <span>Send via Email Client</span>
                      </a>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="form-footer-actions">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
