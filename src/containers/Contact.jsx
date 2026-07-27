import React from 'react';

import { Heading, ContactForm } from '../components';
import { subscribeSectionText } from '../utils/constants';

const Contact = () => {
  return (
    <div className="section-pt h-full">
      <div className="w-full relative">
        <span className="hidden md:block absolute top-0 left-0 h-full 0 w-[30vw] md:w-[24vw] lg:w-[20vw] bg-[--neutral] z-[-1]" />
        <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
          <div className="md:pt-16 lg:pt-0 space-y-7 lg:space-y-10 flex lg:items-center h-full">
            <Heading
              tag={subscribeSectionText.tag}
              header={subscribeSectionText.heading}
              content={subscribeSectionText.text}
            />
          </div>
          <div className="flex items-center">
            <ContactForm />
          </div>
        </div>
    </div>
    </div>
  );
};

export default Contact;
