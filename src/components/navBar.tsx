'use client'

import { LinkType } from '@/lib/types'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavBar() {

  const redirect = useRouter()

  function CallBack(link: LinkType) {
    if (link === "About Me") {
      redirect.push('/about/me')
    }
    else if (link === "About Site") {
      redirect.push('/about/site')
    }
    else if (link === "About Projects") {
      redirect.push("/projects")
    }
    else if (link === "Contact Me") {
      redirect.push("/contact")
    }
  }

  return <div className="Nav grid grid-cols-1 grid-rows-3 h-fit gap-y-4">
    <button onClick={() => CallBack("About Me") }>About Me</button>
    <button onClick={() => CallBack("Contact Me") }>Contact Me</button>
  </div>
}
