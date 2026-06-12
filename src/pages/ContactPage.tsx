import React from 'react';
import ContactSplit from '../components/sections/contact/ContactSplit';
import LocationCards from '../components/sections/contact/LocationCards';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <ContactSplit />
      <LocationCards />
    </div>
  );
};

export default ContactPage;
