import React from 'react'
import H2 from './headers/h2';
import H3 from './headers/h3';
import ContactForm from './contactForm';

interface Prop {
    className?: string
}

export default function About(prop: Prop) {
  return <div>
    <H2 className='my-[10px]'>Hi, I'm Daniel Schechtman</H2>
    <p className='text-left px-[5px] leading-relaxed indent-8'>
      Welcome to my portfolio, I am glad you are here. I am a software engineer, and aspiring backend engineer.
      I went to Carthage College to get a Bachelors in Computer Science. 
      I currently work at Motorola Solutions as a Application and Automation programmer, but am now looking to
      expand my horizons and explore other areas of software development that will be challenging, fun, and keep
      my software development skills fresh. I am someone who loves to learn things, and the best way I learn is by
      being given something that is challenging and requires my attention.
    </p>
    <p className='text-left px-[5px] leading-relaxed indent-8'>
      The reason I want to get into backend web development specifically is because I feel it is more dynamic than
      frontend web development. There are more tools, languages, and complexity of problems then on the front end.
      While I will not argue many find front end development challenging and rewarding, I am drawn to environments
      where the problems/solutions are more varied.
    </p>
    <p className='text-left px-[5px] leading-relaxed indent-8'>
      In my free time I am either working on some personal programming projects, playing video games, taking care
      of my fish and plants, or going out with friends.
    </p>

    <br/>
    <br/>
    <H2 className=''>About this site</H2>

    <br/>
    <H3 className=''>why was it made?</H3>
    <p className='text-left px-[5px] leading-relaxed indent-8'>
      This site was made for 2 reasons. 1.) As a central location to put all of my project to showcase
      my skills. 2.) To give me a place where I can go into more detail about myself and my skillsets that isn't
      a cover letter or resume. 3.) As a part of my portfolio itself. A project that will help reaffirm my existing
      skill set so I don't get rusty.
    </p>

    <br />
    <H3 className=''>What is this site's tech stack?</H3>
    <p className='text-left px-[5px] leading-relaxed indent-8'>
      This site was built using NextJS on the back end, ReactJS on the frontend. With Tailwindcss to take the 
      skeleton of the site and make it look good, and prisma to help manange data bases.
    </p>

    <br />
    <br />
    <H3 className=''>Send me a letter</H3>
    <ContactForm/>
    
  </div>
}
