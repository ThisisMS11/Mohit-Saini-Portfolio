import React from 'react';
import Heading from './heading';
import { ExternalLink } from 'lucide-react';
import Catoff from '@/app/assets/catoff.jpg';
import CodingNinjas from '@/app/assets/codingNinjas.jpeg';
import PixaFlip from '@/app/assets/pixaflip.jpeg';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkExperience() {
  return (
    <>
      <section className="flex flex-col gap-8 my-12" id="experience">
        <Heading title="Work Experience" />
        <article className="px-6">
          <div className="flex items-center w-full h-20 gap-5">
            <div className="border-2 !w-20 h-full rounded-xl bg-accent flex items-center justify-center">
              <Image
                src={Catoff}
                alt="Catoff Logo"
                width={80}
                height={80}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Catoff</h2>
              <p className="text-sm text-foreground/60">
                Backend Developer Intern
              </p>
              <div className="flex items-center text-sm text-foreground/60">
                <p className="text-sm text-foreground/60">
                  May 2024 - August 2024 | &nbsp;&nbsp;{' '}
                </p>
                <Link
                  href="https://drive.google.com/file/d/1Vl_w__A6cYoF1dMTMJYRV6G1oYKAjQ9S/view?usp=sharing"
                  className="text-sm text-foreground/60 flex items-center"
                  target="_blank"
                >
                  Link
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        <article className="px-6">
          <div className="flex items-center w-full h-20 gap-5">
            <div className="border-2 !w-20 h-full rounded-xl bg-accent flex items-center justify-center">
              <Image
                src={CodingNinjas}
                alt="CodingNinjas Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Coding Ninjas</h2>
              <p className="text-sm text-foreground/60">Teaching Assistant</p>
              <div className="flex items-center text-sm text-foreground/60">
                <p className="text-sm text-foreground/60">
                  Jan 2023 - April 2023 | &nbsp;&nbsp;{' '}
                </p>
                <Link
                  href="https://drive.google.com/file/d/16ezMOmVBHjcRsjsI-MUk6xdU_gj5bKw5/view?usp=sharing"
                  className="text-sm text-foreground/60 flex items-center"
                  target="_blank"
                >
                  Link
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        <article className="px-6">
          <div className="flex items-center w-full h-20 gap-5">
            <div className="border-2 !w-20 h-full rounded-xl bg-accent flex items-center justify-center">
              <Image
                src={PixaFlip}
                alt="PixaFlip Logo"
                width={80}
                height={80}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Pixaflip Technologies</h2>
              <p className="text-sm text-foreground/60">
                Software Developer Intern
              </p>
              <p className="text-sm text-foreground/60">
                Feb 2023 - April 2023
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
