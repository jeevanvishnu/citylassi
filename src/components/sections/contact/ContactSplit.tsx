import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initialForm: FormData = { name: '', phone: '', email: '', message: '' };

const contactItems = [
  {
    id: 'address',
    icon: MapPin,
    title: 'Address',
    lines: [
      'Shop #02, Al Raffi Building,',
      'Near Naif Palace Hotel, Sabkha Road,',
      'Deira, Dubai, UAE',
    ],
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Call Us',
    lines: ['+971 52 106 4442', '+971 4 344 9122'],
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email Us',
    lines: ['sales@citylassi.com'],
  },
];

const ContactSplit: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm(initialForm);
      }, 3000);
    }, 1200);
  };

  return (
    <section className="w-full min-h-[100dvh] pt-16 md:pt-20 flex flex-col lg:flex-row bg-white overflow-hidden">
      
      {/* Left Side: Image & Info Overlay */}
      <div className="relative w-full lg:w-[45%] lg:min-h-[calc(100vh-80px)] min-h-[500px] flex-shrink-0">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img
            src="/blog/contact.jpg"
            alt="Contact City Lassi"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />
        </motion.div>

        {/* Contact Info Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-8">
              Reach City Lassi
            </h2>
            
            <div className="flex flex-col gap-6">
              {contactItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    <item.icon className="w-4 h-4 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="font-heading text-white/90 text-base font-medium mb-1 tracking-wide">
                      {item.title}
                    </h3>
                    <div className="font-body text-white/70 text-sm leading-relaxed">
                      {item.lines.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white relative">
        <motion.div 
          className="w-full max-w-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-10">
            <span className="font-accent text-brand-orange text-xl mb-2 block">
              Say Hello
            </span>
            <h1 className="font-display font-bold text-brand-dark text-4xl md:text-5xl leading-tight mb-4">
              Get in Touch
            </h1>
            <p className="font-body text-brand-muted text-base leading-relaxed">
              Whether you want to place an order, ask about our menu, or share your feedback – we're always here for you.
            </p>
          </div>

          <div className="relative">
            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center rounded-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 text-green-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-2xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-body text-brand-muted">
                    Thank you! We'll get back to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="group">
                  <label htmlFor="name" className="block font-body text-sm font-medium text-brand-dark/70 mb-2 transition-colors group-focus-within:text-brand-orange">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-brand-cream/50 border border-brand-dark/10 rounded-xl px-4 py-3 font-body text-brand-dark text-base placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 transition-all"
                    placeholder="Name"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-brand-dark/70 mb-2 transition-colors group-focus-within:text-brand-orange">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-cream/50 border border-brand-dark/10 rounded-xl px-4 py-3 font-body text-brand-dark text-base placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 transition-all"
                    placeholder="Phone"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block font-body text-sm font-medium text-brand-dark/70 mb-2 transition-colors group-focus-within:text-brand-orange">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-brand-cream/50 border border-brand-dark/10 rounded-xl px-4 py-3 font-body text-brand-dark text-base placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 transition-all"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block font-body text-sm font-medium text-brand-dark/70 mb-2 transition-colors group-focus-within:text-brand-orange">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-brand-cream/50 border border-brand-dark/10 rounded-xl px-4 py-3 font-body text-brand-dark text-base placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-brand-orange/10 transition-all resize-none"
                  placeholder="Message"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-orange text-brand-dark font-body font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group shadow-sm hover:shadow-md active:scale-95"
              >
                {sending ? (
                  <>
                    <span>Sending...</span>
                    <svg className="animate-spin w-5 h-5 text-brand-dark" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="56" strokeDashoffset="14" strokeLinecap="round" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSplit;
