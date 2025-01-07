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
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');
  
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) throw new Error('Failed to send message');
  
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
  
    // Add status message component
    const StatusMessage = () => {
      if (status === 'loading') {
        return <p className="text-blue-400">Sending message...</p>;
      }
      if (status === 'success') {
        return <p className="text-green-400">Message sent successfully!</p>;
      }
      if (status === 'error') {
        return <p className="text-red-400">Failed to send message. Please try again.</p>;
      }
      return null;
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
              required
              className="mt-1 block w-full rounded-md bg-slate-900/50 border border-blue-500/20 
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 px-4 py-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md bg-slate-900/50 border border-blue-500/20 
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 px-4 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="mt-1 block w-full rounded-md bg-slate-900/50 border border-blue-500/20 
                     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 px-4 py-2"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            className="mt-1 block w-full rounded-md bg-slate-900/50 border border-blue-500/20 
                     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-100 px-4 py-2"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md 
                     shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        <div className="text-center">
          <StatusMessage />
        </div>
      </form>
    </motion.div>
  );
}