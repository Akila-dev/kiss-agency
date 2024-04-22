import React from 'react';
import Lottie from 'lottie-react';

import laptopGuy from '../assets/lottie/typing.json';

import { Heading, Accordion } from '../components';
import { solutions } from '../utils/constants';

const DigitalSolutions = () => {
  return (
    <div id="digital-solutions" className="flex-container !min-w-[1240px">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-7 lg:space-y-10">
          <Heading
            tag="Digital Solutions"
            header={[
              'From Machine Learning',
              'Algorithms to AI-powered',
              'Applications',
            ]}
            content="We Integrate Intelligence Into Your Digital Solutions, Fostering Efficiency And Innovation"
          />
        </div>
        <div className="max-h-[40vh] overflow-auto">
          <Accordion />
        </div>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-5 p-2 border-2 border-[--gray]"
            >
              <div className="pb-2 min-w-[150px]">
                <Lottie
                  animationData={laptopGuy}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '125px',
                    // clipPath: `polygon(0% 0%, 0% ${clip[0]}%, 100% ${clip[0]}%, 100% ${clip[1]}%, 0% ${clip[1]}%)`,
                    // background: 'blue',
                  }}
                />
              </div>
              {/* <div className="w-full md:w-[150px] min-w-[150px] h-[100px]">
                <img
                  src={solution.img}
                  alt={solution.text}
                  className="w-full h-full object-cover"
                />
              </div> */}
              <p>{solution.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalSolutions;
