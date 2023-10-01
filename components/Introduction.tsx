import React from 'react'
import Image from 'next/image'
import IconIntroduction from './IconIntroduction'

const Introductin = () => {
  return (
    <>
      <Image
      src="/img/takumi.JPG"
        height={200}
        width={200}
        alt="twitterのIcon画像"
      />
      <div>橋本拓海</div>
      <div>宇都宮大学工学部情報電子オプティクスコース</div>
      <div>趣味: ソフトテニス(10年), コナン, サウナ, プロ野球</div>
      <IconIntroduction />
      </>
  )
}

export default Introductin