import Image from 'next/image'
import Introduction from '@/components/Introduction'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Introduction />
        <Link href="/works">Works</Link>
        <Link href="/skills">Skill</Link>
      </div>
    </>
  )
}
