import React from 'react'
import Image from 'next/image'

const IconIntroduction = () => {
  return (
    <div>
      <Image
        src="/img/github.png"
        height={50}
        width={50}
        alt="githubのIcon画像"
      />
      <Image
        src="/img/twitter.png"
        height={50}
        width={50}
        alt="twitterのIcon画像"
      />
    </div>
  )
}

export default IconIntroduction