import React from 'react'
import Image from 'next/image'

export default function Footer() {
  const GITHUB_LOGO_SIZE = 60
  const LINKED_IN_LOGO_SIZE = 80
  const RESUME_LOGO_SIZE = GITHUB_LOGO_SIZE
  return <div className='footer m-auto w-auto grid grid-rows-1 grid-cols-3 gap-x-4 items-center'>
    <a href="https://github.com/DASchechtman" target="_" className='m-auto'>
      <Image src="/github.png" width={GITHUB_LOGO_SIZE} height={GITHUB_LOGO_SIZE} alt="github link"></Image>
    </a>
    <a href="http://www.linkedin.com/in/dschechtman" target="_" className='pr-[10px]'>
      <Image src="/LinkedIn.png" width={LINKED_IN_LOGO_SIZE} height={LINKED_IN_LOGO_SIZE} alt="linked-in link"></Image>
    </a>
    <a href="https://drive.google.com/file/d/1AUM2aZNUhwm3SL0fftS3mpdtqrAvPoHs/view?usp=drive_link" target='_'>
      <Image src="/Resume.png" width={RESUME_LOGO_SIZE} height={RESUME_LOGO_SIZE} alt="link to resume"></Image>
    </a>
  </div>
}
