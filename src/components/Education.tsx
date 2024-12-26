import React from 'react';
import Heading from './heading';
import IIITDMJ from '@/app/assets/IIITDMJ.png';
import smps from '@/app/assets/smps.png';
import Image from 'next/image';

export default function Education() {
  return (
    <>
      <section className="flex flex-col gap-8 my-12" id="education">
        <Heading title="Education" />
        <article className="px-6">
          <div className="flex items-center w-full h-20 gap-5">
            <div className="border-2 !w-20 h-full rounded-xl bg-accent flex items-center justify-center">
              <Image
                src={IIITDMJ}
                alt="Institute Logo"
                width={90}
                height={90}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">
                PDPM Indian Institute of Information Technology Jabalpur
              </h2>
              <p className="text-sm text-foreground/60">
                B.tech, Computer Science and Engineering
              </p>
              <p className="text-sm text-foreground/60">
                December 2021 - May 2025
              </p>
            </div>
          </div>
        </article>
        <article className="px-6">
          <div className="flex items-center w-full h-20 gap-5">
            <div className="border-2 !w-20 h-full rounded-xl bg-accent flex items-center justify-center">
              <Image
                src={smps}
                alt="Institute Logo"
                width={90}
                height={90}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">
                Shree Mahesh Public School,Bhilwara,Rajasthan
              </h2>
              <p className="text-sm text-foreground/60">Student</p>
              <p className="text-sm text-foreground/60">
                April 2017 - June 2021
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
