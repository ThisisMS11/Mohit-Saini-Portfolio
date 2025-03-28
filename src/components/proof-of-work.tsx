'use client';
import React, { useEffect, useState } from 'react';
import { ProjectCarousel } from './projects-carousel';
import Heading from './heading';
import Skills from './skills';

export default function ProofofWork() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setTheme(localTheme || 'light');
  }, []);

  return (
    <section className="mt-12">
      {/*<section className="flex flex-col gap-8 my-8 justify-center">*/}
      {/*  <h1 className="text-xl px-6 py-2 border-l-8 border-primary bg-gradient-to-r from-accent dark:from-accent/40 flex items-center gap-2 font-semibold">*/}
      {/*    LeetCode Problem Solving{' '}*/}
      {/*    <Link href={'https://leetcode.com/u/ThisisMS11/'} target="_blank">*/}
      {/*      <Image src={LeetCode} alt="LeetCode Icon" width={24} height={24} />*/}
      {/*    </Link>*/}
      {/*  </h1>*/}
      {/*  <div className="flex items-center px-4 justify-center ">*/}
      {/*    <LeetCodeHeatmap*/}
      {/*      username="ThisisMS11"*/}
      {/*      blockMargin={3}*/}
      {/*      colorPallete={[*/}
      {/*        theme === 'dark' ? '#202020' : '#f4f4f4',*/}
      {/*        '#9be9a8',*/}
      {/*        '#40c463',*/}
      {/*        '#30a14e',*/}
      {/*        '#216e39',*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*<section className="flex flex-col gap-8 my-8 justify-center mt-8">*/}
      {/*  <h1 className="text-xl px-6 py-2 border-l-8 border-primary bg-gradient-to-r from-accent dark:from-accent/40 flex items-center gap-2 font-semibold">*/}
      {/*    Github Contributions{' '}*/}
      {/*    <Link href={'https://github.com/ThisisMS11'} target="_blank">*/}
      {/*      <GithubIcon className="cursor-pointer" />*/}
      {/*    </Link>*/}
      {/*  </h1>*/}
      {/*  <div className="flex items-center px-6 justify-center">*/}
      {/*    <GithubGraph*/}
      {/*      username="ThisisMS11"*/}
      {/*      blockMargin={3}*/}
      {/*      colorPallete={[*/}
      {/*        theme === 'dark' ? '#202020' : '#f4f4f4',*/}
      {/*        '#9be9a8',*/}
      {/*        '#40c463',*/}
      {/*        '#30a14e',*/}
      {/*        '#216e39',*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section id="projects" className="flex flex-col gap-8 mt-14 ">
        <Heading title="Recent Projects" />

        <article className="">
          <ProjectCarousel />
        </article>
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section className="flex flex-col gap-8 mt-12">
        <Heading title="Open source Contributions" />
        <section className="">
          <widget-web-component
            theme={theme}
            username="ThisisMS11"
            lg-cols={2}
            md-cols={2}
            base-cols={1}
            card-view="list"
            font-variable="--font-manrope"
            top-visible="false"
          />
        </section>
      </section>
    </section>
  );
}
