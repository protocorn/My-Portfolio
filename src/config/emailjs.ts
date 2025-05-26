// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Get your Public Key from the Integration page
// 5. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_sb7532i', // Replace with your EmailJS service ID (e.g., 'service_abc123xyz')
  templateId: 'template_qelhuxf', // Replace with your EmailJS template ID (e.g., 'template_def456uvw')
  publicKey: 'gHzHRtDA0am5xzJ4w', // Replace with your EmailJS public key (e.g., 'abcDEF123xyz')
};

// Example template variables for EmailJS:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{subject}} - email subject
// {{message}} - email message
// {{to_email}} - your email (chordiasahil@gmail.com)

// Example of what your actual config might look like:
// export const emailjsConfig = {
//   serviceId: 'service_abc123xyz',
//   templateId: 'template_def456uvw', 
//   publicKey: 'abcDEF123xyz',
// }; 