import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    // <section id="contact" className="py-20 px-8 max-w-6xl mx-auto">
    <motion.section 
      id="contact" 
      className="py-20 px-8 max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white relative mb-8"
          variants={titleVariants}
        >
          {/* <span className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-1 bg-white"></span> */}
            <span className="">{"</ "}</span>
            {portfolioData.contact.title}
            <span className="">{" >"}</span>
        </motion.h2>
      </div>

      <motion.div 
        className="bg-dark-card border border-dark-border rounded-xl p-8 backdrop-blur-[10px]"
        variants={cardVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-white"></div>
                <h3 className="text-lg font-semibold text-white">
                    Contact Information
                </h3>
            </div>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zinc-400 text-sm mb-1">Email</div>
                  <div className="text-white text-sm font-medium">
                    {portfolioData.contact.contactInfo.email}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zinc-400 text-sm mb-1">Phone</div>
                  <div className="text-white text-sm font-medium">
                    {portfolioData.contact.contactInfo.phone}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-zinc-400 text-sm mb-1">Location</div>
                  <div className="text-white text-sm font-medium">
                    {portfolioData.contact.contactInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-white"></div>
                <h3 className="text-lg font-semibold text-white">
                    {portfolioData.contact.form.title}
                </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-zinc-400 text-sm mb-3">
                  {portfolioData.contact.form.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={portfolioData.contact.form.placeholders.name}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-blue transition-colors"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-zinc-400 text-sm mb-3">
                  {portfolioData.contact.form.fields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={portfolioData.contact.form.placeholders.email}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-blue transition-colors"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-zinc-400 text-sm mb-3">
                  {portfolioData.contact.form.fields.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={portfolioData.contact.form.placeholders.message}
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-zinc-200 transition-colors duration-300"
                // className="w-[500px] bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-zinc-200 transition-colors duration-300"
              >
                {portfolioData.contact.form.submitText}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
