'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Enhanced form validation function
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
  
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`mt-1 block w-full rounded-md bg-slate-900/50 border ${
                errors.name ? 'border-red-500' : 'border-blue-500/20'
              } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 px-4 py-2`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 block w-full rounded-md bg-slate-900/50 border ${
                errors.email ? 'border-red-500' : 'border-blue-500/20'
              } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 px-4 py-2`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className={`mt-1 block w-full rounded-md bg-slate-900/50 border ${
              errors.subject ? 'border-red-500' : 'border-blue-500/20'
            } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 px-4 py-2`}
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
          {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className={`mt-1 block w-full rounded-md bg-slate-900/50 border ${
              errors.message ? 'border-red-500' : 'border-blue-500/20'
            } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 px-4 py-2`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            aria-label="Send message"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md 
                     shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'loading' ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : 'Send Message'}
          </button>
        </div>

        <div className="text-center h-6">
          {status === 'success' && (
            <p className="text-green-400 animate-fadeIn">Message sent successfully. I will get back to you soon!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 animate-fadeIn">Failed to send message. Please try again later.</p>
          )}
        </div>
      </form>
    </motion.div>
  );
}