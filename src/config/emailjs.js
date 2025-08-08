// EmailJS Configuration
// Using Vite environment variables with fallbacks

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5anu4so',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_c75t2lf',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'gDS-k3GfkFDRxBXgF'
};

export default emailjsConfig;
