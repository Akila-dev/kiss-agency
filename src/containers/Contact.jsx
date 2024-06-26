import React from 'react';

import { Heading, ContactForm } from '../components';
import { subscribeSectionText } from '../utils/constants';

const Contact = () => {
  return (
    <div className="w-full relative mt-[50px] section-py h-full">
      <span className="hidden lg:block absolute top-0 left-0 h-full 0 w-[30vw] md:w-[20vw] bg-[--neutral] my-[80px] xl:my-0 z-[-1]" />
      <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
        <div className="space-y-7 lg:space-y-10 flex items-center h-full">
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
  );
};

export default Contact;
