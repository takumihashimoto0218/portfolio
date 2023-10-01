import React from 'react'
import Link from 'next/link'

const PageLink = () => {
  return (
    <>
      <Link href="/works">Works</Link>
      <Link href="/skills">Skill</Link>
      <Link href="/about">About</Link>
    </>

  )
}

export default PageLink